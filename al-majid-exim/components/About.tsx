"use client";

import Image from "next/image";
import { Leaf, Globe2, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/lib/data";

const pillars = [
  {
    icon: Leaf,
    title: "Grown in India",
    text: "Sourced directly from farms and mandis across Maharashtra, Karnataka and beyond.",
  },
  {
    icon: Globe2,
    title: "Shipped Worldwide",
    text: "Reefer-container logistics from Mumbai's JNPT port to markets across Asia and the Gulf.",
  },
  {
    icon: Handshake,
    title: "Built on Trust",
    text: "Transparent pricing and consistent quality that keep our buyers coming back, order after order.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-ivory-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1595855759920-86582396756c?q=80&w=1200&auto=format&fit=crop"
                  alt="Fresh Indian onions and produce sorted for export at Al Majid Exim"
                  width={900}
                  height={1000}
                  className="h-[420px] w-full object-cover md:h-[540px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-4 w-56 rounded-2xl border border-gold-500/20 bg-forest-950 p-5 shadow-gold sm:-right-8 sm:w-64">
                <div className="font-display text-3xl text-gold-300">{new Date().getFullYear() - siteConfig.founded}+</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/60">
                  Years exporting fresh produce from India
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-forest-950 sm:text-5xl">
              A trading house built on <span className="italic text-gold-600">freshness</span> and follow-through
            </h2>
            <p className="mt-6 text-base leading-relaxed text-forest-800/80 sm:text-lg">
              {siteConfig.description} Founded in {siteConfig.founded} and headquartered in Mumbai,
              we work directly with growers to move fresh onions, vegetables, fruits and spices
              from Indian soil to tables across the world — without cutting corners on quality,
              pricing or delivery timelines.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-forest-950">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-forest-950">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-forest-800/70">{p.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
