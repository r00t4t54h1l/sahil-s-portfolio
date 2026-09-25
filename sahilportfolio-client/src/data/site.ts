export const site = {
  name: "Sahil",
  role: "ECE Student · IoT + SaaS",
  college: "NIT Srinagar",
  batch: "2023 — 2027",
  year: "4th year",
  email: "sahilkp1821@gmail.com",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;

export const roles = [
  "IoT Engineer",
  "SaaS Builder",
  "ECE Student",
  "Full-stack Dev",
];

export const highlights = [
  {
    title: "Holding the room",
    description:
      "Organizing volunteer for DEFCON Srinagar at NIT. I help plan meetups and keep campus security nights from turning into a group chat that never ships.",
    href: "#about",
    accent: "violet",
    icon: "defcon",
  },
  {
    title: "Doors that should stay shut",
    description:
      "PortSwigger Web Security Academy labs on access control — IDOR, privilege mix-ups, and reading a request until the session story makes sense.",
    href: "#about",
    accent: "sky",
    icon: "academy",
  },
  {
    title: "Top 5% on the map",
    description:
      "TryHackMe, globally. Finished Pre-Security and Cybersecurity 101. Extra miles: the Evilginx Mastery course.",
    href: "#about",
    accent: "fuchsia",
    icon: "rank",
  },
  {
    title: "Ink other people can follow",
    description:
      "Quill — a blogging app I built so writers can publish, readers can follow, like, and comment, and libraries of bookmarks can stay public or private.",
    href: "https://quill-frontend-e0uh.onrender.com",
    accent: "amber",
    icon: "quill",
  },
] as const;

export type WorkRole = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  href: string;
  icon: "briefcase" | "building";
};

// Add real roles here later. Leave the array empty to show "coming soon".
// Example:
// {
//   company: "Company name",
//   role: "Software Engineer Intern",
//   period: "Jun 2027 — Aug 2027",
//   location: "Srinagar, India",
//   description: "What you built or owned.",
//   href: "#lab",
//   icon: "briefcase",
// },
export const workExperience: WorkRole[] = [];

export const skills = [
  "C++",
  "FastAPI",
  "React",
  "TypeScript",
  "JavaScript",
  "Python",
  "TCP/IP",
  "TCP/UDP",
  "HTTP/HTTPS",
  "SQL",
] as const;

export const projects = [
  {
    label: "Featured Project",
    title: "Quill — Read, write, collect",
    description:
       "A full-stack blogging platform for publishing posts, following authors, and interacting with content.",
  href: "https://quill-frontend-e0uh.onrender.com",
  mockup: "quill",
  stack: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL"],
},
  {
    label: "Featured Project",
    title: "Sahil's Portfolio",
    description:
      "Personal site for my work, projects, and training. Built with Next.js, React, TypeScript, and Tailwind CSS — app router, client-side motion for the role typewriter, and section-based layout for Home, Lab, and Contact.",
    href: "https://sahil-s-portfolio-kappa.vercel.app",
    mockup: "portfolio",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
] as const;
