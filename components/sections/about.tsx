"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="section-divider section-shell">
      <p className="section-kicker">About Me</p>
      <div className="grid items-start gap-8 lg:grid-cols-[320px_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="glass-panel interactive-lift p-5 shadow-glow"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={portfolioData.profilePhoto}
              alt={portfolioData.fullName}
              fill
              sizes="(min-width: 1024px) 280px, min(280px, calc(100vw - 72px))"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-4 text-center text-sm text-zinc-300">
            {portfolioData.role}
          </p>
          <div className="mt-4 grid gap-2">
            <div className="soft-card interactive-lift p-3 text-sm text-zinc-300">
              <span className="mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                Location
              </span>
              <p className="mt-1 text-zinc-100">{portfolioData.location}</p>
            </div>
            <div className="soft-card interactive-lift p-3 text-sm text-zinc-300">
              <span className="mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                Email
              </span>
              <p className="mt-1 truncate text-zinc-100">{portfolioData.email}</p>
            </div>
            <div className="soft-card interactive-lift p-3 text-sm text-zinc-300">
              <span className="mono text-[10px] uppercase tracking-[0.15em] text-zinc-400">
                WhatsApp
              </span>
              <p className="mt-1 text-zinc-100">{portfolioData.whatsapp}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-panel interactive-lift p-6 md:p-8"
        >
          <h2 className="section-title">Digital Forensics Practitioner in Training</h2>
          <p className="mt-5 max-w-3xl text-zinc-300">{portfolioData.bio}</p>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg uppercase tracking-[0.16em] text-accent-300">
              Academic Timeline
            </h3>
            {portfolioData.education.map((item) => (
              <motion.div
                key={item.level}
                whileHover={{ x: 4, y: -4 }}
                transition={{ type: "spring", stiffness: 240, damping: 16 }}
                className="soft-card interactive-lift p-4"
              >
                <p className="text-sm uppercase tracking-[0.12em] text-sun-400">{item.level}</p>
                <p className="mt-1 font-medium text-zinc-100">{item.institute}</p>
                <p className="mt-2 text-sm text-zinc-300">{item.years}</p>
                <p className="text-sm text-zinc-400">{item.grade}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
