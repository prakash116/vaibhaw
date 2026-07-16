"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Youtube,
} from "lucide-react";
import { site } from "@/lib/site";

const socialIcons = { Linkedin, Twitter, Instagram, Github, Youtube } as const;

const columns = [
  {
    title: "Services",
    links: ["AI Automation", "Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions"],
  },
  {
    title: "Products",
    links: ["RestoCare", "Make My Restaurant", "Future SaaS", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Work", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Support", "Case Studies", "Privacy Policy", "Terms"],
  },
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  async function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (new FormData(form).get("email") as string)?.trim();
    if (!email) return;
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    } catch {
      // keep the button in its normal state so the user can retry
    }
  }

  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-800/30 blur-3xl" />
      </div>

      <div className="container-x relative">
        {/* CTA + newsletter */}
        <div className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <img
                src="/Image/logo.jpeg"
                alt="AureviaTech logo"
                className="h-10 w-10 rounded-xl bg-white object-cover shadow-glow-sm"
              />
              <span className="text-xl font-bold tracking-tight">AureviaTech</span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              Premium software, AI automation and restaurant technology for
              startups and enterprises. Designed and engineered to win.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm text-white/55">
              Product updates, design insights and engineering notes. No spam.
            </p>
            <form onSubmit={onSubscribe} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
              />
              <button type="submit" className="btn-primary shrink-0 text-sm">
                {subscribed ? (
                  <>
                    <Check className="h-4 w-4" /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/80">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/50 transition-colors hover:text-brand-300"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} AureviaTech. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.icon as keyof typeof socialIcons];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:-translate-y-0.5 hover:bg-brand-gradient hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
