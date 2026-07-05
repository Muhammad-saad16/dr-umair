"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from 'next/link'
import event1 from "../../../Public/pic1.jpg"
import event2 from "../../../Public/pic2.jpg"
import event3 from "../../../Public/pic3.jpg"
import event4 from "../../../Public/pic4.jpg"
import event5 from "../../../Public/pic5.jpg"
import event6 from "../../../Public/pic6.jpg"
import event7 from "../../../Public/pic7.jpg"
import event8 from "../../../Public/pic8.jpg"


const eventPosters = [
  { id: 1, image: event1.src },
  { id: 2, image: event2.src },
  { id: 3, image: event3.src },
  { id: 4, image: event4.src },
  { id: 5, image: event5.src },
  { id: 6, image: event6.src },
  { id: 7, image: event7.src },
  { id: 8, image: event8.src },
]

export default function EventPosters() {
  const [activePosterId, setActivePosterId] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("event-posters-section")
    if (section) {
      observer.observe(section)
    }

    const posterTimer = setInterval(() => {
      setActivePosterId((prev) => (prev === eventPosters.length ? 1 : prev + 1))
    }, 3000)

    return () => {
      if (section) {
        observer.unobserve(section)
      }
      clearInterval(posterTimer)
    }
  }, [])

  return (
    <section id="event-posters-section" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="islamic-divider mb-4">
            <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold text-white mb-3 tracking-wide transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Latest Events &amp; Programs
          </h2>
          <div
            className={`w-24 h-[3px] bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700 mx-auto rounded-full transform transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
          <div className="islamic-divider mt-4">
            <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {eventPosters.map((poster, index) => (
            <div
              key={poster.id}
              className={`group relative overflow-hidden rounded-xl transform transition-all duration-500 border ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                activePosterId === poster.id
                  ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-transparent scale-105 border-amber-400/50 shadow-xl shadow-amber-500/25"
                  : "border-white/5 hover:border-amber-400/20 hover:shadow-lg hover:shadow-amber-500/10 hover:scale-[1.02]"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative w-full" style={{ paddingBottom: "141.4%" }}>
                <Image
                  src={poster.image || "/placeholder.svg"}
                  alt="events"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/events-&-program"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-full hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 hover:scale-105 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            View More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
