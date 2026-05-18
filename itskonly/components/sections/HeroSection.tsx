"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const USERNAME = "itskonly";

export function HeroSection() {
  const [typed, setTyped]         = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [termLines, setTermLines]   = useState<string[]>([]);
  const indexRef = useRef(0);

  /* Typing animation */
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current < USERNAME.length) {
          setTyped(USERNAME.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1800);
        }
      }, 80 + Math.random() * 60);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timeout);
  }, []);

  /* Terminal lines animation */
  const allLines = [
    { delay: 300,  text: "┌──(kali㉿itskonly)-[~]" },
    { delay: 600,  text: "└─$ whoami" },
    { delay: 900,  text: "itskonly" },
    { delay: 1200, text: "" },
    { delay: 1500, text: "└─$ cat profile.json" },
    { delay: 1800, text: '{' },
    { delay: 2000, text: '  "role": "Aspiring WAPT",' },
    { delay: 2200, text: '  "current": "Sr. Systems Engineer",' },
    { delay: 2400, text: '  "focus": ["WebApp PenTest", "HTB", "Python"],' },
    { delay: 2600, text: '  "goal": "World\'s Best PenTester"' },
    { delay: 2800, text: '}' },
    { delay: 3100, text: "" },
    { delay: 3200, text: "└─$ nmap -sV target.local" },
    { delay: 3500, text: "80/tcp  open  http   nginx 1.24" },
    { delay: 3700, text: "443/tcp open  https  nginx 1.24" },
    { delay: 4000, text: "" },
    { delay: 4200, text: "└─$ _" },
  ];

  useEffect(() => {
    allLines.forEach(({ delay, text }) => {
      setTimeout(() => setTermLines((prev) => [...prev, text]), delay);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-24 pb-16">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-16">

        {/* LEFT */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 font-code text-xs tracking-widest uppercase text-green border border-green/30 rounded-sm px-3 py-1.5 mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
            Available for opportunities
          </div>

          {/* Username */}
          <div className="flex items-center font-code text-5xl md:text-7xl leading-tight mb-2 animate-fade-up">
            <span className="text-green/70 text-2xl md:text-3xl mr-2">~$&nbsp;</span>
            <span className="text-accent">{typed}</span>
            {showCursor && (
              <span className="text-accent ml-0.5 animate-blink text-5xl md:text-7xl">▋</span>
            )}
          </div>

          {/* Real name */}
          <p className="font-display font-semibold text-dim text-sm tracking-[0.22em] uppercase mb-4 animate-fade-up">
            <span className="text-muted"># </span>Kaustubh Swami
          </p>

          {/* Role */}
          <p className="font-code text-sm text-dim mb-6 animate-fade-up">
            <span className="text-red">role:</span>{" "}
            <span className="text-accent">Aspiring Web Application Penetration Tester</span>
          </p>

          {/* Description */}
          <p className="font-mono text-sm text-body leading-loose max-w-xl mb-10 animate-fade-up">
            Senior System Engineer by day, offensive security practitioner by discipline.
            I document every lab, write-up, and breakthrough — because consistency is how
            the world&apos;s best are built, one session at a time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14 animate-fade-up">
            <Link href="/projects" className="font-mono text-xs tracking-widest uppercase px-5 py-3 bg-accent text-bg rounded-sm hover:bg-transparent hover:text-accent border border-accent transition-all duration-200">
              View Projects
            </Link>
            <Link href="/writeups" className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-border text-dim rounded-sm hover:border-accent hover:text-accent transition-all duration-200">
              Read Write-ups
            </Link>
            <Link href="/certs" className="font-mono text-xs tracking-widest uppercase px-5 py-3 border border-border text-dim rounded-sm hover:border-accent hover:text-accent transition-all duration-200">
              Certifications
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 pt-6 border-t border-border animate-fade-up">
            {[
              { val: "3.5yr", label: "IT Experience" },
              { val: "∞",     label: "Labs Attempted" },
              { val: "1",     label: "Mission: Be The Best" },
            ].map((s) => (
              <div key={s.label}>
                <span className="font-display font-extrabold text-3xl text-head block">{s.val}</span>
                <span className="font-code text-xs tracking-widest uppercase text-dim">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Terminal */}
        <div className="hidden lg:block w-[420px] bg-bg2 border border-border rounded-lg overflow-hidden shadow-2xl animate-fade-up">
          {/* Bar */}
          <div className="bg-bg3 border-b border-border px-4 py-2.5 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="font-code text-xs text-dim ml-auto">kali@itskonly: ~</span>
          </div>
          {/* Body */}
          <div className="p-5 font-code text-xs leading-loose min-h-[340px]">
            {termLines.map((line, i) => {
              if (!line) return <br key={i} />;
              if (line.startsWith("┌") || line.startsWith("└─$")) return <div key={i} className="text-green">{line}</div>;
              if (line === "itskonly")   return <div key={i} className="text-body">{line}</div>;
              if (line === "{" || line === "}") return <div key={i} className="text-body">{line}</div>;
              if (line.startsWith("  \"role\""))    return <div key={i}><span className="text-accent">&quot;role&quot;</span><span className="text-body">: &quot;Aspiring WAPT&quot;,</span></div>;
              if (line.startsWith("  \"current\"")) return <div key={i}><span className="text-accent">&quot;current&quot;</span><span className="text-body">: &quot;Sr. Systems Engineer&quot;,</span></div>;
              if (line.startsWith("  \"focus\""))   return <div key={i}><span className="text-accent">&quot;focus&quot;</span><span className="text-body">: [&quot;WebApp PenTest&quot;, &quot;HTB&quot;, &quot;Python&quot;],</span></div>;
              if (line.startsWith("  \"goal\""))    return <div key={i}><span className="text-accent">&quot;goal&quot;</span><span className="text-body">: &quot;World&apos;s Best PenTester&quot;</span></div>;
              if (line.includes("/tcp")) return <div key={i} className="text-dim">{line}</div>;
              return <div key={i} className="text-body">{line}</div>;
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
