import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const statements = [
  'Rest is productive when you need rest.',
  'Progress is meaningful even when it is invisible.',
  'You are allowed to begin again.',
]

export default function ImperfectLife() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="imperfect"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-forest overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="label-small text-sage-light mb-6 block">
            A Gentle Truth
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="heading-editorial text-white mb-8 max-w-3xl mx-auto">
            Some days will be beautiful. Some days will simply be difficult. Both
            belong to a meaningful life.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto mb-16" style={{ fontSize: 'clamp(1rem, 1.1vw + 0.3rem, 1.15rem)' }}>
            You will have uncertain days, unexpected changes, setbacks and moments
            when motivation disappears. Living intentionally does not mean
            controlling everything. It means learning to respond with patience,
            courage and kindness.
          </p>
        </ScrollReveal>

        {/* Three Statements */}
        <div className="space-y-8 md:space-y-10 mb-16">
          {statements.map((statement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.2 }}
            >
              <blockquote
                className="font-serif text-white/90 italic"
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw + 0.3rem, 2rem)',
                  lineHeight: 1.3,
                }}
              >
                "{statement}"
              </blockquote>
              {i < statements.length - 1 && (
                <div className="w-8 h-px bg-sage/30 mx-auto mt-8 md:mt-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
