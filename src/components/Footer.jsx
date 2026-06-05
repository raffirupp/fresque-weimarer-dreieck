import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      {/* TODO: Logos der Organisation / Partner hier einfügen */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          <div>
            <p
              className="text-xs font-semibold tracking-widest text-gold uppercase mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('footer.orgName')}
            </p>
            {/* TODO: Logobereich – Bild hier einfügen */}
            <div className="w-24 h-10 rounded bg-white/10 flex items-center justify-center text-white/40 text-xs">
              Logo
            </div>
          </div>

          <div>
            <h3
              className="text-sm font-semibold text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('footer.imprintTitle')}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">{t('footer.imprintText')}</p>
          </div>

          <div>
            <h3
              className="text-sm font-semibold text-white mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('footer.contactTitle')}
            </h3>
            <a
              href={`mailto:${t('footer.contactEmail')}`}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {t('footer.contactEmail')}
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-white/40">
            &copy; {year} {t('footer.orgName')}. {t('footer.rights')}
          </p>
          <p className="text-xs text-white/30">
            Fresque zum Weimarer Dreieck
          </p>
        </div>
      </div>
    </footer>
  )
}
