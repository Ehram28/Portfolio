import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="glass-panel interactive-lift flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">
              Contact Card
            </p>
            <p className="mt-2 text-xl md:text-2xl">
              {portfolioData.fullName}
            </p>
            <p className="mt-2 max-w-xl text-sm text-zinc-300">{portfolioData.role}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {portfolioData.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300"
              >
                {social.label}
              </Link>
            ))}
            <Link
              href="https://linktr.ee/RizwanAhmedMughal"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300"
            >
              Linktree
            </Link>
            <Link
              href="/cv"
              className="button-outline"
            >
              View CV
            </Link>
            <Link
              href="/api/download-resume"
              className="button-outline"
            >
              Download CV
            </Link>
          </div>
        </div>
        <p className="mt-5 text-center text-xs uppercase tracking-[0.16em] text-zinc-400">
          Built for digital forensics, secure engineering, and professional presentation.
        </p>
      </div>
    </footer>
  );
}
