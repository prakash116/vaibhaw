"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects ship a first version within 4–8 weeks. Larger platforms are delivered in phased sprints so you see progress every week.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We tailor our process and team size to fit — from lean MVPs for founders to enterprise-grade platforms with compliance and SLAs.",
  },
  {
    q: "What does engagement and pricing look like?",
    a: "We offer fixed-scope projects and flexible monthly retainers. After a short discovery call we send a clear proposal with milestones and pricing.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Absolutely. Every project includes a support window, and we offer ongoing care plans with monitoring, updates and continuous improvement.",
  },
  {
    q: "Can you take over an existing product?",
    a: "Yes — we regularly audit, refactor and modernise existing codebases, then take ownership of design and engineering going forward.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions? <span className="text-gradient">Answered.</span>
            </>
          }
          description="Everything you need to know before we start working together."
        />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-black/[0.06] rounded-3xl border border-black/[0.06] bg-surface px-6 shadow-soft sm:px-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold sm:text-lg">{f.q}</span>
                  <span
                    className={[
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "rotate-45 border-transparent bg-brand-gradient text-white"
                        : "border-black/10 text-ink/60",
                    ].join(" ")}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-12 text-sm leading-relaxed text-ink/60">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
