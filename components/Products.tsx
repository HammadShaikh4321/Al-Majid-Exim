"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { productCategories } from "@/lib/data";

export default function Products() {
  const [active, setActive] = useState(productCategories[0].id);
  const category = productCategories.find((c) => c.id === active)!;

  return (
    <section id="products" className="section-pad bg-forest-950 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="container-px relative mx-auto max-w-7xl">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow">What We Export</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ivory-50 sm:text-5xl">
            Our Products
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Four categories, sourced and graded to export standard — from our signature onions
            to everyday vegetables, orchard fruit and export-grade spices.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
          {productCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === c.id
                  ? "border-gold-500 bg-gold-500 text-forest-950"
                  : "border-white/15 text-white/70 hover:border-gold-500/50 hover:text-gold-300"
              }`}
            >
              {c.title}
            </button>
          ))}
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50">
              {category.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative h-40 overflow-hidden sm:h-48">
                    <Image
                      src={item.image}
                      alt={`${item.name} exported by Al Majid Exim`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent" />
                    {item.featured && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-semibold text-forest-950">
                        <Star className="h-3 w-3 fill-forest-950" /> Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400/80">
                      {item.category}
                    </span>
                    <h3 className="mt-1 font-display text-base text-white sm:text-lg">
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <ScrollReveal className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-gold-500/40 px-6 py-3 text-sm font-semibold text-gold-300 transition-colors duration-300 hover:bg-gold-500 hover:text-forest-950"
          >
            Ask About a Product Not Listed
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
