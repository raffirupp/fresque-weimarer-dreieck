import { useTranslation } from 'react-i18next'

export default function V3Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t" style={{ borderColor: '#D4C5A9', background: '#F7F5F0' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <p
              className="font-bold text-base mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1C1917' }}
            >
              {t('footer.orgName')}
            </p>
            <div
              className="w-20 h-8 flex items-center justify-center text-xs"
              style={{ background: '#E7E2DA', color: '#78716C' }}
            >
              Logo
            </div>
          </div>

          <div>
            <h3 className="text-[10px] tracking-widest uppercase mb-4" style={{ color: '#92400E' }}>
              {t('footer.imprintTitle')}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#78716C' }}>{t('footer.imprintText')}</p>
          </div>

          <div>
            <h3 className="text-[10px] tracking-widest uppercase mb-4" style={{ color: '#92400E' }}>
              {t('footer.contactTitle')}
            </h3>
            <a
              href={`mailto:${t('footer.contactEmail')}`}
              className="text-sm transition-colors"
              style={{ color: '#78716C' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1C1917' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#78716C' }}
            >
              {t('footer.contactEmail')}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-8 border-t" style={{ borderColor: '#D4C5A9' }}>
          <p className="text-xs" style={{ color: '#D4C5A9' }}>
            &copy; {year} {t('footer.orgName')}. {t('footer.rights')}
          </p>
          <p className="text-xs" style={{ color: '#D4C5A9' }}>DE · FR · PL</p>
        </div>
      </div>
    </footer>
  )
}
