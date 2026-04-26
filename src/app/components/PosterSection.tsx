import Image from "next/image"
import canada from "../../../Public/canada.jpg"

export default function PosterSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <div className="islamic-divider mb-3">
          <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
        </div>
        <h2 className="text-4xl font-bold text-center text-white tracking-wide">Recent Global Visits</h2>
        <div className="islamic-divider mt-3">
          <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-2xl border border-amber-400/10 ring-1 ring-white/5">
          <Image src={canada} alt="canada Tour" className="w-full" />
        </div>
      </div>
    </section>
  )
}
