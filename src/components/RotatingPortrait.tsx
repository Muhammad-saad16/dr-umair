"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Cross-fades through the portraits in order; sizes/classes are passed through to each image. */
export default function RotatingPortrait({
  images,
  alt,
  sizes,
  className = "",
  interval = 4500,
  priority = false,
}: {
  images: string[];
  alt: string;
  sizes: string;
  className?: string;
  interval?: number;
  priority?: boolean;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images.length, interval]);

  return (
    <>
      {images.map((src, n) => (
        <Image
          key={src}
          src={src}
          alt={n === i ? alt : ""}
          aria-hidden={n !== i}
          fill
          priority={priority && n === 0}
          sizes={sizes}
          className={`${className} transition-opacity duration-1000 ${n === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </>
  );
}
