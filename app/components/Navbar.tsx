"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#trailers", label: "Watch" },
  { href: "#editions", label: "Editions" },
  { href: "#story", label: "Story" },
  { href: "#news", label: "News" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-widest text-white">
          GTA <span className="text-accent-pink">VI</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-accent-cyan focus:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
