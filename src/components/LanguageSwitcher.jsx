import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'pl', label: 'PL' },
]

export default function LanguageSwitcher({ activeClass, inactiveClass }) {
  const { i18n } = useTranslation()
  const current = i18n.language.split('-')[0]

  const active = activeClass ?? 'bg-navy text-white'
  const inactive = inactiveClass ?? 'text-muted hover:text-navy'

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Sprache / Langue / Język">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          className={`px-2.5 py-1 text-sm font-semibold rounded transition-colors leading-none ${
            current === code ? active : inactive
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
