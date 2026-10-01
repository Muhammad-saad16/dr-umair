import type { Metadata } from "next";
import { galleryImages, moments } from "@/lib/data";
import PageHero from "@/components/PageHero";
import PhotoGrid from "@/components/PhotoGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of Dr. Umair Mahmood Siddiqui — events, conferences and gatherings.",
};

// Gallery photos listed on the original site include a few duplicates.
const photos = [...new Set([...moments, ...galleryImages])];

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" arabic="مَعْرِضُ الصُّوَر" subtitle="Moments from lectures, conferences, convocations and gatherings." />
      <section className="pattern-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PhotoGrid images={photos} alt="Gallery photo" variant="masonry" />
        </div>
      </section>
    </>
  );
}
