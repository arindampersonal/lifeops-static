import {
  Heart,
  Brain,
  Users,
  Wallet,
  BookOpen,
  Briefcase,
  Compass,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Pillar {
  id: string
  number: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  practices: string[]
  image: string
  imageAlt: string
}

export const pillars: Pillar[] = [
  {
    id: 'wellness',
    number: '01',
    icon: Heart,
    title: 'Physical Wellness',
    subtitle: 'Your body is your home.',
    description:
      'Your health shapes the way you experience everything else. Treat your body with care, not as an obstacle to overcome, but as the foundation of a fulfilling life.',
    practices: [
      'Move your body regularly and find physical activities you genuinely enjoy.',
      'Eat nourishing food, stay hydrated and protect your sleep.',
      'Make preventive healthcare and recovery part of your routine.',
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    imageAlt: 'Person practicing yoga outdoors surrounded by nature at sunrise',
  },
  {
    id: 'peace',
    number: '02',
    icon: Brain,
    title: 'Mental Peace',
    subtitle: 'Protect your inner world.',
    description:
      'A peaceful mind does not mean a life without difficulties. It means learning to meet life\'s challenges with awareness, resilience and compassion.',
    practices: [
      'Create quiet moments away from constant notifications.',
      'Set boundaries around your time, energy and attention.',
      'Make room for reflection, rest and emotional connection.',
    ],
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&q=80',
    imageAlt: 'A serene zen garden with raked sand patterns and smooth stones',
  },
  {
    id: 'relationships',
    number: '03',
    icon: Users,
    title: 'Meaningful Relationships',
    subtitle: 'Life is better when shared.',
    description:
      'The quality of our relationships shapes the richness of our lives. Be present for the people who make ordinary moments meaningful.',
    practices: [
      'Make time for family, friends and people you care about.',
      'Listen with genuine attention instead of simply waiting to respond.',
      'Express appreciation and resolve disagreements with empathy.',
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    imageAlt: 'Friends sharing a meal together around a table, laughing genuinely',
  },
  {
    id: 'financial',
    number: '04',
    icon: Wallet,
    title: 'Financial Freedom',
    subtitle: 'Buy back your peace of mind.',
    description:
      'Money is not the meaning of life, but financial stability can create choices, reduce uncertainty and give you greater control over your future.',
    practices: [
      'Spend consciously and understand where your money goes.',
      'Build an emergency fund and plan for long-term financial needs.',
      'Invest in experiences, skills and things that add lasting value to your life.',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    imageAlt: 'A clean minimalist workspace with a notebook, laptop and natural light',
  },
  {
    id: 'growth',
    number: '05',
    icon: BookOpen,
    title: 'Continuous Growth',
    subtitle: 'Never stop becoming.',
    description:
      'Curiosity keeps life interesting. Learning new things expands your perspective and helps you adapt to a world that never stands still.',
    practices: [
      'Read, explore and develop useful new skills.',
      'Challenge assumptions and remain open to new ideas.',
      'Make time for creativity, experimentation and personal projects.',
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imageAlt: 'An open book on a wooden table with a cup of tea and reading glasses',
  },
  {
    id: 'work',
    number: '06',
    icon: Briefcase,
    title: 'Purposeful Work',
    subtitle: 'Build something that matters.',
    description:
      'Work can be a source of identity, independence, creativity and contribution. A meaningful career should support your life, not consume all of it.',
    practices: [
      'Develop skills that align with your interests and aspirations.',
      'Set meaningful goals while respecting your personal boundaries.',
      'Create a sustainable balance between professional ambition and the rest of your life.',
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    imageAlt: 'A person working at a beautiful creative workspace with natural light',
  },
  {
    id: 'adventure',
    number: '07',
    icon: Compass,
    title: 'Adventure & Joy',
    subtitle: 'Collect moments, not just milestones.',
    description:
      'A beautiful life is also made of spontaneous laughter, new places, little discoveries, hobbies, music, nature and experiences that remind you why being alive is wonderful.',
    practices: [
      'Explore new places and take occasional breaks from familiar routines.',
      'Make time for hobbies, creativity and playful experiences.',
      'Appreciate ordinary moments instead of waiting for extraordinary occasions.',
    ],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    imageAlt: 'A person standing at a mountain overlook, gazing at a vast valley at golden hour',
  },
]
