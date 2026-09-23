"use client";

// import { TrainingSection } from "@/components/sections/training";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/sections/hero").then((m) => m.HeroSection),
  { ssr: false }
);

const AboutSection = dynamic(
  () => import("@/components/sections/about").then((m) => m.AboutSection),
  { ssr: false }
);

const UpdatesSection = dynamic(
  () => import("@/components/sections/updates").then((m) => m.UpdatesSection),
  { ssr: false }
);

const SkillsSection = dynamic(
  () => import("@/components/sections/skills").then((m) => m.SkillsSection),
  { ssr: false }
);

const ProjectsSection = dynamic(
  () => import("@/components/sections/projects").then((m) => m.ProjectsSection),
  { ssr: false }
);

const CertificationsSection = dynamic(
  () => import("@/components/sections/certifications").then((m) => m.CertificationsSection),
  { ssr: false }
);
const TrainingSection = dynamic(
  () => import("@/components/sections/training").then((m) => m.TrainingSection),
  { ssr: false }
);

const ContactSection = dynamic(
  () => import("@/components/sections/contact").then((m) => m.ContactSection),
  { ssr: false }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <UpdatesSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <TrainingSection />
    </>
  );
}

