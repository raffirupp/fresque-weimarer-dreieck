import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const CARDS = [
  {
    id: 'gruendung',
    number: '01',
    accent: '#B8860B',
    category: { de: 'Geschichte', fr: 'Histoire', pl: 'Historia' },
    title: {
      de: 'Das Weimarer Dreieck',
      fr: 'Le Triangle de Weimar',
      pl: 'Trójkąt Weimarski',
    },
    text: {
      de: 'Am 28. August 1991 trafen sich die Außenminister Deutschlands, Frankreichs und Polens erstmals in Weimar – und begründeten damit ein einzigartiges Format trilateraler Zusammenarbeit.',
      fr: 'Le 28 août 1991, les ministres des Affaires étrangères d\'Allemagne, de France et de Pologne se sont réunis pour la première fois à Weimar et ont créé un format unique de coopération trilatérale.',
      pl: 'Dnia 28 sierpnia 1991 roku ministrowie spraw zagranicznych Niemiec, Francji i Polski spotkali się po raz pierwszy w Weimarze, tworząc wyjątkowy format trójstronnej współpracy.',
    },
    flag: '🏛️',
  },
  {
    id: 'versoehnung',
    number: '02',
    accent: '#1E3A5F',
    category: { de: 'Werte', fr: 'Valeurs', pl: 'Wartości' },
    title: {
      de: 'Versöhnung & Partnerschaft',
      fr: 'Réconciliation & Partenariat',
      pl: 'Pojednanie & Partnerstwo',
    },
    text: {
      de: 'Die Freundschaft zwischen Deutschland, Frankreich und Polen ist keine Selbstverständlichkeit. Sie ist das Ergebnis mutiger Entscheidungen nach Jahrzehnten des Konflikts.',
      fr: 'L\'amitié entre l\'Allemagne, la France et la Pologne n\'est pas acquise. Elle est le résultat de décisions courageuses après des décennies de conflits.',
      pl: 'Przyjaźń między Niemcami, Francją i Polską nie jest czymś oczywistym. Jest wynikiem odważnych decyzji po dekadach konfliktów.',
    },
    flag: '🤝',
  },
  {
    id: 'jugend',
    number: '03',
    accent: '#7A2F3E',
    category: { de: 'Jugend', fr: 'Jeunesse', pl: 'Młodzież' },
    title: {
      de: 'Jugend & Austausch',
      fr: 'Jeunesse & Échanges',
      pl: 'Młodzież & Wymiana',
    },
    text: {
      de: 'Millionen junger Menschen aus den drei Ländern haben sich durch Austauschprogramme kennengelernt. Dieser persönliche Kontakt ist das Fundament der Zusammenarbeit.',
      fr: 'Des millions de jeunes des trois pays se sont connus grâce aux programmes d\'échange. Ce contact personnel est le fondement de la coopération.',
      pl: 'Miliony młodych ludzi z trzech krajów poznało się dzięki programom wymiany. Ten osobisty kontakt jest fundamentem współpracy.',
    },
    flag: '🌍',
  },
  {
    id: 'kultur',
    number: '04',
    accent: '#2D6A4F',
    category: { de: 'Kultur', fr: 'Culture', pl: 'Kultura' },
    title: {
      de: 'Kulturelle Vielfalt',
      fr: 'Diversité Culturelle',
      pl: 'Różnorodność Kulturowa',
    },
    text: {
      de: 'Drei Sprachen, drei Küchen, drei Literaturen – und doch verbindet uns mehr als uns trennt. Was sind eure gemeinsamen kulturellen Referenzen?',
      fr: 'Trois langues, trois cuisines, trois littératures – et pourtant, ce qui nous unit est plus fort que ce qui nous divise. Quelles sont vos références culturelles communes ?',
      pl: 'Trzy języki, trzy kuchnie, trzy literatury – a mimo to łączy nas więcej, niż nas dzieli. Jakie macie wspólne odniesienia kulturowe?',
    },
    flag: '🎭',
  },
  {
    id: 'eu',
    number: '05',
    accent: '#4A6FA5',
    category: { de: 'Europa', fr: 'Europe', pl: 'Europa' },
    title: {
      de: 'Motor Europas',
      fr: 'Moteur de l\'Europe',
      pl: 'Silnik Europy',
    },
    text: {
      de: 'Das Weimarer Dreieck hat wiederholt die europäische Integration vorangetrieben. Welche europäischen Projekte sind heute besonders wichtig?',
      fr: 'Le Triangle de Weimar a à plusieurs reprises fait avancer l\'intégration européenne. Quels projets européens sont particulièrement importants aujourd\'hui ?',
      pl: 'Trójkąt Weimarski wielokrotnie przyspieszał integrację europejską. Jakie projekty europejskie są dziś szczególnie ważne?',
    },
    flag: '🇪🇺',
  },
  {
    id: 'zukunft',
    number: '06',
    accent: '#8B5CF6',
    category: { de: 'Zukunft', fr: 'Avenir', pl: 'Przyszłość' },
    title: {
      de: 'Zukunft Europas',
      fr: 'L\'Avenir de l\'Europe',
      pl: 'Przyszłość Europy',
    },
    text: {
      de: 'Was wird die nächste Generation des Weimarer Dreiecks prägen? Klimaschutz, digitale Souveränität, Sicherheit – welche Themen bewegen euch am meisten?',
      fr: 'Qu\'est-ce qui façonnera la prochaine génération du Triangle de Weimar ? Climat, souveraineté numérique, sécurité – quels sujets vous touchent le plus ?',
      pl: 'Co ukształtuje następne pokolenie Trójkąta Weimarskiego? Klimat, suwerenność cyfrowa, bezpieczeństwo – które tematy są dla Was najważniejsze?',
    },
    flag: '✨',
  },
]

