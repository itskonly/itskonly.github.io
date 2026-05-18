import { allWriteups } from "contentlayer/generated";
import { notFound }    from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format }      from "date-fns";
import { CategoryBadge, DifficultyBadge, Tag } from "@/components/ui/Badges";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return allWriteups.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const writeup = allWriteups.find((w) => w.slug === params.slug);
  if (!writeup) return {};
  return { title: writeup.title, description: writeup.summary };
}

function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component />;
}

export default function WriteupPage({ params }: { params: { slug: string } }) {
  const writeup = allWriteups.find((w) => w.slug === params.slug);
  if (!writeup) notFound();

  return (
    <div className="pt-24 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <CategoryBadge category={writeup.category as any} />
        {writeup.difficulty && <DifficultyBadge difficulty={writeup.difficulty as any} />}
        <span className="font-code text-xs text-dim">
          📅 {format(new Date(writeup.date), "MMMM d, yyyy")}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-display font-extrabold text-head text-3xl md:text-5xl tracking-tight mb-4 leading-tight">
        {writeup.title}
      </h1>
      <p className="font-mono text-sm text-dim mb-6 leading-relaxed">{writeup.summary}</p>

      {/* Tags */}
      {writeup.tags && (
        <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-border">
          {writeup.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      )}

      {/* Content */}
      <article className="prose prose-invert max-w-none font-mono text-sm leading-loose">
        <MDXContent code={writeup.body.code} />
      </article>
    </div>
  );
}
