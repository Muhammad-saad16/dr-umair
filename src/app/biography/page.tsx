import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { biography, designations, site, testimonials } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Ornament } from "@/components/ornaments";
import { IconArrow, IconMail, IconPhone, IconQuote } from "@/components/icons";

export const metadata: Metadata = {
  title: "Biography",
  description: "Biography of Dr. Umair Mahmood Siddiqui — scholar, professor, researcher and author.",
};

const highlights = [
  { value: "OIC", label: "Fiqh Academy Researcher" },
  { value: "CII", label: "Former Council Member" },
  { value: "16+", label: "Published Books" },
  { value: "KU", label: "University of Karachi" },
];

export default function BiographyPage() {
  return (
    <>
      <PageHero title="Biography" arabic="سِيرَةٌ ذَاتِيَّة" subtitle="A life devoted to scholarship, teaching and service to the Ummah." />

      <section className="pattern-light py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[380px_1fr] lg:px-8">
          {/* Profile card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-gold/40 bg-white/80 shadow-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/dr.jpg"
                  alt={site.name}
                  fill
                  priority
                  sizes="380px"
                  className="object-cover object-[50%_25%]"
                />
              </div>
              <div className="pattern-dark p-6 text-center">
                <p className="font-arabic text-2xl text-gold-light" lang="ar" dir="rtl">{site.arabicName}</p>
                <h2 className="mt-1 font-serif text-2xl font-semibold text-cream">{site.name}</h2>
                <p className="mt-1 text-xs tracking-[0.2em] text-gold-light uppercase">Islamic Scholar • Author • Educator</p>
              </div>
              <ul className="space-y-3 p-6 text-sm">
                <li className="flex items-center gap-3">
                  <IconMail className="h-5 w-5 text-gold" />
                  <a href={`mailto:${site.email}`} className="hover:text-gold-dark">{site.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <IconPhone className="h-5 w-5 text-gold" />
                  <a href={site.phoneHref} className="hover:text-gold-dark">{site.phone}</a>
                </li>
              </ul>
            </div>
          </aside>

          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {highlights.map((h) => (
                <div key={h.label} className="rounded-xl border border-gold/40 bg-white/60 p-4 text-center">
                  <p className="font-serif text-3xl font-bold text-emerald">{h.value}</p>
                  <p className="mt-1 text-xs tracking-wider text-gold-dark uppercase">{h.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-gold/30 bg-white/60 p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-emerald sm:text-3xl">Positions & Affiliations</h2>
              <Ornament className="mt-3 !justify-start" />
              <ul className="mt-5 space-y-4">
                {designations.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald text-[10px] text-gold-light">◆</span>
                    <span className="text-ink">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <article className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-emerald sm:text-3xl">About Dr. Umair</h2>
              <Ornament className="mt-3 !justify-start" />
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink/85">
                {biography.map((p, i) => (
                  <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:leading-none first-letter:text-gold-dark" : ""}>
                    {p}
                  </p>
                ))}
              </div>
            </article>

            <figure className="pattern-dark mt-12 rounded-2xl border border-gold/40 p-8 text-center">
              <IconQuote className="mx-auto h-8 w-8 text-gold" />
              <blockquote className="mt-4 font-serif text-2xl text-cream italic">&ldquo;{testimonials[1].quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm tracking-[0.2em] text-gold-light uppercase">
                — {testimonials[1].name}, {testimonials[1].role}
              </figcaption>
            </figure>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/publications" className="btn-primary">Read his books <IconArrow className="h-4 w-4" /></Link>
              <Link href="/contact" className="btn-outline">Ask Dr. Umair <IconArrow className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
