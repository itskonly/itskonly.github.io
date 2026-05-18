import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "itskonly | Offensive Security", template: "%s | itskonly" },
  description: "Kaustubh Swami — Aspiring Web Application Penetration Tester. Security write-ups, HTB walkthroughs, projects & learning logs.",
  keywords: ["penetration testing", "web application security", "HTB", "CTF", "bug bounty", "WAPT", "offensive security", "itskonly"],
  authors: [{ name: "Kaustubh Swami" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itskonly.dev",
    title: "itskonly | Offensive Security",
    description: "Aspiring Web Application Penetration Tester — documenting the grind.",
    siteName: "itskonly",
  },
  twitter: {
    card: "summary_large_image",
    title: "itskonly | Offensive Security",
    description: "Aspiring Web Application Penetration Tester — documenting the grind.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&family=Fira+Code:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
