"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";
import { IconMail, IconWhatsapp } from "./icons";

const field =
  "w-full rounded-md border border-gold/40 bg-white/80 px-4 py-3 text-ink outline-none transition placeholder:text-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/30";

export default function ContactForm() {
  const [type, setType] = useState<"Question" | "Feedback">("Question");

  function compose(form: HTMLFormElement) {
    const d = new FormData(form);
    const subject = `[${type}] ${d.get("subject")}`;
    const body = `${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`;
    return { subject, body };
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { subject, body } = compose(e.currentTarget);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function sendWhatsapp(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form!;
    if (!form.reportValidity()) return;
    const { subject, body } = compose(form);
    window.open(`${site.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-gold/40 bg-white/70 p-6 shadow-xl sm:p-8">
      <h2 className="font-serif text-3xl font-semibold text-emerald">Send a Message</h2>
      <div className="mt-5 inline-flex rounded-md border border-gold/50 p-1" role="radiogroup" aria-label="Message type">
        {(["Question", "Feedback"] as const).map((t) => (
          <button
            key={t}
            type="button"
            role="radio"
            aria-checked={type === t}
            onClick={() => setType(t)}
            className={`rounded px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition ${
              type === t ? "bg-emerald text-gold-light" : "text-gold-dark hover:bg-gold/10"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name *</span>
          <input name="name" required className={field} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email *</span>
          <input name="email" type="email" required className={field} placeholder="you@example.com" autoComplete="email" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium">Subject *</span>
        <input name="subject" required className={field} placeholder="What is your question about?" />
      </label>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-medium">Message *</span>
        <textarea name="message" required rows={6} className={field} placeholder="Write your message…" />
      </label>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="btn-primary">
          <IconMail className="h-4 w-4" /> Send via Email
        </button>
        <button type="button" onClick={sendWhatsapp} className="btn-outline">
          <IconWhatsapp className="h-4 w-4" /> Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
