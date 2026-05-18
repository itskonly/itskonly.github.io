import Link from "next/link";
import { format } from "date-fns";
import { SectionLabel, SectionTitle, CategoryBadge, DifficultyBadge, Tag } from "@/components/ui/Badges";
import type { Writeup } from "contentlayer/generated";

export function RecentWriteups({ writeups }: { writeups: Writeup[] }) {
  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <SectionLabel index="03">Write-ups</SectionLabel>
          <SectionTitle>Latest Write-ups</SectionTitle>
          <p className="font-mono text-sm text-dim max-w-md">Not just solutions — the full thought process, including mistakes.</p>
        </div>
        <Link href="/writeups" className="hidden md:block font-mono text-xs tracking-widest uppercase text-accent border border-accent/30 px-4 py-2 rounded-sm hover:border-accent transition-colors">
          View All →
        </Link>
      </div>

      {writeups.length === 0 ? (
        <div className="bg-bg2 border border-border rounded-md p-12 text-center">
          <p className="font-code text-dim text-sm">// First write-up coming soon. The grind continues.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {writeups.map((w) => (
            <Link key={w.slug} href={w.url} className="bg-bg2 border border-border rounded-md overflow-hidden hover:border-accent transition-all duration-200 hover:-translate-y-1 block">
              <div className="flex justify-between items-center px-4 py-3 border-b border-border">
                <CategoryBadge category={w.category as any} />
                {w.difficulty && <DifficultyBadge difficulty={w.difficulty as any} />}
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-head text-base mb-2 leading-snug">{w.title}</h3>
                <p className="font-mono text-xs text-dim leading-relaxed mb-4">{w.summary}</p>
                <div className="flex gap-3 items-center font-code text-xs text-dim mb-4">
                  <span>📅 {format(new Date(w.date), "MMM d, yyyy")}</span>
                </div>
                {w.tags && (
                  <div className="flex flex-wrap gap-1.5">
                    {w.tags.slice(0, 3).map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6 md:hidden text-center">
        <Link href="/writeups" className="font-mono text-xs tracking-widest uppercase text-accent border border-accent/30 px-5 py-2.5 rounded-sm hover:border-accent transition-colors inline-block">
          View All Write-ups →
        </Link>
      </div>
    </section>
  );
}
