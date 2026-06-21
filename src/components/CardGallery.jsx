import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CARDS = [
  {
    id: 1,
    title: { de: 'Versailler Vertrag (1919)', fr: 'Traité de Versailles (1919)', pl: 'Traktat Wersalski (1919)' },
  },
  {
    id: 2,
    title: { de: 'Zwischenkriegszeit', fr: "L'Entre-deux-guerres", pl: 'Okres międzywojenny' },
  },
  {
    id: 3,
    title: { de: 'Mauerfall und Nachbarschaftsvertrag (1989)', fr: 'Chute du mur et Traité de bon voisinage (1989)', pl: 'Upadek muru i Traktat o dobrym sąsiedztwie (1989)' },
  },
  {
    id: 4,
    title: { de: 'Gründung Weimarer Dreieck (1991)', fr: 'Création du Triangle de Weimar (1991)', pl: 'Powstanie Trójkąta Weimarskiego (1991)' },
  },
  {
    id: 5,
    title: { de: 'Politische Herausforderungen und Unterschiede', fr: 'Défis et différences politiques', pl: 'Wyzwania i różnice polityczne' },
  },
]

function getLang(i18nLang) {
  if (i18nLang.startsWith('fr')) return 'fr'
  if (i18nLang.startsWith('pl')) return 'pl'
  return 'de'
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FlipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7a5 5 0 0 0 9.9 1M12 7a5 5 0 0 0-9.9-1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 4v3h-3M2 10v-3h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Variant-specific section styles
const variantStyles = {
  v1: {
    section: 'bg-white border-t border-[#E2DDD8]',
    inner: 'max-w-6xl mx-auto px-5 sm:px-8 py-16',
    heading: 'text-2xl sm:text-3xl font-extrabold text-[#1E3A5F] mb-3',
    headingFont: 'Montserrat, Arial, sans-serif',
    subtitle: 'text-sm text-[#5A6070] mb-10 max-w-xl leading-relaxed',
    navBtn: 'p-2.5 rounded-lg border border-[#E2DDD8] text-[#1E3A5F] hover:bg-[#F5F3EE] transition-colors disabled:opacity-30 disabled:cursor-not-allowed',
    counter: 'text-xs text-[#5A6070]',
    flipHint: 'text-xs text-[#5A6070]/70',
    dotActive: '#1E3A5F',
    dotInactive: '#E2DDD8',
    flipBtn: 'inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A5F] bg-[#EBF0F8] hover:bg-[#dce6f3] px-3 py-1.5 rounded-lg transition-colors',
  },
  v2: {
    section: 'bg-white border-t border-gray-100',
    inner: 'max-w-6xl mx-auto px-5 sm:px-8 py-16',
    heading: 'text-2xl sm:text-3xl font-black text-gray-900 mb-3',
    headingFont: 'inherit',
    subtitle: 'text-base text-gray-500 mb-10 max-w-xl leading-relaxed',
    navBtn: 'p-2.5 rounded-xl border-2 border-gray-100 text-gray-700 hover:border-violet-300 hover:text-violet-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed',
    counter: 'text-sm text-gray-400',
    flipHint: 'text-xs text-gray-400',
    dotActive: '#7C3AED',
    dotInactive: '#E5E7EB',
    flipBtn: 'inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-xl transition-colors',
  },
  v3: {
    section: 'bg-white border-t border-gray-100',
    inner: 'max-w-6xl mx-auto px-6 sm:px-10 py-24',
    heading: 'text-2xl font-bold tracking-tight',
    headingFont: "'Helvetica Neue', Arial, sans-serif",
    headingColor: '#111',
    subtitle: 'text-sm leading-relaxed mb-10 max-w-xl',
    subtitleColor: '#666',
    navBtn: 'p-2.5 border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed',
    navBtnStyle: { color: '#111' },
    counter: 'text-xs',
    counterColor: '#999',
    flipHint: 'text-xs',
    flipHintColor: '#666',
    dotActive: '#B91C1C',
    dotInactive: '#E5E7EB',
    flipBtn: 'inline-flex items-center gap-1.5 text-xs font-semibold border border-gray-200 px-3 py-1.5 hover:bg-gray-50 transition-colors',
    flipBtnStyle: { color: '#444' },
    dividerBg: '#E5E7EB',
  },
}

export default function CardGallery({ variant = 'v1' }) {
  const { i18n } = useTranslation()
  const lang = getLang(i18n.language)
  const s = variantStyles[variant]

  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const prev = () => { setCurrent(c => Math.max(0, c - 1)); setFlipped(false) }
  const next = () => { setCurrent(c => Math.min(CARDS.length - 1, c + 1)); setFlipped(false) }
  const flip = () => setFlipped(f => !f)

  const card = CARDS[current]
  const headingText = { de: 'Die Karten erkunden', fr: 'Explorer les cartes', pl: 'Odkrywaj karty' }
  const subtitleText = {
    de: 'Klickt auf die Karte, um sie umzudrehen – Vorder- und Rückseite.',
    fr: 'Cliquez sur la carte pour la retourner – recto et verso.',
    pl: 'Kliknij kartę, aby ją odwrócić – przód i tył.',
  }
  const flipLabel = { de: 'Umdrehen', fr: 'Retourner', pl: 'Odwróć' }
  const frontLabel = { de: 'Vorderseite', fr: 'Recto', pl: 'Przód' }
  const backLabel = { de: 'Rückseite', fr: 'Verso', pl: 'Tył' }

  const isV3 = variant === 'v3'

  return (
    <section
      className={s.section}
      style={s.sectionStyle}
      aria-label={headingText[lang]}
    >
      <div className={s.inner}>
        {isV3 ? (
          <div className="flex items-baseline gap-6 mb-8">
            <h2 className={s.heading} style={{ fontFamily: s.headingFont, color: s.headingColor }}>
              {headingText[lang]}
            </h2>
            <div className="h-px flex-1" style={{ background: s.dividerBg || '#D4C5A9' }} aria-hidden="true" />
          </div>
        ) : (
          <h2 className={s.heading} style={{ fontFamily: s.headingFont }}>{headingText[lang]}</h2>
        )}

        <p className={s.subtitle} style={isV3 ? { color: s.subtitleColor } : undefined}>
          {subtitleText[lang]}
        </p>

        {/* Navigation row */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={prev}
            disabled={current === 0}
            className={s.navBtn}
            style={s.navBtnStyle}
            aria-label="Vorherige Karte"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            disabled={current === CARDS.length - 1}
            className={s.navBtn}
            style={s.navBtnStyle}
            aria-label="Nächste Karte"
          >
            <ChevronRight />
          </button>
          <span className={s.counter} style={isV3 ? { color: s.counterColor } : undefined}>
            {current + 1} / {CARDS.length}
          </span>
          <div className="flex-1" />
          <button onClick={flip} className={s.flipBtn} style={s.flipBtnStyle}>
            <FlipIcon />
            {flipped ? backLabel[lang] : flipLabel[lang]}
          </button>
        </div>

        {/* Flip card */}
        <div
          className="w-full cursor-pointer mx-auto"
          style={{ perspective: '1200px', maxWidth: 720 }}
          onClick={flip}
          role="button"
          aria-label={flipped ? backLabel[lang] : frontLabel[lang]}
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') flip() }}
        >
          <div
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              position: 'relative',
              aspectRatio: '600 / 430',
            }}
          >
            {/* Front */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                position: 'absolute',
                inset: 0,
              }}
            >
              <img
                src={`/cards/vorder-${card.id}.png`}
                alt={card.title[lang] + ' – Vorderseite'}
                className="w-full h-full object-contain rounded-xl shadow-lg"
                draggable={false}
              />
            </div>

            {/* Back */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                position: 'absolute',
                inset: 0,
                transform: 'rotateY(180deg)',
              }}
            >
              <img
                src={`/cards/rueck-${card.id}.png`}
                alt={card.title[lang] + ' – Rückseite'}
                className="w-full h-full object-contain rounded-xl shadow-lg"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Card title below */}
        <p
          className="mt-4 text-sm font-semibold"
          style={isV3 ? { color: '#78716C' } : { color: variant === 'v2' ? '#6B7280' : '#5A6070' }}
        >
          {card.title[lang]}
        </p>

        {/* Dot navigation */}
        <div className="flex gap-2 mt-4 items-center">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setFlipped(false) }}
              aria-label={`Karte ${i + 1}`}
              style={{
                width: i === current ? 22 : 7,
                height: 7,
                borderRadius: 4,
                background: i === current ? s.dotActive : s.dotInactive,
                transition: 'all 0.25s',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
