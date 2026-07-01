"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "";
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo className="h-16 w-16" tone="gold" />
          </motion.div>
          <motion.div
            className="mt-6 h-px w-40 overflow-hidden bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              animate={{ x: ["-100%", "220%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.p
            className="mt-4 font-mono text-[11px] tracking-[0.35em] text-gold-300/80 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Al Majid Exim
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
