import Image from 'next/image'
import Link from 'next/link'
import banner from '../../../Public/new-banner.jpg'


export default function BiographySection() {
    return (
        <section className="py-24 bg-[url('/back2.jpg')] object-cover">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="relative w-full h-[300px] md:h-[300px] lg:h-[500px] mb-12 rounded-lg overflow-hidden">
                        <Image
                            src={banner}
                            alt="Dr. Ahmad Al-Rashid Banner"
                            fill
                            className="bj-cover"
                        />

                    </div>
                    <div className="flex justify-center">
  <Link 
    href="/biography" 
    className="inline-block px-8 py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition-colors"
  >
   More About Dr. Umair Mehmood Siddiqui
  </Link>
</div>

                </div>
            </div>
        </section>
    )
}

