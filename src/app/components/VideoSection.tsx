'use client'
import { useState } from 'react'
import { Play } from 'lucide-react'
import event1 from '/Public/video1.jpg'
import event2 from '/Public/video2.jpg'
import event3 from '/Public/video3.jpg'
import event4 from '/Public/video4.jpg'
import event5 from '/Public/video5.jpg'
import event6 from '/Public/video6.jpg'
import event7 from '/Public/video7.jpg'
import event8 from '/Public/thumb2.jpg'
const videos = [
  {
    id: 1,
    thumbnail: event1.src, 
    youtubeId: "28E_ZwTe00A",
    category: "Lectures"
  },
  {
    id: 2,
    thumbnail: event2.src,
    youtubeId: "I8mCnm71NBs",
    category: "Sermons"
  },
  {
    id: 3,
    thumbnail: event3.src,
    youtubeId: "lXGlKezVY1o",
    category: "Events"
  },
   {
    id: 4,
    thumbnail: event4.src,
    youtubeId: "5lIB-AWgPGE",
    category: "Events"
  },
  {
    id: 5,
    thumbnail: event5.src, 
    youtubeId: "x7ij0f5I2uA",
    category: "Lectures"
  },
  {
    id: 6,
    thumbnail: event6.src,
    youtubeId: "ahHbklZPGK8",
    category: "Sermons"
  },
  {
    id: 7,
    thumbnail: event7.src,
    youtubeId: "2qFA9eA6NL4",
    category: "Events"
  },
   {
    id: 8,
    thumbnail: event8.src,
    youtubeId: "qlO164BpYb4",
    category: "Events"
  },
  
]

export default function VideoSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Lectures", "Sermons", "Q&A"]

  return (
    <div className="container mx-auto px-4 mt-8">
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
            className="group cursor-pointer"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, "_blank")}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt="Video Thumbnail"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Smaller and more transparent play button */}
                  <div className="w-10 h-10 rounded-full bg-amber-400/70 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 text-gray-900" />
                  </div>
                </div>
              </div>
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




