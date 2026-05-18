import { SectionLabel, SectionTitle } from "@/components/ui/Badges";

const socials = [
  { label: "GitHub",    href: "#", icon: "⬡" },
  { label: "LinkedIn",  href: "#", icon: "🔗" },
  { label: "HackTheBox",href: "#", icon: "🟧" },
  { label: "X / Twitter",href:"#", icon: "🐦" },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 text-center">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center mb-3">
          <SectionLabel index="07">Contact</SectionLabel>
        </div>
        <SectionTitle>Let&apos;s Connect</SectionTitle>
        <p className="font-mono text-sm text-dim mb-8">For opportunities, collaborations, or just to talk offensive security.</p>
        <a href="mailto:hello@itskonly.dev" className="font-display font-extrabold text-2xl md:text-3xl text-accent tracking-tight hover:opacity-70 transition-opacity block mb-10">
          hello@itskonly.dev
        </a>
        <div className="flex flex-wrap gap-3 justify-center">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="font-mono text-xs tracking-widest uppercase text-dim border border-border px-4 py-2.5 rounded-sm hover:border-accent hover:text-accent transition-all flex items-center gap-2">
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
