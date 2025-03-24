import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import type React from "react";
import Head from "next/head";

// Initialize English font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon Logo */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>My Website</title>
      </Head>
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
