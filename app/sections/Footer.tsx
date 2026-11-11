"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Link href="/" className="text-xl font-black tracking-widest text-white">
          GTA <span className="text-accent-pink">VI</span>
        </Link>

        <p className="text-center text-xs text-zinc-500">
          This is an unofficial fan tribute. Grand Theft Auto VI and all related marks are
          trademarks of Take-Two Interactive Software, Inc.
        </p>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}
