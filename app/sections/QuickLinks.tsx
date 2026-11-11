import Link from "next/link";

const links = [
  {
    eyebrow: "Music",
    title: "In-Game Radio, Soundtrack, and Score",
    description: "Listen to the Official Score and Soundtrack, plus select in-game radio stations.",
    cta: "Explore More",
  },
  {
    eyebrow: "Screenshots",
    title: "The Launch Gallery",
    description: "Get a stunning look inside Leonida with a collection of new screenshots.",
    cta: "View All",
  },
  {
    eyebrow: "Downloads",
    title: "Media & Artwork",
    description: "Download and share official videos, screenshots, and more.",
    cta: "See All",
  },
  {
    eyebrow: "People & Places",
    title: "Only in Leonida",
    description: "Vice City, USA. The darkest side of the sunniest place in America.",
    cta: "Explore More",
  },
];

export default function QuickLinks() {
  return (
    <section className="relative z-10 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((item) => (
            <Link
              key={item.eyebrow}
              href="#"
              className="group flex flex-col justify-between rounded-sm border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-accent-cyan/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
            >
              <div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">
                  {item.eyebrow}
                </span>
                <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-white transition-colors group-hover:text-accent-cyan">
                {item.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
