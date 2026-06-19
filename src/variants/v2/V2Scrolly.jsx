import { useTranslation } from 'react-i18next'

const sections = [
  {
    key: 's1',
    visual: {
      bg: 'bg-violet-100',
      accent: 'bg-violet-500',
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="36" stroke="#7C3AED" strokeWidth="2" strokeDasharray="8 4" />
          <rect x="24" y="28" width="12" height="12" rx="3" fill="#7C3AED" opacity="0.6" />
          <rect x="44" y="28" width="12" height="12" rx="3" fill="#C4B5FD" />
          <rect x="24" y="44" width="12" height="12" rx="3" fill="#C4B5FD" />
          <rect x="44" y="44" width="12" height="12" rx="3" fill="#7C3AED" opacity="0.6" />
        </svg>
      ),
    },
    reverse: false,
    labelColor: 'text-violet-600 bg-violet-100',
  },
  {
    key: 's2',
    visual: {
      bg: 'bg-orange-50',
      accent: 'bg-orange-400',
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="28" cy="40" r="14" fill="#FED7AA" />
          <circle cx="52" cy="40" r="14" fill="#FDBA74" />
          <circle cx="40" cy="40" r="14" fill="#F97316" opacity="0.5" />
          <path d="M28 40 L52 40" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 28 L40 52" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    reverse: true,
    labelColor: 'text-orange-600 bg-orange-100',
  },
  {
    key: 's3',
    visual: {
      bg: 'bg-emerald-50',
      accent: 'bg-emerald-500',
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle cx="40" cy="40" r="24" fill="#D1FAE5" />
          <path d="M28 40l8 8 16-16" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="40" cy="16" r="5" fill="#10B981" opacity="0.4" />
          <circle cx="64" cy="40" r="5" fill="#10B981" opacity="0.4" />
          <circle cx="16" cy="40" r="5" fill="#10B981" opacity="0.4" />
        </svg>
      ),
    },
    reverse: false,
    labelColor: 'text-emerald-700 bg-emerald-100',
  },
]

export default function V2Scrolly() {
  const { t } = useTranslation()

  return (
    <section id="v2-scrolly" className="bg-white py-4">
      {sections.map((section, idx) => (
        <div
          key={section.key}
          className={`max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid sm:grid-cols-2 gap-12 items-center ${section.reverse ? 'sm:[&>*:first-child]:order-2' : ''}`}
        >
          {/* Text side */}
          <div>
            <span className={`inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${section.labelColor}`}>
              {t(`scrolly.${section.key}.label`)}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-5">
              {t(`scrolly.${section.key}.title`)}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              {t(`scrolly.${section.key}.text`)}
            </p>
            {idx === 2 && (
              <a
                href="#v2-downloads"
                className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                {t('hero.ctaDownload')} →
              </a>
            )}
          </div>

          {/* Visual side */}
          <div className={`${section.visual.bg} rounded-3xl aspect-square max-w-sm w-full mx-auto flex flex-col items-center justify-center relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 right-0 h-1.5 ${section.visual.accent}`} aria-hidden="true" />
            <div className="flex flex-col items-center gap-4">
              {section.visual.icon}
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                Illustration
              </span>
            </div>
            <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-3xl ${section.visual.accent} opacity-10`} aria-hidden="true" />
          </div>
        </div>
      ))}
    </section>
  )
}
