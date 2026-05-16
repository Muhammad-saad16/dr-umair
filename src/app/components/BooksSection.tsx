'use client'

import Image from 'next/image'
import Link from 'next/link'
import banner from '../../../Public/book-banner.jpg'
import bookCover from '../../../Public/book-banner1.png'

const PDF_PATH = '../../../Public/Hizb ul bahar FOR PRINT.pdf'

export default function BooksSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <div className="islamic-divider mb-3">
          <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
        </div>
        <h2 className="text-4xl font-bold text-center text-white tracking-wide">Publications</h2>
        <div className="islamic-divider mt-3">
          <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
        </div>
      </div>
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-12 rounded-xl overflow-hidden shadow-2xl border border-amber-400/10 ring-1 ring-white/5">
        <Image
          src={banner}
          alt="Featured Books Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Clickable book card — opens/downloads the PDF */}
      <a
        href={PDF_PATH}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="group relative block w-full h-[300px] md:h-[400px] lg:h-[500px] mb-12 rounded-xl overflow-hidden shadow-2xl border border-amber-400/20 ring-1 ring-white/5 hover:scale-[1.02] transform transition-all duration-300 cursor-pointer bg-[#0d0d0d]"
        title="Click to open / download PDF"
      >
        <Image
          src={bookCover}
          alt="Hizb ul Bahar — click to download"
          fill
          className="object-contain"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
          <svg className="w-14 h-14 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="text-white text-lg font-semibold tracking-wide">Download PDF</span>
        </div>
      </a>

      <div className="text-center">
        <Link
          href="/publications"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-full hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-amber-900/30 hover:scale-105 transform"
        >
          View More Books
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
