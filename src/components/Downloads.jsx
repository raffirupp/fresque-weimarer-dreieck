import { useTranslation } from 'react-i18next'
import { downloads } from '../data/downloads'

function DownloadCard({ item }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-lg border border-border p-6 flex flex-col gap-4">
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-base font-semibold text-navy leading-snug"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t(item.titleKey)}
          </h3>
          <span className="shrink-0 inline-block text-xs font-semibold tracking-wide text-navy-dark bg-navy-light px-2 py-0.5 rounded">
            {item.lang}
          </span>
        </div>
        <p className="text-sm text-muted leading-relaxed">{t(item.descKey)}</p>
      </div>
      <a
        href={item.file}
        download
        className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white bg-navy hover:bg-navy-dark transition-colors px-4 py-2 rounded focus-visible:outline-navy"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <DownloadIcon />
        {t('downloads.downloadButton')}
      </a>
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Downloads() {
  const { t } = useTranslation()

  return (
    <section id="downloads" className="bg-sand">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-navy mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('downloads.title')}
        </h2>
        <p className="text-base text-muted max-w-xl mb-10 leading-relaxed">
          {t('downloads.subtitle')}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {downloads.map(item => (
            <DownloadCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
