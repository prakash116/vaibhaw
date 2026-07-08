"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Users,
  CircleCheck,
  Sparkles,
} from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";
import { Counter } from "@/components/ui/Counter";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax layers
  const yMock = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yGrad = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background */}
      <motion.div
        style={{ y: yGrad }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute inset-0 bg-grid-lines [background-size:44px_44px] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" />
        <div className="absolute left-1/2 top-24 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand-soft opacity-60 blur-3xl bg-animate animate-gradient-pan" />
      </motion.div>

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div
          variants={stagger(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-7"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Enterprise software · AI · Restaurant tech
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Premium software that
            <span className="text-gradient"> moves your business forward.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="lead max-w-xl">
            We design and build enterprise-grade web apps, mobile apps, AI
            automation and restaurant platforms — crafted with the polish of the
            world&apos;s best products.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary text-base">
              Start your project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#products" className="btn-secondary text-base">
              <Play className="h-4 w-4 text-brand-500" />
              Watch the demo
            </a>
          </motion.div>

          {/* Mini trust row */}
          <motion.div
            variants={fadeUp}
            className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/55"
          >
            <span className="inline-flex items-center gap-2">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
                ))}
              </span>
              4.9/5 client rating
            </span>
            <span className="inline-flex items-center gap-2">
              <CircleCheck className="h-4 w-4 text-brand-500" />
              200+ products shipped
            </span>
          </motion.div>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          style={{ y: yMock, opacity }}
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <DashboardMock />

          {/* Floating UI cards */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 top-16 hidden rounded-2xl p-4 shadow-lift sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-ink/50">Revenue</p>
                <p className="text-lg font-bold">
                  +<Counter to={38} suffix="%" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass absolute -right-4 bottom-10 hidden rounded-2xl p-4 shadow-lift sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-night text-white">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-ink/50">Active users</p>
                <p className="text-lg font-bold">
                  <Counter to={12.4} decimals={1} suffix="k" />
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/** Stylized product dashboard rendered purely in markup. */
function DashboardMock() {
  return (
    <div className="relative rounded-3xl border border-black/[0.06] bg-white p-3 shadow-lift">
      <div className="overflow-hidden rounded-2xl bg-night">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-white/20" />
          <span className="h-3 w-3 rounded-full bg-brand-500" />
          <span className="ml-3 h-5 w-40 rounded-md bg-white/10" />
        </div>

        <div className="grid grid-cols-[70px_1fr] gap-0">
          {/* sidebar */}
          <div className="flex flex-col gap-3 border-r border-white/10 p-4">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={[
                  "h-8 w-8 rounded-lg",
                  i === 0 ? "bg-brand-gradient" : "bg-white/10",
                ].join(" ")}
              />
            ))}
          </div>

          {/* main */}
          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <span className="h-6 w-32 rounded-md bg-white/15" />
              <span className="h-8 w-20 rounded-full bg-brand-500/80" />
            </div>

            {/* stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <span className="mb-2 block h-2.5 w-10 rounded bg-white/20" />
                  <span className="block h-5 w-16 rounded bg-white/30" />
                </div>
              ))}
            </div>

            {/* chart */}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex h-32 items-end gap-2">
                {[38, 60, 45, 72, 55, 88, 66, 95, 70].map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-700 to-brand-400"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
