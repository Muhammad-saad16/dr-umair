import type { Metadata } from "next";
import Image from "next/image";
import { personalities } from "@/lib/data";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Interactions with Personalities",
  description: "Dr. Umair Mahmood Siddiqui's meetings with scholars, leaders and personalities around the world.",
};

export default function PersonalitiesPage() {
  return (
    <>
      <PageHero
        title="Interactions with Personalities"
        arabic="لِقَاءَات"
        subtitle="Meetings with scholars, leaders and personalities from Karachi to Jeddah and beyond."
      />
      <section className="pattern-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {personalities.map((p) => (
              <article
                key={p.name}
                className="group overflow-hidden rounded-xl border border-gold/30 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded bg-emerald/90 px-2 py-1 text-[10px] tracking-[0.15em] text-gold-light uppercase">
                    {p.place}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-xl leading-snug font-semibold text-emerald">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
