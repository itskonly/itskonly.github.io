import { projects } from "@/data/projects";
import { SectionLabel, SectionTitle, Tag } from "@/components/ui/Badges";
import { clsx } from "clsx";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects" };

const statusMap = {
  wip:     { label: "🔨 In Progress", cls: "bg-yellow-400/10 border-yellow-400/25 text-yellow-400" },
  done:    { label: "✅ Complete",    cls: "bg-green/10 border-green/25 text-green" },
  planned: { label: "📌 Planned",     cls: "bg-muted/10 border-border text-dim" },
};

const bannerColors = {
  wip:     "from-accent",
  done:    "from-green",
  planned: "from-muted",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionLabel index="04">Projects</SectionLabel>
      <SectionTitle>Things I&apos;m Building</SectionTitle>
      <p className="font-mono text-sm text-dim mb-12 max-w-lg">Tools, scripts, and experiments — built to solve real recon and testing problems.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-bg2 border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-200 hover:-translate-y-1 flex flex-col">
            <div className={clsx("h-1.5 bg-gradient-to-r to-transparent", bannerColors[p.status])} />
            <div className="p-6 flex flex-col flex-1">
              <span className={clsx("font-code text-xs tracking-wider uppercase px-2 py-1 rounded-sm border inline-block mb-4 self-start", statusMap[p.status].cls)}>
                {statusMap[p.status].label}
              </span>
              <h3 className="font-display font-extrabold text-head text-xl mb-3 tracking-tight">{p.title}</h3>
              <p className="font-mono text-xs text-dim leading-relaxed mb-5 flex-1">{p.description}</p>
              {p.lessons && (
                <p className="font-code text-xs text-dim/70 italic mb-4 border-l-2 border-accent/30 pl-3">{p.lessons}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => <Tag key={s} variant="green">{s}</Tag>)}
              </div>
              <div className="flex gap-4">
                {p.github && (
                  <a href={p.github} className="font-code text-xs tracking-widest uppercase text-dim hover:text-accent transition-colors flex items-center gap-1.5">
                    ⬡ GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} className="font-code text-xs tracking-widest uppercase text-dim hover:text-accent transition-colors flex items-center gap-1.5">
                    🌐 Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
