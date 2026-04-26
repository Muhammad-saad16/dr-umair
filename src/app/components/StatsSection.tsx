'use client'
import { useEffect, useRef, useState } from 'react'
import { BookOpen, Globe, Award, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const stats: { icon: LucideIcon; value: number; suffix: string; label: string }[] = [
  { icon: BookOpen, value: 30, suffix: '+', label: 'Publications' },
  { icon: Globe, value: 15, suffix: '+', label: 'Countries Visited' },
  { icon: Award, value: 20, suffix: '+', label: 'Years of Scholarship' },
  { icon: Users, value: 50, suffix: 'K+', label: 'Community Members' },
]

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  isVisible,
  delay,
}: {
  icon: LucideIcon
  value: number
  suffix: string
  label: string
  isVisible: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const timer = setTimeout(() => {
      let start = 0
      const duration = 1800
      const step = value / (duration / 16)
      const counter = setInterval(() => {
        start += step
        if (start >= value) {
          setCount(value)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(counter)
    }, delay)
    return () => clearTimeout(timer)
  }, [isVisible, value, delay])

  return (
    <div
      className={`group text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/35 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: 'opacity, transform, border-color, box-shadow' }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/20 mb-4 group-hover:bg-amber-400/20 group-hover:border-amber-400/40 transition-all duration-300 group-hover:scale-110">
        <Icon className="w-7 h-7 text-amber-400" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
        {count}
        <span className="text-amber-400">{suffix}</span>
      </div>
      <div className="text-white/60 text-sm font-medium uppercase tracking-widest">
        {label}
      </div>
    </div>
  )
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="islamic-divider mb-3">
            <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            A Life of <span className="text-amber-400">Scholarship</span>
          </h2>
          <div className="islamic-divider mt-3">
            <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
