// import Layout from '../components/Layout'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    // <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                content: "btm1432@gmail.com",
                link: "mailto:btm1432@gmail.com"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                content: "+92 336 2342386",
                link: "tel:+923362342386"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Address",
                content: "City of Knowledge, B/105, 13D/1, Karachi, Pakistan",
                link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.469016694876!2d67.08149487520188!3d24.916087377893025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0f8e914555%3A0xbb2e05271b8f3345!2sCity%20of%20Knowledge!5e0!3m2!1sen!2s!4v1736785035374!5m2!1sen!2s"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target={item.title === "Address" ? "_blank" : "_self"}
                className="flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-center group"
              >
                <div className="mb-4 text-amber-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/80">{item.content}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    // </Layout>
  )
}
