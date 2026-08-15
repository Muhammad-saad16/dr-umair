import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import type React from "react";
import type { Metadata } from "next"

// Initialize English font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Dr Umair Mahmood Siddiqui",
  description:
    "Official website of Dr. Umair Mahmood Siddiqui — lectures, sermons, publications, events and biography.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "favicon.ico",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
