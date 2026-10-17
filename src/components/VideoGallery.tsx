"use client";

import Image from "next/image";
import { useState } from "react";
import { videoCategories, videos, videoThumb, type Video } from "@/lib/data";
import Honorific from "./Honorific";
import { IconPlay } from "./icons";
import Modal, { YouTubeEmbed } from "./Modal";

const filters = ["All", ...videoCategories] as const;

// Dates are YYYY-MM-DD when exact, YYYY-MM when only the month is known.
function formatDate(iso: string) {
  if (iso.length === 7) return new Date(iso + "-01").toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function VideoGallery({ initial = 8, step = 8 }: { initial?: number; step?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [shown, setShown] = useState(initial);
  const [playing, setPlaying] = useState<Video | null>(null);

  const filtered = videos.filter((v) => filter === "All" || v.category === filter);
  const list = filtered.slice(0, shown);

  return (
    <>
      <div className="no-scrollbar -mx-4 flex justify-start gap-2 overflow-x-auto px-4 sm:justify-center" role="tablist">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => {
              setFilter(f);
              setShown(initial);
            }}
            className={`shrink-0 rounded-md border px-4 py-2 text-xs font-semibold tracking-[0.15em] whitespace-nowrap uppercase transition ${
              filter === f ? "border-gold bg-gold text-emerald-deep" : "border-gold/50 text-gold-light hover:bg-gold/10"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((v) => (
          <button
            key={v.id}
            onClick={() => setPlaying(v)}
            className="group flex flex-col overflow-hidden rounded-xl border border-gold/40 bg-emerald-deep/60 text-left shadow-lg transition hover:-translate-y-1 hover:border-gold"
          >
            <div className="relative aspect-video">
              <Image
                src={videoThumb(v)}
                alt={v.title}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 grid place-items-center bg-emerald-deep/0 transition group-hover:bg-emerald-deep/30">
                <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-cream/90 bg-emerald-deep/50 text-cream transition group-hover:border-gold group-hover:bg-gold group-hover:text-emerald-deep">
                  <IconPlay className="ml-0.5 h-5 w-5" />
                </span>
              </span>
              <span className="absolute top-2 left-2 rounded bg-gold px-2 py-0.5 text-[10px] font-bold tracking-widest text-emerald-deep uppercase">
                {v.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="line-clamp-2 font-serif text-lg leading-snug font-semibold text-cream">
                <Honorific text={v.title} />
              </h3>
              <p className="mt-auto pt-3 text-xs text-cream/60">
                {formatDate(v.date)}
                {v.views && <> · {v.views} views</>}
              </p>
            </div>
          </button>
        ))}
      </div>

      {shown < filtered.length && (
        <div className="mt-8 text-center">
          <button onClick={() => setShown((n) => n + step)} className="btn-outline !text-gold-light">
            Load more videos ({filtered.length - shown})
          </button>
        </div>
      )}

      <Modal open={!!playing} onClose={() => setPlaying(null)} label={playing?.title ?? "Video"}>
        {playing && (
          <>
            <YouTubeEmbed id={playing.id} title={playing.title} />
            <p className="mt-4 text-center font-serif text-xl text-cream">
              <Honorific text={playing.title} />
            </p>
          </>
        )}
      </Modal>
    </>
  );
}
