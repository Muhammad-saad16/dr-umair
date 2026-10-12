import type { Metadata } from "next";
import { featuredVideoId, site, videos } from "@/lib/data";
import PageHero from "@/components/PageHero";
import VideoGallery from "@/components/VideoGallery";
import Honorific from "@/components/Honorific";
import { IconYoutube } from "@/components/icons";

export const metadata: Metadata = {
  title: "Videos",
  description: "Latest lectures, Dars-e-Shama'il, Dars-e-Quran and panel discussions by Dr. Umair Mahmood Siddiqui.",
};

export default function VideosPage() {
  const featured = videos.find((v) => v.id === featuredVideoId);
  return (
    <>
      <PageHero
        title="Videos"
        arabic="مُحَاضَرَات"
        subtitle="Lectures, Dars-e-Shama'il, Dars-e-Quran, Q&A sessions and panel discussions — the latest from the YouTube channel."
      />
      <section className="pattern-dark py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {featured && (
            <div className="mx-auto mb-16 max-w-4xl">
              <p className="mb-3 text-center text-xs font-semibold tracking-[0.3em] text-gold-light uppercase">✦ Latest upload ✦</p>
              <div className="aspect-video overflow-hidden rounded-2xl border-2 border-gold/60 bg-black shadow-2xl">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${featured.id}?rel=0`}
                  title={featured.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h2 className="mt-4 text-center font-serif text-2xl text-cream">
                <Honorific text={featured.title} />
              </h2>
            </div>
          )}

          <VideoGallery initial={16} step={12} />

          <div className="mt-12 text-center">
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <IconYoutube className="h-5 w-5" /> Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
