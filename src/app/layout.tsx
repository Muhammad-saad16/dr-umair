import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drumairsiddiqui.com"),
  title: {
    default: "Dr. Umair Mahmood Siddiqui — Islamic Scholar",
    template: "%s | Dr. Umair Mahmood Siddiqui",
  },
  description:
    "Official website of Dr. Umair Mahmood Siddiqui — Islamic scholar, Associate Professor at the University of Karachi, researcher at the International Islamic Fiqh Academy (OIC), and former member of the Council of Islamic Ideology.",
  openGraph: {
    type: "website",
    siteName: "Dr. Umair Mahmood Siddiqui",
    images: ["/images/dr.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${amiri.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileTabBar />
      </body>
    </html>
  );
}
