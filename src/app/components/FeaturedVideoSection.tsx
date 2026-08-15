const FACEBOOK_VIDEO_URL = "https://www.facebook.com/reel/1690236688861835/"

export default function FeaturedVideoSection() {
  const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    FACEBOOK_VIDEO_URL
  )}&show_text=false&width=476&t=0`

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

        <div className="max-w-sm mx-auto card-islamic rounded-xl overflow-hidden shadow-lg">
          <div className="h-[3px] w-full bg-gradient-to-r from-amber-700 via-amber-400 to-amber-700" />
          <div className="relative w-full aspect-[9/16] bg-black/20">
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
      </div>
    </section>
  )
}
