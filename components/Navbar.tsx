"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`container-px mx-auto flex max-w-7xl items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled
            ? "glass shadow-gold py-2.5 px-4 md:px-6"
            : "bg-transparent py-1 px-2"
        }`}
      >
        <a href="#top" className="flex items-center gap-3 group">
          <Logo className="h-10 w-10 md:h-11 md:w-11 transition-transform duration-500 group-hover:rotate-[8deg]" />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg md:text-xl font-semibold tracking-tight ${
                scrolled ? "text-white" : "text-forest-950"
              }`}
            >
              Al Majid Exim
            </span>
            <span
              className={`font-mono text-[9px] tracking-[0.2em] uppercase ${
                scrolled ? "text-gold-300/80" : "text-forest-700/70"
              }`}
            >
              Since {siteConfig.founded}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                scrolled
                  ? "text-white/80 hover:text-gold-300 hover:bg-white/5"
                  : "text-forest-800 hover:text-forest-950 hover:bg-forest-900/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-white/80" : "text-forest-800"
            }`}
          >
            <Phone className="h-4 w-4 text-gold-500" />
            {siteConfig.phone}
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-forest-950 shadow-gold transition-transform duration-300 hover:scale-[1.04] hover:bg-gold-400"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-full p-2 ${scrolled ? "text-white" : "text-forest-950"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-4 mt-3 rounded-2xl bg-forest-950 text-white p-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-gold-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4 text-gold-500" />
                {siteConfig.phone}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-forest-950"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
