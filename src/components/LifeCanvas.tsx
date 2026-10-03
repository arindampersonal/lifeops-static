import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  Brain,
  Users,
  Wallet,
  BookOpen,
  Briefcase,
  Compass,
  Copy,
  Printer,
  Check,
  Sparkles,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

const canvasPillars = [
  { id: 'health', label: 'Health', icon: Heart },
  { id: 'peace', label: 'Peace', icon: Brain },
  { id: 'relationships', label: 'Relationships', icon: Users },
  { id: 'finances', label: 'Finances', icon: Wallet },
  { id: 'growth', label: 'Growth', icon: BookOpen },
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'joy', label: 'Joy', icon: Compass },
]

interface CanvasData {
  selectedPillars: string[]
  intentions: Record<string, string>
  wantMore: string
  letGo: string
  oneAction: string
  beautifulDay: string
}

export default function LifeCanvas() {
  const [data, setData] = useState<CanvasData>({
    selectedPillars: [],
    intentions: {},
    wantMore: '',
    letGo: '',
    oneAction: '',
    beautifulDay: '',
  })
  const [showResult, setShowResult] = useState(false)
  const [copied, setCopied] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  const togglePillar = (id: string) => {
    setData((prev) => ({
      ...prev,
      selectedPillars: prev.selectedPillars.includes(id)
        ? prev.selectedPillars.filter((p) => p !== id)
        : [...prev.selectedPillars, id],
    }))
  }

  const setIntention = (pillarId: string, value: string) => {
    setData((prev) => ({
      ...prev,
      intentions: { ...prev.intentions, [pillarId]: value },
    }))
  }

  const canSubmit =
    data.selectedPillars.length > 0 &&
    (data.wantMore.trim() || data.oneAction.trim() || data.beautifulDay.trim())

  const handleSubmit = () => {
    if (!canSubmit) return
    setShowResult(true)
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 200)
  }

  const generateText = () => {
    let text = '✦ MY LIFE DESIGN CANVAS ✦\n'
    text += '━━━━━━━━━━━━━━━━━━━━━━━━\n\n'

    if (data.selectedPillars.length > 0) {
      text += '▸ FOCUS AREAS\n'
      data.selectedPillars.forEach((id) => {
        const pillar = canvasPillars.find((p) => p.id === id)
        const intention = data.intentions[id]
        text += `  • ${pillar?.label}${intention ? `: ${intention}` : ''}\n`
      })
      text += '\n'
    }

    if (data.wantMore.trim()) {
      text += `▸ WHAT I WANT MORE OF\n  ${data.wantMore}\n\n`
    }
    if (data.letGo.trim()) {
      text += `▸ WHAT I WANT TO LET GO OF\n  ${data.letGo}\n\n`
    }
    if (data.oneAction.trim()) {
      text += `▸ ONE SMALL ACTION FOR TODAY\n  ${data.oneAction}\n\n`
    }
    if (data.beautifulDay.trim()) {
      text += `▸ MY BEAUTIFUL ORDINARY DAY\n  ${data.beautifulDay}\n\n`
    }

    text += '━━━━━━━━━━━━━━━━━━━━━━━━\n'
    text += 'Created with LifeOps · Design a Life You Love Living\n'
    return text
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateText())
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
      const ta = document.createElement('textarea')
      ta.value = generateText()
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <section id="canvas" className="py-24 md:py-32 lg:py-40 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Life Design Canvas"
          title="What does a beautiful life look like to you?"
          description="Take a few moments to reflect on what matters most. Select your current focus areas and set your intentions."
        />

        {/* Pillar Selection */}
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="font-serif text-lg text-charcoal mb-4 text-center">
              Select your current focus areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {canvasPillars.map((pillar) => {
                const Icon = pillar.icon
                const isSelected = data.selectedPillars.includes(pillar.id)
                return (
                  <motion.button
                    key={pillar.id}
                    onClick={() => togglePillar(pillar.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                      isSelected
                        ? 'bg-sage text-white border-sage shadow-md'
                        : 'bg-white text-stone border-border hover:border-sage/50 hover:text-charcoal'
                    }`}
                    whileTap={{ scale: 0.95 }}
                    aria-pressed={isSelected}
                  >
                    <Icon size={16} strokeWidth={1.5} />
                    {pillar.label}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Intentions for selected pillars */}
        <AnimatePresence>
          {data.selectedPillars.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-12 overflow-hidden"
            >
              <h3 className="font-serif text-lg text-charcoal mb-4 text-center">
                Set an intention for each focus area
              </h3>
              <div className="space-y-3">
                {data.selectedPillars.map((id) => {
                  const pillar = canvasPillars.find((p) => p.id === id)!
                  const Icon = pillar.icon
                  return (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 bg-white rounded-xl p-3 border border-border/50"
                    >
                      <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-sage" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-medium text-charcoal w-24 shrink-0">
                        {pillar.label}
                      </span>
                      <input
                        type="text"
                        placeholder={`My intention for ${pillar.label.toLowerCase()}...`}
                        value={data.intentions[id] || ''}
                        onChange={(e) => setIntention(id, e.target.value)}
                        className="flex-1 bg-transparent text-sm text-charcoal placeholder:text-stone/50 focus:outline-none py-1"
                        maxLength={120}
                        aria-label={`Intention for ${pillar.label}`}
                      />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reflection Questions */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-6 mb-12">
            {[
              {
                key: 'wantMore' as const,
                question: 'What do I want more of in my life?',
              },
              {
                key: 'letGo' as const,
                question: 'What would I like to let go of?',
              },
              {
                key: 'oneAction' as const,
                question: 'What is one small action I can take today?',
              },
              {
                key: 'beautifulDay' as const,
                question: 'What does a beautiful ordinary day look like to me?',
              },
            ].map(({ key, question }) => (
              <div key={key} className="bg-white rounded-xl p-5 md:p-6 border border-border/50">
                <label
                  htmlFor={`canvas-${key}`}
                  className="block font-serif text-base text-charcoal mb-3"
                >
                  {question}
                </label>
                <textarea
                  id={`canvas-${key}`}
                  rows={2}
                  placeholder="Take a moment to reflect..."
                  value={data[key]}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  className="w-full bg-ivory/50 rounded-lg p-3 text-sm text-charcoal placeholder:text-stone/40 border border-border/30 focus:outline-none focus:border-sage/50 resize-none transition-colors"
                  maxLength={500}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Submit */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mb-4">
            <motion.button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 ${
                canSubmit
                  ? 'bg-charcoal text-white hover:bg-charcoal/90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                  : 'bg-border text-stone/50 cursor-not-allowed'
              }`}
              whileTap={canSubmit ? { scale: 0.97 } : undefined}
            >
              <Sparkles size={16} />
              Create My Life Canvas
            </motion.button>
          </div>
          <p className="text-center text-stone/60 text-xs">
            Your reflections stay on your device. Nothing is stored or sent anywhere.
          </p>
        </ScrollReveal>

        {/* Result */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="mt-16 life-canvas-print"
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="label-small text-sage block mb-1">
                      Your Personal
                    </span>
                    <h3 className="font-serif text-2xl text-charcoal">
                      Life Design Canvas
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 no-print">
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone border border-border rounded-full hover:bg-cream transition-colors"
                      aria-label="Copy canvas to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-sage" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone border border-border rounded-full hover:bg-cream transition-colors"
                      aria-label="Print canvas"
                    >
                      <Printer size={14} />
                      Print
                    </button>
                  </div>
                </div>

                {/* Focus Areas */}
                {data.selectedPillars.length > 0 && (
                  <div className="mb-8">
                    <h4 className="label-small text-gold mb-4">Focus Areas</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {data.selectedPillars.map((id) => {
                        const pillar = canvasPillars.find((p) => p.id === id)!
                        const Icon = pillar.icon
                        const intention = data.intentions[id]
                        return (
                          <div
                            key={id}
                            className="pillar-item flex items-start gap-3 p-3 rounded-lg bg-ivory/50"
                          >
                            <Icon
                              size={18}
                              className="text-sage mt-0.5 shrink-0"
                              strokeWidth={1.5}
                            />
                            <div>
                              <span className="text-sm font-medium text-charcoal block">
                                {pillar.label}
                              </span>
                              {intention && (
                                <span className="text-sm text-stone italic">
                                  {intention}
                                </span>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Reflections */}
                <div className="space-y-6">
                  {data.wantMore.trim() && (
                    <div>
                      <h4 className="text-xs font-medium text-sage uppercase tracking-wider mb-2">
                        What I want more of
                      </h4>
                      <p className="text-charcoal leading-relaxed">
                        {data.wantMore}
                      </p>
                    </div>
                  )}
                  {data.letGo.trim() && (
                    <div>
                      <h4 className="text-xs font-medium text-sage uppercase tracking-wider mb-2">
                        What I want to let go of
                      </h4>
                      <p className="text-charcoal leading-relaxed">{data.letGo}</p>
                    </div>
                  )}
                  {data.oneAction.trim() && (
                    <div>
                      <h4 className="text-xs font-medium text-sage uppercase tracking-wider mb-2">
                        One small action for today
                      </h4>
                      <p className="text-charcoal leading-relaxed">
                        {data.oneAction}
                      </p>
                    </div>
                  )}
                  {data.beautifulDay.trim() && (
                    <div>
                      <h4 className="text-xs font-medium text-sage uppercase tracking-wider mb-2">
                        My beautiful ordinary day
                      </h4>
                      <p className="text-charcoal leading-relaxed">
                        {data.beautifulDay}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-border text-center">
                  <p className="text-stone text-sm italic font-serif">
                    "Make space for what matters. Let go of what doesn't. Keep
                    becoming."
                  </p>
                  <p className="text-stone/50 text-xs mt-2">
                    Created with LifeOps · {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
