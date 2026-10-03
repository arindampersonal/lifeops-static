import { Sunrise, Sun, Moon } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

interface TimeBlock {
  icon: typeof Sunrise
  period: string
  title: string
  rituals: string[]
}

const timeBlocks: TimeBlock[] = [
  {
    icon: Sunrise,
    period: 'THE MORNING',
    title: 'Begin with intention',
    rituals: [
      'Wake up with enough time to avoid immediately rushing.',
      'Drink water and get some natural light.',
      'Move your body, even if only for a few minutes.',
      'Spend a few quiet moments deciding what matters today.',
    ],
  },
  {
    icon: Sun,
    period: 'THE DAY',
    title: 'Give your attention a purpose',
    rituals: [
      'Focus on one meaningful task at a time.',
      'Take breaks before exhaustion forces you to stop.',
      'Eat mindfully and make room for movement.',
      'Connect with people instead of spending every moment in front of a screen.',
    ],
  },
  {
    icon: Moon,
    period: 'THE EVENING',
    title: 'Make space to recover',
    rituals: [
      'Slow down and create a boundary between work and personal time.',
      'Spend time with people, hobbies or activities that bring you joy.',
      'Reflect on something you appreciated about the day.',
      'Prepare for restorative sleep.',
    ],
  },
]

export default function DailyRituals() {
  return (
    <section id="rituals" className="py-24 md:py-32 lg:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Daily Rituals"
          title="Beautiful lives are built in ordinary moments."
          description="You don't need to transform your entire life overnight. Begin with small rituals that make each day feel a little more intentional."
        />

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeBlocks.map((block, index) => {
              const Icon = block.icon
              const isLeft = index % 2 === 0

              return (
                <ScrollReveal
                  key={block.period}
                  delay={index * 0.15}
                  direction={isLeft ? 'left' : 'right'}
                >
                  <div className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-ivory border-2 border-sage/30 rounded-full flex items-center justify-center z-10">
                      <Icon size={20} className="text-sage" strokeWidth={1.5} />
                    </div>

                    {/* Spacer for mobile */}
                    <div className="w-12 shrink-0 md:hidden" />

                    {/* Content card */}
                    <div className={`flex-1 md:w-[calc(50%-2rem)] ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    } ml-4 md:ml-0`}>
                      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow duration-300">
                        <span className="label-small text-gold block mb-2">
                          {block.period}
                        </span>
                        <h3 className="font-serif text-xl text-charcoal mb-5">
                          {block.title}
                        </h3>
                        <ul className="space-y-3">
                          {block.rituals.map((ritual, ri) => (
                            <li
                              key={ri}
                              className={`flex items-start gap-3 ${
                                isLeft ? 'md:flex-row-reverse md:text-left' : ''
                              }`}
                            >
                              <div className="w-1 h-1 rounded-full bg-sage mt-2.5 shrink-0" />
                              <p className="text-stone text-sm leading-relaxed">
                                {ritual}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Opposite spacer for desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Note */}
          <ScrollReveal delay={0.3}>
            <p className="text-center text-stone text-sm italic mt-16">
              "These are ideas, not rules. Build a rhythm that works for your life."
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
