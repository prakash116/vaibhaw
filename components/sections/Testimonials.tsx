"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "AureviaTech rebuilt our entire ordering stack in six weeks. Revenue is up 38% and our staff finally love the tools they use every day.",
    name: "Aarav Mehta",
    role: "CEO, Bistro Group",
    company: "Bistro Group",
    initials: "AM",
  },
  {
    quote:
      "The design quality is genuinely on par with the best products I've seen. They think like founders, not vendors.",
    name: "Sara Lopez",
    role: "Head of Product, Foodly",
    company: "Foodly",
    initials: "SL",
  },
  {
    quote:
      "From strategy to shipping, the team was flawless. Our AI automation now handles 70% of support tickets on its own.",
    name: "Daniel Kim",
    role: "CTO, Nova Bank",
    company: "Nova Bank",
    initials: "DK",
  },
  {
    quote:
      "Enterprise-grade delivery with startup speed. They're the most reliable technology partner we've ever had.",
    name: "Priya Nair",
    role: "COO, Vertex Retail",
    company: "Vertex",
    initials: "PN",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade opacity-60" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by <span className="text-gradient">founders & teams</span>
            </>
          }
          description="Don't take our word for it — here's what our clients say."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-black/[0.06] bg-surface p-8 shadow-soft sm:p-14">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-brand-500/10" />

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col gap-8"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-500 text-brand-500" />
                  ))}
                </div>

                <p className="text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-lg font-bold text-white shadow-glow-sm">
                    {t.initials}
                  </span>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-ink/55">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-brand-50 hover:text-brand-600"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={[
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-8 bg-brand-500" : "w-2 bg-black/15 hover:bg-black/25",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white transition-colors hover:bg-brand-50 hover:text-brand-600"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
