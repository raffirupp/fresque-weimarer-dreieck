import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useModal } from '../../context/ModalContext'

export default function V2Header() {
  const { t } = useTranslation()
  const { openModal } = useModal()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40" style={{ background: '#122848', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex items-center justify-between h-16">

          <a href="#v2-info" className="flex items-center gap-3 min-w-0">
            <div className="flex gap-0.5 h-5" aria-hidden="true">
              <div className="w-1.5 rounded-full bg-[#B8860B]" />
              <div className="w-1.5 rounded-full bg-white/50" />
              <div className="w-1.5 rounded-full bg-[#7A2F3E]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-white text-base leading-tight truncate" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Fresko · Weimarer Dreieck
              </span>
              <span className="text-[10px] text-white/40 hidden sm:block tracking-wide uppercase">Generation Europa 2025</span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <LanguageSwitcher
              activeClass="bg-white/15 text-white"
              inactiveClass="text-white/50 hover:text-white"
            />
            <button
              onClick={openModal}
              className="hidden md:inline-flex text-sm font-bold text-white px-4 py-2 rounded-lg transition-colors"
              style={{ background: '#B8860B' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#9A7009' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8860B' }}
            >
              {t('nav.downloads')}
            </button>
            <button
              className="md:hidden p-1.5 text-white/70 hover:text-white transition-colors"
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
          <nav className="md:hidden border-t pb-4 pt-2 flex flex-col gap-1" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => { setMenuOpen(false); openModal() }}
              className="mt-2 self-start text-sm font-bold px-4 py-2 rounded-lg"
              style={{ background: '#B8860B', color: '#fff' }}
            >
              {t('nav.downloads')} →
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
