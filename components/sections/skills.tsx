"use client";

import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { CanvasWrapper } from "@/components/three/canvas-wrapper";
import { SkillsScene } from "@/components/three/skills-scene";
import { portfolioData } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-divider section-shell !py-20 lg:!py-24"
    >
      {/* Section heading */}
      <div className="mb-8">
        <p className="section-kicker">Skills</p>

        <p className="mono mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          Technical capability matrix / DFIR engineering
        </p>
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

        {/* ================================================== */}
        {/* LEFT SIDE */}
        {/* ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-panel interactive-lift rounded-[1.5rem] border border-white/10 p-6 md:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mono text-[9px] uppercase tracking-[0.18em] text-accent-300">
                Capability Map
              </p>

              <h2 className="section-title mt-2">
                DFIR + Engineering
              </h2>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="h-2 w-2 rounded-full bg-accent-300 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />

              <span className="mono text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                Active
              </span>
            </div>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300">
            This interactive cluster combines investigation skills and
            software engineering capabilities used in practical forensic
            and security workflows.
          </p>

          <div className="mt-4 rounded-xl border border-accent-300/10 bg-accent-300/[0.025] px-3 py-2.5">
            <p className="mono text-[9px] uppercase tracking-[0.16em] text-accent-300/80">
              ↻ Drag to rotate
              <span className="mx-2 text-zinc-700">|</span>
              Forensic capability view
            </p>
          </div>

          {/* Skills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {portfolioData.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                }}
                className="tag-pill border border-accent-300/15 bg-accent-300/[0.025]"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Capability summary */}
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            <div className="soft-card rounded-xl border border-white/10 bg-black/10 p-3">
              <p className="mono text-[8px] uppercase tracking-[0.16em] text-zinc-500">
                Domain
              </p>

              <p className="mt-1.5 text-sm text-zinc-100">
                Digital Forensics
              </p>
            </div>

            <div className="soft-card rounded-xl border border-white/10 bg-black/10 p-3">
              <p className="mono text-[8px] uppercase tracking-[0.16em] text-zinc-500">
                Engineering
              </p>

              <p className="mt-1.5 text-sm text-zinc-100">
                Software + Security
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================================================== */}
        {/* RIGHT SIDE */}
        {/* ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
          }}
          className="relative lg:translate-y-3"
        >
          {/* Outer frame */}
          <div className="pointer-events-none absolute -inset-2 rounded-[1.7rem] border border-white/10" />

          {/* 3D scene */}
          <div className="relative overflow-hidden rounded-[1.5rem] border border-accent-300/20 bg-black/10">
            
            {/* HUD label */}
            <div className="pointer-events-none absolute left-5 top-4 z-10">
              <p className="mono text-[8px] uppercase tracking-[0.18em] text-accent-300/80">
                Capability Visualization
              </p>

              <p className="mono mt-1 text-[8px] uppercase tracking-[0.14em] text-zinc-500">
                Skill correlation map
              </p>
            </div>

            {/* Status */}
            <div className="pointer-events-none absolute right-5 top-4 z-10 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-300 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />

              <span className="mono text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                Live
              </span>
            </div>

            <CanvasWrapper
              className="interactive-lift h-[360px] md:h-[500px]"
              camera={{
                position: [0, 0, 4.2],
                fov: 46,
              }}
            >
              <SkillsScene skills={portfolioData.skills} />

              <OrbitControls
                makeDefault
                enableDamping
                enablePan={false}
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.8}
                rotateSpeed={0.6}
                minPolarAngle={Math.PI / 2.6}
                maxPolarAngle={Math.PI / 1.7}
              />
            </CanvasWrapper>

            {/* Bottom label */}
            <div className="pointer-events-none absolute bottom-4 left-0 right-0 text-center">
              <p className="mono text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                Interactive skill correlation
              </p>
            </div>
          </div>

          {/* ================================================== */}
          {/* BOTTOM STATUS */}
          {/* ================================================== */}

          {/* <div className="mt-3 grid grid-cols-3 gap-2.5">
            <div className="rounded-xl border border-white/10 bg-black/15 px-3 py-3">
              <p className="mono text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                Skills
              </p>

              <p className="mt-1 text-sm text-zinc-100">
                {portfolioData.skills.length}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/15 px-3 py-3">
              <p className="mono text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                Focus
              </p>

              <p className="mt-1 text-sm text-zinc-100">
                DFIR
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/15 px-3 py-3">
              <p className="mono text-[8px] uppercase tracking-[0.15em] text-zinc-500">
                Mode
              </p>

              <p className="mt-1 text-sm text-accent-300">
                Interactive
              </p>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}