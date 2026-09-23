"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CanvasWrapper } from "@/components/three/canvas-wrapper";
import { ProjectsScene } from "@/components/three/projects-scene";
import { portfolioData } from "@/lib/portfolio-data";

function hasLink(href: string | undefined): href is string {
  return Boolean(href && href !== "#");
}

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pauseAuto, setPauseAuto] = useState(false);
  const activeProject = portfolioData.projects[activeIndex];
  const totalProjects = portfolioData.projects.length;

  useEffect(() => {
    if (pauseAuto || totalProjects < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalProjects);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [pauseAuto, totalProjects]);

  function showNextProject() {
    setActiveIndex((prev) => (prev + 1) % totalProjects);
  }

  function showPreviousProject() {
    setActiveIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  }

  return (
    <section id="projects" className="section-divider section-shell">
      <p className="section-kicker">Forensic Case Studies</p>
      <div
        className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]"
        onMouseEnter={() => setPauseAuto(true)}
        onMouseLeave={() => setPauseAuto(false)}
        onFocusCapture={() => setPauseAuto(true)}
        onBlurCapture={() => setPauseAuto(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-panel interactive-lift p-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="space-y-4"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(min-width: 1024px) 560px, calc(100vw - 56px)"
                  className="object-cover transition duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-950/35 to-transparent" />
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                    Project {activeIndex + 1} / {totalProjects}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPreviousProject}
                      className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300 transition hover:border-accent-400 hover:text-accent-300"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={showNextProject}
                      className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300 transition hover:border-accent-400 hover:text-accent-300"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <h3 className="mt-2 text-2xl">{activeProject.title}</h3>
                <p className="mt-3 max-w-2xl text-zinc-300">{activeProject.description}</p>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {activeProject.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-accent-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mono mt-4 text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                  {pauseAuto
                    ? "Case feed paused while interacting"
                    : "Case feed cycles every 5 seconds"}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {hasLink(activeProject.demoUrl) ? (
                    <Link
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button-outline"
                    >
                      Case Demo
                    </Link>
                  ) : (
                    <Link href="#contact" className="button-outline">
                      Request Walkthrough
                    </Link>
                  )}
                  {hasLink(activeProject.repoUrl) ? (
                    <Link
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300"
                    >
                      Evidence Repo
                    </Link>
                  ) : (
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300"
                    >
                      Discuss Repo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-white/10" />
          <CanvasWrapper className="interactive-lift" camera={{ position: [0, 0, 5], fov: 48 }}>
            <ProjectsScene
              projects={portfolioData.projects}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </CanvasWrapper>
          <div className="mt-4 grid gap-2">
            {portfolioData.projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full rounded-xl border px-3 py-2 text-left text-xs uppercase tracking-[0.14em] transition ${
                  index === activeIndex
                    ? "border-accent-400/50 bg-accent-500/15 text-accent-300"
                    : "border-white/15 bg-surface-950/55 text-zinc-400 hover:border-white/25 hover:text-zinc-200"
                }`}
                aria-label={`Show ${project.title}`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span>{project.title}</span>
                  <span
                    className={`h-2 rounded-full transition ${
                      index === activeIndex
                        ? "w-9 bg-accent-400"
                        : "w-5 bg-zinc-500"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
