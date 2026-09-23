"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  async function copyEmailToClipboard() {
    try {
      await navigator.clipboard.writeText(portfolioData.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || "")
    };

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { error?: string; message?: string };
      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send your message.");
      }

      setStatus("success");
      setMessage(data.message ?? "Message sent successfully.");
      form.reset();
      return;
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unexpected error.");
    }
  }

  return (
    <section id="contact" className="section-shell">
      <p className="section-kicker">Contact</p>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-panel interactive-lift p-6 md:p-8"
        >
          <h2 className="section-title">Discuss a Security or Forensics Project</h2>
          <p className="mt-4 max-w-md text-zinc-300">
            For internships, freelance opportunities, or collaboration on digital investigation
            tooling, use this form or connect through the links below.
          </p>

          <div className="mt-6 grid gap-3 text-zinc-300">
            <motion.div
              whileHover={{ y: -4, x: 2 }}
              transition={{ type: "spring", stiffness: 230, damping: 18 }}
              className="soft-card interactive-lift p-3.5"
            >
              <p className="mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                Email
              </p>
              <Link href={`mailto:${portfolioData.email}`} className="mt-1 block text-accent-300">
                {portfolioData.email}
              </Link>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="mono mt-2 inline-flex rounded-full border border-accent-400/35 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-accent-300 transition hover:border-accent-300 hover:bg-accent-500/10"
              >
                {copied ? "Copied" : "Copy Email"}
              </button>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, x: 2 }}
              transition={{ type: "spring", stiffness: 230, damping: 18 }}
              className="soft-card interactive-lift p-3.5"
            >
              <p className="mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                Phone
              </p>
              <p className="mt-1 text-zinc-100">{portfolioData.phone}</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, x: 2 }}
              transition={{ type: "spring", stiffness: 230, damping: 18 }}
              className="soft-card interactive-lift p-3.5"
            >
              <p className="mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                WhatsApp
              </p>
              <p className="mt-1 text-zinc-100">{portfolioData.whatsapp}</p>
            </motion.div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {portfolioData.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="tag-pill interactive-lift transition hover:border-accent-400 hover:text-accent-300"
              >
                {social.label}
              </Link>
            ))}
            <Link
              href="https://linktr.ee/RizwanAhmedMughal"
              target="_blank"
              rel="noreferrer"
              className="tag-pill interactive-lift transition hover:border-accent-400 hover:text-accent-300"
            >
              Linktree
            </Link>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass-panel interactive-lift p-6"
        >
          <div className="grid gap-4">
            <label className="text-sm text-zinc-300">
              Name
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl border border-white/15 bg-surface-950/75 px-4 py-3 text-zinc-100 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20"
                placeholder="Your name"
              />
            </label>

            <label className="text-sm text-zinc-300">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-white/15 bg-surface-950/75 px-4 py-3 text-zinc-100 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20"
                placeholder="you@example.com"
              />
            </label>

            <label className="text-sm text-zinc-300">
              Subject
              <input
                name="subject"
                className="mt-2 w-full rounded-xl border border-white/15 bg-surface-950/75 px-4 py-3 text-zinc-100 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20"
                placeholder="Project inquiry"
              />
            </label>

            <label className="text-sm text-zinc-300">
              Message
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-surface-950/75 px-4 py-3 text-zinc-100 outline-none transition focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20"
                placeholder="Tell me what you want to build..."
              />
            </label>

            <input
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {message ? (
              <p
                className={`text-sm ${
                  status === "success" ? "text-accent-300" : "text-red-400"
                }`}
              >
                {message}
              </p>
            ) : null}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
