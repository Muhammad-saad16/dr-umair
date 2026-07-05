'use client'
import { useState } from 'react'
import { Play } from 'lucide-react'
import event1 from '/Public/mv1.jpg'
import event2 from '/Public/mv2.jpg'
import event3 from '/Public/mv3.jpg'
import event4 from '/Public/mv4.jpg'
import event5 from '/Public/mv5.jpg'
import event6 from '/Public/v6.jpg'
import event7 from '/Public/u6.jpg'
import event8 from '/Public/yvideo1.jpg'
const videos = [
  {
    id: 1,
    thumbnail: event1.src, 
    youtubeId: "XhlxnTJ2s5s", 
    category: "Lectures"
  },
  {
    id: 2,
    thumbnail: event2.src,
    youtubeId: "Qe0PoOtn1UE",
    category: "Sermons"
  },
  {
    id: 3,
    thumbnail: event3.src,
    youtubeId: "dfiefCpuqlE",
    category: "Events"
  },
   {
    id: 4,
    thumbnail: event4.src,
    youtubeId: "xrwL2SDxCxo",
    category: "Events"
  },
  {
    id: 5,
    thumbnail: event5.src, 
    youtubeId: "BmaGDmbteyc",
    category: "Lectures"
  },
  {
    id: 6,
    thumbnail: event6.src,
    youtubeId: "qlbVP_huK1Q",
    category: "Sermons"
  },
  {
    id: 7,
    thumbnail: event7.src,
    youtubeId: "F1LBmuzVDLw",
    category: "Events"
  },
   {
    id: 8,
    thumbnail: event8.src,
    youtubeId: "PJsM7Jp3ESw",
    category: "Events"
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
            className="group cursor-pointer"
            onClick={() => window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, "_blank")}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 group-hover:border-amber-400/25 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/10">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt="Video Thumbnail"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-amber-900/40 opacity-80 group-hover:opacity-100">
                    <Play className="w-4 h-4 text-white" />
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








