import { useTranslation } from 'react-i18next'

export default function V2Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'linear-gradient(135deg, #0A1928, #1E3A5F)' }} className="text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5 h-5" aria-hidden="true">
                <div className="w-1.5 rounded-full bg-[#B8860B]" />
                <div className="w-1.5 rounded-full bg-white/40" />
                <div className="w-1.5 rounded-full bg-[#7A2F3E]" />
              </div>
              <div>
                <div className="font-black text-white text-sm" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>Fresko · Weimarer Dreieck</div>
                <div className="text-[10px] text-white/40 tracking-wide uppercase">{t('footer.orgName')}</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black text-[#B8860B] uppercase tracking-widest mb-4">{t('footer.imprintTitle')}</h3>
            <p className="text-sm text-white/50 leading-relaxed mb-2">{t('footer.imprintText')}</p>
            <details className="text-sm">
              <summary className="text-white/40 hover:text-white/70 cursor-pointer transition-colors">
                {t('footer.imprintToggle')}
              </summary>
              <p className="text-white/50 leading-relaxed whitespace-pre-line mt-3">{t('footer.imprintDetails')}</p>
            </details>
          </div>

          <div>
            <h3 className="text-xs font-black text-[#B8860B] uppercase tracking-widest mb-4">{t('footer.privacyTitle')}</h3>
            <a
              href="https://www.dfjw.org/datenschutzerklaerung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white/80 underline underline-offset-2 leading-relaxed"
            >
              {t('footer.privacyDfjwLink')}
            </a>
            <details className="text-sm mt-2">
              <summary className="text-white/40 hover:text-white/70 cursor-pointer transition-colors">
                {t('footer.privacyToggle')}
              </summary>
              <p className="text-white/50 leading-relaxed whitespace-pre-line mt-3">{t('footer.privacyDetails')}</p>
            </details>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-white/30">&copy; {year} {t('footer.orgName')}. {t('footer.rights')}</p>
          <div className="flex gap-1 items-center">
            <span className="text-lg" title="Europäische Union">🇪🇺</span>
            <span className="text-lg" title="Deutschland">🇩🇪</span>
            <span className="text-lg" title="France">🇫🇷</span>
            <span className="text-lg" title="Polska">🇵🇱</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
