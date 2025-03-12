// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import meet1 from '../../../Public/meet1.jpg'
// import meet2 from '../../../Public/meet2.jpg'
// import meet3 from '../../../Public/mee3.jpg'
// import meet4 from '../../../Public/meet3.jpg'


// const interactions = [
//   {
//     id: 1,
//     leader: "Zainul Abidin Rasheed",
//     description: "A Warm Meeting with Zainul Abidin Rasheed, Singapore’s Ambassador to Kuwait",
//     image: meet4.src,
//     country: "Singapore"
//   },
//   {
//     id: 2,
//     leader: "Dr. Mohd Hasbi Abu Bakr",
//     description: "Dr. Mohd Hasbi Abu Bakr in discussion with Dr. Umair Mahmood Siddiqui at an official event in Malaysia.",
//     image: meet2.src,
//     country: "City of Knowledge, Karachi"
//   },
//   {
//     id: 3,
//     leader: "Mufti Sher Muhammad Khan",
//     description: "Dr. Umair presenting his famous book to the Chief Guest, Mufti Sher Muhammad Khan",
//     image: meet3.src,
//     country: "City of Knowledge, Karachi"
//   },
 
//   {
//     id: 4,
//     leader: "Sahibzada Sultan Ahmad Ali",
//     description: "Sahibzada Sultan Ahmad Ali welcoming Dr. Umair Mahmood Siddiqui in a formal meeting.",
//     image: meet1.src,
//     country: "Karachi"
//   },
//   {
//     id: 5,
//     leader: "Mufti Sher Muhammad Khan",
//     description: "Dr. Umair presenting his famous book to the Chief Guest, Mufti Sher Muhammad Khan",
//     image: meet5.src,
//     country: "City of Knowledge, Karachi"
//   },
 
//   {
//     id: 6,
//     leader: "Sahibzada Sultan Ahmad Ali",
//     description: "Sahibzada Sultan Ahmad Ali welcoming Dr. Umair Mahmood Siddiqui in a formal meeting.",
//     image: meet6.src,
//     country: "Karachi"
//   },
// ];


// export default function InteractionsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 3 >= interactions.length ? 0 : prevIndex + 3))
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 3 < 0 ? Math.max(interactions.length - 3, 0) : prevIndex - 3))
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide()
//     }, 7000)

//     return () => clearInterval(timer)
//   }, [nextSlide]) // Added nextSlide to dependencies

//   return (
//     <section className="section-padding  bg-[url('/back2.jpg')] object-cover ">
//       <div className="container mx-auto px-4 ">
//         <h2 className="elegant-title text-4xl md:text-5xl text-center mb-12 mt-12 font-bold">
//            <span className="gold-text">Interactions</span> with Personalities
//         </h2>

//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-out"
//             style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
//           >
//             {interactions.map((item) => (
//               <div key={item.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
//                 <div className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//                   <div className="relative h-60">
//                     <Image src={item.image || "/placeholder.svg"} alt={item.leader} fill className="object-cover" />
//                   </div>
//                   <div className="p-6 bg-[#1a4f7a]">
//                     <h3 className="text-xl font-semibold mb-2 text-white">{item.leader}</h3>
//                     <p className="text-gray-300 mb-4">{item.description}</p>
//                     <span className="inline-block px-3 py-1 bg-accent-teal/20 border border-accent-teal rounded-full text-sm text-accent-teal">
//                       {item.country}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-r-md transition-colors duration-300"
//             aria-label="Previous interactions"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-l-md transition-colors duration-300"
//             aria-label="Next interactions"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         <div className="flex justify-center mt-8">
//           {Array.from({ length: Math.ceil(interactions.length / 3) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index * 3)}
//               className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
//                 Math.floor(currentIndex / 3) === index ? "bg-accent-teal w-6" : "bg-gray-400"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import Image from 'next/image'
import meet1 from '../../../Public/meet1.jpg'
import meet2 from '../../../Public/meet2.jpg'
import meet3 from '../../../Public/mee3.jpg'
import meet4 from '../../../Public/meet3.jpg'


const interactions = [
  {
    id: 1,
    leader: "Zainul Abidin Rasheed",
    description: "Zainul Abidin Rasheed, Singapore’s Ambassador to Kuwait and Special Envoy of the Minister for Foreign Affairs",
    image: meet4.src,
    country: "Singapore"
  },
  {
    id: 2,
    leader: "Dr. Mohd Hasbi Abu Bakr",
    description: "Dr. Mohd Hasbi Abu Bakr in discussion with Dr. Umair Mahmood Siddiqui at an official event in Malaysia.",
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
    description: "Meeting with His Excellency Sheikh Dr. Saleh bin Abdullah bin Humaid at the International Islamic Fiqh Academy (IIFA).",
    image: meet1.src,
    country: "Karachi"
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
