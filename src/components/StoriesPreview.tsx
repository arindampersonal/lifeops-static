import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { stories } from '../data/stories'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

export default function StoriesPreview() {
  // Show only the latest 3 stories
  const previewStories = stories.slice(0, 3)

  return (
    <section id="stories" className="py-24 md:py-32 lg:py-40 bg-forest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Stories"
          title="Short stories that stay with you."
          description="Fiction rooted in real emotions — about courage, kindness, loss, and the quiet moments that change everything."
          light
        />

        {/* Stories Carousel */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {previewStories.map((story, index) => (
            <ScrollReveal key={story.id} delay={index * 0.12}>
              <Link
                to={`/stories/${story.id}`}
                className="group block h-full"
              >
                <div className="relative rounded-2xl overflow-hidden h-full bg-forest-light border border-white/10 hover:border-white/20 transition-all duration-500">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={story.coverImage}
                      alt={story.coverImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="label-small text-gold-light/80 text-[0.65rem]">
                        {story.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="flex items-center gap-1 text-white/30 text-xs">
                        <Clock size={11} />
                        {story.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-white text-lg mb-2 group-hover:text-sage-light transition-colors duration-300">
                      {story.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                      {story.excerpt}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-sage-light text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      Read Story
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Link */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 text-white border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <BookOpen size={16} />
              View All Stories
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
