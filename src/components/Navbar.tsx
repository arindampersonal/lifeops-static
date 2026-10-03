import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'The Pillars', href: '#pillars' },
  { label: 'Daily Rituals', href: '#rituals' },
  { label: 'Journal', href: '#journal' },
  { label: 'About', href: '#manifesto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActive = (href: string) => {
    const sectionId = href.replace('#', '')
    return activeSection === sectionId
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-print ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2.5 group"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 64 64"
                fill="none"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  className={scrolled ? 'stroke-sage' : 'stroke-white/80'}
                  strokeWidth="2.5"
                />
                <path
                  d="M22 40 C22 28 32 18 32 18 C32 18 42 28 42 40"
                  className={scrolled ? 'stroke-sage' : 'stroke-white/80'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M32 18 L32 44"
                  className={scrolled ? 'stroke-sage' : 'stroke-white/80'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span
                className={`font-serif text-xl tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                LifeOps
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                    scrolled
                      ? isActive(link.href)
                        ? 'text-sage'
                        : 'text-charcoal/70 hover:text-charcoal'
                      : isActive(link.href)
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute -bottom-0.5 left-0 right-0 h-[1.5px] ${
                        scrolled ? 'bg-sage' : 'bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#canvas"
                onClick={(e) => handleNavClick(e, '#canvas')}
                className={`hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  scrolled
                    ? 'bg-charcoal text-white hover:bg-charcoal/90'
                    : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'
                }`}
              >
                Begin Your Journey
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-charcoal hover:bg-cream' : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-0 right-0 w-full max-w-sm h-full bg-ivory shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full pt-20 px-8 pb-8">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-lg py-3 border-b border-border transition-colors ${
                        isActive(link.href)
                          ? 'text-sage font-medium'
                          : 'text-charcoal/70 hover:text-charcoal'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto">
                  <a
                    href="#canvas"
                    onClick={(e) => handleNavClick(e, '#canvas')}
                    className="block w-full text-center py-3.5 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal/90 transition-colors"
                  >
                    Begin Your Journey
                  </a>
                  <p className="text-center text-sm text-stone mt-4">
                    Design a Life You Love Living
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
