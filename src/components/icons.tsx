import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export const IconBook = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 6.5C10 5 7 4.5 3 5v13c4-.5 7 0 9 1.5 2-1.5 5-2 9-1.5V5c-4-.5-7 0-9 1.5Z" /><path d="M12 6.5v13" /></svg>
);
export const IconMosque = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 2v2M7 12c0-3 2.5-5 5-6.5 2.5 1.5 5 3.5 5 6.5" /><path d="M5 21v-9h14v9M3 21h18M10 21v-4a2 2 0 0 1 4 0v4M3 21V10M21 21V10M3 10l-.01-1.5M21 10v-1.5" /></svg>
);
export const IconGlobe = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" /></svg>
);
export const IconPlay = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" /></svg>
);
export const IconArrow = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconChevron = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="m9 6 6 6-6 6" /></svg>
);
export const IconMenu = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const IconClose = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconMail = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const IconPhone = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
);
export const IconPin = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const IconHome = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 11 12 4l9 7M5 10v10h5v-6h4v6h5V10" /></svg>
);
export const IconUser = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4.5 4.5-6.5 8-6.5s7 2 8 6.5" /></svg>
);
export const IconCalendar = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const IconImage = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="m21 16-5-5-9 9" /></svg>
);
export const IconQuote = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M9.5 6C6 7.3 4 10 4 13.5V18h6v-6H7c0-2.2 1.2-3.8 3.3-4.6L9.5 6Zm10 0C16 7.3 14 10 14 13.5V18h6v-6h-3c0-2.2 1.2-3.8 3.3-4.6L19.5 6Z" /></svg>
);
export const IconWhatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3 1.8.8 2.6.8 3.5.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" /></svg>
);
export const IconFacebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" /></svg>
);
export const IconYoutube = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" /></svg>
);
export const IconDownload = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
);
