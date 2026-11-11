import Image from "next/image";

export default function Story() {
  return (
    <section id="story" className="relative z-10 bg-black py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:w-1/2">
          <Image
            src="/images/aerial-city.jpg"
            alt="Aerial view of Vice City at dusk"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="lg:w-1/2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-accent-pink">
            Vice City, USA
          </span>
          <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            The Darkest Side of the Sunniest Place in America
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-zinc-300">
            Jason and Lucia have always known the deck is stacked against them. But when an easy
            score goes wrong, they find themselves on the darkest side of the sunniest place in
            America, in the middle of a criminal conspiracy stretching across the state of Leonida —
            forced to rely on each other more than ever if they want to make it out alive.
          </p>
          <p className="text-zinc-400">
            Grand Theft Auto VI heads to the neon-soaked streets of Leonida and the shores of Vice
            City, USA for the biggest, most immersive evolution of the series yet.
          </p>
        </div>
      </div>
    </section>
  );
}
