import { GraduationCap, Book, Users, Globe } from 'lucide-react'
import Image from 'next/image'
import event1 from '../../../Public/event1.jpg'

export default function AboutSection() {
  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Expert Scholars",
      description: "Learn from qualified Islamic scholars with years of experience"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Rich Resources",
      description: "Access to extensive Islamic literature and educational materials"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Join a vibrant community of knowledge seekers"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Connect with students and scholars worldwide"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400 rounded-3xl transform rotate-6"></div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={event1}
                alt="Islamic Scholar teaching"
                fill
                className="bg-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Discover the Path of Knowledge and Wisdom
              </h2>
              <p className="text-xl text-gray-200">
                We are dedicated to spreading authentic Islamic knowledge through comprehensive education and guidance. Our mission is to make Islamic learning accessible to everyone while maintaining the highest standards of scholarship.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-400 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

