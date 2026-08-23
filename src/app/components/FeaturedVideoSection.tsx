const FEATURED_VIDEOS = [
  { type: "facebook", url: "https://www.facebook.com/reel/1690236688861835/" },
  { type: "youtube", id: "Pb02utyudnY" },
] as const

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

        <div className="flex flex-wrap justify-center gap-8">
          {FEATURED_VIDEOS.map((video, index) => {
            const embedSrc =
              video.type === "facebook"
                ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                    video.url
                  )}&show_text=false&width=500&t=0`
                : `https://www.youtube.com/embed/${video.id}`

            return (
              <div
                key={index}
                className="w-full max-w-lg card-islamic rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-[3px] w-full bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />
                <div
                  className={`relative w-full bg-black/20 ${
                    video.type === "facebook" ? "aspect-[9/16]" : "aspect-video"
                  }`}
                >
                  <iframe
                    src={embedSrc}
                    className="absolute inset-0 h-full w-full"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title="Featured video"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
