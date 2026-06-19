import { useTranslation } from 'react-i18next'
import { downloads } from '../../data/downloads'

function DownloadRow({ item, index }) {
  const { t } = useTranslation()

  return (
    <div className="flex items-start justify-between gap-6 py-7 border-b" style={{ borderColor: '#D4C5A9' }}>
      <div className="flex items-start gap-5 flex-1 min-w-0">
        <span className="text-xs tabular-nums pt-0.5 shrink-0" style={{ color: '#D4C5A9', fontVariantNumeric: 'tabular-nums' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0">
          <h3
            className="text-base font-bold mb-1 leading-snug"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1C1917' }}
          >
            {t(item.titleKey)}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#78716C' }}>{t(item.descKey)}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <span className="text-xs tracking-widest uppercase" style={{ color: '#92400E' }}>{item.lang}</span>
        <a
          href={item.file}
          download
          className="inline-flex items-center gap-1.5 text-xs font-semibold border px-3 py-1.5 transition-colors hover:text-white"
          style={{ color: '#1C1917', borderColor: '#1C1917' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1C1917'; e.currentTarget.style.color = '#F7F5F0' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1C1917' }}
        >
          <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {t('downloads.downloadButton')}
        </a>
      </div>
    </div>
  )
}

export default function V3Downloads() {
  const { t } = useTranslation()

  return (
    <section id="v3-downloads" className="py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="flex items-baseline gap-6 mb-12">
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1C1917' }}
          >
            {t('downloads.title')}
          </h2>
          <div className="h-px flex-1" style={{ background: '#D4C5A9' }} aria-hidden="true" />
        </div>
        <p className="text-sm leading-relaxed max-w-lg mb-8" style={{ color: '#78716C' }}>{t('downloads.subtitle')}</p>

        <div>
          <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: '#D4C5A9' }}>
            <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#92400E' }}>Material</span>
            <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#92400E' }}>Sprache / Langue / Język</span>
          </div>
          {downloads.map((item, idx) => (
            <DownloadRow key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
