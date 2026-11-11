import Link from "next/link";

const news = [
  {
    title: "Pre-Load Grand Theft Auto VI Now",
    date: "November 10, 2026",
    href: "https://www.rockstargames.com/newswire/article/89834o94713o21",
  },
  {
    title: "Explore the Grand Theft Auto VI Launch Gallery",
    date: "November 5, 2026",
    href: "https://www.rockstargames.com/newswire/article/39ak81277255o9",
  },
  {
    title: "Grand Theft Auto VI Pre-Load Begins on November 10",
    date: "November 3, 2026",
    href: "https://www.rockstargames.com/newswire/article/k4ak9okk485712",
  },
];

export default function News() {
  return (
    <section id="news" className="relative z-10 bg-black py-24 pb-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-accent-cyan">
              Newswire
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Featured News
            </h2>
          </div>
          <Link
            href="https://rsg.ms/vi-news"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan sm:inline-flex"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </Link>
        </div>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {news.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-2 py-6 transition-colors hover:bg-white/5 focus:outline-none focus-visible:bg-white/5 sm:flex-row sm:items-center"
              >
                <span className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  {item.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
