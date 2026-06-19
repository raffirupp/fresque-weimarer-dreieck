import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/LanguageSwitcher'

export default function V3Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#v3-info', label: t('nav.home') },
    { href: '#v3-downloads', label: t('nav.downloads') },
    { href: '#v3-team', label: t('nav.about') },
  ]

  return (
    <header className="sticky top-0 z-40 border-b v3-border v3-bg" style={{ background: '#F7F5F0', borderColor: '#D4C5A9' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">

          <a href="#v3-info" className="flex flex-col min-w-0">
            <span className="v3-serif font-bold text-base leading-tight" style={{ color: '#1C1917' }}>
              Fresque du Triangle de Weimar
            </span>
            <span className="text-[10px] tracking-widest uppercase v3-muted" style={{ color: '#78716C' }}>
              Generation Europa 2025
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm v3-muted hover:text-stone-900 transition-colors"
                style={{ color: '#78716C' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher
              activeClass="bg-stone-800 text-white"
              inactiveClass="text-stone-400 hover:text-stone-700"
            />
            <button
              className="md:hidden p-1.5 v3-muted hover:text-stone-900 transition-colors"
              style={{ color: '#78716C' }}
              onClick={() => setMenuOpen(o => !o)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="5" width="14" y2="5" x2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="3" y1="10" width="14" y2="10" x2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="3" y1="15" width="14" y2="15" x2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 pt-2 border-t" style={{ borderColor: '#D4C5A9' }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm"
                style={{ color: '#78716C' }}
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
