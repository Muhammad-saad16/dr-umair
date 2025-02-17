'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const words = ['Knowledge', 'Wisdom', 'Guidance', 'Understanding']
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(wordInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background with particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]" />
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23FFFFFF'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E\")", backgroundAttachment: 'fixed', opacity: 0.1 }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="block">Discover the</span>
            <span className="block">World of Islamic</span>
            <span className="relative inline-block">
              <span className="absolute transition-all duration-500 ease-in-out">
                {words.map((word, index) => (
                  <span
                    key={word}
                    className={`absolute inset-0 transition-all duration-500 ${
                      currentWord === index
                        ? 'opacity-100 transform-none'
                        : 'opacity-0 -translate-y-4'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </span>
              <span className="opacity-0">Knowledge</span>
            </span>
          </h1>
        </div>

        <p className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          Embark on a journey of spiritual growth and enlightenment through our comprehensive collection of
          Islamic teachings and scholarly works.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <Link
            href="/library"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 ease-in-out bg-amber-500 rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-500 to-amber-600 transition-all duration-300 ease-in-out transform group-hover:scale-105"></span>
            <span className="relative">Explore Our Library</span>
          </Link>

          <Link
            href="/about"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white transition-all duration-300 bg-transparent border-2 border-white rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-white transition-all duration-300 ease-in-out transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            <span className="relative group-hover:text-gray-900">Learn More</span>
          </Link>
        </div>

        <div className={`relative w-full max-w-md transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-3xl opacity-50 transform -rotate-12"></div>
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Islamic Scholar"
            width={600}
            height={600}
            className="relative z-10 rounded-full"
          />
        </div>
      </div>
    </section>
  )
}

