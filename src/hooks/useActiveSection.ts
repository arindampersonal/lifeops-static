import { useState, useEffect } from 'react'

const sections = [
  'hero',
  'philosophy',
  'pillars',
  'rituals',
  'imperfect',
  'canvas',
  'gallery',
  'journal',
  'manifesto',
  'cta',
]

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          const id = visible[0].target.id
          if (sections.includes(id)) {
            setActiveSection(id)
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    )

    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return activeSection
}
