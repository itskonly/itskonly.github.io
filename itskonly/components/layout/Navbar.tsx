"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/#about",    label: "About"     },
  { href: "/#skills",   label: "Skills"    },
  { href: "/writeups",  label: "Write-ups" },
  { href: "/projects",  label: "Projects"  },
  { href: "/certs",     label: "Certs"     },
  { href: "/log",       label: "Daily Log" },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-head font-bold text-sm tracking-tight">
          itskonly<span className="text-accent">://</span>root
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  "font-mono text-xs tracking-widest uppercase transition-colors duration-200",
                  pathname === l.href ? "text-accent" : "text-dim hover:text-accent"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#contact"
          className="hidden md:block font-mono text-xs tracking-widest uppercase px-4 py-2 border border-accent text-accent rounded-sm hover:bg-accent hover:text-bg transition-all duration-200"
        >
          Contact
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={clsx("block w-5 h-0.5 bg-dim transition-all", menuOpen && "rotate-45 translate-y-2")} />
          <span className={clsx("block w-5 h-0.5 bg-dim transition-all", menuOpen && "opacity-0")} />
          <span className={clsx("block w-5 h-0.5 bg-dim transition-all", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg2 border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-dim hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs tracking-widest uppercase text-accent border border-accent px-4 py-2 rounded-sm text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
