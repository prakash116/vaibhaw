"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Premium branded loading overlay shown briefly on first paint. */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-night"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-20 w-20 items-center justify-center"
            >
              <span className="absolute inset-0 rounded-3xl bg-brand-500/30 animate-pulse-ring" />
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-2xl font-bold text-white shadow-glow">
                R
              </span>
            </motion.div>

            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-brand-gradient"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="text-sm font-medium tracking-wide text-white/50">
              Crafting your experience…
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
