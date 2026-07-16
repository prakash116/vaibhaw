"use client";

import { ArrowRight, Check, UtensilsCrossed, Store, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const products = [
  {
    icon: UtensilsCrossed,
    name: "RestoCare",
    tag: "Flagship · Live",
    headline: "Your restaurant, our care — verified pros on demand.",
    features: [
      "Verified chefs, helpers & technicians",
      "Instant booking & live tracking",
      "Deep cleaning & equipment repair",
      "Secure payments & quality checks",
    ],
    accent: "from-brand-500 to-brand-800",
    image: "/Project/restocare.png",
    imageAlt: "RestoCare website — verified restaurant professionals at your doorstep",
    url: "https://www.restocare.in/",
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
    image: "/Image/enterprises/make-my-restaurant.jpeg",
    imageAlt: "Make My Restaurant — from vision to reality",
    url: "",
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
                  <div className="overflow-hidden rounded-2xl bg-white/95 shadow-lift">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                    />
                  </div>
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
                    <a
                      href={p.url || "#contact"}
                      target={p.url ? "_blank" : undefined}
                      rel={p.url ? "noopener noreferrer" : undefined}
                      className="btn-primary text-sm"
                    >
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
