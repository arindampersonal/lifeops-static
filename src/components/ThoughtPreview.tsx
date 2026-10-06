import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, ArrowRight, Sparkles } from 'lucide-react'
import { getTodaysThought } from '../data/thoughts'
import ScrollReveal from './ScrollReveal'

export default function ThoughtPreview() {
  const thought = getTodaysThought()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="thought" className="py-24 md:py-32 lg:py-40 bg-cream" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-4">
            <span className="label-small text-sage mb-4 block">Thought of the Day</span>
          </div>
        </ScrollReveal>

        {/* Main Thought Card */}
        <ScrollReveal delay={0.1}>
          <Link
            to="/thought-of-the-day"
            className="group block max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center justify-center">
              {/* Background Image */}
              <img
                src={thought.image}
                alt={thought.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/50 to-charcoal/70" />

              {/* Content Overlay */}
              <div className="relative z-10 px-8 md:px-16 py-16 text-center max-w-3xl mx-auto">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center gap-2 mb-6"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/20 backdrop-blur-md text-gold-light text-xs font-medium rounded-full border border-gold/30">
                    <Sparkles size={12} />
                    {new Date(thought.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </motion.div>

                {/* Quote icon */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Quote
                    size={32}
                    className="text-white/30 mx-auto mb-6"
                    strokeWidth={1}
                  />
                </motion.div>

                {/* The Thought */}
                <motion.blockquote
                  className="font-serif text-white leading-[1.35] mb-8"
                  style={{ fontSize: 'clamp(1.25rem, 2.5vw + 0.3rem, 2.25rem)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  {thought.thought}
                </motion.blockquote>

                {/* CTA */}
                <motion.div
                  className="flex items-center justify-center gap-2 text-white/60 text-sm font-medium group-hover:text-white/90 group-hover:gap-3 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Explore All Thoughts
                  <ArrowRight size={14} />
                </motion.div>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
