// Site content lives in /content/*.json and is edited through Decap CMS at /admin.
// This module adds types and derived values so pages can import plain constants.
import siteJson from "../../content/site.json";
import videosJson from "../../content/videos.json";
import booksJson from "../../content/books.json";
import personalitiesJson from "../../content/personalities.json";
import testimonialsJson from "../../content/testimonials.json";
import programsJson from "../../content/programs.json";
import galleryJson from "../../content/gallery.json";

const digits = siteJson.phone.replace(/[^\d]/g, "");

export const site = {
  ...siteJson,
  phoneHref: `tel:+${digits}`,
  whatsapp: `https://wa.me/${digits}`,
};

export const designations: string[] = siteJson.designations;
export const biography: string[] = siteJson.biography;
export const featuredVideoId: string = siteJson.featuredVideoId;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/biography", label: "Biography" },
  { href: "/videos", label: "Videos" },
  { href: "/events-programs", label: "Events" },
  { href: "/publications", label: "Publications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const pillars = [
  { title: "Qur'an & Sunnah", text: "Rooted in authentic sources", icon: "book" },
  { title: "Dynamic Orthodoxy", text: "Balanced, free of extremes", icon: "mosque" },
  { title: "Global Voice", text: "OIC Fiqh Academy & beyond", icon: "globe" },
] as const;

export const videoCategories = ["Lectures", "Shama'il", "Q&A & Panels", "Dars-e-Quran"] as const;
export type VideoCategory = (typeof videoCategories)[number];

export type Video = {
  id: string;
  title: string;
  category: VideoCategory;
  /** "YYYY-MM-DD" when exact, "YYYY-MM" when only the month is known. */
  date: string;
  views?: string;
  thumbnail?: string;
};

/** Local thumbnail if one was uploaded, otherwise YouTube's own. */
export const videoThumb = (v: Video) => v.thumbnail || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;

// Newest first, whatever order editors add them in.
export const videos = ([...videosJson.items] as Video[]).sort((a, b) => b.date.localeCompare(a.date));

export type Book = {
  title: string;
  image: string;
  description?: string;
  by: string;
  url?: string;
  featured?: boolean;
  videoUrl?: string;
};
export const books: Book[] = booksJson.items;

export type Personality = { name: string; image: string; text: string; place: string };
export const personalities: Personality[] = personalitiesJson.items;

export type Testimonial = { quote: string; name: string; role: string; image: string };
export const testimonials: Testimonial[] = testimonialsJson.items;

export type WeeklyProgram = {
  title: string;
  subtitle: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  note?: string;
  poster: string;
};
export const weeklyPrograms: WeeklyProgram[] = programsJson.items;

export const latestPhotos: string[] = galleryJson.latestPhotos;
export const latestEvents: string[] = galleryJson.latestEvents;
export const eventPosters: string[] = galleryJson.eventPosters;
export const galleryImages: string[] = galleryJson.galleryImages;
export const moments: string[] = galleryJson.moments;
