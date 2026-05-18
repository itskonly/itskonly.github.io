import { allWriteups } from "contentlayer/generated";
import { SectionLabel, SectionTitle } from "@/components/ui/Badges";
import { WriteupsClient } from "./WriteupsClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Write-ups" };

export default function WriteupsPage() {
  const writeups = allWriteups
    .filter((w) => w.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionLabel index="03">Write-ups</SectionLabel>
      <SectionTitle>Documented Methodology</SectionTitle>
      <p className="font-mono text-sm text-dim mb-12 max-w-lg">Not just solutions — the full thought process, including mistakes and lessons learned.</p>
      <WriteupsClient writeups={writeups} />
    </div>
  );
}
