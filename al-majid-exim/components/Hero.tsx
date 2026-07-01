"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShipWheel, MapPin } from "lucide-react";
import TradeRouteMap from "./TradeRouteMap";
import { exportPorts, originPort, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-950 pt-28 pb-16"
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950 to-forest-900" />
        <div className="absolute inset-0 opacity-90">
          <TradeRouteMap />
        </div>
        <div className="absolute inset-0 noise-overlay opacity-40 mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-950 to-transparent" />
      </div>

      <div className="container-px relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5"
          >
            <ShipWheel className="h-3.5 w-3.5 text-gold-400" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold-300">
              Est. 2019 · Mumbai, India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-[2.6rem] leading-[1.06] text-ivory-50 sm:text-6xl lg:text-[4.2rem]"
          >
            Fresh from India.
            <br />
            <span className="text-gradient-gold italic">Trusted Worldwide.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/65"
          >
            We grow relationships the way we grow trade — carefully. Al Majid Exim exports
            premium onions, vegetables, fruits and spices from India's finest farms to
            markets across Asia and the Gulf.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-950 shadow-gold transition-transform duration-300 hover:scale-[1.04] hover:bg-gold-400"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-gold-400/50 hover:text-gold-300"
            >
              Explore Products
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/10 pl-4">
                <div className="font-display text-2xl text-gold-300 sm:text-3xl">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/45">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Route card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass hidden rounded-3xl p-6 lg:block"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-300">
              Live Trade Lanes
            </span>
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.2)]" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-white/80">
            <MapPin className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-medium">{originPort.name} Port of Origin</span>
          </div>
          <ul className="mt-4 space-y-3">
            {exportPorts.map((p) => (
              <li
                key={p.name}
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm"
              >
                <span className="text-white/85">
                  {p.name}, <span className="text-white/50">{p.country}</span>
                </span>
                <span className="font-mono text-[11px] text-gold-300">{p.detail}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
