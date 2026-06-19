import { useTranslation } from 'react-i18next'
import { downloads } from '../../data/downloads'

const langColors = {
  DE: 'bg-gray-100 text-gray-700',
  FR: 'bg-blue-100 text-blue-700',
  PL: 'bg-red-100 text-red-700',
  'DE / FR / PL': 'bg-violet-100 text-violet-700',
}

function DownloadCard({ item }) {
  const { t } = useTranslation()
  const langColor = langColors[item.lang] ?? 'bg-gray-100 text-gray-600'

  return (
    <div className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-violet-300 p-6 flex flex-col gap-4 transition-all hover:shadow-xl hover:shadow-violet-100 hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <span className={`inline-block text-[11px] font-black tracking-wide uppercase px-2.5 py-1 rounded-full ${langColor}`}>
          {item.lang}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="text-base font-black text-gray-900 mb-2">{t(item.titleKey)}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{t(item.descKey)}</p>
      </div>
      <a
        href={item.file}
        download
        className="inline-flex items-center justify-center gap-2 w-full text-sm font-bold text-white bg-violet-700 group-hover:bg-violet-800 transition-colors px-4 py-3 rounded-xl"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {t('downloads.downloadButton')}
      </a>
    </div>
  )
}

export default function V2Downloads() {
  const { t } = useTranslation()

  return (
    <section id="v2-downloads" className="bg-gray-50 border-t-4 border-orange-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full mb-4">
            {t('nav.downloads')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{t('downloads.title')}</h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">{t('downloads.subtitle')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {downloads.map(item => (
            <DownloadCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
