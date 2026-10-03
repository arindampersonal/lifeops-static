export interface GalleryItem {
  id: string
  image: string
  imageAlt: string
  caption: string
  size: 'tall' | 'wide' | 'normal'
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'morning-coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    imageAlt: 'A steaming cup of coffee on a wooden table by a window with morning light',
    caption: 'A quiet morning. A warm cup. The world can wait a few more minutes.',
    size: 'tall',
  },
  {
    id: 'green-walk',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    imageAlt: 'A forest trail dappled with sunlight filtering through green canopy',
    caption: 'Walking without a destination. Just footsteps, birdsong, and breathing.',
    size: 'wide',
  },
  {
    id: 'conversation',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80',
    imageAlt: 'Two people sitting together having an intimate conversation over coffee',
    caption: 'An uninterrupted conversation. No screens, no schedules. Just presence.',
    size: 'normal',
  },
  {
    id: 'reading',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80',
    imageAlt: 'An open book in a peaceful reading nook with natural light',
    caption: 'Lost in a story. The kind of stillness that makes time disappear.',
    size: 'normal',
  },
  {
    id: 'sunset',
    image: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&q=80',
    imageAlt: 'A golden sunset over the ocean with gentle waves on a quiet beach',
    caption: 'Watching the sky change colors. Proof that beauty shows up every single day.',
    size: 'tall',
  },
  {
    id: 'explore',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80',
    imageAlt: 'A narrow cobblestone street in a charming old European town',
    caption: 'An unfamiliar street in an unfamiliar place. The thrill of not knowing what comes next.',
    size: 'wide',
  },
]
