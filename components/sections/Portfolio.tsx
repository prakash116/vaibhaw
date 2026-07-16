"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const projects = [
  {
    title: "RestoCare",
    category: "SaaS · Restaurant Services",
    desc: "On-demand marketplace connecting restaurants with verified chefs, helpers and maintenance pros — instant booking, live tracking and secure payments.",
    tech: ["Marketplace", "Live Tracking", "Mobile App", "Payments"],
    image: "/Project/restocare.png",
    span: "lg:col-span-2",
    url: "https://www.restocare.in/",
  },
  {
    title: "BFC Capital",
    category: "Fintech · Wealth Management",
    desc: "SEBI-registered investment advisory managing ₹1000+ Cr for 16,000+ clients across 80+ cities in India.",
    tech: ["Mutual Funds", "Advisory", "Calculators"],
    image: "/Project/bfc.png",
    span: "",
    url: "https://bfccapital.com/",
  },
  {
    title: "ProdigyPro",
    category: "Fintech · Mobile App",
    desc: "BFC Capital's investment app — buy and track mutual funds with speed, safety and AI-driven scheme selection.",
    tech: ["iOS & Android", "AI Selection", "Investments"],
    image: "/Project/prodigy.png",
    span: "",
    url: "https://app.prodigypro.co.in/",
  },
  {
    title: "Hi-Lift Elevator",
    category: "Manufacturing · Web",
    desc: "Digital presence for a Delhi-based elevator manufacturer — home, hospital, freight and MRL lifts with customized solutions and lead-gen enquiry flows.",
    tech: ["Corporate Website", "Lead Generation", "SEO"],
    image: "/Project/hilift.png",
    span: "lg:col-span-2",
    url: "https://www.hiliftelevator.com/",
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
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className={`group relative block overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift ${p.span}`}
            >
              {/* hero image (site screenshot) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={`${p.title} website screenshot`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                {/* hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink">
                    Visit website
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
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