function getLang(i18nLang) {
  if (i18nLang.startsWith('fr')) return 'fr'
  if (i18nLang.startsWith('pl')) return 'pl'
  return 'de'
}

// ─── V1 ───────────────────────────────────────────────────────────────────────
function CardV1({ card, lang }) {
  return (
    <div
      className="shrink-0 w-72 sm:w-80 bg-white rounded-2xl border border-[#E2DDD8] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
      style={{ borderTop: `4px solid ${card.accent}` }}
    >
      <div className="px-6 pt-5 pb-2 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: card.accent }}>
          {card.category[lang]}
        </span>
        <span className="text-2xl" role="img" aria-hidden="true">{card.flag}</span>
      </div>
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <div className="text-[10px] font-semibold text-[#5A6070] mb-2 tabular-nums">{card.number}</div>
        <h3 className="text-base font-extrabold text-[#1E3A5F] mb-3 leading-snug" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          {card.title[lang]}
        </h3>
        <p className="text-sm text-[#5A6070] leading-relaxed flex-1">{card.text[lang]}</p>
      </div>
    </div>
  )
}

// ─── V2 ───────────────────────────────────────────────────────────────────────
function CardV2({ card, lang }) {
  return (
    <div className="shrink-0 w-72 sm:w-80 bg-white rounded-2xl border-2 border-gray-100 overflow-hidden flex flex-col hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100 transition-all">
      <div className="px-6 pt-5 pb-2 flex items-center justify-between"
        style={{ background: `linear-gradient(135deg, ${card.accent}18, transparent)` }}>
        <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: `${card.accent}22`, color: card.accent }}>
          {card.category[lang]}
        </span>
        <span className="text-2xl" role="img" aria-hidden="true">{card.flag}</span>
      </div>
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <div className="text-xs font-black text-gray-300 mb-2">{card.number}</div>
        <h3 className="text-base font-black text-gray-900 mb-3 leading-snug">{card.title[lang]}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{card.text[lang]}</p>
      </div>
    </div>
  )
}

// ─── V3 ───────────────────────────────────────────────────────────────────────
function CardV3({ card, lang }) {
  return (
    <div className="shrink-0 w-72 sm:w-80 border flex flex-col" style={{ borderColor: '#D4C5A9' }}>
      <div className="px-6 pt-5 pb-3 border-b" style={{ borderColor: '#D4C5A9' }}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#92400E' }}>
            {card.category[lang]}
          </span>
          <span className="text-[10px] tabular-nums" style={{ color: '#D4C5A9' }}>{card.number}</span>
        </div>
      </div>
      <div className="px-6 py-5 flex-1 flex flex-col">
        <h3 className="text-base font-bold mb-3 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1C1917' }}>
          {card.title[lang]}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: '#78716C' }}>{card.text[lang]}</p>
      </div>
    </div>
  )
}

const CardComponents = { v1: CardV1, v2: CardV2, v3: CardV3 }

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

