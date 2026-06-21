import { useTranslation } from 'react-i18next'
import { useModal } from '../../context/ModalContext'

function InfoCard({ title, text, accentColor }) {
  return (
    <div className="bg-white rounded-xl border border-[#E2DDD8] p-6" style={{ borderTop: `3px solid ${accentColor}` }}>
      <h3 className="text-sm font-bold text-[#1E3A5F] mb-2 leading-snug" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
        {title}
      </h3>
      <p className="text-sm text-[#5A6070] leading-relaxed">{text}</p>
    </div>
  )
}

export default function V1Hero() {
  const { t } = useTranslation()
  const { openModal } = useModal()

  return (
    <section id="info">
      {/* Hero – two column */}
      <div className="bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: text */}
            <div>
              <div className="flex gap-1.5 h-1 w-16 mb-5" aria-hidden="true">
                <div className="flex-1 rounded-full bg-[#B8860B]" />
                <div className="flex-1 rounded-full bg-[#1E3A5F]" />
                <div className="flex-1 rounded-full bg-[#7A2F3E]" />
              </div>
              <p className="text-xs font-semibold tracking-widest text-[#B8860B] uppercase mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {t('hero.tagline')}
              </p>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#1E3A5F] leading-tight mb-5" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {t('hero.title')}
              </h1>
              <p className="text-lg text-[#1A1A2E] mb-3 font-medium">{t('hero.subtitle')}</p>
              <p className="text-base text-[#5A6070] leading-relaxed mb-10">{t('hero.intro')}</p>

              <div className="flex flex-wrap gap-3 items-center">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors hover:bg-[#122848]"
                  style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
                >
                  {t('hero.ctaDownload')}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <a href="#team" className="text-sm font-medium text-[#1E3A5F] hover:underline underline-offset-2">
                  {t('nav.about')} →
                </a>
              </div>
            </div>

            {/* Right: card image + stats */}
            <div className="flex flex-col gap-6 items-start lg:items-end">
              <img
                src="/cards/vorder-4.png"
                alt="Kartenbeispiel: Gründung Weimarer Dreieck"
                className="w-full max-w-md rounded-2xl shadow-xl object-contain"
                style={{ transform: 'rotate(-1.5deg)' }}
              />
              <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                {[
                  { n: '3', l: 'Länder / pays / kraje' },
                  { n: "90'", l: 'Min. Workshop' },
                  { n: '24', l: 'Max. Teiln.' },
                ].map(({ n, l }) => (
                  <div key={n} className="flex flex-col items-center text-center px-4 py-4 bg-white/70 rounded-lg border border-[#E2DDD8]">
                    <span className="text-2xl font-extrabold text-[#1E3A5F]" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>{n}</span>
                    <span className="text-xs text-[#5A6070] mt-0.5 leading-snug">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info cards – full width strip */}
      <div className="bg-white border-t border-[#E2DDD8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12">
          <div className="grid sm:grid-cols-3 gap-5">
            <InfoCard title={t('hero.whatIsTitle')} text={t('hero.whatIsText')} accentColor="#B8860B" />
            <InfoCard title={t('hero.forWhomTitle')} text={t('hero.forWhomText')} accentColor="#7A2F3E" />
            <InfoCard title={t('hero.howTitle')} text={t('hero.howText')} accentColor="#1E3A5F" />
          </div>
        </div>
      </div>
    </section>
  )
}
