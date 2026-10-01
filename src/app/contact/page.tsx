import type { Metadata } from "next";
import { site } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { IconFacebook, IconMail, IconPhone, IconPin, IconWhatsapp, IconYoutube } from "@/components/icons";

export const metadata: Metadata = {
  title: "Ask Dr. Umair",
  description: "Get in touch with Dr. Umair Mahmood Siddiqui — questions and feedback.",
};

const cards = [
  { Icon: IconMail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { Icon: IconPhone, label: "Phone", value: site.phone, href: site.phoneHref },
  { Icon: IconWhatsapp, label: "WhatsApp", value: site.phone, href: site.whatsapp },
  { Icon: IconPin, label: "Address", value: site.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Ask Dr. Umair" arabic="فَاسْأَلُوا أَهْلَ الذِّكْرِ" subtitle="Get in touch with Dr. Umair Mahmood Siddiqui — questions and feedback are welcome." />
      <section className="pattern-light py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div className="space-y-4">
            {cards.map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold bg-emerald text-gold-light">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.2em] text-gold-dark uppercase">{label}</span>
                    <span className="block font-medium text-ink">{value}</span>
                  </span>
                </>
              );
              const cls = "flex items-center gap-4 rounded-xl border border-gold/30 bg-white/70 p-5 transition hover:border-gold hover:shadow-md";
              return href ? (
                <a key={label} href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>{inner}</div>
              );
            })}

            <div className="pattern-dark rounded-xl border border-gold/40 p-6 text-center">
              <p className="text-xs tracking-[0.25em] text-gold-light uppercase">Follow on social media</p>
              <div className="mt-4 flex justify-center gap-3">
                {[
                  { href: site.social.youtube, Icon: IconYoutube, label: "YouTube" },
                  { href: site.social.facebook, Icon: IconFacebook, label: "Facebook" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-gold/60 px-4 py-2 text-sm text-cream hover:bg-gold hover:text-emerald-deep"
                  >
                    <Icon className="h-5 w-5" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
          <iframe
            title="City of Knowledge, Karachi — map"
            src="https://www.google.com/maps?q=City+of+Knowledge+Karachi&output=embed"
            className="h-80 w-full rounded-2xl border border-gold/40 shadow-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
