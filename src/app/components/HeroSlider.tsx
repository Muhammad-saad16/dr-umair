"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"


// import slide1stt from '../../../Public/slide1stt.jpg'
import slide5 from '../../../Public/slide2nd.jpg'

import slide8 from '../../../Public/slide3rd.jpg'


import slide from '../../../Public/slide15.jpg'
import slide1 from '../../../Public/slideend.jpg'
import slide123456 from '../../../Public/ssslide1.jpg'
import slode1 from '../../../Public/slode1.jpg'
import slode2 from '../../../Public/slode2.jpg'
import slode3 from '../../../Public/slode3.jpg'
import slode4 from '../../../Public/slode4.jpg'
import slode5 from '../../../Public/slode5.jpg'
import slode6 from '../../../Public/slode6.jpg'
import slode7 from '../../../Public/slode7.jpg'
import slode8 from '../../../Public/slode8.jpg'
import slode9 from '../../../Public/slode9.jpg'
import slode10 from '../../../Public/slode10.jpg'
import slode11 from '../../../Public/slode11.jpg'
import slode12 from '../../../Public/slode12.jpg'


const slides = [
    {
    id: -10,
    image: slode11.src,
  },
  {
    id: -9,
    image: slode12.src,
  },
    {
    id: -8,
    image: slode10.src,
  },
  {
    id: -7,
    image: slode9.src,
  },
    {
    id: -6,
    image: slode8.src,
  },
    {
    id: -5,
    image: slode6.src,
  },
  {
    id: -4,
    image: slode7.src,
  },
    {
    id: -3,
    image: slode5.src,
  },
  {
    id: -2,
    image: slode4.src,
  },
  {
    id: -3,
    image: slode3.src,
  },
  {
    id: -2,
    image: slode2.src,
  },
       {
    id: -1,
    image: slode1.src,
  },    {
    id: 0,
    image: slide123456.src,
  },
       {
    id: 1,
    image: slide8.src,
  },
    {
    id: 2,
    image: slide5.src,
  },
 
    {
    id: 3,
    image: slide1.src,
  },
    {
    id: 4,
    image: slide.src,
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
























