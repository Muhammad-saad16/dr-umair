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

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Publications", href: "/publications" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/DrUmairMahmoodSiddiqui",
      label: "Facebook",
    },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@DrUmairMahmoodSiddiquiOfficial",
      label: "YouTube",
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E] text-white relative overflow-hidden">
      {/* Animated wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 animate-pulse"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/10"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Navigation Links */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Quick Links</h3>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <div
                  key={link.name}
                  className={`transform transition-all duration-500 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    className="block text-white/80 hover:text-amber-400 hover:translate-x-2 transition-all duration-300 group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center group hover:translate-x-2 transition-all duration-300">
                <div className="bg-amber-400/20 p-3 rounded-full mr-4 group-hover:bg-amber-400/30 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <a
                    href="mailto:btm1432@gmail.com"
                    className="text-white hover:text-amber-400 transition-colors duration-300"
                  >
                    btm1432@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group hover:translate-x-2 transition-all duration-300">
                <div className="bg-amber-400/20 p-3 rounded-full mr-4 group-hover:bg-amber-400/30 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Phone</p>
                  <a
                    href="tel:+923362342386"
                    className="text-white hover:text-amber-400 transition-colors duration-300"
                  >
                    +92 336 2342386
                  </a>
                </div>
              </div>

              <div className="flex items-center group hover:translate-x-2 transition-all duration-300">
                <div className="bg-amber-400/20 p-3 rounded-full mr-4 group-hover:bg-amber-400/30 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">Address</p>
                  <p className="text-white">City of Knowledge, B/105, 13D/1, Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Follow Us</h3>
            <p className="text-white/80 mb-6">Connect with us on social media for updates and insights.</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white/10 p-4 rounded-full hover:bg-amber-400 hover:scale-110 transition-all duration-300 transform ${
                    isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 text-white group-hover:text-gray-900 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t border-white/20 pt-8 text-center transform transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-white/80">
            &copy; {new Date().getFullYear()} Dr Umair Mehmood Siddiqui. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </footer>
  )
}
