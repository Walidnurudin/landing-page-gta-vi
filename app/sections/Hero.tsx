import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-city.jpg"
        alt="Neon-lit Vice City skyline"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/10 via-transparent to-accent-cyan/10" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent-cyan">
          Vice City, USA
        </p>
        <h1 className="mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Grand Theft <br />
          <span className="text-gradient">Auto VI</span>
        </h1>
        <p className="mb-8 text-lg font-medium text-zinc-200 sm:text-xl md:text-2xl">
          Coming November 19, 2026
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#preorder"
            className="inline-flex h-12 items-center justify-center rounded-none bg-accent-pink px-8 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Pre-Order Now
          </Link>
          <Link
            href="#trailers"
            className="inline-flex h-12 items-center justify-center rounded-none border border-white/40 bg-white/5 px-8 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Watch Trailers
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-cyan" />
            PlayStation 5
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-pink" />
            Xbox Series X|S
          </span>
        </div>
      </div>
    </section>
  );
}
