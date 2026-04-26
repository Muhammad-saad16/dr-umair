'use client'

import Image from 'next/image'
import Link from 'next/link'
import banner from '../../../Public/book-banner.jpg'

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
