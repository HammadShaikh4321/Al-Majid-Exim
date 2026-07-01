import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { navLinks, productCategories, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-white/10">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <span className="font-display text-lg font-semibold text-white">
                Al Majid Exim
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {siteConfig.tagline} Exporting premium fresh produce and spices from India since{" "}
              {siteConfig.founded}.
            </p>
            <a
              href={siteConfig.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-gold-500 hover:text-gold-400"
              aria-label="Al Majid Exim on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-gold-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {productCategories.map((c) => (
                <li key={c.id}>
                  <a
                    href="#products"
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-gold-300"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold-400">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/55">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {siteConfig.phone}
              </li>
              <li className="flex items-start gap-3 text-sm text-white/55">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {siteConfig.email}
              </li>
              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Al Majid Exim. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/30">
            Fresh from India. Trusted Worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
