import ScrollReveal from './ScrollReveal'

export default function FinalCTA() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="cta" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=85"
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-20">
        <ScrollReveal>
          <span className="label-small text-gold-light mb-6 block tracking-[0.2em]">
            The Beginning
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2
            className="font-serif text-white mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)', lineHeight: 1.1 }}
          >
            Your life is happening now. Make it beautiful.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-white/70 leading-relaxed mb-10 max-w-xl mx-auto" style={{ fontSize: 'clamp(1rem, 1.1vw + 0.3rem, 1.15rem)' }}>
            You don't need a perfect plan, a perfect moment or a completely
            different life to begin. Choose one meaningful thing. Start there.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="flex flex-col items-center gap-4">
            <a
              href="#canvas"
              onClick={(e) => handleClick(e, '#canvas')}
              className="inline-flex items-center px-8 py-3.5 bg-white text-charcoal rounded-full font-medium text-sm hover:bg-cream transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Design Your Life Canvas
            </a>
            <a
              href="#hero"
              onClick={(e) => handleClick(e, '#hero')}
              className="text-white/50 text-sm hover:text-white/80 transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white/50"
            >
              Return to the Beginning
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
