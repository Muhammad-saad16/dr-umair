import Image from 'next/image'
import about from '../../../Public/about.png'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center text-white">Dr. Umair Mahmood Siddiqui</h1>

        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={about}
            alt="Dr. Umair Mahmood Siddiqui"
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </div>
    </div>
  )
}
