import { allDailyLogs } from "contentlayer/generated";
import { SectionLabel, SectionTitle } from "@/components/ui/Badges";
import { LogClient } from "./LogClient";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Daily Log" };

export default function LogPage() {
  const logs = allDailyLogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionLabel index="06">Daily Log</SectionLabel>
      <SectionTitle>The Grind, Documented</SectionTitle>
      <p className="font-mono text-sm text-dim mb-12 max-w-lg">
        Consistency creates credibility. Every session logged, no skips.
      </p>
      {logs.length === 0 ? (
        <div className="bg-bg2 border border-border rounded-md p-16 text-center">
          <p className="font-code text-dim text-sm">// First log entry coming. The grind has started.</p>
        </div>
      ) : (
        <LogClient logs={logs} />
      )}
    </div>
  );
}
