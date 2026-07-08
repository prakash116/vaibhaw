"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const projects = [
  {
    title: "RestoCare POS",
    category: "SaaS · Restaurant",
    desc: "A real-time point-of-sale and analytics suite serving 500+ outlets.",
    tech: ["Next.js", "Node", "Postgres", "AWS"],
    gradient: "from-brand-500 via-brand-600 to-brand-800",
    span: "lg:col-span-2",
  },
  {
    title: "Nova Bank App",
    category: "Fintech · Mobile",
    desc: "A secure neobank experience with instant onboarding.",
    tech: ["React Native", "Go", "K8s"],
    gradient: "from-night to-brand-900",
    span: "",
  },
  {
    title: "Foodly Ordering",
    category: "Web · Commerce",
    desc: "Headless ordering platform with 3x faster checkout.",
    tech: ["Next.js", "Stripe", "Redis"],
    gradient: "from-brand-400 to-brand-700",
    span: "",
  },
  {
    title: "MediTrack AI",
    category: "Healthcare · AI",
    desc: "Clinical automation copilot reducing admin time by 40%.",
    tech: ["Python", "OpenAI", "GCP"],
    gradient: "from-brand-600 via-brand-700 to-night",
    span: "lg:col-span-2",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Products people <span className="text-gradient">love to use</span>
              </>
            }
            description="A glimpse of what we've designed and shipped across industries."
          />
          <a href="#contact" className="btn-secondary shrink-0 text-sm">
            View all work
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift ${p.span}`}
            >
              {/* hero image (gradient placeholder) */}
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-grid-lines opacity-20 [background-size:26px_26px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white/90 transition-transform duration-700 group-hover:scale-110">
                    {p.title.split(" ")[0]}
                  </span>
                </div>
                {/* hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink">
                    View case study
                    <ArrowUpRight className="h-4 w-4 text-brand-600" />
                  </span>
                </div>
              </div>

              {/* meta */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                  {p.category}
                </p>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/55">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/[0.06] bg-surface px-3 py-1 text-xs font-medium text-ink/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
