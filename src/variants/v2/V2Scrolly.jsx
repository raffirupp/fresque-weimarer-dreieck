import { useTranslation } from 'react-i18next'
import { useModal } from '../../context/ModalContext'

const sections = [
  {
    key: 's1',
    cardImg: '/cards/vorder-4.png',
    cardAlt: 'Gründung Weimarer Dreieck 1991',
    reverse: false,
    labelColor: 'text-violet-600 bg-violet-100',
  },
  {
    key: 's2',
    cardImg: '/cards/vorder-2.png',
    cardAlt: 'Zwischenkriegszeit – historische Karte',
    reverse: true,
    labelColor: 'text-orange-600 bg-orange-100',
  },
  {
    key: 's3',
    cardImg: '/cards/vorder-3.png',
    cardAlt: 'Mauerfall 1989',
    reverse: false,
    labelColor: 'text-emerald-700 bg-emerald-100',
  },
]

export default function V2Scrolly() {
  const { t } = useTranslation()
  const { openModal } = useModal()

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
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-violet-700 hover:bg-violet-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                {t('hero.ctaDownload')} →
              </button>
            )}
          </div>

          {/* Card image */}
          <div className="flex items-center justify-center">
            <img
              src={section.cardImg}
              alt={section.cardAlt}
              className="w-full max-w-sm rounded-2xl shadow-xl object-contain"
              style={{ transform: section.reverse ? 'rotate(1.5deg)' : 'rotate(-1.5deg)' }}
            />
          </div>
        </div>
      ))}
    </section>
  )
}
