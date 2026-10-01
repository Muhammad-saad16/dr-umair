import type { Metadata } from "next";
import Image from "next/image";
import { books } from "@/lib/data";
import BookCard from "@/components/BookCard";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Publications",
  description: "Books and publications by Dr. Umair Mahmood Siddiqui on theology, comparative religion, jurisprudence and history.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        title="Publications"
        arabic="مُؤَلَّفَات"
        subtitle="Theology, comparative religion, Islamic jurisprudence, law and history — authored works for seekers of knowledge."
      />
      <section className="pattern-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Image
              src="/images/book-banner.jpg"
              alt="What is Ahmadism? — featured book"
              width={1380}
              height={503}
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
              className="h-full w-full rounded-xl border border-gold/40 object-cover shadow-lg"
            />
            <Image
              src="/images/book-banner1.png"
              alt="Hizb ul Bahr — featured publication"
              width={1376}
              height={768}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="h-full w-full rounded-xl border border-gold/40 object-cover shadow-lg"
            />
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {books.map((b) => (
              <BookCard key={b.title} book={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
