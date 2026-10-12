import Image from "next/image";
import { weeklyPrograms } from "@/lib/data";
import { IconCalendar, IconPin } from "./icons";

export default function WeeklyPrograms({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-6 lg:grid-cols-2 ${className}`}>
      {weeklyPrograms.map((p) => (
        <article
          key={p.title}
          className="group flex flex-col overflow-hidden rounded-2xl border border-gold/40 bg-white/80 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-cream-2">
            <Image
              src={p.poster}
              alt={`${p.title} — ${p.subtitle}`}
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute top-3 left-3 rounded-md bg-emerald px-3 py-1 text-xs font-semibold tracking-[0.15em] text-gold-light uppercase shadow">
              {p.day}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-serif text-2xl font-semibold text-emerald">{p.title}</h3>
            <p className="mt-1 text-sm font-medium text-gold-dark">{p.subtitle}</p>
            <ul className="mt-4 space-y-2 text-sm text-ink/85">
              <li className="flex gap-3">
                <IconCalendar className="h-5 w-5 shrink-0 text-gold" />
                <span>
                  <strong className="font-semibold">{p.day}</strong> · {p.time}
                </span>
              </li>
              <li className="flex gap-3">
                <IconPin className="h-5 w-5 shrink-0 text-gold" />
                <span>
                  <strong className="font-semibold">{p.venue}</strong>, {p.address}
                </span>
              </li>
            </ul>
            <p className="mt-4 border-t border-gold/20 pt-4 text-xs text-muted">{p.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
