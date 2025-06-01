"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircleQuestion ,MessageCircle , CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xldnrjjv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
{/*             <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1> */}
            <h1 className="text-4xl text-white/80 text-lg">Get in touch with Dr. Umair Mehmood Siddiqui</h1>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <MessageCircleQuestion className="w-8 h-8" />,
                title: "Questions",
              },
              {
                icon: <MessageCircle  className="w-8 h-8" />,
                title: "Feedback",
              },
              // {
              //   icon: <MapPin className="w-8 h-8" />,
              //   title: "Address",
              //   content: "City of Knowledge, B/105, 13D/1, Karachi, Pakistan",
              //   link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.469016694876!2d67.08149487520188!3d24.916087377893025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0f8e914555%3A0xbb2e05271b8f3345!2sCity%20of%20Knowledge!5e0!3m2!1sen!2s!4v1736785035374!5m2!1sen!2s",
              // },
            ].map((item, index) => (
              // <a
              //   key={index}
              //   href={item.link}
              //   target={item.title === "Address" ? "_blank" : "_self"}
              //   className="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-center group hover:scale-105"
              // >
                <div className="mb-4 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
{/*                 <p className="text-white/80">{item.content}</p> */}
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Send us a Message</h2>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-white mb-2 font-medium">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                  placeholder="What is this about?"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-amber-400 hover:bg-amber-500 disabled:bg-amber-400/50 text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
