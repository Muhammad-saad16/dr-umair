'use client'
import { useState } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'
import event1 from '/Public/w1.jpg'
import event2 from '/Public/w2.jpg'
import event3 from '/Public/w3.jpg'
import event4 from '/Public/w4.jpg'
import event5 from '/Public/w5.jpg'
import event6 from '/Public/w6.jpg'
import event7 from '/Public/w7.jpg'
import event8 from '/Public/w8.jpg'
const videos = [
  {
    id: 1,
    thumbnail: event1.src,
    youtubeId: "p0aU2nHEITM",
    category: "Lectures",
    title: "Lecture 1",
    description: "An insightful Islamic lecture by Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 2,
    thumbnail: event2.src,
    youtubeId: "rspwczpoag0",
    category: "Sermons",
    title: "Friday Sermon 1",
    description: "A Friday sermon (Khutbah) delivered by Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 3,
    thumbnail: event3.src,
    youtubeId: "HjhNUTbkepc",
    category: "Events",
    title: "Event Highlight 1",
    description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui."
  },
   {
    id: 4,
    thumbnail: event4.src,
    youtubeId: "iBvTbgqSWdw",
    category: "Events",
    title: "Event Highlight 2",
    description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 5,
    thumbnail: event5.src,
    youtubeId: "zKSCALl6Az8",
    category: "Lectures",
    title: "Lecture 2",
    description: "An insightful Islamic lecture by Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 6,
    thumbnail: event6.src,
    youtubeId: "6H84LdW1Fas",
    category: "Sermons",
    title: "Friday Sermon 2",
    description: "A Friday sermon (Khutbah) delivered by Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 7,
    thumbnail: event7.src,
    youtubeId: "I0RX-wkGeFM",
    category: "Events",
    title: "Event Highlight 3",
    description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui."
  },
   {
    id: 8,
    thumbnail: event8.src,
    youtubeId: "nmBqWuMtJsg",
    category: "Events",
    title: "Event Highlight 4",
    description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui."
  },

]

export default function VideoSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Lectures", "Sermons", "Q&A"]

  return (
    <div className="container mx-auto px-4 mt-8">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="islamic-divider mb-3">
          <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
        </div>
        <h2 className="text-4xl font-bold text-center text-white tracking-wide">Clips &amp; Videos</h2>
        <div className="islamic-divider mt-3">
          <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category ? "bg-amber-400 text-gray-900" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer card-islamic rounded-xl overflow-hidden"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, "_blank")}
          >
            <div className="relative aspect-video overflow-hidden border-b border-white/5 group-hover:border-amber-400/25 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/10">
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-amber-900/40 opacity-80 group-hover:opacity-100">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold leading-snug mb-1">{video.title}</h3>
              <p className="text-gray-300/90 text-sm leading-relaxed">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

{/*       <div className="text-center mt-12">
        <Link
          href="/clip-&-videos"
          className="inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors"
        >
          View More
        </Link>
      </div> */}
    </div>
  )
}








