import Link from "next/link";
import { Ornament } from "@/components/ornaments";

export default function NotFound() {
  return (
    <section className="pattern-light grid min-h-[60vh] place-items-center px-4 py-24 text-center">
      <div>
        <p className="text-gold-gradient font-serif text-8xl font-bold">404</p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-emerald">Page not found</h1>
        <Ornament className="mt-4" />
        <Link href="/" className="btn-primary mt-8">Return home</Link>
      </div>
    </section>
  );
}
