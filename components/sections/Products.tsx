"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, UtensilsCrossed, Store, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const products = [
  {
    icon: UtensilsCrossed,
    name: "RestoCare",
    tag: "Flagship · Live",
    headline: "The all-in-one operating system for modern restaurants.",
    features: [
      "Orders, tables & KDS in real time",
      "Inventory & recipe cost tracking",
      "Insightful revenue analytics",
      "Loyalty & WhatsApp marketing",
    ],
    accent: "from-brand-500 to-brand-800",
    mock: "pos",
  },
  {
    icon: Store,
    name: "Make My Restaurant",
    tag: "New",
    headline: "Launch a beautiful restaurant brand online in days.",
    features: [
      "Ready-made premium templates",
      "Online ordering & payments",
      "Menu & content management",
      "SEO-optimised out of the box",
    ],
    accent: "from-brand-400 to-brand-700",
    mock: "web",
  },
];

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade opacity-70" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Our products"
          title={
            <>
              Software we <span className="text-gradient">build & own</span>
            </>
          }
          description="Battle-tested platforms powering restaurants and businesses every day — with more SaaS on the way."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <article className="card card-hover group h-full overflow-hidden p-0">
                {/* preview */}
                <div className={`relative bg-gradient-to-br ${p.accent} p-6 sm:p-8`}>
                  <div className="mb-6 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                      <p.icon className="h-3.5 w-3.5" />
                      {p.tag}
                    </span>
                    <span className="text-2xl font-bold tracking-tight">{p.name}</span>
                  </div>
                  {p.mock === "pos" ? <PosMock /> : <WebMock />}
                </div>

                {/* body */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold leading-snug">{p.headline}</h3>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink/70">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#contact" className="btn-primary text-sm">
                      Explore {p.name}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a href="#contact" className="btn-ghost text-sm">
                      Book a demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Future SaaS teaser */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-3xl border border-dashed border-brand-500/30 bg-brand-50/40 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                <Rocket className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold">Future SaaS products</h3>
                <p className="text-sm text-ink/55">
                  We&apos;re building the next wave of business tools. Get early access.
                </p>
              </div>
            </div>
            <a href="#contact" className="btn-secondary text-sm">
              Join the waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PosMock() {
  return (
    <div className="rounded-2xl bg-white/95 p-4 shadow-lift">
      <div className="mb-3 flex items-center justify-between">
        <span className="h-4 w-24 rounded bg-ink/10" />
        <span className="h-4 w-12 rounded bg-brand-500/70" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={[
              "flex h-14 flex-col justify-between rounded-xl p-2",
              i === 2 ? "bg-brand-gradient" : "bg-ink/[0.04]",
            ].join(" ")}
          >
            <span className={`h-2 w-8 rounded ${i === 2 ? "bg-white/60" : "bg-ink/15"}`} />
            <span className={`h-2 w-5 rounded ${i === 2 ? "bg-white/80" : "bg-ink/20"}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WebMock() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white/95 shadow-lift">
      <div className="flex items-center gap-1.5 border-b border-ink/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-brand-500/60" />
      </div>
      <div className="space-y-2 p-4">
        <span className="block h-5 w-32 rounded bg-ink/10" />
        <span className="block h-2.5 w-full rounded bg-ink/[0.06]" />
        <span className="block h-2.5 w-3/4 rounded bg-ink/[0.06]" />
        <div className="mt-2 flex gap-2">
          <span className="h-7 w-20 rounded-full bg-brand-gradient" />
          <span className="h-7 w-16 rounded-full bg-ink/[0.06]" />
        </div>
      </div>
    </div>
  );
}
