"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
      <p className="font-code text-xs text-dim">
        © {new Date().getFullYear()} <span className="text-accent">itskonly</span> — Kaustubh Swami
      </p>
      <p className="font-mono text-xs text-dim tracking-widest uppercase">
        HTTPS · No Tracking · Built with <span className="text-red">♥</span> & discipline
      </p>
    </footer>
  );
}
