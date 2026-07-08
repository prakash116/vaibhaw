"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  HeartPulse,
  ShoppingBag,
  Landmark,
  GraduationCap,
  Truck,
  Factory,
  Rocket,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const industries = [
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Landmark, label: "Finance" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck, label: "Logistics" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Rocket, label: "Startups" },
];

export function Industries() {
  return (
    <section id="industries" className="relative bg-night py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-800/40 blur-3xl" />
      </div>

      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Industries we serve"
          title={
            <>
              Built for <span className="text-gradient">every industry</span>
            </>
          }
          description="From first-time founders to global enterprises — we tailor technology to your domain."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {industries.map((it) => (
            <motion.button
              key={it.label}
              variants={fadeUp}
              className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-brand-500/40 hover:bg-white/[0.06]"
            >
              <span className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-brand-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-gradient group-hover:text-white">
                <it.icon className="h-7 w-7" />
              </span>
              <span className="text-base font-semibold">{it.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
