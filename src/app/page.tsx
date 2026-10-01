import Image from "next/image";
import Link from "next/link";
import {
  biography,
  books,
  designations,
  featuredVideoId,
  latestEvents,
  moments,
  personalities,
  pillars,
  site,
  testimonials,
} from "@/lib/data";
import BookCard from "@/components/BookCard";
import PhotoGrid from "@/components/PhotoGrid";
import VideoGallery from "@/components/VideoGallery";
import { ArchEdge, Ornament, SectionHeading } from "@/components/ornaments";
import { IconArrow, IconBook, IconChevron, IconGlobe, IconMosque, IconQuote } from "@/components/icons";

const pillarIcons = { book: IconBook, mosque: IconMosque, globe: IconGlobe };

export default function Home() {
  return (
    <>
      {/* ───────── HERO (design 1) ───────── */}
      <section className="pattern-light relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-0 lg:px-8 lg:pt-0">
          <div className="animate-fade-up relative z-10 order-2 pb-24 text-center lg:order-1 lg:py-24">
            <p
              className="text-gold-gradient font-arabic text-6xl leading-[1.35] font-bold sm:text-7xl lg:text-8xl"
              lang="ar"
              dir="rtl"
            >
              العِلْمُ نُورٌ
            </p>
            <Ornament className="mt-2" />
            <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-emerald sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <div className="mx-auto mt-4 flex max-w-md items-center gap-3 text-gold" aria-hidden>
              <span className="h-px flex-1 bg-gold/60" />
              <span className="text-xs">◆</span>
              <span className="h-px flex-1 bg-gold/60" />
            </div>
            <p className="mt-4 font-serif text-xl text-gold-dark sm:text-2xl">
              Islamic Scholar &nbsp;|&nbsp; Author &nbsp;|&nbsp; Educationist
            </p>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted">
              Authentic knowledge from the Qur&rsquo;an and Sunnah — a balanced voice of <em>dynamic orthodoxy</em>, free from
              both religious radicalism and secular extremism.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="#videos" className="btn-primary">
                Explore Teachings <IconChevron className="h-4 w-4" />
              </Link>
              <Link href="/biography" className="btn-outline">
                Biography <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Portrait: stacked on mobile, bleeds to the right edge on desktop */}
          <div className="relative order-1 -mx-4 h-[360px] sm:-mx-6 sm:h-[460px] lg:order-2 lg:mx-0 lg:h-auto lg:min-h-[640px] lg:self-stretch">
            <div className="absolute inset-0 lg:right-[calc(-2rem_-_max(0px,(100vw_-_80rem)/2))]">
              <Image
                src="/images/dr.jpg"
                alt={site.name}
                fill
                priority
                sizes="(min-width:1024px) 55vw, 100vw"
                className="object-cover object-[50%_15%] [mask-image:linear-gradient(to_bottom,black_65%,transparent)] lg:object-[48%_25%] lg:[mask-image:linear-gradient(to_bottom,black_70%,transparent),linear-gradient(to_right,transparent,black_35%)] lg:[mask-composite:intersect]"
              />
            </div>
          </div>
        </div>

        {/* Pillars band with mihrab arch edge */}
        <div className="relative -mt-16">
          <ArchEdge />
          <div className="pattern-dark">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:gap-0 sm:px-6 sm:divide-x sm:divide-gold/40">
              {pillars.map((p) => {
                const Icon = pillarIcons[p.icon];
                return (
                  <div key={p.title} className="flex items-center justify-center gap-4 sm:px-4">
                    <Icon className="h-12 w-12 shrink-0 text-gold-light" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold tracking-[0.12em] text-gold-light uppercase sm:text-xl">
                        {p.title}
                      </h3>
                      <p className="text-sm text-cream/80">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── ABOUT (design 2) ───────── */}
      <section className="pattern-light py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Rooted in Knowledge. Dedicated to Service."
              className="lg:mx-0 lg:text-left [&>div]:lg:justify-start"
            />
            <p className="mt-6 leading-relaxed text-muted">{biography[0]}</p>
            <ul className="mt-6 space-y-3">
              {designations.map((d) => (
                <li key={d} className="flex gap-3 text-ink">
                  <span className="mt-1.5 text-xs text-gold">◆</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <Link href="/biography" className="btn-outline mt-8">
              Learn more about Dr. Umair <IconArrow className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="arch absolute -inset-3 border-2 border-gold/60" aria-hidden />
            <div className="arch relative aspect-[4/5] overflow-hidden border-4 border-gold shadow-2xl">
              <Image
                src="/images/slode45.jpg"
                alt="Dr. Umair Mahmood Siddiqui delivering a lecture"
                fill
                sizes="(min-width:1024px) 450px, 90vw"
                className="object-cover object-[30%_center]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FEATURED VIDEO + CLIPS (design 2, dark band) ───────── */}
      <section id="videos" className="pattern-dark scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Lectures & Talks" title="Timeless Lessons. Relevant Guidance." tone="dark" />

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border-2 border-gold/60 bg-black shadow-2xl">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${featuredVideoId}?rel=0`}
                title="Featured video — Dr. Umair Mahmood Siddiqui"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-16">
            <VideoGallery />
          </div>

          <div className="mt-10 text-center">
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Browse all on YouTube <IconArrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ───────── INTERACTIONS WITH PERSONALITIES ───────── */}
      <section className="pattern-light py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Global Scholarship" title="Interactions with Personalities" />
          <div className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {personalities.map((p) => (
              <article
                key={p.name}
                className="group w-72 shrink-0 snap-start overflow-hidden rounded-xl border border-gold/30 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:w-auto"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 288px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded bg-emerald/90 px-2 py-1 text-[10px] tracking-[0.15em] text-gold-light uppercase">
                    {p.place}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg leading-snug font-semibold text-emerald">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── LATEST EVENTS ───────── */}
      <section className="bg-cream-2/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Majalis & Programs" title="Latest Events & Programs" />
          <PhotoGrid images={latestEvents} alt="Event poster" className="mt-12" />
          <div className="mt-10 text-center">
            <Link href="/events-programs" className="btn-primary">
              View all events <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── GLOBAL VISITS ───────── */}
      <section className="pattern-light py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Across the World" title="Recent Global Visits">
            Doha, Qatar &nbsp;•&nbsp; Canada &nbsp;•&nbsp; Singapore — including a keynote at an international conference held
            at the Parliament of Canada.
          </SectionHeading>
          <div className="relative mt-12 overflow-hidden rounded-2xl border-2 border-gold/60 shadow-2xl">
            <Image
              src="/images/canada.jpg"
              alt="Dr. Umair Mahmood Siddiqui — global visits to Doha, Canada and Singapore"
              width={1600}
              height={636}
              sizes="(min-width:1152px) 1100px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* ───────── PUBLICATIONS (design 2) ───────── */}
      <section className="bg-cream-2/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Book Library" title="Authored Works for Seekers of Knowledge" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Image
              src="/images/book-banner.jpg"
              alt="What is Ahmadism? — featured book"
              width={1380}
              height={503}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="h-full w-full rounded-xl border border-gold/40 object-cover shadow-lg"
            />
            <Image
              src="/images/book-banner1.png"
              alt="Hizb ul Bahr — featured publication"
              width={1376}
              height={768}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="h-full w-full rounded-xl border border-gold/40 object-cover shadow-lg"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {books.slice(0, 4).map((b) => (
              <BookCard key={b.title} book={b} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/publications" className="btn-outline">
              View all {books.length} books <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── WORDS OF HONOUR ───────── */}
      <section className="pattern-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Words of Honour" title="What Scholars Say" tone="dark" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative flex flex-col rounded-2xl border border-gold/40 bg-emerald-deep/50 p-7 backdrop-blur"
              >
                <IconQuote className="h-9 w-9 text-gold" />
                <blockquote className="mt-4 flex-1 font-serif text-xl leading-relaxed text-cream/90 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-gold/25 pt-5">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border-2 border-gold object-cover"
                  />
                  <div>
                    <p className="font-serif text-lg font-semibold text-gold-light">{t.name}</p>
                    <p className="text-xs tracking-wider text-cream/60 uppercase">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── MOMENTS MARQUEE ───────── */}
      <section className="overflow-hidden border-y border-gold/30 bg-cream py-10" aria-label="Moments">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...moments, ...moments].map((src, i) => (
            <div
              key={i}
              className="relative h-40 w-60 shrink-0 overflow-hidden rounded-lg border border-gold/40 sm:h-48 sm:w-72"
              aria-hidden={i >= moments.length}
            >
              <Image src={src} alt="" fill sizes="288px" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="btn-primary">
            Open Gallery <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
