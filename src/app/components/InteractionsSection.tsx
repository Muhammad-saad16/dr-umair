'use client'
import Image from 'next/image'
import meet1 from '../../../Public/meet1.jpg'
import meet2 from '../../../Public/e33.jpg'
import meet3 from '../../../Public/mee3.jpg'
import meet4 from '../../../Public/meet3.jpg'
import meet8 from '../../../Public/meet8.jpg'
import meet9 from '../../../Public/meet9.jpg'
import meet10 from '../../../Public/meet10.jpg'
import meet11 from '../../../Public/meet11.jpg'

const interactions = [
  {
    id: 1,
    leader: "Zainul Abidin Rasheed",
    description: "Zainul Abidin Rasheed, Karachi's Ambassador to Kuwait and Special Envoy of the Minister for Foreign Affairs.",
    image: meet4.src,
    country: "Singapore"
  },
  {
    id: 2,
    leader: "Dr. Muhammad Eid Al-Mansour",
    description: "University of Damascus, Syria, internationally recognized scholar, specialized in Hadith Sciences. ",
    image: meet2.src,
    country: "City of Knowledge, Karachi"
  },
  {
    id: 3,
    leader: "Mufti Sher Muhammad",
    description: "Mufti Sher Muhammad Khan is associated with Darul Ifta and Darul Uloom Muhammadia Ghousia Bhera Sharif.",
    image: meet3.src,
    country: "City of Knowledge, Karachi"
  },
  {
    id: 4,
    leader: "Sheikh Dr. Saleh Abdullah ",
    description: "Meeting with His Excellency Sheikh Dr. Saleh bin Abdullah bin Humaid at the International Islamic Fiqh Academy (IIFA).",
    image: meet1.src,
    country: "Jeddah"
  },
    {
    id: 5,
    leader: "Hazrat Pir Syed Lakht-e-Hasanian",
    description: "Hazrat Pir Syed Lakht-e-Hasanian, Founder & Chairman of Muslim Hands UK.",
    image: meet8.src,
    country: "Singapore"
  },
  {
    id: 6,
    leader: "Mufti Sher Muhammad Khan Sahib",
    description: "The scholar and Sheikh of Hadith, Mufti Sher Muhammad Khan Sahib. ",
    image: meet9.src,
    country: "City of Knowledge, Karachi"
  },
  {
    id: 7,
    leader: "Sheikh Muhammad Al-Khamis Suleiman Usman",
    description: "Sheikh Muhammad Al-Khamis Suleiman Uthman, Professor of Al-Hadith and Jurisprudence at the University of Egypt.",
    image: meet10.src,
    country: "City of Knowledge, Karachi"
  },
  {
    id: 8,
    leader: "Prof Imam Syed Badiuddin Soharwardy",
    description: "Prof Imam Syed Badiuddin Soharwardy, founder of Islamic Supreme Council of Canada",
    image: meet11.src,
    country: "Jeddah"
  },
]

export default function InteractionsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="islamic-divider mb-3">
            <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
          </div>
          <h2 className="text-2xl md:text-3xl text-center font-bold tracking-wide">
            <span className="text-amber-400">Interactions</span> with Personalities
          </h2>
          <div className="islamic-divider mt-3">
            <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {interactions.map((item) => (
            <div key={item.id} className="card-islamic group rounded-xl overflow-hidden shadow-lg">
              {/* Gold top accent bar */}
              <div className="h-[3px] w-full bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />

              <div className="relative h-60">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.leader}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d2e]/75 to-transparent" />
              </div>

              <div className="p-5">
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mb-3" />
                <h3 className="text-lg font-semibold mb-2 text-white leading-snug">{item.leader}</h3>
                <p className="text-gray-300/90 mb-4 text-sm leading-relaxed">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-400/25 rounded-full text-xs text-amber-300">
                  <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {item.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
