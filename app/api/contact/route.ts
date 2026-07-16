import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// Change via ADMIN_KEY env var in production.
const ADMIN_KEY = process.env.ADMIN_KEY ?? "aurevia@15";

const DATA_DIR = path.join(process.cwd(), "public", "data");
const DATA_FILE = path.join(DATA_DIR, "contacts.json");

type Submission = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
};

async function readSubmissions(): Promise<Submission[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeSubmissions(items: Submission[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf8");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, 2000) : "");
  const name = str(body.name);
  const email = str(body.email);
  const message = str(body.message);

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const submission: Submission = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    email,
    company: str(body.company),
    phone: str(body.phone),
    service: str(body.service),
    message,
    createdAt: new Date().toISOString(),
  };

  const items = await readSubmissions();
  items.push(submission);
  await writeSubmissions(items);

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const items = await readSubmissions();
  // Newest first
  return NextResponse.json({ items: items.slice().reverse() });
}
