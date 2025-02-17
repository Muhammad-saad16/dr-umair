"use client"

import { useState, useEffect } from "react"
// import Layout from "../components/Layout"
import Image from "next/image"
import event1 from "../../../Public/event-poster1.jpg"
import event2 from "../../../Public/event-poster2.jpg"
import event3 from "../../../Public/event-poster3.jpg"
import event4 from "../../../Public/event-poster4.jpg"
import event5 from "../../../Public/event-poster5.jpg"
import event6 from "../../../Public/event-poster6.jpg"
import event7 from "../../../Public/event-poster7.jpg"
import event8 from "../../../Public/event-poster10.jpg"
import event9 from "../../../Public/event-poster9.jpg"
// import event11 from "../../../Public/event-poster11.jpg"
// import event12 from "../../../Public/event-poster12.jpg"
// import event13 from "../../../Public/event-poster13.jpg"
const events = [
  {
    id: 1,
    title: "Islamic Conference 2024",
    date: "March 15-17, 2024",
    location: "Grand Islamic Center",
    image: event1.src,
    description:
      "Join us for an enlightening three-day conference featuring renowned scholars and engaging discussions on contemporary Islamic topics.",
    category: "Conference",
  },
  {
    id: 2,
    title: "Ramadan Lecture Series",
    date: "March 10-30, 2024",
    location: "City of Knowledge",
    image: event2.src,
    description:
      "Daily lectures throughout Ramadan exploring the deeper meanings of the Holy Quran and Islamic teachings.",
    category: "Lecture Series",
  },
  {
    id: 3,
    title: "Youth Islamic Workshop",
    date: "April 5-6, 2024",
    location: "Islamic Cultural Center",
    image: event3.src,
    description:
      "A special workshop designed for young Muslims to strengthen their understanding of Islam in the modern world.",
    category: "Workshop",
  },
  {
    id: 4,
    title: "Islamic Art Exhibition",
    date: "April 15-20, 2024",
    location: "Metropolitan Museum",
    image: event4.src,
    description:
      "Experience the beauty of Islamic art through this curated exhibition featuring both classical and contemporary works.",
    category: "Exhibition",
  },
  {
    id: 5,
    title: "Quran Recitation Competition",
    date: "May 1, 2024",
    location: "Central Mosque",
    image: event5.src,
    description: "Annual Quran recitation competition showcasing the beautiful art of Quranic recitation.",
    category: "Competition",
  },
  {
    id: 6,
    title: "Islamic Finance Seminar",
    date: "May 10, 2024",
    location: "Business Convention Center",
    image: event6.src,
    description: "Learn about Islamic finance principles and their application in modern economic systems.",
    category: "Seminar",
  },
  {
    id: 7,
    title: "Islamic Conference 2024",
    date: "March 15-17, 2024",
    location: "Grand Islamic Center",
    image: event7.src,
    description:
      "Join us for an enlightening three-day conference featuring renowned scholars and engaging discussions on contemporary Islamic topics.",
    category: "Conference",
  },
  {
    id: 8,
    title: "Ramadan Lecture Series",
    date: "March 10-30, 2024",
    location: "City of Knowledge",
    image: event8.src,
    description:
      "Daily lectures throughout Ramadan exploring the deeper meanings of the Holy Quran and Islamic teachings.",
    category: "Lecture Series",
  },
  {
    id: 9,
    title: "Youth Islamic Workshop",
    date: "April 5-6, 2024",
    location: "Islamic Cultural Center",
    image: event9.src,
    description:
      "A special workshop designed for young Muslims to strengthen their understanding of Islam in the modern world.",
    category: "Workshop",
  },
  // {
  //   id: 10,
  //   title: "Islamic Art Exhibition",
  //   date: "April 15-20, 2024",
  //   location: "Metropolitan Museum",
  //   image: event11.src,
  //   description:
  //     "Experience the beauty of Islamic art through this curated exhibition featuring both classical and contemporary works.",
  //   category: "Exhibition",
  // },
  // {
  //   id: 11,
  //   title: "Quran Recitation Competition",
  //   date: "May 1, 2024",
  //   location: "Central Mosque",
  //   image: event12.src,
  //   description: "Annual Quran recitation competition showcasing the beautiful art of Quranic recitation.",
  //   category: "Competition",
  // },
  // {
  //   id: 12,
  //   title: "Islamic Finance Seminar",
  //   date: "May 10, 2024",
  //   location: "Business Convention Center",
  //   image: event13.src,
  //   description: "Learn about Islamic finance principles and their application in modern economic systems.",
  //   category: "Seminar",
  // },
]

const categories = ["All", "Conference", "Lecture Series", "Workshop", "Exhibition", "Competition", "Seminar"]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoaded, setIsLoaded] = useState(false)
  const [filteredEvents, setFilteredEvents] = useState(events)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const filtered = events.filter((event) => selectedCategory === "All" || event.category === selectedCategory)
    setFilteredEvents(filtered)
  }, [selectedCategory])

  return (
    

      <div className="container mx-auto px-4 py-12">
        {/* Categories Filter */}
        <div
          className={`mb-12 transform transition-all duration-700 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-amber-400 text-gray-900"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`group relative bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm transform transition-all duration-500 hover:scale-105 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full" style={{ paddingBottom: "141.4%" }}>
                {" "}
                {/* A4 aspect ratio */}
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="bg-cover"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-amber-400 text-gray-900 text-sm rounded-full mb-3">
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-amber-400 mb-2">{event.date}</p>
                    <p className="text-white/80 mb-2">{event.location}</p>
                    <p className="text-gray-200 text-sm line-clamp-3">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center text-white py-12">
            <p className="text-xl">No events found in this category.</p>
          </div>
        )}
      </div>
    // </Layout>
  )
}

