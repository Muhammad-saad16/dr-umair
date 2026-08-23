const YOUTUBE_VIDEO_ID = "Pb02utyudnY"

export default function FeaturedVideoSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="islamic-divider mb-3">
            <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white tracking-wide">
            Featured <span className="text-amber-400">Video</span>
          </h2>
          <div className="islamic-divider mt-3">
            <span className="text-amber-400 text-xl select-none" aria-hidden>✦</span>
          </div>
        </div>

        <div className="w-full card-islamic rounded-xl overflow-hidden shadow-lg">
          <div className="h-[3px] w-full bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />
          <div className="relative w-full aspect-video bg-black/20">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              className="absolute inset-0 h-full w-full"
              style={{ border: "none", overflow: "hidden" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Featured video"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
