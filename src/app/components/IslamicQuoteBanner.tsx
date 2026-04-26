'use client'
import { useEffect, useState } from 'react'

const verses = [
  {
    arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    translation: '"And say: My Lord, increase me in knowledge."',
    reference: "Surah Ta-Ha — 20:114",
  },
  {
    arabic: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
    translation: '"Indeed, those who fear Allah among His servants are the scholars."',
    reference: "Surah Fatir — 35:28",
  },
  {
    arabic: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
    translation: '"Allah will raise those who have believed among you and those who were given knowledge, by degrees."',
    reference: "Surah Al-Mujadila — 58:11",
  },
]

export default function IslamicQuoteBanner() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % verses.length)
        setVisible(true)
      }, 600)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const verse = verses[current]

  return (
    <section className="py-14 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031d2b]/90 via-[#0d2d42]/70 to-[#031d2b]/90" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 10% 50%, rgba(251,191,36,0.06) 0%, transparent 55%),
                            radial-gradient(ellipse at 90% 50%, rgba(251,191,36,0.06) 0%, transparent 55%)`,
        }}
      />
      {/* Gold border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="container mx-auto px-4 text-center relative">
        {/* Giant decorative quote mark */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 text-amber-400/10 select-none pointer-events-none"
          style={{ fontSize: '10rem', lineHeight: 1, fontFamily: 'Georgia, serif' }}
          aria-hidden
        >
          &quot
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          {/* Arabic text */}
          <p
            className="text-3xl md:text-5xl font-bold text-amber-300 mb-5 leading-loose"
            style={{ fontFamily: 'Georgia, serif' }}
            dir="rtl"
          >
            {verse.arabic}
          </p>

          {/* English translation */}
          <p className="text-white/85 text-base md:text-lg italic mb-3 max-w-2xl mx-auto leading-relaxed">
            {verse.translation}
          </p>

          {/* Reference */}
          <p className="text-amber-400/70 text-xs font-semibold tracking-widest uppercase">
            {verse.reference}
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-7">
          {verses.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false)
                setTimeout(() => {
                  setCurrent(i)
                  setVisible(true)
                }, 300)
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Verse ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
