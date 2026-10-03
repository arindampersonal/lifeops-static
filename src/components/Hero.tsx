import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Label */}
        <motion.span
          className="label-small inline-block text-gold-light mb-6 tracking-[0.2em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          THE ART OF LIVING WELL BY ARINDAM DUTTA
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          className="font-serif text-white leading-[1.05] mb-8"
          style={{ fontSize: 'clamp(2.5rem, 6vw + 0.5rem, 5.5rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Make Your Life a Beautiful Place to Be.
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 1.2vw + 0.3rem, 1.2rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Not by chasing perfection. But by making small, meaningful choices that
          bring more health, freedom, connection, curiosity and peace into every
          day.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href="#philosophy"
            onClick={(e) => handleClick(e, '#philosophy')}
            className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal rounded-full font-medium text-sm hover:bg-cream transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore the Philosophy
          </a>
          <a
            href="#pillars"
            onClick={(e) => handleClick(e, '#pillars')}
            className="inline-flex items-center px-8 py-3.5 bg-white/10 text-white border border-white/25 rounded-full font-medium text-sm hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Discover the Pillars
          </a>
        </motion.div>

        {/* Editorial Note */}
        <motion.p
          className="text-white/50 text-sm italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          A personal operating system for a more intentional life.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
