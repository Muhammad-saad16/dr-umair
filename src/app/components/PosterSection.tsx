import Image from "next/image"
import canada from "../../../Public/canada.jpg"

export default function PosterSection() {
  return (
    <section className="py-16 bg-[url('/back2.jpg')] object-cover">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Recent Global Visits</h2>
      <div className="container mx-auto px-4">
        
        <Image src={canada} alt="canada Tour" />
      </div>
    </section>
  )
}



