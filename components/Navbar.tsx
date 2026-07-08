"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Code2,
  Smartphone,
  PenTool,
  Boxes,
  MessageSquare,
  UtensilsCrossed,
  Cloud,
  ArrowRight,
} from "lucide-react";

const megaServices = [
  { icon: Sparkles, title: "AI Automation", desc: "Agents & workflows" },
  { icon: Code2, title: "Web Development", desc: "Fast, scalable apps" },
  { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android" },
  { icon: PenTool, title: "UI/UX Design", desc: "Award-winning craft" },
  { icon: Boxes, title: "SaaS Development", desc: "Multi-tenant platforms" },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "Conversational ops" },
  { icon: UtensilsCrossed, title: "Restaurant Solutions", desc: "POS to delivery" },
  { icon: Cloud, title: "Cloud Solutions", desc: "Infra & DevOps" },
];

const megaProducts = [
  { title: "RestoCare", desc: "All-in-one restaurant OS — orders, tables, inventory & analytics." },
  { title: "Make My Restaurant", desc: "Launch a restaurant brand online in days, not months." },
  { title: "Future SaaS", desc: "New products in the pipeline. Join the early-access list." },
];

const links = [
  { id: "services", label: "Services", mega: "services" as const },
  { id: "products", label: "Products", mega: "products" as const },
  { id: "industries", label: "Industries" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<null | "services" | "products">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={() => setMega(null)}
    >
      <div
        className={[
          "transition-all duration-500 ease-premium",
          scrolled
            ? "border-b border-black/5 bg-white/70 backdrop-blur-xl shadow-soft"
            : "bg-transparent",
        ].join(" ")}
      >
        <nav className="container-x flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-lg font-bold text-white shadow-glow-sm transition-transform group-hover:scale-105">
              R
            </span>
            <span className="text-lg font-bold tracking-tight">RestoCare</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li
                key={l.id}
                onMouseEnter={() => setMega(l.mega ?? null)}
              >
                <a
                  href={`#${l.id}`}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-black/[0.04] hover:text-ink"
                >
                  {l.label}
                  {l.mega && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a href="#contact" className="btn-ghost text-sm">
              Sign in
            </a>
            <a href="#contact" className="btn-primary text-sm">
              Book a demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mega menu */}
        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-[76px] hidden lg:block"
              onMouseEnter={() => setMega(mega)}
            >
              <div className="container-x">
                <div className="glass mt-2 rounded-3xl p-6 shadow-lift">
                  {mega === "services" ? (
                    <div className="grid grid-cols-4 gap-2">
                      {megaServices.map((s) => (
                        <a
                          key={s.title}
                          href="#services"
                          className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-brand-50"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                            <s.icon className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold">{s.title}</span>
                            <span className="block text-xs text-ink/50">{s.desc}</span>
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-4">
                      {megaProducts.map((p) => (
                        <a
                          key={p.title}
                          href="#products"
                          className="group rounded-2xl border border-black/5 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lift"
                        >
                          <span className="mb-2 flex items-center justify-between">
                            <span className="text-base font-bold">{p.title}</span>
                            <ArrowRight className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-1" />
                          </span>
                          <span className="block text-sm text-ink/55">{p.desc}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[76px] z-40 bg-surface lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between border-b border-black/5 py-4 text-lg font-semibold"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-brand-500" />
                </motion.a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-secondary">
                  Sign in
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">
                  Book a demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
