import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { downloads } from '../../data/downloads'

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5" y="13" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 13v-4a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="14" cy="19" r="1.5" fill="currentColor" />
    </svg>
  )
}

function EmailGate({ onUnlock }) {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.includes('@')) {
      setError(true)
      return
    }
    localStorage.setItem('fresque_email', value)
    onUnlock()
  }

  return (
    <div className="max-w-lg mx-auto text-center py-12 px-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EBF0F8] text-[#1E3A5F] mb-6">
        <LockIcon />
      </div>
      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
        {t('downloads.gate.title')}
      </h3>
      <p className="text-sm text-[#5A6070] mb-8 leading-relaxed max-w-sm mx-auto">
        {t('downloads.gate.text')}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
        <input
          type="email"
          value={value}
          onChange={e => { setValue(e.target.value); setError(false) }}
          placeholder={t('downloads.gate.placeholder')}
          required
          className={`flex-1 px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors bg-white text-[#1A1A2E] placeholder:text-[#5A6070]/60 ${
            error ? 'border-red-400 focus:border-red-500' : 'border-[#E2DDD8] focus:border-[#1E3A5F]'
          }`}
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-[#1E3A5F] text-white text-sm font-semibold rounded-lg hover:bg-[#122848] transition-colors shrink-0"
          style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
        >
          {t('downloads.gate.button')}
        </button>
      </form>
      {error && <p className="mt-2 text-xs text-red-500">Bitte gib eine gültige E-Mail-Adresse ein.</p>}
      <p className="mt-4 text-xs text-[#5A6070]/70">{t('downloads.gate.privacy')}</p>
    </div>
  )
}

function DownloadCard({ item }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-xl border border-[#E2DDD8] p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-sm font-bold text-[#1E3A5F] leading-snug" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            {t(item.titleKey)}
          </h3>
          <span className="shrink-0 inline-block text-[10px] font-bold tracking-wide text-[#1E3A5F] bg-[#EBF0F8] px-2 py-0.5 rounded">
            {item.lang}
          </span>
        </div>
        <p className="text-sm text-[#5A6070] leading-relaxed">{t(item.descKey)}</p>
      </div>
      <a
        href={item.file}
        download
        className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#122848] transition-colors px-4 py-2 rounded-lg"
        style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
      >
        <DownloadIcon />
        {t('downloads.downloadButton')}
      </a>
    </div>
  )
}

export default function V1Downloads() {
  const { t } = useTranslation()
  const [unlocked, setUnlocked] = useState(() => !!localStorage.getItem('fresque_email'))

  return (
    <section id="downloads" className="bg-[#F5F3EE] border-t border-[#E2DDD8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A5F] mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
            {t('downloads.title')}
          </h2>
          <p className="text-base text-[#5A6070] max-w-xl leading-relaxed">{t('downloads.subtitle')}</p>
        </div>

        {unlocked ? (
          <>
            <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 mb-8 max-w-md">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t('downloads.gate.success')}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {downloads.map(item => (
                <DownloadCard key={item.id} item={item} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl border border-[#E2DDD8] shadow-sm">
            <EmailGate onUnlock={() => setUnlocked(true)} />
            <div className="border-t border-[#E2DDD8] px-6 py-5">
              <p className="text-xs text-[#5A6070]/60 text-center">
                Vorschau: {downloads.length} Materialien verfügbar · Spielanleitung (DE/FR/PL) · Karten-Set · Moderationsleitfaden
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
