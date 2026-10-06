import { ArrowUp } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const anchorLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'The Pillars', href: '#pillars' },
  { label: 'Daily Rituals', href: '#rituals' },
  { label: 'Life Canvas', href: '#canvas' },
  { label: 'Journal', href: '#journal' },
  { label: 'Manifesto', href: '#manifesto' },
]

const pageLinks = [
  { label: 'Stories', to: '/stories' },
  { label: 'Thought of the Day', to: '/thought-of-the-day' },
]

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <footer className="bg-forest text-white/70 no-print">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" stroke="#82927B" strokeWidth="2.5" />
                <path
                  d="M22 40 C22 28 32 18 32 18 C32 18 42 28 42 40"
                  stroke="#82927B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M32 18 L32 44"
                  stroke="#82927B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-serif text-lg text-white">LifeOps</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-md mb-4">
              A personal philosophy for living more intentionally. LifeOps
              encourages you to take care of your health, protect your peace,
              build meaningful relationships, and make time for the things that
              genuinely matter.
            </p>
            <p className="font-serif text-sage-light text-sm italic">
              Design a Life You Love Living.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Explore</h4>
            <nav className="space-y-2.5">
              {anchorLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="block text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Pages + Back to top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-white text-sm font-medium mb-4">Discover</h4>
              <nav className="space-y-2.5 mb-8">
                {pageLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors duration-200 group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform duration-200"
              />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} LifeOps. Conceived and crafted with intention by{' '}
            <span className="text-white/70 font-medium">Arindam Dutta</span>.
          </p>
          <p className="text-white/30 text-xs italic">
            Live well. Stay curious. Be kind.
          </p>
        </div>
      </div>
    </footer>
  )
}
