"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import slide4 from '../../../Public/slide4.jpg'
import p1 from '../../../Public/slide.jpg'
import p2 from '../../../Public/slide1.jpg'
import p3 from '../../../Public/slide2.jpg'
import slide3 from '../../../Public/slide3.jpg'
import slide1stt from '../../../Public/slide1stt.jpg'
import slide5 from '../../../Public/slide5.jpg'
import slide7 from '../../../Public/slide7.jpg'
import slide8 from '../../../Public/slide8.jpg'
import slide9 from '../../../Public/slide9.jpg'


const slides = [
   {
    id: 1,
    image: p1.src,
  },
 {
    id: 2,
    image: slide9.src,
  },
{
    id: 3,
    image: slide4.src,
  },
  {
    id: 4,
    image: slide1stt.src,
  },
 {
    id: 5,
    image: slide8.src,
  },
{
    id: 3,
    image: slide7.src,
  },
 {
    id: 6,
    image: slide3.src,
  },
  {
    id: 7,
    image: slide5.src,
  },
  {
    id: 8,
    image: p2.src,
  },
    {
    id: 9,
    image: p3.src,
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isDesktop = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    if (isDesktop) {
      const slideTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 9000)
      return () => clearInterval(slideTimer)
    }
  }, [isDesktop])

  const nextSlide = () => {
    if (isDesktop) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }

  const prevSlide = () => {
    if (isDesktop) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  return (
    <section className="relative h-[90vh] md:h-screen">
      {/* Slides */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              (isDesktop && index === currentSlide) || (!isDesktop && index === 0) ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={isDesktop ? index !== currentSlide : index !== 0}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt="{slide.title}"
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Desktop Only */}
      {isDesktop && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators - Desktop Only */}
          <div className="absolute bottom-8 left-0 right-0">
            <div className="flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-amber-400" : "bg-white/50 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}
