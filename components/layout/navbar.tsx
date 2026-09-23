"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Updates", href: "/#updates" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Training", href: "/#training" },
  { label: "Contact", href: "/#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] w-full max-w-6xl items-center px-4">
        <Link
          href="/#home"
          className="group inline-flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent-400/35 bg-accent-500/10 text-xs font-semibold text-accent-300 transition group-hover:border-accent-300">
            RA
          </span>
          <span className="hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.22em] text-zinc-100 sm:inline">
            Rizwan Ahmed | DFIR
          </span>
        </Link>

        <nav className="mx-5 hidden min-w-0 flex-1 items-center justify-center gap-1 rounded-full border border-white/10 bg-surface-900/30 p-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-zinc-300 transition hover:bg-white/5 hover:text-accent-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2.5">
          <Link
            href="/cv"
            className="hidden items-center justify-center rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300 2xl:inline-flex"
          >
            View CV
          </Link>
          <Link
            href="/api/download-resume"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300 2xl:inline-flex"
          >
            Download CV
          </Link>
          <Link
            href="https://linktr.ee/RizwanAhmedMughal"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300 2xl:inline-flex"
          >
            Linktree
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-accent-400/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 transition hover:border-accent-300 xl:hidden"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 transition-[max-height] duration-300 xl:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl border border-transparent px-3 py-2 text-sm uppercase tracking-[0.14em] text-zinc-200 transition hover:border-white/10 hover:bg-white/5 hover:text-accent-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cv"
            onClick={() => setOpen(false)}
            className="button-outline mt-2 w-full"
          >
            View CV
          </Link>
          <Link
            href="/api/download-resume"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full border border-white/20 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300"
          >
            Download CV
          </Link>
          <Link
            href="https://linktr.ee/RizwanAhmedMughal"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full border border-white/20 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-200 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300"
          >
            Linktree
          </Link>
        </nav>
      </div>
    </header>
  );
}
