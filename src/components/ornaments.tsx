import type { ReactNode } from "react";

/** Gold line — floral knot — line, as in the reference designs. */
export function Ornament({ className = "", tone = "gold" }: { className?: string; tone?: "gold" | "light" }) {
  const color = tone === "gold" ? "text-gold" : "text-gold-light";
  return (
    <div className={`flex items-center justify-center gap-3 ${color} ${className}`} aria-hidden>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-current sm:w-28" />
      <svg viewBox="0 0 48 16" className="h-4 w-12" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 2l4 6-4 6-4-6 4-6Z" fill="currentColor" fillOpacity=".25" />
        <path d="M20 8c-3-4-7-4-9-1.5S12 11 15 9.5M28 8c3-4 7-4 9-1.5S36 11 33 9.5" />
        <circle cx="4" cy="8" r="1.2" fill="currentColor" />
        <circle cx="44" cy="8" r="1.2" fill="currentColor" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-current sm:w-28" />
    </div>
  );
}

/** Eight-point star mark (khatam) used as a logo glyph. */
export function StarMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="11" y="11" width="26" height="26" />
      <rect x="11" y="11" width="26" height="26" transform="rotate(45 24 24)" />
      <circle cx="24" cy="24" r="6" />
      <path d="M24 18v12M18 24h12" strokeWidth="1" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  tone = "light",
  className = "",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <div className={`flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase ${dark ? "text-gold-light" : "text-gold-dark"}`}>
        <span className="h-px w-10 bg-current opacity-60 sm:w-16" />
        <span aria-hidden>✦</span>
        {eyebrow}
        <span aria-hidden>✦</span>
        <span className="h-px w-10 bg-current opacity-60 sm:w-16" />
      </div>
      <h2 className={`mt-4 font-serif text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl ${dark ? "text-cream" : "text-emerald"}`}>
        {title}
      </h2>
      <Ornament className="mt-4" tone={dark ? "light" : "gold"} />
      {children && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-cream/75" : "text-muted"}`}>{children}</p>}
    </div>
  );
}

/** Mihrab-style arched top edge for dark bands (design 1). */
export function ArchEdge({ className = "", fill = "var(--color-emerald)" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className={`block h-10 w-full sm:h-16 ${className}`} aria-hidden>
      <path
        d="M0 72V44c40 0 60-16 84-16h560c34 0 50-28 76-28s42 28 76 28h560c24 0 44 16 84 16v28Z"
        fill={fill}
      />
      <path
        d="M0 44c40 0 60-16 84-16h560c34 0 50-28 76-28s42 28 76 28h560c24 0 44 16 84 16"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
