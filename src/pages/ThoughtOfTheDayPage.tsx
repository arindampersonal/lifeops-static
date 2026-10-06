import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, Quote, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { thoughts, getTodaysThought } from '../data/thoughts'
import ScrollReveal from '../components/ScrollReveal'

export default function ThoughtOfTheDayPage() {
  const todaysThought = getTodaysThought()
  const [selectedThought, setSelectedThought] = useState(todaysThought)
  const [direction, setDirection] = useState(0)
  const [showArchive, setShowArchive] = useState(false)

  const currentIndex = thoughts.findIndex((t) => t.id === selectedThought.id)

  const navigateThought = (dir: 'prev' | 'next') => {
    const newIndex = dir === 'prev' ? currentIndex - 1 : currentIndex + 1
    if (newIndex >= 0 && newIndex < thoughts.length) {
      setDirection(dir === 'next' ? 1 : -1)
      setSelectedThought(thoughts[newIndex])
    }
  }

  const isToday = selectedThought.id === todaysThought.id

  // Group thoughts by month for archive
  const groupedThoughts = useMemo(() => {
    const groups: Record<string, typeof thoughts> = {}
    thoughts.forEach((thought) => {
      const monthKey = new Date(thought.date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
      if (!groups[monthKey]) groups[monthKey] = []
      groups[monthKey].push(thought)
    })
    return groups
  }, [])

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <>
      {/* Full-screen Thought Card */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with animation */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selectedThought.id + '-bg'}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={selectedThought.image}
              alt={selectedThought.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/80" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
          {/* Date & Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              {isToday && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/20 backdrop-blur-md text-gold-light text-xs font-medium rounded-full border border-gold/30">
                  <Sparkles size={12} />
                  Today's Thought
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md text-white/70 text-xs font-medium rounded-full border border-white/15">
                {selectedThought.category}
              </span>
            </div>
            <span className="text-white/40 text-sm">
              {new Date(selectedThought.date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </motion.div>

          {/* The Thought Quote */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={selectedThought.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-12"
            >
              <Quote
                size={40}
                className="text-gold/40 mx-auto mb-6"
                strokeWidth={1}
              />
              <blockquote
                className="font-serif text-white leading-[1.3] mb-8"
                style={{ fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.75rem)' }}
              >
                {selectedThought.thought}
              </blockquote>
              <p className="text-white/40 text-sm font-medium tracking-wide">
                — {selectedThought.author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Reflection */}
          <AnimatePresence mode="wait">
            {selectedThought.reflection && (
              <motion.div
                key={selectedThought.id + '-reflection'}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl mx-auto mb-12"
              >
                <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <span className="label-small text-gold-light/70 block mb-3">
                    Today's Reflection
                  </span>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {selectedThought.reflection}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6"
          >
            <button
              onClick={() => navigateThought('prev')}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? 'bg-white/5 text-white/20 cursor-not-allowed'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
              }`}
              aria-label="Previous thought"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => setShowArchive(!showArchive)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white/70 text-sm rounded-full border border-white/15 hover:bg-white/20 hover:text-white transition-all duration-300"
            >
              <Calendar size={16} />
              Browse Archive
            </button>

            <button
              onClick={() => navigateThought('next')}
              disabled={currentIndex === thoughts.length - 1}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentIndex === thoughts.length - 1
                  ? 'bg-white/5 text-white/20 cursor-not-allowed'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
              }`}
              aria-label="Next thought"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Archive Section */}
      <AnimatePresence>
        {showArchive && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-ivory overflow-hidden"
          >
            <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 md:py-24">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <span className="label-small text-sage mb-3 block">Archive</span>
                  <h2 className="heading-section text-charcoal">Past Thoughts</h2>
                </div>
              </ScrollReveal>

              {Object.entries(groupedThoughts).map(([month, monthThoughts]) => (
                <div key={month} className="mb-12 last:mb-0">
                  <h3 className="font-serif text-lg text-charcoal mb-6 sticky top-20 bg-ivory py-2 z-10 border-b border-border/50">
                    {month}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {monthThoughts.map((thought, i) => {
                      const isActive = thought.id === selectedThought.id
                      return (
                        <ScrollReveal key={thought.id} delay={i * 0.05}>
                          <button
                            onClick={() => {
                              setDirection(0)
                              setSelectedThought(thought)
                              setShowArchive(false)
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                              isActive
                                ? 'bg-sage/10 border-sage/30 shadow-sm'
                                : 'bg-white border-border/50 hover:border-sage/30 hover:shadow-sm'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <span
                                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                                  isActive
                                    ? 'bg-sage/20 text-sage'
                                    : 'bg-ivory text-stone'
                                }`}
                              >
                                {thought.category}
                              </span>
                              <span className="text-stone/50 text-xs">
                                {new Date(thought.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                              {thought.id === todaysThought.id && (
                                <Sparkles size={12} className="text-gold" />
                              )}
                            </div>
                            <p
                              className={`text-sm leading-relaxed line-clamp-3 ${
                                isActive ? 'text-charcoal' : 'text-stone group-hover:text-charcoal'
                              } transition-colors duration-300`}
                            >
                              {thought.thought}
                            </p>
                          </button>
                        </ScrollReveal>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Bottom nav */}
      <section className="py-12 md:py-16 bg-cream border-t border-border/50 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-charcoal/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </section>
    </>
  )
}
