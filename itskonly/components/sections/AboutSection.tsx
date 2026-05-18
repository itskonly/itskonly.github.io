import { SectionLabel, SectionTitle } from "@/components/ui/Badges";

export function AboutSection() {
  return (
    <section id="about" className="bg-bg2 px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <SectionLabel index="01">About</SectionLabel>
          <SectionTitle>The Journey So Far</SectionTitle>
          <div className="space-y-4 font-mono text-sm text-body leading-loose">
            <p>I&apos;m <span className="text-accent font-bold">Kaustubh Swami</span> — a Senior System Engineer with <span className="text-accent">3.5 years of experience</span> in automation (YAML-based frameworks) at an MNC, building a parallel life in offensive security.</p>
            <p>I wake up at 4:30 AM not because I have to, but because becoming the world&apos;s best at anything demands that kind of commitment.</p>
            <p>My path into cybersecurity is driven by a simple belief: <span className="text-accent">understanding how systems break is the only way to truly protect them.</span> Web Application Penetration Testing pulled me in hardest — it&apos;s where logic, creativity, and persistence collide.</p>
            <p>Every HTB machine I solve, every CTF challenge I document, every automation script I build — they&apos;re not hobbies. They&apos;re deliberate reps toward a goal I take completely seriously.</p>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {[
            {
              title: "// Current Focus",
              items: ["Web Application Penetration Testing", "HTB Labs & CTF Challenges", "Python scripting for recon & automation", "OWASP Top 10 deep dives", "Burp Suite mastery"],
            },
            {
              title: "// Long-Term Goals",
              items: ["Become the World's Best Penetration Tester", "Obtain OSCP, BSCP and beyond", "Build and run a profitable business", "Publish original security research"],
            },
            {
              title: "// Current Stack",
              items: ["Kali Linux / Parrot OS", "Burp Suite Community / Pro", "Python + Bash scripting", "YAML automation (professional)", "nmap, gobuster, ffuf, sqlmap"],
            },
          ].map((card) => (
            <div key={card.title} className="bg-bg3 border border-border rounded-md p-5 hover:border-accent/40 transition-colors">
              <h4 className="font-code text-xs tracking-widest uppercase text-accent mb-4">{card.title}</h4>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="font-mono text-sm text-dim flex items-start gap-2">
                    <span className="text-green mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
