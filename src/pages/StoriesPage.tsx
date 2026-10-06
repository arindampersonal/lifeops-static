import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import { stories } from '../data/stories'
import ScrollReveal from '../components/ScrollReveal'

export default function StoriesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <BookOpen size={18} className="text-gold-light" strokeWidth={1.5} />
            <span className="label-small text-gold-light tracking-[0.2em]">
              THE LIFEOPS STORIES
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw + 0.5rem, 4.5rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stories That Stay With You
          </motion.h1>

          <motion.p
            className="text-white/70 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.2vw + 0.3rem, 1.15rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Short fiction that explores what it means to live well — stories about
            courage, kindness, forgiveness, and the small choices that quietly shape
            who we become.
          </motion.p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Story (first) */}
          <ScrollReveal>
            <Link
              to={`/stories/${stories[0].id}`}
              className="group block mb-16 md:mb-24"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={stories[0].coverImage}
                    alt={stories[0].coverImageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white/15 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                      Latest Story
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="label-small text-sage">{stories[0].category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-stone text-xs">{new Date(stories[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h2 className="heading-pillar text-charcoal mb-3 group-hover:text-sage transition-colors duration-300">
                    {stories[0].title}
                  </h2>
                  <p className="font-serif text-sage-dark italic mb-4">
                    {stories[0].subtitle}
                  </p>
                  <p className="text-stone leading-relaxed mb-6">
                    {stories[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-stone/60 text-sm">
                      <Clock size={14} />
                      {stories[0].readTime}
                    </div>
                    <div className="flex items-center gap-2 text-sage font-medium text-sm group-hover:gap-3 transition-all duration-300">
                      Read Story
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Divider */}
          <div className="w-16 h-px bg-sage/20 mx-auto mb-16 md:mb-24" />

          {/* Remaining Stories */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {stories.slice(1).map((story, index) => (
              <ScrollReveal key={story.id} delay={index * 0.1}>
                <Link
                  to={`/stories/${story.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500 h-full"
                >
                  {/* Cover Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={story.coverImage}
                      alt={story.coverImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-2.5 py-1 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-medium rounded-full">
                        {story.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-stone/60 text-xs">
                        {new Date(story.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="flex items-center gap-1 text-stone/60 text-xs">
                        <Clock size={12} />
                        {story.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-sage transition-colors duration-300">
                      {story.title}
                    </h3>
                    <p className="font-serif text-sm text-sage-dark/80 italic mb-4">
                      {story.subtitle}
                    </p>
                    <p className="text-stone text-sm leading-relaxed line-clamp-3">
                      {story.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-1.5 text-sage text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      Read Story
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-cream text-center">
        <ScrollReveal>
          <p className="font-serif text-xl md:text-2xl text-charcoal mb-2 max-w-2xl mx-auto px-6">
            New stories are added regularly.
          </p>
          <p className="text-stone max-w-lg mx-auto px-6 mb-6">
            Each story is a quiet invitation to pause, reflect, and see the world
            a little differently.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-charcoal/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Back to Home
          </Link>
        </ScrollReveal>
      </section>
    </>
  )
}
