export type CertStatus = "done" | "wip" | "planned";

export interface Cert {
  title:       string;
  issuer:      string;
  status:      CertStatus;
  icon:        string;
  date?:       string;
  skills?:     string[];
  description: string;
}

export const certs: Cert[] = [
  {
    title:       "CompTIA Security+",
    issuer:      "CompTIA",
    status:      "planned",
    icon:        "📋",
    description: "Foundation-level security certification covering core cybersecurity concepts.",
  },
  {
    title:       "eJPT",
    issuer:      "INE Security",
    status:      "wip",
    icon:        "⚡",
    description: "Entry-level penetration testing certification — current active target.",
    skills:      ["Network Pentesting", "Web App Basics", "Exploitation"],
  },
  {
    title:       "BSCP — Burp Suite Certified",
    issuer:      "PortSwigger",
    status:      "planned",
    icon:        "🎯",
    description: "Web application security testing certification from the makers of Burp Suite.",
    skills:      ["Web App PenTest", "Burp Suite", "OWASP Top 10"],
  },
  {
    title:       "OSCP",
    issuer:      "Offensive Security",
    status:      "planned",
    icon:        "💀",
    description: "The gold standard offensive security certification. The big one.",
    skills:      ["Exploitation", "PrivEsc", "Active Directory", "Report Writing"],
  },
  {
    title:       "OSWE",
    issuer:      "Offensive Security",
    status:      "planned",
    icon:        "🌐",
    description: "Advanced web application exploitation — long-term goal.",
    skills:      ["Source Code Review", "Advanced Web Exploitation"],
  },
  {
    title:       "CREST / GWAPT",
    issuer:      "Various",
    status:      "planned",
    icon:        "🏆",
    description: "Professional-grade certifications for a career in penetration testing.",
  },
];
