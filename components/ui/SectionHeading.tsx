"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: Props) {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={[
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-2xl",
      ].join(" ")}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={[
          "section-title",
          dark ? "text-white" : "text-ink",
        ].join(" ")}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={["lead", dark ? "text-white/60" : ""].join(" ")}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
