"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
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

    const footer = document.querySelector("footer")
    if (footer) {
      observer.observe(footer)
    }

    return () => {
      if (footer) {
        observer.unobserve(footer)
      }
    }
  }, [])

  return (
    <footer className="bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E] text-white relative">
      {/* Animated wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current text-[#05445E]"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[ "Biography", "Publications", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-amber-400" />
                <a href="mailto:info@example.com" className="hover:text-amber-400 transition-colors">
                  btm1432@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-amber-400" />
                <a href="tel:+1234567890" className="hover:text-amber-400 transition-colors">
                  +92 336 2342386
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-amber-400" />
                <span>City of Knowledge,B/105,13D/1, Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-full bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-amber-400 text-gray-900 rounded-r-full hover:bg-amber-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.facebook.com/DrUmairMahmoodSiddiqui"
                  className="bg-white/10 p-3 rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`mt-12 pt-8 border-t border-white/20 text-center transform transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} Dr Umair Mehmood Siddiqui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

