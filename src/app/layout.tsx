import { Inter } from "next/font/google"
import "./globals.css"
import Layout from "./components/Layout"
import type React from "react"

// Initialize English font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

