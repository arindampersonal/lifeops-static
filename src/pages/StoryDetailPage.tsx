import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, Share2, BookOpen } from 'lucide-react'
import { stories } from '../data/stories'
import ScrollReveal from '../components/ScrollReveal'

export default function StoryDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const storyIndex = stories.findIndex((s) => s.id === id)
  const story = stories[storyIndex]

  if (!story) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-ivory pt-20">
        <div className="text-center px-6">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Story not found</h1>
          <p className="text-stone mb-8">The story you're looking for doesn't exist.</p>
          <Link
            to="/stories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-charcoal/90 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            All Stories
          </Link>
        </div>
      </section>
    )
  }

  const prevStory = storyIndex > 0 ? stories[storyIndex - 1] : null
  const nextStory = storyIndex < stories.length - 1 ? stories[storyIndex + 1] : null

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: story.title,
        text: story.excerpt,
        url: window.location.href,
      })
    } else {
      await navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <>
      {/* Hero Cover */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={story.coverImage}
            alt={story.coverImageAlt}
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/20" />
        </div>

        {/* Back button */}
        <div className="absolute top-20 left-6 lg:left-8 z-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* Content over image */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-16 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-white/15 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                {story.category}
              </span>
              <span className="text-white/50 text-sm">
                {new Date(story.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <h1
              className="font-serif text-white leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3.5rem)' }}
            >
              {story.title}
            </h1>

            <p className="font-serif text-white/70 italic text-lg mb-6">
              {story.subtitle}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-white/50 text-sm">
                <Clock size={14} />
                {story.readTime}
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-white/50 text-sm hover:text-white/80 transition-colors"
                aria-label="Share story"
              >
                <Share2 size={14} />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Body */}
      <article className="py-16 md:py-24 bg-ivory">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {/* Drop cap first paragraph */}
          {story.body.map((paragraph, i) => (
            <ScrollReveal key={i} delay={Math.min(i * 0.05, 0.3)}>
              <p
                className={`text-charcoal/85 leading-[1.9] mb-7 ${
                  i === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none first-letter:text-sage'
                    : ''
                }`}
                style={{ fontSize: 'clamp(1rem, 1.1vw + 0.2rem, 1.1rem)' }}
              >
                {paragraph}
              </p>
            </ScrollReveal>
          ))}

          {/* Reflection */}
          {story.reflection && (
            <ScrollReveal delay={0.2}>
              <div className="mt-12 p-8 bg-cream rounded-2xl border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={16} className="text-sage" strokeWidth={1.5} />
                  <span className="label-small text-sage">Reflection</span>
                </div>
                <p className="font-serif text-charcoal/80 italic leading-relaxed text-lg">
                  "{story.reflection}"
                </p>
              </div>
            </ScrollReveal>
          )}

          {/* Author */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                <span className="font-serif text-sage text-lg">A</span>
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal">Arindam Dutta</p>
                <p className="text-xs text-stone">LifeOps · Stories</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Navigation between stories */}
      <section className="py-12 md:py-16 bg-cream border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {prevStory ? (
              <Link
                to={`/stories/${prevStory.id}`}
                className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <ArrowLeft
                  size={20}
                  className="text-stone mt-1 shrink-0 group-hover:-translate-x-1 transition-transform duration-300"
                />
                <div>
                  <span className="label-small text-stone/60 block mb-1">
                    Previous Story
                  </span>
                  <span className="font-serif text-charcoal group-hover:text-sage transition-colors duration-300">
                    {prevStory.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextStory ? (
              <Link
                to={`/stories/${nextStory.id}`}
                className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-border/50 hover:shadow-md transition-all duration-300 text-right md:justify-self-end"
              >
                <div>
                  <span className="label-small text-stone/60 block mb-1">
                    Next Story
                  </span>
                  <span className="font-serif text-charcoal group-hover:text-sage transition-colors duration-300">
                    {nextStory.title}
                  </span>
                </div>
                <ArrowRight
                  size={20}
                  className="text-stone mt-1 shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 text-sage text-sm font-medium hover:gap-3 transition-all duration-300"
            >
              <BookOpen size={16} />
              View All Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
