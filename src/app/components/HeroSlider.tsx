"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"




import slode13 from '../../../Public/slode13.jpg'
import slode14 from '../../../Public/slode14.jpg'
import slode15 from '../../../Public/slode15.jpg'
import slode16 from '../../../Public/slode16.jpg'
import slode17 from '../../../Public/slode17.jpg'
import slode18 from '../../../Public/slode18.jpg'
import slode19 from '../../../Public/slode19.jpg'
import slode20 from '../../../Public/slode20.jpg'
import slode21 from '../../../Public/slode21.jpg'
import slode22 from '../../../Public/slode22.jpg'
import slode23 from '../../../Public/slode23.jpg'
import slode24 from '../../../Public/slode24.jpg'
import slode26 from '../../../Public/slode26.jpg'
import slode28 from '../../../Public/slode28.jpg'
import slode27 from '../../../Public/slode27.jpg'
import slode29 from '../../../Public/slode29.jpg'
import slode30 from '../../../Public/slode30.jpg'
import slode31 from '../../../Public/slode31.jpg'
import slode32 from '../../../Public/slode32.jpg'
import slode33 from '../../../Public/slode33.jpg'
import slode34 from '../../../Public/slode81.png'
import slode35 from '../../../Public/slode82.png'
import slode36 from '../../../Public/slode83.jpg'
import slode37 from '../../../Public/slode84.jpg'
import slode38 from '../../../Public/slode34.jpg'
import slode39 from '../../../Public/slode35.jpg'
import slode40 from '../../../Public/slode36.jpg'
import slode41 from '../../../Public/slode37.jpg'
import slode42 from '../../../Public/slode38.jpg'
import slode43 from '../../../Public/slode39.jpg'
import slode44 from '../../../Public/slode41.jpg'
import slode45 from '../../../Public/slode42.jpg'
const slides = [
  {
    id: -27,
    image: slode44.src,
  },
  {
    id: -26,
    image: slode42.src,
  },
  {
    id: -25,
    image: slode43.src,
  },
  {
    id: -25,
    image: slode45.src,
  },
  {
    id: -24,
    image: slode41.src,
  },
  {
    id: -23,
    image: slode40.src,
  },
  {
    id: -22,
    image: slode39.src,
  },
  {
    id: -21,
    image: slode38.src,
  },
  {
    id: -20,
    image: slode34.src,
  },
  {
    id: -19,
    image: slode35.src,
  },  
  {
    id: -18,
    image: slode36.src,
  },
  {
    id: -17,
    image: slode37.src,
  },
  {
    id: -16,
    image: slode33.src,
  },
  {
    id: -15,
    image: slode32.src,
  },  
  {
    id: -14,
    image: slode26.src,
  },
  {
    id: -13,
    image: slode27.src,
  },
  {
    id: -16,
    image: slode28.src,
  }, 
  
  {
    id: -11,
    image: slode30.src,
  },
    {
    id: -10,
    image: slode29.src,
  },
  {
    id: -12,
    image: slode31.src,
  }, 

      {
    id: -12,
    image: slode22.src,
  },
  {
    id: -11,
    image: slode21.src,
  },
    {
    id: -10,
    image: slode20.src,
  },
          {
    id: -14,
    image: slode24.src,
  },
  {
    id: -13,
    image: slode23.src,
  },
    {
    id: -16,
    image: slode19.src,
  },
  {
    id: -16,
    image: slode17.src,
  },
  {
    id: -15,
    image: slode18.src,
  },
        {
    id: -14,
    image: slode16.src,
  },
  {
    id: -13,
    image: slode15.src,
  },
      {
    id: -12,
    image: slode13.src,
  },
  {
    id: -11,
    image: slode14.src,
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


























