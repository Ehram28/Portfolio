import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { MouseGlow } from "@/components/ui/mouse-glow";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Rizwan Ahmed | DFIR & Secure Engineering Portfolio",
  description:
    "Portfolio of Rizwan Ahmed, a digital forensics and security-focused software engineering student building investigation dashboards, endpoint triage tools, and secure web systems.",
  keywords: [
    "Rizwan Ahmed",
    "Digital Forensics",
    "DFIR",
    "Security Engineering",
    "Software Engineering Portfolio",
    "Endpoint Triage"
  ],
  authors: [{ name: "Rizwan Ahmed" }],
  openGraph: {
    title: "Rizwan Ahmed | DFIR & Secure Engineering Portfolio",
    description:
      "Digital forensics, endpoint artifact triage, secure engineering, and investigation-focused portfolio projects.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} bg-surface-950 text-zinc-100 antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <MouseGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
