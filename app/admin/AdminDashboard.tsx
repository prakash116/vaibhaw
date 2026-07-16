"use client";

import { useEffect, useState } from "react";
import {
  Lock,
  LogOut,
  RefreshCw,
  Inbox,
  Mail,
  Phone,
  Building2,
  Clock,
} from "lucide-react";
import { assetPath, isStaticExport } from "@/lib/site";

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

type Subscriber = {
  id: string;
  email: string;
  createdAt: string;
};

const KEY_STORAGE = "aurevia-admin-key";

export function AdminDashboard() {
  const [adminKey, setAdminKey] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState<Submission[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [tab, setTab] = useState<"messages" | "newsletter">("messages");
  const [loading, setLoading] = useState(false);

  async function fetchItems(key: string) {
    setLoading(true);
    setError("");
    try {
      const headers = { "x-admin-key": key };
      const [contactRes, newsRes] = await Promise.all([
        fetch("/api/contact", { headers, cache: "no-store" }),
        fetch("/api/newsletter", { headers, cache: "no-store" }),
      ]);
      if (contactRes.status === 401 || newsRes.status === 401) {
        sessionStorage.removeItem(KEY_STORAGE);
        setAdminKey(null);
        setError("Wrong password. Try again.");
        return;
      }
      if (!contactRes.ok || !newsRes.ok) throw new Error("Request failed");
      const contactData = await contactRes.json();
      const newsData = await newsRes.json();
      setItems(contactData.items ?? []);
      setSubscribers(newsData.items ?? []);
      setAdminKey(key);
      sessionStorage.setItem(KEY_STORAGE, key);
    } catch {
      setError("Could not load submissions. Is the server running?");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isStaticExport) return;
    const saved = sessionStorage.getItem(KEY_STORAGE);
    if (saved) fetchItems(saved);
  }, []);

  if (isStaticExport) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-surface px-4">
        <div className="card w-full max-w-sm p-8 text-center">
          <img
            src={assetPath("/Image/logo.jpeg")}
            alt="AureviaTech logo"
            className="mx-auto h-12 w-12 rounded-2xl object-cover shadow-glow-sm"
          />
          <h1 className="mt-5 text-xl font-bold">Admin requires server hosting</h1>
          <p className="mt-2 text-sm leading-relaxed text-ink/55">
            Contact and newsletter submissions are available on the server deployment.
          </p>
          <a href={assetPath("/")} className="btn-primary mt-6 w-full">
            Back to site
          </a>
        </div>
      </main>
    );
  }

  function logout() {
    sessionStorage.removeItem(KEY_STORAGE);
    setAdminKey(null);
    setItems([]);
    setSubscribers([]);
    setPassword("");
  }

  // ----- Login screen -----
  if (!adminKey) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-surface px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password.trim()) fetchItems(password.trim());
          }}
          className="card w-full max-w-sm p-8"
        >
          <div className="mb-6 flex flex-col items-center gap-3 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow-sm">
              <Lock className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-xl font-bold">Admin login</h1>
              <p className="mt-1 text-sm text-ink/50">
                AureviaTech — contact form submissions
              </p>
            </div>
          </div>

          <label className="mb-2 block text-sm font-semibold" htmlFor="admin-password">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            autoFocus
            className="w-full rounded-2xl border border-black/10 bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
          {error && <p className="mt-3 text-sm font-medium text-brand-600">{error}</p>}

          <button type="submit" disabled={loading} className="btn-primary mt-6 w-full">
            {loading ? "Checking…" : "Sign in"}
          </button>
        </form>
      </main>
    );
  }

  // ----- Dashboard -----
  return (
    <main className="min-h-screen bg-surface pb-20">
      <header className="border-b border-black/5 bg-white">
        <div className="container-x flex h-[76px] items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={assetPath("/Image/logo.jpeg")}
              alt="AureviaTech logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div>
              <p className="text-base font-bold leading-tight">AureviaTech Admin</p>
              <p className="text-xs text-ink/45">Contact form submissions</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchItems(adminKey)}
              disabled={loading}
              className="btn-secondary text-sm"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button onClick={logout} className="btn-ghost text-sm">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container-x mt-10">
        {/* Tabs */}
        <div className="mb-8 flex items-center gap-2">
          <button
            onClick={() => setTab("messages")}
            className={
              tab === "messages"
                ? "rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-ink/60 hover:text-ink"
            }
          >
            Messages ({items.length})
          </button>
          <button
            onClick={() => setTab("newsletter")}
            className={
              tab === "newsletter"
                ? "rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-ink/60 hover:text-ink"
            }
          >
            Newsletter ({subscribers.length})
          </button>
        </div>

        {tab === "newsletter" ? (
          subscribers.length === 0 ? (
            <div className="card flex flex-col items-center gap-3 p-16 text-center">
              <Inbox className="h-10 w-10 text-ink/25" />
              <p className="font-semibold">No subscribers yet</p>
              <p className="text-sm text-ink/50">
                Emails subscribed from the footer newsletter form will appear here.
              </p>
            </div>
          ) : (
            <div className="card divide-y divide-black/5 p-0">
              {subscribers.map((s) => (
                <div
                  key={s.id}
                  className="flex flex-wrap items-center justify-between gap-2 px-6 py-4"
                >
                  <a
                    href={`mailto:${s.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand-600"
                  >
                    <Mail className="h-4 w-4 text-ink/40" /> {s.email}
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink/40">
                    <Clock className="h-3.5 w-3.5" />
                    {new Date(s.createdAt).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          )
        ) : items.length === 0 ? (
          <div className="card flex flex-col items-center gap-3 p-16 text-center">
            <Inbox className="h-10 w-10 text-ink/25" />
            <p className="font-semibold">No submissions yet</p>
            <p className="text-sm text-ink/50">
              Messages sent from the contact form will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-5">
            {items.map((s) => (
              <article key={s.id} className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold">{s.name}</h2>
                    <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink/60">
                      <a
                        href={`mailto:${s.email}`}
                        className="inline-flex items-center gap-1.5 hover:text-brand-600"
                      >
                        <Mail className="h-3.5 w-3.5" /> {s.email}
                      </a>
                      {s.phone && (
                        <a
                          href={`tel:${s.phone}`}
                          className="inline-flex items-center gap-1.5 hover:text-brand-600"
                        >
                          <Phone className="h-3.5 w-3.5" /> {s.phone}
                        </a>
                      )}
                      {s.company && (
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5" /> {s.company}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    {s.service && (
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                        {s.service}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs text-ink/40">
                      <Clock className="h-3.5 w-3.5" />
                      {new Date(s.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
                {s.message && (
                  <p className="mt-4 whitespace-pre-wrap rounded-2xl bg-surface p-4 text-sm leading-relaxed text-ink/75">
                    {s.message}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
