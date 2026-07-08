"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { icon: Search, title: "Discovery", desc: "We learn your goals, users and constraints." },
  { icon: ClipboardList, title: "Planning", desc: "Scope, roadmap and architecture defined." },
  { icon: PenTool, title: "Design", desc: "Wireframes, systems and high-fidelity UI." },
  { icon: Code2, title: "Development", desc: "Clean, scalable code shipped in sprints." },
  { icon: TestTube, title: "Testing", desc: "QA, performance and security hardening." },
  { icon: Rocket, title: "Deployment", desc: "Smooth launch with zero-downtime rollout." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing care, monitoring and iteration." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A proven path from <span className="text-gradient">idea to impact</span>
            </>
          }
          description="A transparent, collaborative process that keeps you in control at every stage."
        />

        <div ref={ref} className="relative mt-20">
          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            {/* track */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-black/[0.08]" />
            <motion.div
              style={{ width: lineWidth }}
              className="absolute left-0 top-8 h-0.5 bg-brand-gradient"
            />

            <div className="grid grid-cols-7 gap-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-black/[0.06] bg-white text-brand-600 shadow-soft transition-all duration-500 hover:scale-110 hover:bg-brand-gradient hover:text-white">
                    <s.icon className="h-7 w-7" />
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-night text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-5 text-base font-bold">{s.title}</h3>
                  <p className="mt-1 text-xs text-ink/55">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="relative space-y-6 lg:hidden">
            <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-black/[0.08]" />
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.05 }}
                className="relative flex items-start gap-5 pl-0"
              >
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-black/[0.06] bg-white text-brand-600 shadow-soft">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-night text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-2">
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
