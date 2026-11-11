import Image from "next/image";

const editions = [
  {
    badge: "Ultimate Edition",
    title: "An exclusive collection of items threaded across all aspects of Jason and Lucia’s story.",
    image: "/images/beach-sunset.jpg",
    alt: "Ultimate Edition artwork",
  },
  {
    badge: "Pre-order Bonuses",
    title: "Vintage Vice City Pack",
    description:
      "Pre-order to get unique benefits that flash back to when the neon burned brightest.",
    image: "/images/aerial-city.jpg",
    alt: "Vintage Vice City Pack artwork",
  },
];

export default function Editions() {
  return (
    <section id="editions" className="relative z-10 bg-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          Choose Your Edition
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {editions.map((edition) => (
            <article
              key={edition.badge}
              className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-sm border border-white/10 bg-zinc-900 p-8 focus-within:ring-2 focus-within:ring-accent-cyan"
            >
              <Image
                src={edition.image}
                alt={edition.alt}
                fill
                className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="relative z-10">
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent-amber">
                  {edition.badge}
                </span>
                <h3 className="mb-3 max-w-md text-2xl font-bold text-white sm:text-3xl">
                  {edition.title}
                </h3>
                {edition.description && (
                  <p className="mb-5 max-w-md text-zinc-300">{edition.description}</p>
                )}
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
