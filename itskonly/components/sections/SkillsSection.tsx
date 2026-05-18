import { SectionLabel, SectionTitle, Tag } from "@/components/ui/Badges";

const skills = [
  { icon: "🌐", title: "Web App Security",      tags: [["SQLi","accent"],["XSS","accent"],["SSRF","accent"],["IDOR","accent"],["Auth Bypass","accent"],["CSRF","accent"]] },
  { icon: "🔧", title: "Recon & Enumeration",   tags: [["nmap","accent"],["gobuster","accent"],["ffuf","accent"],["amass","accent"],["whatweb","accent"]] },
  { icon: "⚔️",  title: "Exploitation",           tags: [["Burp Suite","red"],["sqlmap","red"],["Metasploit","red"],["Manual Testing","red"]] },
  { icon: "🐍", title: "Scripting & Dev",        tags: [["Python","green"],["Bash","green"],["YAML","green"],["Java (Learning)","green"]] },
  { icon: "🖥️", title: "Systems & Infra",        tags: [["Linux","accent"],["Networking","accent"],["HTTP/S","accent"],["DNS","accent"],["Proxies","accent"]] },
  { icon: "🧠", title: "Methodology",            tags: [["OWASP Top 10","accent"],["PTES","accent"],["CTF Strategy","accent"],["Report Writing","accent"]] },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <SectionLabel index="02">Skills</SectionLabel>
      <SectionTitle>Technical Arsenal</SectionTitle>
      <p className="font-mono text-sm text-dim mb-12 max-w-lg">Actively sharpening — every skill below is being practiced, not just studied.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s) => (
          <div key={s.title} className="bg-bg2 border border-border rounded-md p-6 hover:border-accent transition-all duration-200 hover:-translate-y-1">
            <div className="text-2xl mb-3">{s.icon}</div>
            <h3 className="font-display font-bold text-head text-base mb-4">{s.title}</h3>
            <div className="flex flex-wrap gap-2">
              {s.tags.map(([label, variant]) => (
                <Tag key={label} variant={variant as any}>{label}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
