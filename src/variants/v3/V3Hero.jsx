import { useTranslation } from 'react-i18next'
import { useModal } from '../../context/ModalContext'

export default function V3Hero() {
  const { t } = useTranslation()
  const { openModal } = useModal()

  return (
    <section id="v3-info">
      {/* Large editorial hero */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-20 pb-16">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: '#D4C5A9' }} aria-hidden="true" />
          <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#92400E' }}>
            {t('hero.tagline')}
          </span>
          <div className="h-px flex-1" style={{ background: '#D4C5A9' }} aria-hidden="true" />
        </div>

        {/* Big letter watermark */}
        <div className="relative">
          <div
            className="absolute -top-8 -left-4 text-[180px] font-black leading-none select-none pointer-events-none"
            style={{ color: '#D4C5A9', opacity: 0.4, fontFamily: "'Playfair Display', Georgia, serif" }}
            aria-hidden="true"
          >
            W
          </div>
          <div className="relative z-10">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-2xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1C1917' }}
            >
              {t('hero.title')}
            </h1>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 mt-8">
          <div>
            <p className="text-xl leading-relaxed mb-6" style={{ color: '#1C1917' }}>{t('hero.subtitle')}</p>
            <p className="text-base leading-loose" style={{ color: '#78716C' }}>{t('hero.intro')}</p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div className="border-l-2 pl-5" style={{ borderColor: '#92400E' }}>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#92400E' }}>{t('hero.whatIsTitle')}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#78716C' }}>{t('hero.whatIsText')}</p>
              </div>
              <div className="border-l-2 pl-5" style={{ borderColor: '#D4C5A9' }}>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#92400E' }}>{t('hero.forWhomTitle')}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#78716C' }}>{t('hero.forWhomText')}</p>
              </div>
              <div className="border-l-2 pl-5" style={{ borderColor: '#D4C5A9' }}>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#92400E' }}>{t('hero.howTitle')}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#78716C' }}>{t('hero.howText')}</p>
              </div>
            </div>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-3 mt-8 text-sm font-medium border-b-2 pb-0.5 w-fit transition-opacity hover:opacity-70"
              style={{ color: '#1C1917', borderColor: '#92400E' }}
            >
              {t('hero.ctaDownload')}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M9 1l4 4-4 4M1 5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: '#D4C5A9' }} aria-hidden="true" />
    </section>
  )
}
