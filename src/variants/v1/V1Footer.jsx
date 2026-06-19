import { useTranslation } from 'react-i18next'

export default function V1Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#122848] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex gap-1 h-4 mb-4" aria-hidden="true">
              <div className="w-1.5 rounded-full bg-[#B8860B]" />
              <div className="w-1.5 rounded-full bg-white/40" />
              <div className="w-1.5 rounded-full bg-[#7A2F3E]" />
            </div>
            <p className="text-xs font-bold tracking-widest text-[#B8860B] uppercase mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              {t('footer.orgName')}
            </p>
            <div className="w-24 h-10 rounded bg-white/10 flex items-center justify-center text-white/30 text-xs">
              Logo
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              {t('footer.imprintTitle')}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">{t('footer.imprintText')}</p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
              {t('footer.contactTitle')}
            </h3>
            <a href={`mailto:${t('footer.contactEmail')}`} className="text-sm text-white/50 hover:text-white transition-colors">
              {t('footer.contactEmail')}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-white/30">&copy; {year} {t('footer.orgName')}. {t('footer.rights')}</p>
          <p className="text-xs text-white/20">Fresque zum Weimarer Dreieck</p>
        </div>
      </div>
    </footer>
  )
}
