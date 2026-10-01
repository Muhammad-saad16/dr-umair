"use client";

import { useEffect, type ReactNode } from "react";
import { IconClose } from "./icons";

export default function Modal({
  open,
  onClose,
  label,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-emerald-deep/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-cream hover:bg-gold hover:text-emerald-deep"
        aria-label="Close"
      >
        <IconClose className="h-6 w-6" />
      </button>
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-gold/40 bg-black shadow-2xl">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
