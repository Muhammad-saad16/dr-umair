import Image from "next/image";
import Link from "next/link";
import { books } from "@/lib/data";
import { IconArrow, IconPlay } from "./icons";

const featured = books.find((b) => b.title === "What is Ahmadism?")!;
const FEATURED_VIDEO = "https://www.youtube.com/watch?v=kUtLFt5dZf8"; // "What Is Ahmadism? | Book Introduction"

const shelfTitles = [
  "Muhammad: The Glory of the Ages",
  "Sheikh Ibn Arabi",
  "40 Ahadith for Kids",
  "The Beacon Light",
  "Islamic Jurisprudence",
  "Communist Challenge to Islam",
];
const shelf = shelfTitles.map((t) => books.find((b) => b.title === t)!);
const rows = [shelf.slice(0, 3), shelf.slice(3, 6)];

/** Home-page book section: a featured title beside a two-row bookshelf. */
export default function BookShowcase() {
  return (
    <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      {/* Featured book */}
      <article className="pattern-dark relative overflow-hidden rounded-3xl border border-gold/40 p-7 shadow-2xl sm:p-10">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" aria-hidden />
        <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-center">
          <div className="relative w-40 shrink-0 -rotate-3 transition duration-500 hover:rotate-0 sm:w-48">
            <div className="relative aspect-[3/4] overflow-hidden rounded-r-md rounded-l-sm shadow-[12px_16px_30px_rgba(0,0,0,0.45)] ring-1 ring-gold/40">
              <Image src={featured.image} alt={featured.title} fill sizes="192px" className="object-cover" />
              <span className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent" aria-hidden />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <span className="inline-block rounded-full border border-gold/60 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] text-gold-light uppercase">
              Featured Book
            </span>
            <h3 className="mt-4 font-serif text-3xl font-semibold text-cream sm:text-4xl">{featured.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              An in-depth study of Qadianism — its beliefs, its claims, and why the true seeker should understand it
              clearly. A treasure for the pursuers of truth.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a href={FEATURED_VIDEO} target="_blank" rel="noopener noreferrer" className="btn-gold !px-5 !py-2.5 whitespace-nowrap">
                <IconPlay className="h-4 w-4" /> Book introduction
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Bookshelf */}
      <div>
        {rows.map((row, r) => (
          <div key={r} className={r > 0 ? "mt-10" : ""}>
            <div className="grid grid-cols-3 items-end gap-4 px-2 sm:gap-8 sm:px-6">
              {row.map((b) => (
                <Link key={b.title} href="/publications" className="group block" aria-label={b.title}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-r-md rounded-l-sm shadow-[6px_8px_16px_rgba(28,42,36,0.35)] transition duration-300 group-hover:-translate-y-3 group-hover:shadow-[10px_18px_28px_rgba(28,42,36,0.4)]">
                    <Image src={b.image} alt="" fill sizes="(min-width:1024px) 160px, 30vw" className="object-cover" />
                    <span className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/35 to-transparent" aria-hidden />
                    <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20" aria-hidden />
                  </div>
                </Link>
              ))}
            </div>
            {/* shelf ledge */}
            <div className="relative h-3 rounded-sm bg-gradient-to-b from-gold-light via-gold to-gold-dark shadow-[0_10px_18px_-6px_rgba(28,42,36,0.45)]" aria-hidden />
            <div className="grid grid-cols-3 gap-4 px-2 pt-3 sm:gap-8 sm:px-6">
              {row.map((b) => (
                <p key={b.title} className="text-center font-serif text-sm leading-snug font-semibold text-emerald sm:text-base">
                  {b.title}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10 text-center">
          <Link href="/publications" className="btn-primary">
            Browse all {books.length} books <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
