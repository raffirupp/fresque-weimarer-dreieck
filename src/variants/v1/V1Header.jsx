import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useModal } from '../../context/ModalContext'

export default function V1Header() {
  const { t } = useTranslation()
  const { openModal } = useModal()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E2DDD8] shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex items-center justify-between h-16">

          <a href="#info" className="flex items-center gap-3 min-w-0">
            <div className="flex gap-0.5 h-5" aria-hidden="true">
              <div className="w-1.5 rounded-full bg-[#B8860B]" />
              <div className="w-1.5 rounded-full bg-[#1E3A5F]" />
              <div className="w-1.5 rounded-full bg-[#7A2F3E]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-[#1E3A5F] text-base leading-tight truncate" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Fresko · Weimarer Dreieck
              </span>
              <span className="text-[10px] text-[#5A6070] hidden sm:block tracking-wide uppercase">Generation Europa 2025</span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={openModal}
              className="hidden md:inline-flex text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#122848] px-4 py-2 rounded-lg transition-colors"
              style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
            >
              {t('nav.downloads')}
            </button>
            <button
              className="md:hidden p-1.5 text-[#1A1A2E] hover:text-[#1E3A5F] transition-colors"
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
          <nav className="md:hidden border-t border-[#E2DDD8] pb-3 pt-1" aria-label="Mobile Navigation">
            <button
              onClick={() => { setMenuOpen(false); openModal() }}
              className="block py-2.5 px-1 text-sm font-semibold text-[#1E3A5F]"
            >
              {t('nav.downloads')} →
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
