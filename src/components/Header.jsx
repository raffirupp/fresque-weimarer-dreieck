import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="18" height="2" rx="1" fill="currentColor" />
      <rect x="2" y="10" width="18" height="2" rx="1" fill="currentColor" />
      <rect x="2" y="15" width="18" height="2" rx="1" fill="currentColor" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#info', label: t('nav.home') },
    { href: '#downloads', label: t('nav.downloads') },
    { href: '#team', label: t('nav.about') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#info" className="flex flex-col min-w-0 focus-visible:outline-navy">
            <span
              className="font-heading font-bold text-navy text-base sm:text-lg leading-tight truncate"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Fresque zum Weimarer Dreieck
            </span>
            <span className="text-xs text-muted hidden sm:block">Generation Europa 2025</span>
          </a>

          <nav className="hidden md:flex items-center gap-7" aria-label="Hauptnavigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="md:hidden p-1.5 text-ink hover:text-navy transition-colors"
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="md:hidden border-t border-border pb-3 pt-1"
            aria-label="Mobile Navigation"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-1 text-sm font-medium text-ink hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
