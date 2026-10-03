import { galleryItems } from '../data/gallery'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

export default function SlowLivingGallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 lg:py-40 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="The Art of Slow Living"
          title="Make room for the things that make you feel alive."
        />

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div
                className={`break-inside-avoid group relative rounded-2xl overflow-hidden ${
                  item.size === 'tall'
                    ? 'aspect-[3/4]'
                    : item.size === 'wide'
                      ? 'aspect-[4/3]'
                      : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onLoad={(e) => e.currentTarget.classList.add('loaded')}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80'
                  }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm leading-relaxed font-light italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
