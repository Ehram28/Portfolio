"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

export function TrainingSection() {
  return (
    <section
      id="training"
      className="section-divider section-shell !py-24 lg:!py-28"
    >
      {/* Section heading */}
      <div className="mb-12">
        <p className="section-kicker">Training & Experience</p>

        <h2 className="section-title mt-3">
          Professional Development & Experience
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-300">
          Practical experience and professional training focused on digital
          forensics, cybersecurity, software engineering, and investigation
          workflows.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[9px] top-2 bottom-2 hidden w-px bg-accent-400/20 md:block" />

        <div className="space-y-6">
          {portfolioData.training.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="relative md:pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-7 hidden h-[19px] w-[19px] rounded-full border border-accent-300/60 bg-zinc-950 shadow-[0_0_18px_rgba(45,212,191,0.35)] md:block">
                <div className="absolute inset-[5px] rounded-full bg-accent-300" />
              </div>

              {/* Experience card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="glass-panel interactive-lift p-6 md:p-7"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-zinc-100">
                        {item.title}
                      </h3>

                      <span className="tag-pill">
                        {item.type}
                      </span>
                    </div>

                    <p className="mt-2 text-accent-300">
                      {item.organization}
                    </p>
                  </div>

                  <span className="mono shrink-0 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    {item.years}
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className="tag-pill"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}