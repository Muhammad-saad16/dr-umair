"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBook, IconCalendar, IconHome, IconMail, IconUser } from "./icons";
import { isActive } from "./Header";

const tabs = [
  { href: "/", label: "Home", Icon: IconHome },
  { href: "/biography", label: "About", Icon: IconUser },
  { href: "/events-programs", label: "Events", Icon: IconCalendar },
  { href: "/publications", label: "Books", Icon: IconBook },
  { href: "/contact", label: "Contact", Icon: IconMail },
];

/** App-style bottom navigation on phones (design 4). */
export default function MobileTabBar() {
  const pathname = usePathname();
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
      aria-label="Quick navigation"
    >
      <ul className="grid grid-cols-5">
        {tabs.map(({ href, label, Icon }) => {
          const active = isActive(pathname, href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 py-2.5 text-[11px] ${active ? "text-gold-dark" : "text-ink/60"}`}
              >
                <Icon className={`h-6 w-6 ${active ? "stroke-[1.8]" : ""}`} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
