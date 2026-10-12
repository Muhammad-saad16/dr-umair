import { Fragment } from "react";

/** Renders "ﷺ" in the Arabic face, slightly larger, so it stays legible inside Latin titles. */
export default function Honorific({ text }: { text: string }) {
  const parts = text.split("ﷺ");
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {p}
          {i < parts.length - 1 && <span className="mx-0.5 font-arabic text-[1.35em] leading-none text-gold-light">ﷺ</span>}
        </Fragment>
      ))}
    </>
  );
}
