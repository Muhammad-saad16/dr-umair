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
  title: "Dr Umair Mahmood Siddiqui",
  description: "",
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
      <Head>
        {/* Favicon Logo */}
      <Image src="favicon.ico" alt="Drumairsiddl Logo" width={180} height={40} priority />
        <title>My Website</title>
      </Head>
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
