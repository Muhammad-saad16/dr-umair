import type { Metadata } from "next";
import { eventPosters, latestEvents, latestPhotos } from "@/lib/data";
import PageHero from "@/components/PageHero";
import PhotoGrid from "@/components/PhotoGrid";
import WeeklyPrograms from "@/components/WeeklyPrograms";
import { SectionHeading } from "@/components/ornaments";

export const metadata: Metadata = {
  title: "Events & Programs",
  description: "Conferences, lecture series, workshops, seminars and programs with Dr. Umair Mahmood Siddiqui.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events & Programs"
        arabic="مَجَالِسُ العِلْم"
        subtitle="Conferences, lecture series, workshops, exhibitions, competitions and seminars."
      />
      <section className="pattern-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Every Week" title="Weekly Programs" />
          <WeeklyPrograms className="mt-12" />

          <SectionHeading eyebrow="28 September 2026" title="Gathering at City of Knowledge" className="mt-24" />
          <PhotoGrid images={latestPhotos.slice(0, 12)} alt="City of Knowledge gathering, 28 September 2026" className="mt-12" />

          <SectionHeading eyebrow="Upcoming & Recent" title="Latest Programs" className="mt-24" />
          <PhotoGrid images={latestEvents} alt="Event poster" className="mt-12" />

          <SectionHeading eyebrow="Archive" title="Past Events" className="mt-24" />
          <PhotoGrid images={eventPosters} alt="Event" variant="masonry" className="mt-12" />
        </div>
      </section>
    </>
  );
}
