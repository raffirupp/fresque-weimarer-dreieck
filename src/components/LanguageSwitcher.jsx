import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language.split('-')[0]

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Sprache / Language / Langue">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          className={`px-2.5 py-1 text-sm font-semibold rounded transition-colors leading-none ${
            current === code
              ? 'bg-navy text-white'
              : 'text-muted hover:text-navy'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
