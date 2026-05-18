"use client";
import { useState } from "react";
import { format } from "date-fns";
import { SectionLabel, SectionTitle } from "@/components/ui/Badges";
import { clsx } from "clsx";
import type { DailyLog } from "contentlayer/generated";

const typeMap = {
  lab:   { label: "Lab",   cls: "bg-accent/8 border-accent/15 text-accent" },
  study: { label: "Study", cls: "bg-green/8 border-green/15 text-green" },
  build: { label: "Build", cls: "bg-red/8 border-red/15 text-red" },
  read:  { label: "Read",  cls: "bg-muted/10 border-border text-dim" },
};

export function LogClient({ logs }: { logs: DailyLog[] }) {
  const [selected, setSelected] = useState(logs[0]?.slug ?? "");
  const current = logs.find((l) => l.slug === selected);

  return (
    <div className="border border-border rounded-lg overflow-hidden max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <div className="bg-bg3 border-b md:border-b-0 md:border-r border-border">
          <div className="p-3 border-b border-border">
            <p className="font-code text-xs text-dim tracking-widest uppercase">// Sessions</p>
          </div>
          <div className="max-h-80 md:max-h-[420px] overflow-y-auto">
            {logs.map((l) => (
              <button
                key={l.slug}
                onClick={() => setSelected(l.slug)}
                className={clsx(
                  "w-full text-left px-4 py-3 font-code text-xs border-l-2 transition-all",
                  selected === l.slug
                    ? "border-accent text-accent bg-bg2"
                    : "border-transparent text-dim hover:text-accent hover:bg-bg2"
                )}
              >
                {format(new Date(l.date), "MMM d, yyyy")}
                {l.hours && <span className="ml-2 text-muted">({l.hours}h)</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="bg-bg2 p-6">
          {current ? (
            <>
              <p className="font-code text-xs text-accent tracking-widest mb-1">
                // {format(new Date(current.date), "EEEE, MMMM d, yyyy")}
              </p>
              {current.mood && <p className="font-code text-xs text-dim mb-4">mood: {current.mood}</p>}
              <ul className="space-y-3">
                {current.entries.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 bg-bg3 border border-border rounded-sm px-4 py-3">
                    <span className={clsx("font-code text-xs tracking-wider uppercase px-2 py-0.5 rounded-sm border flex-shrink-0 mt-0.5", typeMap[e.type as keyof typeof typeMap].cls)}>
                      {typeMap[e.type as keyof typeof typeMap].label}
                    </span>
                    <span className="font-code text-xs text-body leading-relaxed">{e.content}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="font-code text-xs text-dim">// Select a session from the sidebar.</p>
          )}
        </div>
      </div>
    </div>
  );
}
