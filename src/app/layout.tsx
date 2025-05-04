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
  title: "Dr Uamir Mehmood Siddiqui",
  description: "",
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "any",
      },
      {
        url: "logo.png",
        type: "image/png",
        sizes: "48x48",
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
      <Image src="logo.png" alt="Drumairsiddl Logo" width={180} height={40} priority />
        <title>My Website</title>
      </Head>
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
