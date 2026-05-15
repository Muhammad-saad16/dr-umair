import HeroSlider from './HeroSlider'
// import IslamicQuoteBanner from './IslamicQuoteBanner'
// import StatsSection from './StatsSection'
import BooksSection from './BooksSection'
import VideoSection from './VideoSection'
import TestimonialsSection from './TestimonialsSection'
import InteractionsSection from './InteractionsSection'
import EventPosters from './EventPosters'
import PosterSection from './PosterSection'

export default function HomePage() {
  return (
    <main>
      <HeroSlider />
      {/* <IslamicQuoteBanner /> */}
      {/* <StatsSection /> */}
      <InteractionsSection />
      <VideoSection />
      <EventPosters />
      <PosterSection />
      <BooksSection />
      
      <TestimonialsSection />
    </main>
  )
}
