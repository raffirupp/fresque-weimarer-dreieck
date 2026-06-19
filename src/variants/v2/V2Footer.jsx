import { useTranslation } from 'react-i18next'

export default function V2Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'linear-gradient(135deg, #1E1B4B, #2E1065)' }} className="text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center shrink-0">
                <span className="text-white font-black text-lg">W</span>
              </div>
              <div>
                <div className="font-black text-white text-sm">Weimarer Dreieck</div>
                <div className="text-xs text-violet-300">{t('footer.orgName')}</div>
              </div>
            </div>
            <p className="text-sm text-violet-300 leading-relaxed">
              Ein Bildungsprojekt für Jugendliche in Deutschland, Frankreich und Polen.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-black text-orange-400 uppercase tracking-widest mb-4">{t('footer.imprintTitle')}</h3>
            <p className="text-sm text-violet-300 leading-relaxed">{t('footer.imprintText')}</p>
          </div>

          <div>
            <h3 className="text-xs font-black text-orange-400 uppercase tracking-widest mb-4">{t('footer.contactTitle')}</h3>
            <a href={`mailto:${t('footer.contactEmail')}`} className="text-sm text-violet-300 hover:text-white transition-colors">
              {t('footer.contactEmail')}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-violet-400">&copy; {year} {t('footer.orgName')}. {t('footer.rights')}</p>
          <div className="flex gap-1">
            <span className="text-lg">🇩🇪</span>
            <span className="text-lg">🇫🇷</span>
            <span className="text-lg">🇵🇱</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
