export type ProjectStatus = "wip" | "done" | "planned";

export interface Project {
  title:       string;
  description: string;
  status:      ProjectStatus;
  stack:       string[];
  github?:     string;
  demo?:       string;
  lessons?:    string;
}

export const projects: Project[] = [
  {
    title:       "AutoRecon-KS",
    description: "A Python-based recon automation tool that chains nmap, gobuster, and whatweb — generating a structured report for every target automatically.",
    status:      "wip",
    stack:       ["Python", "Bash", "nmap", "gobuster"],
    github:      "#",
    lessons:     "Learning how to handle async subprocess calls in Python.",
  },
  {
    title:       "XSS Payload Generator",
    description: "A context-aware XSS payload generator that adapts output based on injection point — HTML attribute, JS context, URL parameter, or DOM sink.",
    status:      "planned",
    stack:       ["Python", "Burp Extension"],
    github:      "#",
  },
  {
    title:       "YAML Automation Portfolio",
    description: "Documenting and open-sourcing the best automation patterns from my professional work — bridging infra automation with security scripting.",
    status:      "planned",
    stack:       ["YAML", "Python", "Automation"],
    github:      "#",
  },
];
