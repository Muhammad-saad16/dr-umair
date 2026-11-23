"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconChevron } from "./icons";

type Slide = { name: string; image: string; text: string; place: string };

/** Full-width photo slider: Dr. Umair with scholars and dignitaries, each with a short caption. */
export default function EventSlider({ slides, interval = 6000, aspect = "aspect-[4/3] sm:aspect-[16/8] lg:aspect-[16/7]", className = "mx-auto max-w-7xl" }: { slides: Slide[]; interval?: number; aspect?: string; className?: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), interval);
    return () => clearInterval(t);
  }, [paused, n, interval]);

  const go = (d: number) => setI((x) => (x + d + n) % n);

  return (
    <div
      className={`relative overflow-hidden ${className} rounded-2xl border-2 border-gold/60 bg-black shadow-2xl`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Dr. Umair with scholars and dignitaries"
    >
      <div className={`relative ${aspect}`}>
        {slides.map((s, k) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${k === i ? "opacity-100" : "opacity-0"}`}
            aria-hidden={k !== i}
          >
            <Image
              src={s.image}
              alt={`Dr. Umair with ${s.name}`}
              fill
              priority={k === 0}
              sizes="(min-width:1280px) 1200px, 100vw"
              className="object-cover object-[50%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 pb-12 sm:p-7 sm:pb-12">
              <span className="inline-block rounded bg-gold px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-emerald-deep uppercase">
                {s.place}
              </span>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-cream sm:text-3xl">With {s.name}</h3>
              <p className="mt-1.5 text-sm text-cream/80 sm:text-base">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous"
        className="absolute top-1/2 left-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-black/40 text-gold-light backdrop-blur hover:bg-gold hover:text-emerald-deep"
      >
        <IconChevron className="h-5 w-5 rotate-180" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next"
        className="absolute top-1/2 right-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-gold/60 bg-black/40 text-gold-light backdrop-blur hover:bg-gold hover:text-emerald-deep"
      >
        <IconChevron className="h-5 w-5" />
      </button>

      <div className="absolute right-5 bottom-5 flex gap-2">
        {slides.map((s, k) => (
          <button
            key={s.image}
            onClick={() => setI(k)}
            aria-label={`Slide ${k + 1}`}
            className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-gold" : "w-2 bg-cream/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
