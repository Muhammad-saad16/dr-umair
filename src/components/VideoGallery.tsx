"use client";

import Image from "next/image";
import { useState } from "react";
import { videos, type VideoCategory } from "@/lib/data";
import { IconPlay } from "./icons";
import Modal, { YouTubeEmbed } from "./Modal";

const filters: ("All" | VideoCategory)[] = ["All", "Lectures", "Sermons", "Events"];

export default function VideoGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [playing, setPlaying] = useState<(typeof videos)[number] | null>(null);

  const list = videos.filter((v) => filter === "All" || v.category === filter).slice(0, limit);

  return (
    <>
      <div className="no-scrollbar -mx-4 flex justify-start gap-2 overflow-x-auto px-4 sm:justify-center" role="tablist">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`min-w-24 rounded-md border px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase transition ${
              filter === f ? "border-gold bg-gold text-emerald-deep" : "border-gold/50 text-gold-light hover:bg-gold/10"
            }`}
          >
            {f === "Sermons" ? "Khutbahs" : f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((v) => (
          <button
            key={v.id}
            onClick={() => setPlaying(v)}
            className="group relative overflow-hidden rounded-xl border border-gold/40 text-left shadow-lg transition hover:-translate-y-1 hover:border-gold"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={v.thumbnail}
                alt={v.title}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <div>
                <span className="rounded bg-gold px-2 py-0.5 text-[10px] font-bold tracking-widest text-emerald-deep uppercase">
                  {v.category === "Sermons" ? "Khutbah" : v.category.replace(/s$/, "")}
                </span>
                <h3 className="mt-2 font-serif text-xl font-semibold text-cream">{v.title}</h3>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-cream/90 text-cream transition group-hover:border-gold group-hover:bg-gold group-hover:text-emerald-deep">
                <IconPlay className="ml-0.5 h-4 w-4" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <Modal open={!!playing} onClose={() => setPlaying(null)} label={playing?.title ?? "Video"}>
        {playing && (
          <>
            <YouTubeEmbed id={playing.id} title={playing.title} />
            <p className="mt-4 text-center font-serif text-xl text-cream">{playing.title}</p>
          </>
        )}
      </Modal>
    </>
  );
}
