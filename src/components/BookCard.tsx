import Image from "next/image";
import type { books } from "@/lib/data";
import { IconDownload } from "./icons";

export default function BookCard({ book }: { book: (typeof books)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gold/30 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-xl">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-2">
        <Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 text-center sm:p-5">
        <h3 className="font-serif text-lg leading-snug font-semibold text-emerald sm:text-xl">{book.title}</h3>
        {book.description && <p className="mt-2 line-clamp-2 text-sm text-muted sm:line-clamp-3">{book.description}</p>}
        <p className="mt-3 text-[10px] tracking-[0.08em] text-gold-dark uppercase sm:text-[11px] sm:tracking-[0.18em]">{book.by}</p>
        {book.url && (
          <a
            href={book.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 self-center rounded-md border border-gold px-4 py-2 text-xs font-semibold tracking-[0.15em] text-gold-dark uppercase transition hover:bg-gold hover:text-emerald-deep"
          >
            <IconDownload className="h-4 w-4" /> View PDF
          </a>
        )}
      </div>
    </article>
  );
}
