"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CanvasWrapper } from "@/components/three/canvas-wrapper";
import { HeroScene } from "@/components/three/hero-scene";
import { MacbookModel } from "@/components/three/macbook-model";
import { portfolioData } from "@/lib/portfolio-data";

const projectNames = portfolioData.projects
  .map((project) => project.title)
  .join(", ");

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-divider relative overflow-hidden !pt-0 pb-8"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-45" />

      {/* Background glow - left */}
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />

      {/* Background glow - right */}
      <div className="pointer-events-none absolute -right-20 top-12 h-60 w-60 rounded-full bg-sun-500/20 blur-3xl" />

      {/* Main Hero Grid */}
      <div className="section-shell relative grid items-start gap-8 !pt-5 pb-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        
        {/* ===================================================== */}
        {/* LEFT COLUMN */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="min-w-0"
        >
          {/* Section label */}
          <p className="section-kicker">
            Digital Forensics Portfolio
          </p>

          {/* Identity line */}
          <p className="mono mt-3 max-w-full break-words text-[10px] uppercase leading-relaxed tracking-[0.22em] text-zinc-400 md:text-[11px]">
            {portfolioData.fullName} | {portfolioData.location} | DFIR
          </p>

          {/* Main Heading */}
          <h1 className="mt-5 max-w-3xl text-3xl leading-[1.02] tracking-[-0.025em] md:text-5xl lg:text-[3.75rem]">
            Investigating digital evidence and building secure systems with{" "}
            <span className="text-accent-300">
              forensic rigor.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            I am Rizwan Ahmed, a Software Engineering student at MUST
            focused on Python, C#, SQL, digital forensics, and security
            analysis. My current work includes {projectNames}, with an
            emphasis on practical investigation workflows and
            internship-ready delivery.
          </p>

          {/* ===================================================== */}
          {/* BUTTONS */}
          {/* ===================================================== */}

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link
              href="#contact"
              className="button-primary"
            >
              Start a Collaboration →
            </Link>

            <Link
              href="/cv"
              className="button-outline"
            >
              View CV
            </Link>

            <Link
              href="#updates"
              className="button-outline"
            >
              Latest Updates
            </Link>

            <Link
              href="/api/download-resume"
              className="button-outline"
            >
              Download CV
            </Link>

            <Link
              href="https://linktr.ee/RizwanAhmedMughal"
              target="_blank"
              rel="noreferrer"
              className="button-outline"
            >
              Linktree
            </Link>
          </div>

          {/* ===================================================== */}
          {/* STATS */}
          {/* ===================================================== */}

          <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
            {portfolioData.stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -5,
                  scale: 1.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="soft-card interactive-lift relative overflow-hidden rounded-2xl border border-accent-300/15 bg-black/20 p-3.5 backdrop-blur-sm"
              >
                {/* Top glow line */}
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-300/70 to-transparent" />

                <p className="mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                  {item.label}
                </p>

                <p className="mt-1 text-base font-medium text-zinc-100">
                  {item.value}
                </p>

                <p className="mt-1 text-[11px] leading-relaxed text-zinc-400">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ===================================================== */}
          {/* CAPABILITIES */}
          {/* ===================================================== */}

          <div className="mt-5">
            <p className="mono mb-2.5 text-[9px] uppercase tracking-[0.2em] text-zinc-500">
              Core Capabilities
            </p>

            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.slice(0, 7).map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="tag-pill border border-accent-300/20 bg-accent-300/[0.035] px-3 py-1.5"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ===================================================== */}
          {/* SYSTEM STATUS */}
          {/* ===================================================== */}

          <motion.div
            className="mono mt-5 flex w-full items-center gap-3 border-t border-white/10 pt-4 text-[9px] uppercase tracking-[0.17em] text-zinc-500"
            animate={{
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-accent-300 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />

            <span className="text-accent-300">
              System Online
            </span>

            <span className="text-zinc-700">
              /
            </span>

            <span>
              Scroll to explore sections
            </span>

            <span className="hidden h-px flex-1 bg-gradient-to-r from-accent-300/50 to-transparent md:block" />
          </motion.div>
        </motion.div>

        {/* ===================================================== */}
        {/* RIGHT COLUMN */}
        {/* ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.15,
          }}
          className="relative min-w-0 lg:self-center lg:translate-y-8"
        >
          {/* Outer HUD frame */}
          <div className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-white/10" />

          {/* =================================================== */}
          {/* 3D FORENSIC VISUALIZATION */}
          {/* =================================================== */}

          <div className="relative overflow-hidden rounded-[1.8rem] border border-accent-300/25 bg-black/10">
            
            {/* HUD top labels */}
            <div className="pointer-events-none absolute left-5 top-5 z-10">
              <p className="mono text-[8px] uppercase tracking-[0.18em] text-accent-300/80">
                Forensic Analysis
              </p>

              <p className="mono mt-1 text-[8px] uppercase tracking-[0.16em] text-zinc-500">
                Data Correlation
              </p>

              <p className="mono mt-1 text-[8px] uppercase tracking-[0.16em] text-zinc-500">
                Threat Detection
              </p>
            </div>

            {/* Right HUD label */}
            <div className="pointer-events-none absolute right-5 top-5 z-10 text-right">
              <p className="mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                Evidence / Insights / Action
              </p>
            </div>

            <CanvasWrapper
              eager
              className="interactive-lift h-[360px] md:h-[480px]"
              camera={{
                position: [0, 0, 4.1],
                fov: 44,
              }}
            >
              <HeroScene />

              {portfolioData.hasMacbookModel ? (
                <MacbookModel />
              ) : null}
            </CanvasWrapper>

            {/* Bottom label */}
            <div className="pointer-events-none absolute bottom-4 left-0 right-0 text-center">
              <p className="mono text-[9px] uppercase tracking-[0.18em] text-zinc-400">
                Interactive Forensic Signal Visualization
              </p>
            </div>
          </div>

          {/* =================================================== */}
          {/* FORENSIC STATUS CARDS */}
          {/* =================================================== */}

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            
            {/* Evidence State */}
            <motion.div
              whileHover={{ y: -3 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3.5 backdrop-blur-sm"
            >
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-300/70 to-transparent" />

              <div className="flex items-center justify-between">
                <p className="mono text-[8px] uppercase tracking-[0.18em] text-zinc-500">
                  Evidence State
                </p>

                <span className="text-lg text-accent-300">
                  ◉
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-300 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />

                <span className="text-xs text-zinc-100">
                  Analysis Ready
                </span>
              </div>
            </motion.div>

            {/* Investigation Mode */}
            <motion.div
              whileHover={{ y: -3 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-3.5 backdrop-blur-sm"
            >
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-sun-400/70 to-transparent" />

              <div className="flex items-center justify-between">
                <p className="mono text-[8px] uppercase tracking-[0.18em] text-zinc-500">
                  Investigation Mode
                </p>

                <span className="text-lg text-sun-400">
                  ◇
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sun-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />

                <span className="text-xs text-zinc-100">
                  DFIR Workflow
                </span>
              </div>
            </motion.div>
          </div>

          {/* =================================================== */}
          {/* FORENSIC SIGNAL */}
          {/* =================================================== */}

          <div className="mt-2.5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3.5 backdrop-blur-sm">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-accent-300">
                  ▮
                </span>

                <span className="mono text-[8px] uppercase tracking-[0.18em] text-zinc-400">
                  Forensic Signal
                </span>
              </div>

              <span className="mono text-[8px] uppercase tracking-[0.18em] text-accent-300">
                Active ▮▮▮
              </span>
            </div>

            {/* Animated signal bars */}
            <div className="mt-3 flex h-8 items-end gap-1 overflow-hidden">
              {[
                35, 55, 42, 72, 48,
                88, 60, 76, 44, 68,
                52, 82, 58, 94, 46,
                70, 50, 86, 62, 78,
                43, 91, 57, 74, 49,
                84, 65, 93, 54, 71,
              ].map((height, index) => (
                <motion.span
                  key={index}
                  className="flex-1 rounded-t-sm bg-accent-300/55"
                  style={{
                    height: `${height}%`,
                  }}
                  animate={{
                    opacity: [0.3, 0.85, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.04,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}