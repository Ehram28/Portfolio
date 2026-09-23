export type EducationItem = {
  level: string;
  institute: string;
  years: string;
  grade: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};
export type TrainingItem = {
  title: string;
  organization: string;
  type: "Training" | "Internship" | "Job";
  // date: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
  years: string;
};

export type StatItem = {
  label: string;
  value: string;
  detail: string;
};

export type FocusAreaItem = {
  title: string;
  description: string;
  tools: string[];
};

export type UpdateItem = {
  title: string;
  status: string;
  description: string;
  points: string[];
};

export type PortfolioData = {
  fullName: string;
  role: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  whatsapp: string;
  profilePhoto: string;
  socials: { label: string; href: string }[];
  stats: StatItem[];
  focusAreas: FocusAreaItem[];
  updates: UpdateItem[];
  skills: string[];
  education: EducationItem[];
  projects: ProjectItem[];
  training:TrainingItem[];
  certifications: CertificationItem[];
  hasMacbookModel: boolean;
};

export const portfolioData: PortfolioData = {
  fullName: "Rizwan Ahmed",
  role: "Digital Forensics Enthusiast | Security-Focused Software Engineer",
  location: "Mirpur AJK, Pakistan",
  bio: "I am a Software Engineering student focused on digital forensics and secure application development. I build web systems with strong attention to evidence integrity, auditability, and security controls. With practical experience in JavaScript, React, Node.js, Python, Linux, and penetration testing labs, I approach every project with an investigator mindset: identify risk, preserve signals, analyze artifacts, and deliver reliable technical outcomes.",
  email: "nawzirahmed4@gmail.com",
  phone: "+92 370 1176322",
  whatsapp: "+92 370 1176322",
  profilePhoto: "/ra/profile_Pic.png",
  
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rizwan-ahmed-a42b9a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      label: "GitHub",
      href: "https://github.com/engr-riz348"
    }
  ],
  stats: [
    {
      label: "Degree",
      value: "BSSE",
      detail: "Software Engineering at MUST, 2024 - 2028"
    },
    {
      label: "Focus",
      value: "DFIR",
      detail: "Endpoint artifacts, logs, timelines, and evidence workflows"
    },
    {
      label: "Build Style",
      value: "Secure UX",
      detail: "Readable dashboards, RBAC, validation, and audit-friendly flows"
    }
  ],
  focusAreas: [
    {
      title: "Endpoint Evidence Triage",
      description:
        "Collecting and organizing process, login, file, and command-line artifacts so analysts can quickly separate normal activity from suspicious signals.",
      tools: ["Windows/Linux artifacts", "Logs", "Python", "Bash"]
    },
    {
      title: "Investigation Dashboards",
      description:
        "Designing searchable interfaces for case data, severity review, and timeline reconstruction with clear status, filters, and role-aware access.",
      tools: ["Next.js", "React", "Node.js", "MongoDB"]
    },
    {
      title: "Security-Aware Engineering",
      description:
        "Building web features with input validation, rate limiting, authentication boundaries, and readable operational behavior from the first version.",
      tools: ["TypeScript", "RBAC", "API validation", "Secure forms"]
    }
  ],
  updates: [
    {
      title: "Endpoint Artifact Intelligence Dashboard",
      status: "Expanded May 2026",
      description:
        "Full-stack forensic dashboard project for endpoint event review, analyst login, evidence filtering, and severity-based triage.",
      points: ["JWT authentication", "Role-based access", "Live artifact refresh"]
    },
    {
      title: "Portfolio Contact Workflow",
      status: "Production-ready",
      description:
        "Contact route includes spam protection, request rate limiting, Gmail transport support, and client feedback states.",
      points: ["Honeypot field", "IP rate limit", "Email fallback messaging"]
    },
    {
      title: "DFIR Practice Roadmap",
      status: "In progress",
      description:
        "Current learning track is centered on Linux triage, log review, timeline building, and turning lab work into portfolio-ready case studies.",
      points: ["Linux labs", "Log correlation", "Case documentation"]
    }
  ],
  skills: [
    "Digital Forensics",
    "Incident Response",
    "Log Analysis",
    "Threat Hunting",
    "Network Security",
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "C#",
    "Python",
    "Linux (Kali)",
    "Penetration Testing",
    "Leadership"
  ],
  education: [
    // {
    //   level: "Matriculation",
    //   institute: "Minhaj Model High School (MMHS) Liaquatabad, Bhimber",
    //   years: "2020 - 2022",
    //   grade: "A+"
    // },
    {
      level: "FSc (Pre-Engineering)",
      institute: "Read Foundation College, Bhimber AJK",
      years: "2022 - 2024",
      grade: "A"
    },
    {
      level: "BS Software Engineering (In Progress)",
      institute: "Mirpur University of Science and Technology (MUST), Mirpur AJK",
      years: "2024 - 2028",
      grade: "B+"
    }
  ],
  projects: [
    {
      title: "Endpoint Artifact Intelligence Dashboard",
      description:
        "A forensic web dashboard that centralizes endpoint artifacts including process history, login activity, and suspicious file events. Designed to speed up first-level triage with searchable evidence views and clear severity tagging.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "RBAC"],
      image: "/projects/project-1.svg"
    },
    {
      title: "Incident Timeline Reconstruction Tool",
      description:
        "A case-analysis tool that combines logs from multiple sources and reconstructs an investigation timeline. Built for analysts to correlate events, mark indicators of compromise, and generate concise incident summaries.",
      tech: ["React", "Express", "PostgreSQL", "Tailwind CSS"],
      image: "/projects/project-2.svg"
    },
    {
      title: "Linux Evidence Triage Toolkit",
      description:
        "A modular Python and Bash toolkit for live triage in Linux lab environments. It collects volatile artifacts, system logs, and configuration baselines while preserving chain-of-custody style output files.",
      tech: ["Python", "Bash", "Linux", "DFIR", "Automation"],
      image: "/projects/project-3.svg"
    }
  ],
 training: [
  {
    title: "Digital Forensics Intern",
    organization: "Cyber Security & Forensics Lab",
    type: "Internship",
    years: "2025 – Present",
    description:
      "Assisted with digital evidence collection, artifact analysis, timeline reconstruction, and documentation of forensic findings.",
    skills: ["Digital Forensics", "DFIR", "Evidence Analysis"],
  },
  {
    title: "Cyber Security Intern",
    organization: "Security Operations Team",
    type: "Internship",
    years: "2025",
    description:
      "Worked with security monitoring, log analysis, incident investigation, and basic threat detection workflows.",
    skills: ["SIEM", "Log Analysis", "Incident Response"],
  },
  {
    title: "Software Engineering Intern",
    organization: "Software Development Team",
    type: "Internship",
    years: "2024 – 2025",
    description:
      "Developed and tested software components using Python, C#, SQL, and modern web technologies.",
    skills: ["Python", "C#", "SQL", "Web Development"],
  },
  {
    title: "Junior Security Analyst",
    organization: "Security Operations Center",
    type: "Job",
    years: "2025 – Present",
    description:
      "Supported security analysis activities including event investigation, network monitoring, threat identification, and technical reporting.",
    skills: ["Security Analysis", "Threat Hunting", "Network Security"],
  },
],
  certifications: [
    {
      title: "Digital Forensics Fundamentals",
      issuer: "Coursework and self-directed lab practice",
      date: "2026"
    },
    {
      title: "Linux Security and Evidence Triage",
      issuer: "Kali Linux and forensic lab exercises",
      date: "2026"
    },
    {
      title: "Secure Web Application Development",
      issuer: "Project-based practice with React, Node.js, and validation controls",
      date: "2025 - 2026"
    }
  ],
  
  hasMacbookModel: false
};