// Variant-specific section wrappers
const sectionClass = {
  v1: 'bg-white border-t border-[#E2DDD8]',
  v2: 'bg-white border-t border-gray-100',
  v3: 'border-t py-0',
}
const innerClass = {
  v1: 'max-w-6xl mx-auto px-5 sm:px-8 py-14',
  v2: 'max-w-6xl mx-auto px-5 sm:px-8 py-16',
  v3: 'max-w-5xl mx-auto px-6 sm:px-10 py-16',
}
const headingStyle = {
  v1: { className: 'text-xl sm:text-2xl font-extrabold text-[#1E3A5F] mb-2', font: 'Montserrat, Arial, sans-serif' },
  v2: { className: 'text-2xl sm:text-3xl font-black text-gray-900 mb-2', font: 'inherit' },
  v3: { className: 'text-2xl font-bold mb-2', font: "'Playfair Display', Georgia, serif" },
}
const subtitleStyle = {
  v1: 'text-sm text-[#5A6070] mb-8',
  v2: 'text-base text-gray-500 mb-10',
  v3: 'text-sm mb-10',
}
const navBtnStyle = {
  v1: 'p-2 rounded-lg border border-[#E2DDD8] text-[#1E3A5F] hover:bg-[#F5F3EE] transition-colors disabled:opacity-30',
  v2: 'p-2 rounded-xl border-2 border-gray-100 text-gray-700 hover:border-violet-300 hover:text-violet-700 transition-colors disabled:opacity-30',
  v3: 'p-2 border text-[#1C1917] hover:bg-[#F7F5F0] transition-colors disabled:opacity-30',
}

export default function CardPreview({ variant = 'v1' }) {
  const { i18n } = useTranslation()
  const lang = getLang(i18n.language)
  const ref = useRef(null)
  const [idx, setIdx] = useState(0)

  const cardWidth = 320 + 16 // card width + gap

  const prev = () => {
    const next = Math.max(0, idx - 1)
    setIdx(next)
    ref.current?.scrollTo({ left: next * cardWidth, behavior: 'smooth' })
  }
  const next = () => {
    const max = CARDS.length - 1
    const n = Math.min(max, idx + 1)
    setIdx(n)
    ref.current?.scrollTo({ left: n * cardWidth, behavior: 'smooth' })
  }

  const CardComponent = CardComponents[variant]
  const hs = headingStyle[variant]

  const sectionLabel = { v1: 'Kartenvorschau', v2: 'Die Karten', v3: 'Kartenvorschau' }
  const sectionSubtitle = {
    v1: 'Ein Einblick in die Karten des Workshops – auf Deutsch, Französisch und Polnisch.',
    v2: 'Klickt euch durch die Karten des Workshops.',
    v3: 'Ein Einblick in die Karten des Workshops.',
  }

  return (
    <section className={sectionClass[variant]} aria-label="Kartenvorschau">
      <div className={innerClass[variant]}>
        {variant === 'v3' ? (
          <div className="flex items-baseline gap-6 mb-8">
            <h2 className={hs.className} style={{ fontFamily: hs.font, color: '#1C1917' }}>
              {sectionLabel[variant]}
            </h2>
            <div className="h-px flex-1" style={{ background: '#D4C5A9' }} />
          </div>
        ) : (
          <h2 className={hs.className} style={{ fontFamily: hs.font }}>
            {sectionLabel[variant]}
          </h2>
        )}
        <p className={subtitleStyle[variant]} style={variant === 'v3' ? { color: '#78716C' } : undefined}>
          {sectionSubtitle[variant]}
        </p>

        <div className="flex items-center gap-3 mb-5">
          <button onClick={prev} disabled={idx === 0} className={navBtnStyle[variant]}
            aria-label="Vorherige Karte" style={variant === 'v3' ? { borderColor: '#D4C5A9' } : undefined}>
            <ChevronLeft />
          </button>
          <button onClick={next} disabled={idx >= CARDS.length - 1} className={navBtnStyle[variant]}
            aria-label="Nächste Karte" style={variant === 'v3' ? { borderColor: '#D4C5A9' } : undefined}>
            <ChevronRight />
          </button>
          <span className="text-xs" style={{ color: variant === 'v3' ? '#D4C5A9' : undefined,
            ...(variant === 'v1' ? { color: '#5A6070' } : { color: '#9CA3AF' }) }}>
            {idx + 1} / {CARDS.length}
          </span>
        </div>

        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CARDS.map(card => (
            <CardComponent key={card.id} card={card} lang={lang} />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-1.5 mt-5">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIdx(i)
                ref.current?.scrollTo({ left: i * cardWidth, behavior: 'smooth' })
              }}
              className="rounded-full transition-all"
              style={{
                width: i === idx ? 20 : 6,
                height: 6,
                background: i === idx
                  ? (variant === 'v2' ? '#7C3AED' : variant === 'v3' ? '#92400E' : '#1E3A5F')
                  : (variant === 'v3' ? '#D4C5A9' : '#E2DDD8'),
              }}
              aria-label={`Karte ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
