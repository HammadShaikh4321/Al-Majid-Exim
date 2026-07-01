"use client";

import {
  ShieldCheck,
  BadgeIndianRupee,
  Clock,
  FileCheck2,
  Users,
  Headset,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { whyChooseUs } from "@/lib/data";

const icons = [ShieldCheck, BadgeIndianRupee, Clock, FileCheck2, Users, Headset];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-ivory-50">
      <div className="container-px mx-auto max-w-7xl">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow">Why Partner With Us</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-forest-950 sm:text-5xl">
            Why Choose Al Majid Exim
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-forest-900/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-gold">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-forest-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-forest-950">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-forest-800/70">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
