import { pillars } from '../data/pillars'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

export default function PillarSection() {
  return (
    <section id="pillars" className="py-24 md:py-32 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="The Seven Pillars"
          title="Seven pillars. One beautiful life."
          description="Every part of your life influences every other part. True well-being comes from giving the important things the attention they deserve."
        />

        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {pillars.map((pillar, index) => {
            const isReversed = index % 2 !== 0
            const Icon = pillar.icon

            return (
              <div
                key={pillar.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center ${
                  isReversed ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <ScrollReveal
                  direction={isReversed ? 'right' : 'left'}
                  className={isReversed ? 'lg:order-2' : ''}
                >
                  <div className="relative group">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-border">
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        onLoad={(e) => e.currentTarget.classList.add('loaded')}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
                        }}
                      />
                    </div>
                    {/* Number badge */}
                    <div
                      className={`absolute -top-4 ${
                        isReversed ? '-left-4' : '-right-4'
                      } w-16 h-16 bg-ivory rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="font-serif text-2xl text-sage">
                        {pillar.number}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Content */}
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <ScrollReveal delay={0.1}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                        <Icon size={20} className="text-sage" strokeWidth={1.5} />
                      </div>
                      <span className="label-small text-sage">
                        Pillar {pillar.number}
                      </span>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.15}>
                    <h3 className="heading-pillar text-charcoal mb-2">
                      {pillar.title}
                    </h3>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <p className="font-serif text-lg text-sage-dark italic mb-5">
                      {pillar.subtitle}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.25}>
                    <p className="text-stone leading-relaxed mb-8">
                      {pillar.description}
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3}>
                    <div className="space-y-3">
                      {pillar.practices.map((practice, pi) => (
                        <div
                          key={pi}
                          className="flex items-start gap-3 group/practice"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0 group-hover/practice:scale-125 transition-transform" />
                          <p className="text-stone text-[0.95rem] leading-relaxed">
                            {practice}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
