import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useModal } from '../../context/ModalContext'

export default function V2Header() {
  const { t } = useTranslation()
  const { openModal } = useModal()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#v2-info', label: t('nav.home') },
    { href: '#v2-scrolly', label: t('nav.about') },
  ]

  return (
    <header className="sticky top-0 z-40 bg-violet-700 text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#v2-info" className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-orange-400 flex items-center justify-center shrink-0">
              <span className="text-white font-black text-sm">W</span>
            </div>
            <span className="font-bold text-white text-sm sm:text-base leading-tight">
              Weimarer Dreieck
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6" aria-label="Hauptnavigation">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-violet-200 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
            <button
              onClick={openModal}
              className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
            >
              {t('hero.ctaDownload')} →
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher
              activeClass="bg-white/20 text-white"
              inactiveClass="text-violet-300 hover:text-white"
            />
            <button
              className="md:hidden p-1.5 text-violet-200 hover:text-white transition-colors"
              onClick={() => setMenuOpen(o => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <rect x="2" y="5" width="18" height="2" rx="1" fill="currentColor" />
                    <rect x="2" y="10" width="18" height="2" rx="1" fill="currentColor" />
                    <rect x="2" y="15" width="18" height="2" rx="1" fill="currentColor" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-violet-600 pb-4 pt-2 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-1 text-sm font-medium text-violet-200 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); openModal() }}
              className="mt-2 self-start bg-orange-400 text-white text-sm font-bold px-4 py-2 rounded-full"
            >
              {t('hero.ctaDownload')} →
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
