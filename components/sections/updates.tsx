"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

export function UpdatesSection() {
  return (
    <section id="updates" className="section-divider section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="space-y-5"
        >
          <p className="section-kicker">Current Updates</p>
          <h2 className="section-title">Recent progress and active focus areas</h2>
          <p className="max-w-xl text-zinc-300">
            A concise view of what I am building, practicing, and improving across forensic
            analysis, secure engineering, and portfolio-ready case documentation.
          </p>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {portfolioData.stats.map((stat) => (
              <motion.article
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="soft-card interactive-lift p-4"
              >
                <p className="mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                  {stat.label}
                </p>
                <p className="mt-1 text-2xl text-zinc-100">{stat.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">{stat.detail}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4">
          {portfolioData.updates.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-panel interactive-lift p-5 md:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="mono text-[10px] uppercase tracking-[0.16em] text-sun-400">
                    {item.status}
                  </p>
                  <h3 className="mt-2 text-xl md:text-2xl">{item.title}</h3>
                </div>
                <span className="mono rounded-full border border-accent-400/35 bg-accent-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-accent-300">
                  Update {index + 1}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.points.map((point) => (
                  <span key={point} className="tag-pill">
                    {point}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {portfolioData.focusAreas.map((area) => (
          <motion.article
            key={area.title}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="soft-card interactive-lift p-5"
          >
            <h3 className="text-lg">{area.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{area.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {area.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-accent-400/30 bg-accent-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-accent-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
