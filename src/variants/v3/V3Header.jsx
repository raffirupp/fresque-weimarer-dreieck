import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { useModal } from '../../context/ModalContext'

export default function V3Header() {
  const { t } = useTranslation()
  const { openModal } = useModal()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: '#fff',
      borderBottom: '1px solid #e8e8e8',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

        <a href="#v3-top" style={{ textDecoration: 'none' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: '#111', lineHeight: 1.3 }}>
            Fresko · Weimarer Dreieck
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginTop: 1 }}>
            Generation Europa 2025
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <LanguageSwitcher
            activeClass="font-bold text-black"
            inactiveClass="text-gray-400 hover:text-black"
          />
          <button
            onClick={openModal}
            className="hidden md:inline-block"
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '9px 22px', border: '1.5px solid #111', background: '#111', color: '#fff',
              cursor: 'pointer', transition: 'background 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#111' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#fff' }}
          >
            {t('nav.downloads')}
          </button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#111' }}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ borderTop: '1px solid #e8e8e8', padding: '16px 40px 20px', background: '#fff' }}>
          <button
            onClick={() => { setMenuOpen(false); openModal() }}
            style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '9px 22px', border: '1.5px solid #111', background: '#111', color: '#fff',
              cursor: 'pointer',
            }}
          >
            {t('nav.downloads')}
          </button>
        </div>
      )}
    </header>
  )
}
