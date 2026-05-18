import { clsx } from "clsx";

/* ── TAG ── */
type TagVariant = "accent" | "red" | "green" | "muted";

export function Tag({ children, variant = "accent" }: { children: React.ReactNode; variant?: TagVariant }) {
  return (
    <span
      className={clsx(
        "font-code text-xs px-2 py-0.5 rounded-sm border",
        variant === "accent" && "bg-accent/5 border-accent/20 text-accent",
        variant === "red"    && "bg-red/5 border-red/20 text-red",
        variant === "green"  && "bg-green/5 border-green/20 text-green",
        variant === "muted"  && "bg-muted/10 border-border text-dim"
      )}
    >
      {children}
    </span>
  );
}

/* ── SECTION LABEL ── */
export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="font-code text-xs tracking-widest uppercase text-accent">
        {index} // {children}
      </span>
      <span className="h-px w-12 bg-accent/40" />
    </div>
  );
}

/* ── SECTION TITLE ── */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-extrabold text-head text-3xl md:text-4xl tracking-tight mb-3">
      {children}
    </h2>
  );
}

/* ── CATEGORY BADGE ── */
type Category = "htb" | "ctf" | "web" | "note";

const categoryMap: Record<Category, { label: string; className: string }> = {
  htb:  { label: "HTB",          className: "bg-accent/8 border-accent/20 text-accent" },
  ctf:  { label: "CTF",          className: "bg-red/8 border-red/20 text-red" },
  web:  { label: "Web Security", className: "bg-green/8 border-green/20 text-green" },
  note: { label: "Note",         className: "bg-muted/10 border-border text-dim" },
};

export function CategoryBadge({ category }: { category: Category }) {
  const { label, className } = categoryMap[category];
  return (
    <span className={clsx("font-code text-xs tracking-wider uppercase px-2 py-0.5 rounded-sm border", className)}>
      {label}
    </span>
  );
}

/* ── DIFFICULTY BADGE ── */
type Difficulty = "easy" | "medium" | "hard" | "info";

const diffMap: Record<Difficulty, { label: string; color: string }> = {
  easy:   { label: "Easy",   color: "text-green" },
  medium: { label: "Medium", color: "text-yellow-400" },
  hard:   { label: "Hard",   color: "text-red" },
  info:   { label: "Info",   color: "text-dim" },
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const { label, color } = diffMap[difficulty];
  return <span className={clsx("font-code text-xs", color)}>● {label}</span>;
}
