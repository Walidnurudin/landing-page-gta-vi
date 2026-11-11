import Image from "next/image";

const trailers = [
  {
    title: "Launch Trailer",
    image: "/images/hero-city.jpg",
    alt: "Launch trailer thumbnail",
  },
  {
    title: "Trailer 2",
    image: "/images/aerial-city.jpg",
    alt: "Trailer 2 thumbnail",
  },
  {
    title: "Trailer 1",
    image: "/images/beach-sunset.jpg",
    alt: "Trailer 1 thumbnail",
  },
  {
    title: "An Extended Look",
    image: "/images/hero-city.jpg",
    alt: "Extended look thumbnail",
  },
];

export default function Trailers() {
  return (
    <section id="trailers" className="relative z-10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
          Watch
        </span>
        <h2 className="mb-12 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
          Trailers & Gameplay
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trailers.map((trailer) => (
            <article
              key={trailer.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-zinc-900 focus-within:ring-2 focus-within:ring-accent-cyan"
            >
              <Image
                src={trailer.image}
                alt={trailer.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <button
                type="button"
                aria-label={`Play ${trailer.title}`}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-accent-pink group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Watch</p>
                <h3 className="text-lg font-bold text-white">{trailer.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
