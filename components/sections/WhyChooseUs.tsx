"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Gem,
  Headphones,
  Globe2,
  LineChart,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const features = [
  {
    icon: Gem,
    title: "Award-quality craft",
    desc: "Pixel-perfect design and engineering held to the standard of the world's best products.",
  },
  {
    icon: Zap,
    title: "Ship fast, without shortcuts",
    desc: "Agile sprints and reusable systems get you to market weeks ahead — cleanly.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    desc: "Best-practice security, compliance and reliability baked into everything we build.",
  },
  {
    icon: Headphones,
    title: "True partnership",
    desc: "A dedicated team that stays with you long after launch. Real humans, real support.",
  },
];

const stats = [
  { icon: LineChart, to: 200, suffix: "+", label: "Projects delivered" },
  { icon: Globe2, to: 12, suffix: "+", label: "Countries served" },
  { icon: Headphones, to: 24, suffix: "/7", label: "Support coverage" },
  { icon: ShieldCheck, to: 99.9, decimals: 1, suffix: "%", label: "Uptime SLA" },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why choose us"
          title={
            <>
              The partner behind <span className="text-gradient">products that win</span>
            </>
          }
          description="We combine design taste, engineering depth and business sense — so your product doesn't just launch, it leads."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Feature cards */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="card card-hover flex flex-col gap-4 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="text-sm text-ink/55">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl bg-night p-8 text-white sm:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-800/40 blur-3xl" />

            <h3 className="relative text-2xl font-bold">
              Numbers that speak for themselves
            </h3>
            <p className="relative mt-2 text-sm text-white/55">
              A track record built on outcomes, not promises.
            </p>

            <div className="relative mt-8 grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                >
                  <s.icon className="mb-3 h-5 w-5 text-brand-300" />
                  <div className="text-3xl font-bold text-gradient">
                    <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </div>
                  <p className="mt-1 text-xs text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
