import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'pl', label: 'PL', flag: '🇵🇱' },
]

export default function LanguageSwitcher({ activeClass, inactiveClass }) {
  const { i18n } = useTranslation()
  const current = i18n.language.split('-')[0]
  const currentLang = LANGS.find(l => l.code === current) ?? LANGS[0]
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const buttonCls = activeClass ?? 'bg-navy text-white'

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Sprache wählen"
        className={`flex items-center gap-1.5 px-2.5 py-1 text-sm font-semibold rounded transition-colors leading-none ${buttonCls}`}
      >
        <span>{currentLang.flag}</span>
        <span>{currentLang.label}</span>
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s' }}
        >
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Sprache"
          className="absolute right-0 mt-1.5 rounded-lg shadow-lg overflow-hidden z-50 min-w-[110px]"
          style={{ background: '#0A1928', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          {LANGS.map(({ code, label, flag }) => (
            <li key={code} role="option" aria-selected={current === code}>
              <button
                onClick={() => { i18n.changeLanguage(code); setOpen(false) }}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm font-semibold text-left transition-colors"
                style={{
                  color: current === code ? '#B8860B' : 'rgba(255,255,255,0.7)',
                  background: current === code ? 'rgba(184,134,11,0.1)' : 'transparent',
                }}
                onMouseEnter={e => { if (current !== code) e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
                onMouseLeave={e => { if (current !== code) e.currentTarget.style.background = 'transparent' }}
              >
                <span>{flag}</span>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
