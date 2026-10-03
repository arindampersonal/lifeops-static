import { Eye, Target, TrendingUp } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const principles = [
  {
    icon: Eye,
    title: 'Be Present',
    description: 'Give your attention to the life happening right now.',
  },
  {
    icon: Target,
    title: 'Be Intentional',
    description: 'Make choices that reflect what genuinely matters to you.',
  },
  {
    icon: TrendingUp,
    title: 'Keep Growing',
    description: 'Become a little wiser, healthier and more capable every day.',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 lg:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Editorial Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left: Typography + Text */}
          <div>
            <ScrollReveal>
              <span className="label-small text-sage mb-6 block">The Philosophy</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="heading-editorial text-charcoal mb-8">
                Life is not meant to be lived on autopilot.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="body-large mb-6">
                We spend years building careers, meeting expectations, chasing
                milestones and preparing for the future. Sometimes, in the process,
                we forget to experience the life we are working so hard to build.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="body-large">
                LifeOps is a reminder that a beautiful life is created through the
                little things we choose to do every day.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Photograph */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                  alt="A person enjoying a quiet morning moment with coffee beside a sunlit window"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-sage/20 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-sage/30 mx-auto mb-20" />

        {/* Three Principles */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {principles.map((principle, i) => (
            <ScrollReveal key={principle.title} delay={i * 0.15}>
              <div className="text-center group">
                <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300">
                  <principle.icon
                    size={22}
                    className="text-sage"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {principle.title}
                </h3>
                <p className="text-stone leading-relaxed">{principle.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
