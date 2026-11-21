import type { Metadata } from "next";
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {books.map((b) => (
              <BookCard key={b.title} book={b} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
