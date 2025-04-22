import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import type React from "react";
import Head from "next/head";
import Image from 'next/image';
import type { Metadata } from "next"

// Initialize English font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Dr Umair Mehmood Siddiqu",
  description: "",
  openGraph: {
    title: "Dr Umair Mehmood Siddiqu",
    description: "",
    url: "https://drumairsiddiqui.com/", // Apni website ka link
    siteName: "Dr Umair Mehmood Siddiqu",
    images: [
      {
        url: "/logo.png", // ✅ Public folder wali image ka path
        width: 1200,
        height: 630,
        alt: "Dr Umair Mehmood Siddiqui",
      },
    ],
    type: "website",
  },

  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon Logo */}
      <Image src="/logo.png" alt="Drumairsiddl Logo" width={180} height={40} priority />
        <title>My Website</title>
      </Head>
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
