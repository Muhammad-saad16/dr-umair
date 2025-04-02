'use client'

import { useEffect, useState,useCallback } from 'react'
import Image from 'next/image'
import ahmed from '../../../Public/Ahmad-Javed.png'
import majeed from '../../../Public/Dr.-Majeedullah-Qadri.png'
import qibla from '../../../Public/qibla-Ayaz.png'

const testimonials = [
  {
    id: 1,
    name: "Ahmad Javed",
    role: "Philospher & Thinker",
    image: ahmed.src,
    quote: "Dr. Umair continues to progress both spiritually and worldly, reaching new heights. He exemplifies a man of high-spirited and resilient demeanor.",
    rating: 5
  },
  {
    id: 2,
    name: "Prof. Dr. Majeedullah Qadri",
    role: "Ex-Dean, University of Karachi",
    image: majeed.src,
    quote: "Dr. Umair made significant contributions as an esteemed member of the Council of Islamic Ideology at a remarkably young age.",
    rating: 5
  },
  {
    id: 3,
    name: "Pro. Dr. Qibla Ayaz",
    role: "Chairman Council of Islamic Ideology",
    image: qibla.src,
    quote: "Today, we find ourselves at the City of Knowledge enveloped in an auspicious atmosphere, spearheaded by Dr. Umair Mahmood Siddiqui.",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const totalSlides = Math.ceil(testimonials.length / 3)

  const nextSlide = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)

    setTimeout(() => {
      setIsAnimating(false)
    }, 700) // Match this with the CSS transition duration
  }, [isAnimating, totalSlides])

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)

    setTimeout(() => {
      setIsAnimating(false)
    }, 700) // Match this with the CSS transition duration
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return

    setIsAnimating(true)
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
    }, 700) // Match this with the CSS transition duration
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000) // Change slides every 6 seconds

    return () => clearInterval(timer)
  }, [nextSlide])

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-accent-gold" : "text-gray-400"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="section-padding relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 "></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent-teal blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-accent-gold blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="elegant-title text-4xl md:text-5xl mb-4">
            In My <span className="gold-text">View</span>
          </h2>
          <div className="w-24 h-1 bg-accent-teal mx-auto"></div>
        </div>

        <div className="relative">
          {/* Testimonial Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex flex-wrap">
                  {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial) => (
                    <div key={testimonial.id} className="w-full md:w-1/3 p-4">
                      <div className="bg-white/5 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-white/10 hover:border-accent-teal/30 group">
                        <div className="p-6 flex-grow">
                          {/* Quote icon */}
                          <div className="mb-4 text-accent-gold opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>

                          <p className="text-white/90 mb-6 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>

                          <div className="flex items-center mt-auto">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent-teal">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold">{testimonial.name}</h4>
                              <p className="text-white/70 text-sm">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>

                        <div className="px-6 py-4 border-t border-white/10 flex justify-between items-center">
                          <div className="flex">{renderStars(testimonial.rating)}</div>
                          <span className="text-accent-gold text-sm font-medium">{testimonial.rating}.0</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all text-white hover:text-accent-gold"
            disabled={isAnimating}
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all text-white hover:text-accent-gold"
            disabled={isAnimating}
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 bg-accent-teal rounded-full"
                  : "w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full"
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

