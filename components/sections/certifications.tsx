"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

function hasCredential(href: string | undefined): href is string {
  return Boolean(href && href !== "#");
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-divider section-shell">
      <p className="section-kicker">Training & Practice</p>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="glass-panel interactive-lift p-6 md:p-8"
      >
        <h2 className="section-title">Professional Development Timeline</h2>
        <p className="mt-3 text-zinc-300">
          Current learning is focused on digital forensics fundamentals, Linux evidence handling,
          secure web application work, and documenting practical lab outcomes clearly.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {portfolioData.certifications.map((cert) => (
            <motion.article
              key={`${cert.title}-${cert.date}`}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="soft-card interactive-lift p-5"
            >
              <p className="mono text-[11px] uppercase tracking-[0.16em] text-sun-400">
                {cert.date}
              </p>
              <h3 className="mt-2 text-xl">{cert.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{cert.issuer}</p>
              {hasCredential(cert.credentialUrl) ? (
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full border border-accent-400/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300 transition hover:border-accent-300 hover:bg-accent-500/10 hover:text-white"
                >
                  Credential
                </Link>
              ) : null}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
