'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Link from 'next/link'
import event1 from '../../../Public/thumbnail1.jpg'
import event2 from '../../../Public/thumbnail2.jpg'
import event3 from '../../../Public/thumbnail3.jpg'

const videos = [
  {
    id: 1,
    thumbnail: event1.src, 
    youtubeId: "LcyP_eoQDXQ",
    category: "Lectures"
  },
  {
    id: 2,
    thumbnail: event2.src,
    youtubeId: "ps61pd-0xjs",
    category: "Sermons"
  },
  {
    id: 3,
    thumbnail: event3.src,
    youtubeId: "Wq7XnyB4DHU",
    category: "Events"
  },
  
]

export default function VideoSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Lectures', 'Sermons', 'Q&A']

  return (
    // <section className=" bg-[url('/back2.jpg')] object-cover">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Lectures</h2>
        
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-amber-400 text-gray-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>
                </div>
                {/* <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-200">Duration: {video.duration}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/clip-&-videos"
            className="inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors"
          >
            View All Lectures
          </Link>
        </div>
      </div>
    // </section>
  )
}
