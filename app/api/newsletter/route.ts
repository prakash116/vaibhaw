import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// Change via ADMIN_KEY env var in production.
const ADMIN_KEY = process.env.ADMIN_KEY ?? "aurevia@15";

const DATA_DIR = path.join(process.cwd(), "public", "data");
const DATA_FILE = path.join(DATA_DIR, "newsletter.json");

type Subscriber = {
  id: string;
  email: string;
  createdAt: string;
};

async function readSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeSubscribers(items: Subscriber[]) {
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

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 320) : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const items = await readSubscribers();
  if (!items.some((s) => s.email === email)) {
    items.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      email,
      createdAt: new Date().toISOString(),
    });
    await writeSubscribers(items);
  }

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  if (key !== ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const items = await readSubscribers();
  return NextResponse.json({ items: items.slice().reverse() });
}
