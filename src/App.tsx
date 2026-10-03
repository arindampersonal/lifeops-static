import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import PillarSection from './components/PillarSection'
import DailyRituals from './components/DailyRituals'
import ImperfectLife from './components/ImperfectLife'
import LifeCanvas from './components/LifeCanvas'
import SlowLivingGallery from './components/SlowLivingGallery'
import Journal from './components/Journal'
import Manifesto from './components/Manifesto'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <PillarSection />
        <DailyRituals />
        <ImperfectLife />
        <LifeCanvas />
        <SlowLivingGallery />
        <Journal />
        <Manifesto />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
