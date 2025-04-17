"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from 'next/link';
import event1 from "../../../Public/post8.jpg"
import event2 from "../../../Public/post5.jpg"
import event3 from "../../../Public/post7.jpg"
import event4 from "../../../Public/post4.jpg"

const eventPosters = [
  {
    id: 1,
    image: event4.src,
    title: "Taqwa and Ramadan",
    date: "March 8, 2025",
  },
  {
    id: 2,
    image: event1.src,
    title: "Al-Aqsa Conference",
    date: "April 6, 2025",
  },
  {
    id: 3,
    image: event2.src,
    title: "Khutba Jumma",
    date: "Dars-e-Quran | Surah Anfal",
  },
  {
    id: 4,
    image: event3.src,
    title: "Weekly Dars-e-Quran | City of Knowledge",
    date: "Surah Noor | 9:00 PM TO 10:00 PM",
  },
]

// export default function EventPosters() {
//   const [activePosterId, setActivePosterId] = useState(1)
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     const section = document.getElementById("event-posters-section")
//     if (section) {
//       observer.observe(section)
//     }

//     const posterTimer = setInterval(() => {
//       setActivePosterId((prev) => (prev === eventPosters.length ? 1 : prev + 1))
//     }, 3000)

//     return () => {
//       if (section) {
//         observer.unobserve(section)
//       }
//       clearInterval(posterTimer)
//     }
//   }, [])

//   return (
//     <section id="event-posters-section" className="py-24 bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2
//             className={`text-4xl md:text-3xl font-bold text-white mb-4 transform transition-all duration-1000 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             Latest Events & Programs
//           </h2>
//           <div
//             className={`w-24 h-1 bg-amber-400 mx-auto transform transition-all duration-1000 delay-300 ${
//               isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
//             }`}
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           {eventPosters.map((poster, index) => (
//             <div
//               key={poster.id}
//               className={`group relative overflow-hidden rounded-lg transform transition-all duration-500 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="relative w-full" style={{ paddingBottom: "141.4%" }}>
//                 {" "}
//                 {/* Aspect ratio for A4 (1:√2) */}
//                 <Image
//                   src={poster.image || "/placeholder.svg"}
//                   alt={poster.title}
//                   fill
//                   className="bg-cover rounded-lg"
//                   sizes="(min-width: 768px) 33vw, 100vw"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <h4 className="text-white font-semibold text-xl mb-2">{poster.title}</h4>
//                     <p className="text-amber-400 text-lg">{poster.date}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link
//             href="/events-&-program"
//             className={`inline-block px-8 py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors transform transition-all duration-1000 delay-500 hover:scale-105 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             View More
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

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
    <section id="event-posters-section" className="py-24 bg-[url('/back2.jpg')] object-cover">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-3xl font-bold text-white mb-4 transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Latest Events & Programs
          </h2>
          <div
            className={`w-24 h-1 bg-amber-400 mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {eventPosters.map((poster, index) => (
            <div
              key={poster.id}
              className={`group relative overflow-hidden rounded-lg transform transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                activePosterId === poster.id
                  ? "ring-4 ring-amber-400 scale-105" // Highlight active poster
                  : ""
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative w-full" style={{ paddingBottom: "141.4%" }}>
                {/* Aspect ratio for A4 (1:√2) */}
                <Image
                  src={poster.image || "/placeholder.svg"}
                  alt={poster.title}
                  fill
                  className="bg-cover rounded-lg"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white font-semibold text-xl mb-2">{poster.title}</h4>
                    <p className="text-amber-400 text-lg">{poster.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/events-&-program"
            className={`inline-block px-8 py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors transform transition-all duration-1000 delay-500 hover:scale-105 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}
