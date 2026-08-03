import { useTranslation } from 'react-i18next'

export default function V1Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#122848] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 pt-12 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex gap-1 h-4 mb-4" aria-hidden="true">
              <div className="w-1.5 rounded-full bg-[#B8860B]" />
              <div className="w-1.5 rounded-full bg-white/40" />
              <div className="w-1.5 rounded-full bg-[#7A2F3E]" />
            </div>
            <p className="text-xs font-bold tracking-widest text-[#B8860B] uppercase mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              {t('footer.orgName')}
            </p>
            <div className="flex items-center gap-2.5 mt-1">
              <div className="flex gap-0.5 h-5" aria-hidden="true">
                <div className="w-1.5 rounded-full bg-[#B8860B]" />
                <div className="w-1.5 rounded-full bg-white/50" />
                <div className="w-1.5 rounded-full bg-[#7A2F3E]" />
              </div>
              <span className="text-xs text-white/40" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Fresko · Weimarer Dreieck
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              {t('footer.imprintTitle')}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-2">{t('footer.imprintText')}</p>
            <details className="text-sm">
              <summary className="text-white/40 hover:text-white/70 cursor-pointer transition-colors">
                {t('footer.imprintToggle')}
              </summary>
              <p className="text-white/60 leading-relaxed whitespace-pre-line mt-3">{t('footer.imprintDetails')}</p>
            </details>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              {t('footer.privacyTitle')}
            </h3>
            <a
              href="https://www.dfjw.org/datenschutzerklaerung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white underline underline-offset-2 leading-relaxed"
            >
              {t('footer.privacyDfjwLink')}
            </a>
            <details className="text-sm mt-2">
              <summary className="text-white/40 hover:text-white/70 cursor-pointer transition-colors">
                {t('footer.privacyToggle')}
              </summary>
              <p className="text-white/60 leading-relaxed whitespace-pre-line mt-3">{t('footer.privacyDetails')}</p>
            </details>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-white/30">&copy; {year} {t('footer.orgName')}. {t('footer.rights')}</p>
          <p className="text-xs text-white/20">Fresko zum Weimarer Dreieck</p>
        </div>
      </div>
    </footer>
  )
}
