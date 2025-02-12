'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "Islamic Event 1" },
  { id: 2, src: "/placeholder.svg?height=600&width=800", alt: "Islamic Event 2" },
  { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Islamic Event 3" },
  { id: 4, src: "/placeholder.svg?height=600&width=800", alt: "Islamic Event 4" },
  { id: 5, src: "/placeholder.svg?height=600&width=800", alt: "Islamic Event 5" },
  { id: 6, src: "/placeholder.svg?height=600&width=800", alt: "Islamic Event 6" },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full aspect-[4/3]">
            <Image
              src={images.find(img => img.id === selectedImage)?.src || ''}
              alt={images.find(img => img.id === selectedImage)?.alt || ''}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

