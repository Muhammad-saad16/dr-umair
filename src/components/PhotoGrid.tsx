"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { IconChevron } from "./icons";
import Modal from "./Modal";

/**
 * Responsive image grid with a keyboard-navigable lightbox.
 * `variant="masonry"` keeps each photo's natural aspect ratio (gallery, posters).
 */
export default function PhotoGrid({
  images,
  alt,
  variant = "grid",
  className = "",
}: {
  images: string[];
  alt: string;
  variant?: "grid" | "masonry";
  className?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, step]);

  return (
    <>
      <div
        className={
          variant === "masonry"
            ? `columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4 ${className}`
            : `grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 ${className}`
        }
      >
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            onClick={() => setIndex(i)}
            className={`group relative block w-full overflow-hidden rounded-lg border border-gold/30 bg-cream-2 shadow-sm transition hover:border-gold hover:shadow-lg ${
              variant === "masonry" ? "mb-3 break-inside-avoid sm:mb-4" : "aspect-[4/5]"
            }`}
            aria-label={`Open image ${i + 1}`}
          >
            {variant === "masonry" ? (
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                width={800}
                height={600}
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            )}
            <span className="absolute inset-0 bg-emerald/0 transition group-hover:bg-emerald/15" />
          </button>
        ))}
      </div>

      <Modal open={index !== null} onClose={close} label={alt}>
        {index !== null && (
          <div className="relative flex items-center justify-center">
            <Image
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              width={1600}
              height={1200}
              sizes="100vw"
              className="max-h-[80vh] w-auto rounded-lg border border-gold/40 object-contain shadow-2xl"
            />
            <button
              onClick={() => step(-1)}
              className="absolute left-0 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-emerald/80 text-gold-light hover:bg-gold hover:text-emerald-deep sm:-translate-x-full"
              aria-label="Previous"
            >
              <IconChevron className="h-6 w-6 rotate-180" />
            </button>
            <button
              onClick={() => step(1)}
              className="absolute right-0 grid h-12 w-12 translate-x-1/2 place-items-center rounded-full bg-emerald/80 text-gold-light hover:bg-gold hover:text-emerald-deep sm:translate-x-full"
              aria-label="Next"
            >
              <IconChevron className="h-6 w-6" />
            </button>
            <p className="absolute -bottom-9 text-sm tracking-widest text-cream/70">
              {index + 1} / {images.length}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
