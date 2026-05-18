"use client";
import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { CategoryBadge, DifficultyBadge, Tag } from "@/components/ui/Badges";
import type { Writeup } from "contentlayer/generated";

const CATEGORIES = ["all", "htb", "ctf", "web", "note"] as const;

export function WriteupsClient({ writeups }: { writeups: Writeup[] }) {
  const [active, setActive]   = useState<string>("all");
  const [search, setSearch]   = useState("");

  const filtered = writeups.filter((w) => {
    const matchCat  = active === "all" || w.category === active;
    const matchSearch = !search || w.title.toLowerCase().includes(search.toLowerCase()) || w.summary.toLowerCase().includes(search.toLowerCase()) || w.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Search */}
      <div className="flex gap-0 mb-8 max-w-sm">
        <input
          type="text"
          placeholder="Search write-ups..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-bg3 border border-border border-r-0 rounded-l-sm px-4 py-2.5 font-code text-sm text-body placeholder-dim outline-none focus:border-accent transition-colors"
        />
        <button className="bg-accent text-bg px-4 rounded-r-sm font-code text-sm hover:opacity-80 transition-opacity">🔍</button>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-code text-xs tracking-widest uppercase px-3 py-1.5 border rounded-sm transition-all ${
              active === cat ? "border-accent text-accent" : "border-border text-dim hover:border-accent hover:text-accent"
            }`}
          >
            {cat === "all" ? "All" : cat === "htb" ? "Hack The Box" : cat === "ctf" ? "CTFs" : cat === "web" ? "Web Security" : "Notes"}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="bg-bg2 border border-border rounded-md p-16 text-center">
          <p className="font-code text-dim text-sm">// No write-ups found. The grind continues...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((w) => (
            <Link key={w.slug} href={w.url} className="bg-bg3 border border-border rounded-md overflow-hidden hover:border-accent transition-all duration-200 hover:-translate-y-1 block">
              <div className="flex justify-between items-center px-4 py-3 border-b border-border">
                <CategoryBadge category={w.category as any} />
                {w.difficulty && <DifficultyBadge difficulty={w.difficulty as any} />}
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-head text-base mb-2 leading-snug">{w.title}</h3>
                <p className="font-mono text-xs text-dim leading-relaxed mb-4">{w.summary}</p>
                <div className="flex gap-4 font-code text-xs text-dim mb-4">
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
    </>
  );
}
