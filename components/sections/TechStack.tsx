"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Cloud,
  BrainCircuit,
  Smartphone,
  Database,
  GitBranch,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const categories = [
  { icon: Layout, title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Go", "Python", "GraphQL"] },
  { icon: Cloud, title: "Cloud", items: ["AWS", "GCP", "Vercel", "Cloudflare"] },
  { icon: BrainCircuit, title: "AI", items: ["OpenAI", "Anthropic", "LangChain", "Pinecone"] },
  { icon: Smartphone, title: "Mobile", items: ["React Native", "Swift", "Kotlin", "Expo"] },
  { icon: Database, title: "Database", items: ["Postgres", "MongoDB", "Redis", "Supabase"] },
  { icon: GitBranch, title: "DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"] },
];

export function TechStack() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technology stack"
          title={
            <>
              Modern tools, <span className="text-gradient">built to last</span>
            </>
          }
          description="We choose proven, best-in-class technologies so your product stays fast, secure and future-ready."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className={[
                "group rounded-3xl border border-black/[0.06] bg-surface p-6 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-brand-500/20 hover:bg-white hover:shadow-lift",
                i === 0 ? "lg:col-span-2" : "",
              ].join(" ")}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">{c.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/[0.06] bg-white px-3.5 py-1.5 text-sm font-medium text-ink/70 transition-colors group-hover:border-brand-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
