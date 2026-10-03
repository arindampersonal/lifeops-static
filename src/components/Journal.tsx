import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, ArrowRight } from 'lucide-react'
import { articles, type Article } from '../data/articles'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

function ArticleModal({
  article,
  onClose,
}: {
  article: Article
  onClose: () => void
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] bg-ivory rounded-2xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        role="dialog"
        aria-modal="true"
        aria-label={article.title}
      >
        {/* Header Image */}
        <div className="relative h-48 md:h-56">
          <img
            src={article.image}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="label-small text-gold-light">{article.category}</span>
            <h3 className="font-serif text-xl md:text-2xl text-white mt-1">
              {article.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Close article"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-14rem)] p-6 md:p-8">
          <div className="flex items-center gap-2 text-stone text-sm mb-6">
            <Clock size={14} />
            {article.readTime}
          </div>
          <div className="space-y-5">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-charcoal/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-stone text-sm italic text-center">
              Thank you for reading. Take what resonates, leave what doesn't.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Journal() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)

  return (
    <section id="journal" className="py-24 md:py-32 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Journal"
          title="Thoughts worth returning to."
        />

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <article
                className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500 cursor-pointer h-full flex flex-col"
                onClick={() => setActiveArticle(article)}
                role="button"
                tabIndex={0}
                aria-label={`Read: ${article.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveArticle(article)
                  }
                }}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onLoad={(e) => e.currentTarget.classList.add('loaded')}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="label-small text-sage">{article.category}</span>
                    <span className="flex items-center gap-1 text-stone/60 text-xs">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-charcoal mb-3 group-hover:text-sage transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sage text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Read Reflection
                    <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {activeArticle && (
          <ArticleModal
            article={activeArticle}
            onClose={() => setActiveArticle(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
