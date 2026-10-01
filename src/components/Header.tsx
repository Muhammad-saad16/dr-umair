"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/data";
import { IconClose, IconMenu, IconYoutube } from "./icons";
import { StarMark } from "./ornaments";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
      <StarMark className={`h-11 w-11 shrink-0 ${light ? "text-gold-light" : "text-gold"}`} />
      <span className="leading-tight">
        <span className={`block font-serif text-xl font-semibold tracking-wide sm:text-2xl ${light ? "text-cream" : "text-emerald"}`}>
          Dr. Umair Siddiqui
        </span>
        <span className={`block text-[10px] tracking-[0.25em] whitespace-nowrap uppercase ${light ? "text-gold-light" : "text-gold-dark"}`}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gold/20 bg-cream/95 backdrop-blur transition-shadow ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Main">
          {navLinks.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-2 text-[13px] font-medium whitespace-nowrap tracking-[0.14em] uppercase transition-colors ${
                  active ? "text-gold-dark" : "text-ink/80 hover:text-gold-dark"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-gold transition-transform ${active ? "scale-x-100" : "scale-x-0"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !px-5 !py-2.5 whitespace-nowrap xl:inline-flex"
          >
            Listen / Watch <IconYoutube className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen(true)}
            className="rounded-md p-2 text-emerald lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <IconMenu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${open ? "visible" : "invisible delay-300"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`pattern-dark absolute inset-y-0 right-0 flex w-80 max-w-[85%] flex-col p-6 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-arabic text-3xl text-gold-light">العِلْمُ نُورٌ</span>
            <button onClick={() => setOpen(false)} className="p-2 text-cream" aria-label="Close menu">
              <IconClose className="h-7 w-7" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-gold/20 py-4 font-serif text-xl ${
                  isActive(pathname, l.href) ? "text-gold-light" : "text-cream"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-gold mt-auto justify-center">
            Listen / Watch <IconYoutube className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
