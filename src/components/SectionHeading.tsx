import ScrollReveal from './ScrollReveal'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-16 md:mb-20`}>
      {label && (
        <ScrollReveal>
          <span
            className={`label-small inline-block mb-4 ${
              light ? 'text-sage-light' : 'text-sage'
            }`}
          >
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`heading-editorial mb-6 ${
            light ? 'text-white' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p
            className={`body-large max-w-2xl ${centered ? 'mx-auto' : ''} ${
              light ? 'text-white/70' : ''
            }`}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  )
}
