import Image from 'next/image'
import Link from 'next/link'

const events = [
  {
    id: 1,
    title: "Annual Islamic Conference",
    date: "August 15-17, 2023",
    description: "Join us for three days of enlightening talks, workshops, and networking with scholars and fellow Muslims.",
    image: "/poster1.jpg?height=400&width=600"
  },
  {
    id: 2,
    title: "Ramadan Night of Power",
    date: "April 17, 2023",
    description: "Experience the spiritual atmosphere of Laylat al-Qadr with communal prayers and Quranic recitations.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 3,
    title: "Islamic Art Exhibition",
    date: "September 5-10, 2023",
    description: "Explore the beauty of Islamic calligraphy, architecture, and visual arts in this week-long exhibition.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 4,
    title: "Youth Leadership Workshop",
    date: "July 22-23, 2023",
    description: "Empower the next generation of Muslim leaders with practical skills and Islamic guidance.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function EventSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#05445E] via-[#189AB4] to-[#05445E]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Upcoming Events</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Featured Event */}
          <div className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="relative aspect-video">
              <Image
                src={events[0].image}
                alt={events[0].title}
                fill
                className="bg-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{events[0].title}</h3>
              <p className="text-amber-400 mb-4">{events[0].date}</p>
              <p className="text-gray-200 mb-6">{events[0].description}</p>
              <Link
                href="/events"
                className="inline-block px-6 py-2 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Event List */}
          <div className="space-y-6">
            {events.slice(1).map((event) => (
              <div key={event.id} className="flex gap-6 bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="w-1/3 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-amber-400 mb-2">{event.date}</p>
                  <p className="text-gray-200 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

