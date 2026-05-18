import { certs } from "@/data/certs";
import { SectionLabel, SectionTitle, Tag } from "@/components/ui/Badges";
import { clsx } from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Certifications" };

const statusMap = {
  done:    { label: "Completed",    cls: "text-green", badge: "bg-green/10 border-green/25" },
  wip:     { label: "In Progress",  cls: "text-yellow-400", badge: "bg-yellow-400/10 border-yellow-400/25" },
  planned: { label: "Planned",      cls: "text-dim", badge: "bg-muted/10 border-border" },
};

export default function CertsPage() {
  return (
    <div className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionLabel index="05">Certifications</SectionLabel>
      <SectionTitle>The Roadmap</SectionTitle>
      <p className="font-mono text-sm text-dim mb-12 max-w-lg">Certifications I&apos;ve completed, am pursuing, and have planned — in order.</p>

      {/* Timeline-style list */}
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
        <div className="space-y-5">
          {certs.map((c, i) => (
            <div key={c.title} className="relative md:pl-20">
              {/* Timeline dot */}
              <div className={clsx(
                "hidden md:flex absolute left-0 top-5 w-12 h-12 rounded-lg items-center justify-center text-xl border",
                statusMap[c.status].badge
              )}>
                {c.icon}
              </div>

              <div className="bg-bg2 border border-border rounded-md p-5 hover:border-accent/40 transition-colors flex flex-col md:flex-row gap-5 items-start">
                {/* Mobile icon */}
                <div className={clsx("md:hidden flex w-10 h-10 rounded-lg items-center justify-center text-lg border flex-shrink-0", statusMap[c.status].badge)}>
                  {c.icon}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display font-bold text-head text-lg">{c.title}</h3>
                    <span className={clsx("font-code text-xs tracking-widest uppercase", statusMap[c.status].cls)}>
                      ● {statusMap[c.status].label}
                    </span>
                  </div>
                  <p className="font-code text-xs text-dim mb-2">{c.issuer}</p>
                  <p className="font-mono text-sm text-dim/80 leading-relaxed mb-3">{c.description}</p>
                  {c.skills && (
                    <div className="flex flex-wrap gap-1.5">
                      {c.skills.map((s) => <Tag key={s} variant="accent">{s}</Tag>)}
                    </div>
                  )}
                  {c.date && <p className="font-code text-xs text-dim mt-2">📅 {c.date}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
