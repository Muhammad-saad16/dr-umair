import Link from "next/link";
import { navLinks, site } from "@/lib/data";
import { Logo } from "./Header";
import { IconFacebook, IconMail, IconPhone, IconPin, IconWhatsapp, IconYoutube } from "./icons";
import { StarMark } from "./ornaments";

export default function Footer() {
  const socials = [
    { href: site.social.youtube, label: "YouTube", Icon: IconYoutube },
    { href: site.social.facebook, label: "Facebook", Icon: IconFacebook },
    { href: site.whatsapp, label: "WhatsApp", Icon: IconWhatsapp },
  ];

  return (
    <footer className="pattern-dark relative overflow-hidden pb-20 text-cream md:pb-0">
      {/* Hadith band (design 3) */}
      <div className="border-b border-gold/25 bg-emerald-deep/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-8 text-center sm:px-6 md:flex-row md:justify-between md:text-left lg:px-8">
          <div>
            <p className="font-arabic text-2xl text-gold-light sm:text-3xl" lang="ar" dir="rtl">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </p>
            <p className="mt-2 font-serif text-lg text-cream/90 italic sm:text-xl">
              &ldquo;The best of you are those who learn the Qur&rsquo;an and teach it.&rdquo;
            </p>
            <p className="mt-1 text-xs tracking-[0.25em] text-gold uppercase">— Prophet Muhammad ﷺ (Sahih al-Bukhari)</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.25em] text-cream/70 uppercase">Follow the journey</span>
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-gold-light transition hover:bg-gold hover:text-emerald-deep"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.3fr_auto] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Sharing authentic Islamic knowledge rooted in the Qur&rsquo;an and the Seerah — a balanced voice of dynamic orthodoxy for
            hearts and minds of today.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg tracking-[0.15em] text-gold-light uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/75 transition hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg tracking-[0.15em] text-gold-light uppercase">Contact Info</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li className="flex gap-3">
              <IconMail className="h-5 w-5 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-light">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <IconPhone className="h-5 w-5 shrink-0 text-gold" />
              <a href={site.phoneHref} className="hover:text-gold-light">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <IconPin className="h-5 w-5 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>

        <StarMark className="hidden h-28 w-28 text-gold/70 md:block" />
      </div>

      <div className="border-t border-gold/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-arabic text-base text-gold-light/80" lang="ar">العِلْمُ نُورٌ</p>
        </div>
      </div>
    </footer>
  );
}
