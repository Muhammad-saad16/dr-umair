'use client'

import { useState } from 'react'

import { Play } from 'lucide-react'
import Image from 'next/image'

import event1 from '/Public/thumbnail1.jpg'
import event2 from '/Public/thumbnail10.jpg'
import event3 from '/Public/thumbnail11.jpg'
import event4 from '/Public/thumbnail4.jpg'
import event5 from '/Public/thumbnail5.jpg'
import event6 from '/Public/thumbnail6.jpg'
import event7 from '/Public/thumbnail7.jpg'
import event8 from '/Public/thumbnail8.jpg'

const videos = [
  {
    id: 1,
    thumbnail: event1.src,
    youtubeId: "LcyP_eoQDXQ",
    category: "Lectures",
    title: "Lecture 1",
    description: "An insightful Islamic lecture by Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 2,
    thumbnail: event2.src,
    youtubeId: "T3oTI8w-kfw",
    category: "Sermons",
    title: "Friday Sermon 1",
    description: "A Friday sermon (Khutbah) delivered by Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 3,
    thumbnail: event3.src,
    youtubeId: "k25Y4XyDssA",
    category: "Events",
    title: "Event Highlight 1",
    description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui."
  },
   {
    id: 4,
    thumbnail: event4.src,
    youtubeId: "6s4R3MYeezU",
    category: "Events",
    title: "Event Highlight 2",
    description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 5,
    thumbnail: event5.src,
    youtubeId: "kOV4mgl8gcA",
    category: "Lectures",
    title: "Lecture 2",
    description: "An insightful Islamic lecture by Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 6,
    thumbnail: event6.src,
    youtubeId: "jv12__G4tW8",
    category: "Sermons",
    title: "Friday Sermon 2",
    description: "A Friday sermon (Khutbah) delivered by Dr. Umair Mahmood Siddiqui."
  },
  {
    id: 7,
    thumbnail: event7.src,
    youtubeId: "YdTHuYHHE54",
    category: "Events",
    title: "Event Highlight 3",
    description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui."
  },
   {
    id: 8,
    thumbnail: event8.src,
    youtubeId: "tudjOzDH2rk",
    category: "Events",
    title: "Event Highlight 4",
    description: "Highlights from an Islamic event featuring Dr. Umair Mahmood Siddiqui."
  },
]

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Lectures', 'Sermons', 'Q&A', 'Events']

  const filteredVideos = selectedCategory === 'All'
    ? videos
    : videos.filter(video => video.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Categories */}
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

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer card-islamic rounded-lg overflow-hidden"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-400/70 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                    <Play className="w-4 h-4 text-gray-900" />
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
    </div>
  )
}
