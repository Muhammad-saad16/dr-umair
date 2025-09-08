'use client'
import Image from 'next/image'
import meet1 from '../../../Public/meet1.jpg'
import meet2 from '../../../Public/e33.jpg'
import meet3 from '../../../Public/mee3.jpg'
import meet4 from '../../../Public/meet3.jpg'


const interactions = [
  {
    id: 1,
    leader: "Zainul Abidin Rasheed",
    description: "Zainul Abidin Rasheed, Karachi’s Ambassador to Kuwait and Special Envoy of the Minister for Foreign Affairs.",
    image: meet4.src,
    country: "Singapore"
  },
  {
    id: 2,
    leader: "Dr. Muhammad Eid Al-Mansour",
    description: "University of Damascus, Syria, internationally recognized scholar, specialized in Hadith Sciences. ",
    image: meet2.src,
    country: "Syria"
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
    description: "Meeting with His Excellency Sheikh Dr. Saleh bin Abdullah bin Humaid at the International Islamic Fiqh Academy (IIFA).",
    image: meet1.src,
    country: "Jeddah"
  },
];

export default function InteractionsSection() {
  return (
    <section className=" bg-[url('/back2.jpg')] object-cover">
      <div className="container mx-auto ">
        <h2 className="elegant-title text-2xl md:text-3xl text-center mb-12 mt-12 font-bold">
          <span className="gold-text">Interactions</span> with Personalities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {interactions.map((item) => (
            <div key={item.id} className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-60">
                <Image src={item.image || "/placeholder.svg"} alt={item.leader} fill className="object-cover" />
              </div>
              <div className="p-6 bg-[#1a4f7a]">
                <h3 className="text-xl font-semibold mb-2 text-white">{item.leader}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-accent-teal/20 border border-accent-teal rounded-full text-sm text-accent-teal">
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


