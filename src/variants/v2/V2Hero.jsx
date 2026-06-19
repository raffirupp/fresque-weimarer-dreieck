import { useTranslation } from 'react-i18next'

function CountryBadge({ flag, name, color }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${color}`}>
      <span className="text-base">{flag}</span>
      <span>{name}</span>
    </div>
  )
}

export default function V2Hero() {
  const { t } = useTranslation()

  return (
    <section id="v2-info" className="relative overflow-hidden">
      {/* Gradient bg */}
      <div
        className="min-h-[90vh] flex flex-col justify-center px-5 sm:px-8 py-20 relative"
        style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #5B21B6 40%, #7C3AED 70%, #C2410C 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-16 right-8 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #F97316, transparent)' }} aria-hidden="true" />
        <div className="absolute bottom-24 left-12 w-48 h-48 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #10B981, transparent)' }} aria-hidden="true" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex flex-wrap gap-2 mb-8">
            <CountryBadge flag="🇩🇪" name="Deutschland" color="bg-white/15 text-white" />
            <CountryBadge flag="🇫🇷" name="France" color="bg-white/15 text-white" />
            <CountryBadge flag="🇵🇱" name="Polska" color="bg-white/15 text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none mb-6 max-w-4xl">
            {t('hero.title')}
          </h1>

          <p className="text-lg sm:text-xl text-violet-200 max-w-2xl mb-3 font-medium">{t('hero.subtitle')}</p>
          <p className="text-base text-violet-300 max-w-xl leading-relaxed mb-10">{t('hero.intro')}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#v2-downloads"
              className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-black text-base px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
            >
              {t('hero.ctaDownload')}
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#v2-scrolly"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-2xl transition-colors border border-white/20"
            >
              Mehr erfahren
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-black text-orange-400">3</div>
              <div className="text-xs text-violet-300 uppercase tracking-widest mt-1">Länder</div>
            </div>
            <div>
              <div className="text-3xl font-black text-emerald-400">90'</div>
              <div className="text-xs text-violet-300 uppercase tracking-widest mt-1">Workshop</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">24</div>
              <div className="text-xs text-violet-300 uppercase tracking-widest mt-1">Teilnehmende</div>
            </div>
            <div>
              <div className="text-3xl font-black text-yellow-300">100%</div>
              <div className="text-xs text-violet-300 uppercase tracking-widest mt-1">Kostenlos</div>
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
