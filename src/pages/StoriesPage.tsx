import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, ArrowRight, BookOpen, Sparkles, Filter } from 'lucide-react'
import { stories } from '../data/stories'
import ScrollReveal from '../components/ScrollReveal'

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(stories.map((s) => s.category)))
    return ['All', ...cats]
  }, [])

  const filteredStories = useMemo(() => {
    if (selectedCategory === 'All') return stories
    return stories.filter(
      (s) => s.category.toLowerCase() === selectedCategory.toLowerCase()
    )
  }, [selectedCategory])

  const featuredStory = filteredStories[0]
  const remainingStories = filteredStories.slice(1)

  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=85"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <BookOpen size={18} className="text-gold-light" strokeWidth={1.5} />
            <span className="label-small text-gold-light tracking-[0.2em]">
              THE LIFEOPS ARCHIVE
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
            className="text-white/75 max-w-2xl mx-auto leading-relaxed text-base md:text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Captivating fiction exploring romance, intimacy, suspense, detective noir, and the quiet choices that quietly shape who we become.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs md:text-sm"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles size={14} className="text-gold-light" />
              {stories.length} Immersive Stories
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-white/70">Updated Daily</span>
          </motion.div>
        </div>
      </section>

      {/* Stories Archive & Filter Section */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-2 mb-4 text-stone text-xs uppercase tracking-wider font-medium">
              <Filter size={14} />
              <span>Browse by Category</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2.5">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat
                const count = cat === 'All' 
                  ? stories.length 
                  : stories.filter((s) => s.category.toLowerCase() === cat.toLowerCase()).length

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-charcoal text-white shadow-md scale-[1.02]'
                        : 'bg-white text-charcoal/80 hover:bg-stone/10 border border-border/70 hover:border-stone/30'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-cream text-stone'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {/* Featured Story (Lead) */}
              {featuredStory && (
                <div className="mb-14 md:mb-20">
                  <Link
                    to={`/stories/${featuredStory.id}`}
                    className="group block bg-white rounded-3xl overflow-hidden border border-border/60 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="grid lg:grid-cols-12 gap-0 items-center">
                      <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/11] overflow-hidden">
                        <img
                          src={featuredStory.coverImage}
                          alt={featuredStory.coverImageAlt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="inline-flex items-center px-3 py-1 bg-charcoal/85 backdrop-blur-md text-white text-xs font-medium rounded-full">
                            {selectedCategory === 'All' ? 'Latest Story' : featuredStory.category}
                          </span>
                        </div>
                      </div>

                      <div className="lg:col-span-5 p-8 md:p-10 lg:p-12">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="label-small text-sage font-medium">{featuredStory.category}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-stone text-xs">
                            {new Date(featuredStory.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>

                        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal mb-3 group-hover:text-sage transition-colors duration-300 leading-snug">
                          {featuredStory.title}
                        </h2>

                        <p className="font-serif text-sage-dark italic text-sm md:text-base mb-4">
                          {featuredStory.subtitle}
                        </p>

                        <p className="text-stone leading-relaxed text-sm md:text-base mb-6 line-clamp-3">
                          {featuredStory.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border/40">
                          <div className="flex items-center gap-1.5 text-stone/70 text-sm">
                            <Clock size={14} />
                            {featuredStory.readTime}
                          </div>
                          <div className="flex items-center gap-2 text-sage font-medium text-sm group-hover:gap-3 transition-all duration-300">
                            Read Story
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Grid of Remaining Stories */}
              {remainingStories.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {remainingStories.map((story, index) => (
                    <ScrollReveal key={story.id} delay={Math.min(index * 0.05, 0.3)}>
                      <Link
                        to={`/stories/${story.id}`}
                        className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500 h-full"
                      >
                        {/* Cover Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-sand/30">
                          <img
                            src={story.coverImage}
                            alt={story.coverImageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-3.5 left-3.5">
                            <span className="inline-flex items-center px-2.5 py-1 bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-medium rounded-full shadow-sm">
                              {story.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-3 mb-2.5">
                            <span className="text-stone/60 text-xs">
                              {new Date(story.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span className="flex items-center gap-1 text-stone/60 text-xs">
                              <Clock size={12} />
                              {story.readTime}
                            </span>
                          </div>

                          <h3 className="font-serif text-lg md:text-xl text-charcoal mb-2 group-hover:text-sage transition-colors duration-300 leading-snug">
                            {story.title}
                          </h3>

                          <p className="font-serif text-xs md:text-sm text-sage-dark/80 italic mb-3">
                            {story.subtitle}
                          </p>

                          <p className="text-stone text-xs md:text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                            {story.excerpt}
                          </p>

                          <div className="pt-3 border-t border-border/30 flex items-center justify-between text-xs text-sage font-medium group-hover:text-sage-dark">
                            <span>Read Full Story</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {filteredStories.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-border/50">
                  <p className="font-serif text-xl text-charcoal mb-2">No stories found in this category.</p>
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="text-sage font-medium text-sm hover:underline cursor-pointer"
                  >
                    View all stories
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-cream text-center border-t border-border/40">
        <ScrollReveal>
          <p className="font-serif text-xl md:text-2xl text-charcoal mb-2 max-w-2xl mx-auto px-6">
            New stories are added regularly.
          </p>
          <p className="text-stone max-w-lg mx-auto px-6 mb-6 text-sm md:text-base">
            Each story is an invitation to pause, feel deeply, and look at the world through a new lens.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/thought-of-the-day"
              className="inline-flex items-center px-6 py-3 bg-sage text-white rounded-full text-sm font-medium hover:bg-sage-dark transition-all duration-300 hover:scale-[1.02]"
            >
              Explore Thought of the Day
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-charcoal/90 transition-all duration-300 hover:scale-[1.02]"
            >
              Back to Home
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
