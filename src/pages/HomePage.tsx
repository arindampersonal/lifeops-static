import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import PillarSection from '../components/PillarSection'
import DailyRituals from '../components/DailyRituals'
import ImperfectLife from '../components/ImperfectLife'
import LifeCanvas from '../components/LifeCanvas'
import SlowLivingGallery from '../components/SlowLivingGallery'
import Journal from '../components/Journal'
import Manifesto from '../components/Manifesto'
import FinalCTA from '../components/FinalCTA'
import StoriesPreview from '../components/StoriesPreview'
import ThoughtPreview from '../components/ThoughtPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <PillarSection />
      <DailyRituals />
      <ImperfectLife />
      <LifeCanvas />
      <SlowLivingGallery />
      <ThoughtPreview />
      <StoriesPreview />
      <Journal />
      <Manifesto />
      <FinalCTA />
    </>
  )
}
