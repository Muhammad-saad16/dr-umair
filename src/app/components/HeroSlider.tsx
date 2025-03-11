"use client"

// // import { useState, useEffect } from "react"
// // import { ChevronLeft, ChevronRight } from 'lucide-react'
// // import { useMediaQuery } from 'react-responsive'

// // import Image from "next/image"
// import p1 from '../../../Public/slide.jpg'
// import p2 from '../../../Public/slide1.jpg'
// import p3 from '../../../Public/slide2.jpg'
// // import p10 from '../../../Public/p10.jpg'
// import p8 from '../../../Public/p2.jpg'
// import p5 from '../../../Public/p5.jpg'


// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Image from "next/image"
// import { useMediaQuery } from "react-responsive"

// const slides = [
//   {
//     id: 1,
//     image: p1.src,
//   },
 
//   {
//     id: 3,
//     image: p2.src,

//   },
//   {
//     id: 4,
//     image: p3.src,
   
//   },
//   {
//     id: 5,
//     image: p8.src,
  
//   },
//   {
//     id: 6,
//     image: p5.src,
 
//   }
// ]

// export default function HeroSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const isDesktop = useMediaQuery({ minWidth: 768 })

//   useEffect(() => {
//     setIsLoaded(true)
//     if (isDesktop) {
//       const slideTimer = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length)
//       }, 5000)
//       return () => clearInterval(slideTimer)
//     }
//   }, [isDesktop])

//   const nextSlide = () => {
//     if (isDesktop) {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }
//   }

//   const prevSlide = () => {
//     if (isDesktop) {
//       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//     }
//   }

//   return (
//     <section className="relative h-[90vh] md:h-screen">
//       {/* Slides */}
//       <div className="relative h-full overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               (isDesktop && index === currentSlide) || (!isDesktop && index === 0) ? "opacity-100" : "opacity-0"
//             }`}
//             aria-hidden={isDesktop ? index !== currentSlide : index !== 0}
//           >
//             <Image
//               src={slide.image || "/placeholder.svg"}
//               alt="{slide.title}"
//               fill
//               className="object-cover"
//               priority={index === 0}
//               sizes="100vw"
//             />
            
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons - Desktop Only */}
//       {isDesktop && (
//         <>
//           <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Indicators - Desktop Only */}
//           <div className="absolute bottom-8 left-0 right-0">
//             <div className="flex justify-center gap-2">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === currentSlide ? "w-8 bg-amber-400" : "bg-white/50 hover:bg-white"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                   aria-current={index === currentSlide}
//                 />
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </section>
//   )
// }

// "use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"

import p1 from '../../../Public/slide.jpg'
import p2 from '../../../Public/slide1.jpg'
import p3 from '../../../Public/slide2.jpg'
import slide1stt from '../../../Public/slide1stt.jpg'
// import p8 from '../../../Public/p2.jpg'
// import p5 from '../../../Public/p5.jpg'

const slides = [
{
    id: 1,
    image: slide1stt.src,
  },
 {
    id: 2,
    image: p1.src,
  },
  {
    id: 3,
    image: p2.src,
  },
  {
    id: 4,
    image: p3.src,
  },
  // {
  //   id: 5,
  //   image: p8.src,
  // },
  // {
  //   id: 6,
  //   image: p5.src,
  // }
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
