'use client'

import Image from 'next/image'
import Link from 'next/link'
import banner from '../../../Public/book-banner.jpg'

export default function BooksSection() {
  return (
    // <div  className= bg-[url('/back2.jpg')] object-cover">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Publications</h2>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-12">
          <Image 
            src={banner}
            alt="Featured Books Banner" 
            fill 
            className="bg-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center">
          <Link
            href="/publications"
            className="inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors"
          >
            View All Books
          </Link>
        </div>
      </div>
    // </div>
  )
}

