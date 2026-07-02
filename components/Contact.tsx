"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Loader2,
  CheckCircle2,
  Send,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { siteConfig, productCategories } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

function useFormStatus() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  return { status, setStatus, errorMsg, setErrorMsg };
}

function StatusNote({ status, errorMsg }: { status: Status; errorMsg: string }) {
  return (
    <AnimatePresence mode="wait">
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-2 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Thanks — your message is in. We&apos;ll get back to you shortly.
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {errorMsg || "Something went wrong. Please try again."}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors duration-300 focus:border-gold-400/70";

function ContactForm() {
  const { status, setStatus, errorMsg, setErrorMsg } = useFormStatus();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error);
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setErrorMsg(err?.message);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Full name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email address" className={inputClass} />
      </div>
      <input name="phone" placeholder="Phone / WhatsApp (optional)" className={inputClass} />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us how we can help"
        className={inputClass}
      />
      <StatusNote status={status} errorMsg={errorMsg} />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-transform duration-300 hover:scale-[1.02] hover:bg-gold-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Send Message
      </button>
    </form>
  );
}

function QuoteForm() {
  const { status, setStatus, errorMsg, setErrorMsg } = useFormStatus();
  const allProducts = productCategories.flatMap((c) => c.items.map((i) => i.name));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error);
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setErrorMsg(err?.message);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Full name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email address" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" placeholder="Phone / WhatsApp" className={inputClass} />
        <input name="country" required placeholder="Destination country" className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <select name="product" required defaultValue="" className={inputClass}>
          <option value="" disabled className="text-forest-900">
            Select a product
          </option>
          {allProducts.map((p) => (
            <option key={p} value={p} className="text-forest-900">
              {p}
            </option>
          ))}
        </select>
        <input name="quantity" placeholder="Quantity (e.g. 1 FCL / 20 tonnes)" className={inputClass} />
      </div>
      <textarea
        name="message"
        rows={3}
        placeholder="Any additional details"
        className={inputClass}
      />
      <StatusNote status={status} errorMsg={errorMsg} />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-transform duration-300 hover:scale-[1.02] hover:bg-gold-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        Request Quote
      </button>
    </form>
  );
}

export default function Contact() {
  const [tab, setTab] = useState<"contact" | "quote">("quote");

  return (
    <section id="contact" className="section-pad bg-forest-950">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <ScrollReveal direction="right">
            <span className="eyebrow">Get In Touch</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ivory-50 sm:text-5xl">
              Let&apos;s start a shipment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Reach out with your product, quantity and destination port — we typically respond
              within one business day.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-gold-500/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-white/45">Phone / WhatsApp</div>
                  <div className="text-sm font-medium text-white">{siteConfig.phone}</div>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-gold-500/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-white/45">Email</div>
                  <div className="text-sm font-medium text-white">{siteConfig.email}</div>
                </div>
              </a>
              <a
                href={siteConfig.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-gold-500/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                  <Instagram className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-white/45">Instagram</div>
                  <div className="text-sm font-medium text-white">{siteConfig.instagram}</div>
                </div>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-white/45">Registered Office</div>
                  <div className="text-sm font-medium leading-relaxed text-white">
                    {siteConfig.address}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1">
                <button
                  onClick={() => setTab("quote")}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                    tab === "quote" ? "bg-gold-500 text-forest-950" : "text-white/60"
                  }`}
                >
                  Request a Quote
                </button>
                <button
                  onClick={() => setTab("contact")}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                    tab === "contact" ? "bg-gold-500 text-forest-950" : "text-white/60"
                  }`}
                >
                  General Enquiry
                </button>
              </div>
              {tab === "quote" ? <QuoteForm /> : <ContactForm />}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
