"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const posts = [
  {
    category: "AI",
    title: "How AI automation is reshaping restaurant operations",
    excerpt: "From smart inventory to conversational ordering — the playbook for 2026.",
    read: "6 min read",
    gradient: "from-brand-500 to-brand-800",
  },
  {
    category: "Design",
    title: "Building a design system that scales with your product",
    excerpt: "The principles we use to keep interfaces consistent, fast and beautiful.",
    read: "8 min read",
    gradient: "from-night to-brand-900",
  },
  {
    category: "Engineering",
    title: "Shipping enterprise SaaS on Next.js: our stack",
    excerpt: "Architecture, performance and DevOps decisions behind reliable products.",
    read: "5 min read",
    gradient: "from-brand-400 to-brand-700",
  },
];

export function Blog() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="From the blog"
            title={
              <>
                Ideas, insights &amp; <span className="text-gradient">field notes</span>
              </>
            }
            description="Practical thinking on design, engineering and building great software."
          />
          <a href="#" className="btn-secondary shrink-0 text-sm">
            Read the blog
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {posts.map((p) => (
            <motion.a
              key={p.title}
              href="#"
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 bg-grid-lines opacity-20 [background-size:24px_24px]" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug transition-colors group-hover:text-brand-600">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink/55">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-ink/45">
                    <Clock className="h-3.5 w-3.5" />
                    {p.read}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
