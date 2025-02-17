'use client'

import { useEffect, useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with city skyline */}
      <div className="absolute inset-0 bg-[url('/back2.jpg')] object-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center text-white mb-12">In the Eyes of Intellectuals</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-lg p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute top-0 left-0 text-6xl text-amber-400 opacity-20">&quot;</span>
                    <p className="text-gray-700 text-lg relative z-10 px-8">{testimonial.quote}</p>
                    <span className="absolute bottom-0 right-0 text-6xl text-amber-400 opacity-20">&quot;</span>
                  </div>
                  <div className="flex justify-center mt-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-amber-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-amber-400' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

