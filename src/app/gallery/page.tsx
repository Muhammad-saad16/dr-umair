'use client'

import { useState } from 'react'
import Image from 'next/image'
import e1 from "../../../Public/dr.jpg"
import e2 from "../../../Public/e33.jpg"
import e3 from "../../../Public/e32.jpg"
import e4 from "../../../Public/e11.jpg"
import e5 from "../../../Public/e13.jpg"
import e6 from "../../../Public/e14.jpg"
import e7 from "../../../Public/e23.jpg"
import e8 from "../../../Public/e24.jpg"
import e9 from "../../../Public/e1.jpg"
import e10 from "../../../Public/e10.jpg"
import e11 from "../../../Public/e4.jpg"
import e12 from "../../../Public/e12.jpg"
import e13 from "../../../Public/e5.jpg"
import e14 from "../../../Public/e6.jpg"
import e15 from "../../../Public/e15.jpg"
import e16 from "../../../Public/e16.jpg"
import e17 from "../../../Public/e17.jpg"
import e18 from "../../../Public/e18.jpg"
import e19 from "../../../Public/e19.jpg"
import e20 from "../../../Public/e20.jpg"
import e21 from "../../../Public/e21.jpg"
// import e22 from "../../../Public/e22.jpg"
import e23 from "../../../Public/sildess.jpg"
import e24 from "../../../Public/e34.jpg"
import e25 from "../../../Public/e35.jpg"
import e26 from "../../../Public/e38.jpg"
import e27 from "../../../Public/e39.jpg"
import e28 from "../../../Public/e40.jpg"
import e29 from "../../../Public/e41.jpg"
import e30 from "../../../Public/e44.jpg"


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const images = [
    
      {
      id: -10,
      src: e30.src,
      alt: "Islamic Event",
      category: "Events"
    }{
      id: -9,
      src: e29.src,
      alt: "Islamic Event",
      category: "Events"
    }{
      id: -8,
      src: e28.src,
      alt: "Islamic Event",
      category: "Events"
    }{
      id: -7,
      src: e27.src,
      alt: "Islamic Event",
      category: "Events"
    }{
      id: -6,
      src: e26.src,
      alt: "Islamic Event",
      category: "Events"
    }{
      id: -5,
      src: e25.src,
      alt: "Islamic Event",
      category: "Events"
    }
    {
      id: -4,
      src: e24.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: -3,
      src: e25.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: -2,
      src: e2.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: -1,
      src: e3.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 0,
      src: e23.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 1,
      src: e1.src,
      alt: "Islamic Event",
      category: "Events"
    },
    
    {
      id: 2,
      src: e21.src,
      alt: "Islamic Event",
      category: "Events"
    },
    // {
    //   id: 3,
    //   src: e22.src,
    //   alt: "Islamic Event",
    //   category: "Events"
    // },
    {
      id: 4,
      src: e4.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 5,
      src: e5.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 6,
      src: e6.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 7,
      src: e7.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 8,
      src: e8.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 9,
      src: e9.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 10,
      src: e10.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 11,
      src: e11.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 12,
      src: e12.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 13,
      src: e13.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 14,
      src: e14.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 15,
      src: e15.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 16,
      src: e16.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 17,
      src: e17.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 18,
      src: e18.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 19,
      src: e19.src,
      alt: "Islamic Event",
      category: "Events"
    },
    {
      id: 20,
      src: e20.src,
      alt: "Islamic Event",
      category: "Events"
    },
  ]

  // const categories = ['All', 'Events', 'Lectures', 'Community', 'Historical']

  return (
    // <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        {/* <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white/10 text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg transition-transform duration-300 "
              />
              {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{image.alt}</p>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl w-full aspect-[4/3]">
              <Image
                src={images.find(img => img.id === selectedImage)?.src || ''}
                alt={images.find(img => img.id === selectedImage)?.alt || ''}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    // </Layout>
  )
}




