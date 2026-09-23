"use client";

import { useThemeStore } from "@/store/theme-store";

export function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 min-w-20 items-center justify-center rounded-full border border-accent-400/35 bg-accent-500/10 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-300 transition hover:border-accent-300 hover:bg-accent-500/20"
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
