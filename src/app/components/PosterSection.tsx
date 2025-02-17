// import Image from "next/image"
// import singapore from "../../../public/singapore.jpg"


// interface PosterInfo {
//   title: string
//   date: string
//   event: string
//   location?: string
//   description: string
  
//   imageUrl: string
// }

// const posterInfo: PosterInfo = {
//   title: "Singapore Tour",
//   date: "Feburary 6-9, 2025",
//   event: "Singapore Muslim Festival 2025",
// //   location: "Islamic Cultural Center, 123 Main St, Cityville",
//   description:
//     "Dr. Umair Mahmood Siddiqui is currently on a tour of Singapore, where he is actively participating in various religious and educational gatherings. During his visit, he is attending the Singapore Muslim Festival, engaging with the local community, and meeting distinguished personalities to foster meaningful discussions and collaborations.",

//   imageUrl: "/event-poster9.jpg",
// }

// export default function PosterSection() {
//     return (
//       <section className="py-16 bg-secondary">
//         <div className="container mx-auto px-4">
//          <Image src={singapore} alt="Singapore Tour"/>
//         </div>
//       </section>
//     )
//   }
  

import Image from "next/image"
import singapore from "../../../Public/singapore.jpg"

export default function PosterSection() {
  return (
    <section className="py-16 bg-[url('/back2.jpg')] object-cover">
      <div className="container mx-auto px-4">
        <Image src={singapore} alt="Singapore Tour" />
      </div>
    </section>
  )
}
