import { useTranslation } from 'react-i18next'
import { useModal } from '../../context/ModalContext'

export default function V2Hero() {
  const { t } = useTranslation()
  const { openModal } = useModal()

  return (
    <section id="v2-info" className="relative overflow-hidden">
      <div
        className="relative"
        style={{ background: 'linear-gradient(135deg, #0A1928 0%, #1E3A5F 55%, #0F2A4A 100%)' }}
      >
        {/* Decorative glow */}
        <div className="absolute top-16 right-8 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #B8860B, transparent)' }} aria-hidden="true" />
        <div className="absolute bottom-24 left-12 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #7A2F3E, transparent)' }} aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: text */}
            <div>
              <div className="flex gap-1 h-1 w-12 mb-6" aria-hidden="true">
                <div className="flex-1 rounded-full bg-[#B8860B]" />
                <div className="flex-1 rounded-full bg-white/40" />
                <div className="flex-1 rounded-full bg-[#7A2F3E]" />
              </div>
              <p className="text-xs font-bold tracking-widest text-[#B8860B] uppercase mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {t('hero.tagline')}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none mb-5" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {t('hero.title')}
              </h1>
              <p className="text-lg text-white/80 max-w-xl mb-3 font-medium">{t('hero.subtitle')}</p>
              <p className="text-base text-white/55 max-w-lg leading-relaxed mb-10">{t('hero.intro')}</p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg"
                  style={{ background: '#B8860B', boxShadow: '0 8px 24px rgba(184,134,11,0.35)' }}
                >
                  {t('hero.ctaDownload')}
                  <span aria-hidden="true">↓</span>
                </button>
                <a
                  href="#v2-scrolly"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors border"
                  style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  {t('hero.learnMore')}
                </a>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                {[
                  { n: '3', l: t('hero.statLaender'), color: '#B8860B' },
                  { n: "90'", l: t('hero.statWorkshop'), color: '#FFFFFF' },
                  { n: '24', l: t('hero.statTeiln'), color: '#FFFFFF' },
                  { n: '100%', l: t('hero.statFree'), color: '#7A9FBF' },
                ].map(({ n, l, color }) => (
                  <div key={n}>
                    <div className="text-3xl font-black" style={{ color }}>{n}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: card teaser */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <img
                  src="/cards/vorder-4.png"
                  alt="Kartenbeispiel: Gründung Weimarer Dreieck"
                  className="w-full max-w-md rounded-2xl shadow-2xl object-contain"
                  style={{ transform: 'rotate(-2deg)', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.5))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative -mt-1" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 60L480 20L960 50L1440 10V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
