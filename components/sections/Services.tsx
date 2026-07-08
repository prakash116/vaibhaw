"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Code2,
  Smartphone,
  PenTool,
  Boxes,
  MessageSquare,
  UtensilsCrossed,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const services = [
  {
    icon: Sparkles,
    title: "AI Automation",
    desc: "Custom AI agents, copilots and workflows that remove busywork and scale your team.",
    featured: true,
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Blazing-fast, SEO-friendly web apps built on Next.js and modern tooling.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-quality iOS & Android apps with delightful, fluid interactions.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Award-winning product design — research, systems, prototypes and polish.",
  },
  {
    icon: Boxes,
    title: "SaaS Development",
    desc: "Multi-tenant platforms with billing, roles and analytics baked in.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    desc: "Conversational commerce, reminders and support on the world's #1 chat app.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Solutions",
    desc: "POS, online ordering, table management and delivery — one connected system.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Secure, scalable cloud infrastructure with automated DevOps pipelines.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything you need to <span className="text-gradient">build & scale</span>
            </>
          }
          description="One partner for design, engineering and AI — an end-to-end team that ships premium products fast."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              className={[
                "group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5",
                s.featured
                  ? "border-transparent bg-night text-white shadow-lift sm:row-span-1"
                  : "border-black/[0.06] bg-white shadow-soft hover:shadow-lift hover:border-brand-500/20",
              ].join(" ")}
            >
              {/* hover glow */}
              <span
                className={[
                  "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl transition-opacity duration-500",
                  s.featured ? "bg-brand-500/40 opacity-100" : "bg-brand-300/40 opacity-0 group-hover:opacity-100",
                ].join(" ")}
              />

              <div className="relative flex flex-col gap-4">
                <span
                  className={[
                    "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
                    s.featured
                      ? "bg-white/10 text-white"
                      : "bg-brand-50 text-brand-600 group-hover:bg-brand-gradient group-hover:text-white",
                  ].join(" ")}
                >
                  <s.icon className="h-6 w-6" />
                </span>

                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className={s.featured ? "text-sm text-white/60" : "text-sm text-ink/55"}>
                  {s.desc}
                </p>

                <span
                  className={[
                    "mt-2 inline-flex items-center gap-1 text-sm font-semibold transition-colors",
                    s.featured ? "text-brand-300" : "text-brand-600",
                  ].join(" ")}
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
