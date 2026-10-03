import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const statements = [
  'Your health is worth protecting.',
  'Your peace deserves boundaries.',
  'Your relationships deserve your presence.',
  'Your money should serve your values.',
  'Your curiosity should never expire.',
  'Your work should have room for meaning.',
  'Your life should contain moments of joy.',
  'You do not need to have everything figured out.',
  'Small actions can create meaningful change.',
  'You deserve to experience the life you are building.',
]

const closingLine = 'Make space for what matters. Let go of what doesn\'t. Keep becoming.'

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="manifesto" className="py-24 md:py-32 lg:py-40 bg-ivory">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <ScrollReveal>
          <span className="label-small text-sage mb-6 block">Our Manifesto</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="heading-section text-charcoal mb-16">Our manifesto.</h2>
        </ScrollReveal>

        <div className="space-y-6 md:space-y-8 mb-20">
          {statements.map((statement, i) => (
            <motion.p
              key={i}
              className="font-serif text-charcoal/80 leading-relaxed"
              style={{
                fontSize: 'clamp(1.1rem, 1.5vw + 0.3rem, 1.5rem)',
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {statement}
            </motion.p>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="w-12 h-px bg-gold mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        />

        {/* Closing */}
        <motion.p
          className="font-serif italic text-sage-dark"
          style={{
            fontSize: 'clamp(1.15rem, 1.5vw + 0.3rem, 1.5rem)',
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          "{closingLine}"
        </motion.p>
      </div>
    </section>
  )
}
