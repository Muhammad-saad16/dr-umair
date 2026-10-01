import Link from "next/link";
import { ArchEdge, Ornament } from "./ornaments";

export default function PageHero({ title, arabic, subtitle }: { title: string; arabic: string; subtitle?: string }) {
  return (
    <section className="pattern-dark relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/40 to-emerald/0" />
      <div className="relative mx-auto max-w-4xl px-4 pt-14 pb-20 sm:pt-20 sm:pb-24">
        <p className="font-arabic text-3xl text-gold-light sm:text-4xl" lang="ar" dir="rtl">
          {arabic}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">{title}</h1>
        <Ornament className="mt-5" tone="light" />
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-cream/75 sm:text-lg">{subtitle}</p>}
        <nav className="mt-6 text-xs tracking-[0.25em] text-gold-light/80 uppercase" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gold-light">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-cream/80">{title}</span>
        </nav>
      </div>
      <ArchEdge className="absolute inset-x-0 -bottom-px" fill="var(--color-cream)" />
    </section>
  );
}
