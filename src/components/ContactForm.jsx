import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { downloadsByLang } from '../data/downloads'

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? ''

const FORM_LANGS = [
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
]

async function submitForm(data) {
  if (!FORMSPREE) {
    console.info('[ContactForm] No VITE_FORMSPREE_ENDPOINT set – storing locally', data)
    localStorage.setItem('fresque_submission', JSON.stringify(data))
    await new Promise(r => setTimeout(r, 600))
    return true
  }
  const res = await fetch(FORMSPREE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })
  return res.ok
}

function DownloadIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ExternalIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M6 2H2v10h10V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 2h3v3M12 2L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── V1 style set (navy/beige) ────────────────────────────────────────────────
const S1 = {
  section: 'bg-[#F5F3EE] border-t border-[#E2DDD8]',
  inner: 'max-w-6xl mx-auto px-5 sm:px-8 py-16',
  heading: 'text-2xl sm:text-3xl font-extrabold text-[#1E3A5F] mb-3',
  subtitle: 'text-base text-[#5A6070] max-w-xl leading-relaxed mb-10',
  card: 'bg-white rounded-2xl border border-[#E2DDD8] shadow-sm p-8 sm:p-10 max-w-2xl',
  langBtn: (active) =>
    active
      ? 'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-[#1E3A5F] text-white'
      : 'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-[#E2DDD8] text-[#1A1A2E] hover:border-[#1E3A5F] transition-colors',
  label: 'block text-xs font-semibold text-[#1E3A5F] mb-1.5 uppercase tracking-wide',
  input:
    'w-full px-4 py-2.5 text-sm border border-[#E2DDD8] rounded-lg outline-none transition-colors bg-white text-[#1A1A2E] placeholder:text-[#5A6070]/60 focus:border-[#1E3A5F]',
  btn: 'w-full sm:w-auto px-6 py-3 bg-[#1E3A5F] text-white text-sm font-bold rounded-lg hover:bg-[#122848] transition-colors',
  successBg: 'bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 mb-8',
  successText: 'text-sm text-emerald-700 font-medium',
  dlCard:
    'bg-white rounded-xl border border-[#E2DDD8] p-5 flex flex-col gap-4 hover:shadow-md transition-shadow',
  dlTitle: 'text-sm font-bold text-[#1E3A5F]',
  dlDesc: 'text-sm text-[#5A6070] leading-relaxed',
  dlBtn:
    'inline-flex items-center gap-2 self-start text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#122848] transition-colors px-4 py-2 rounded-lg',
  comingSoon: 'inline-flex items-center gap-1.5 text-xs text-[#5A6070] bg-[#F5F3EE] border border-[#E2DDD8] px-3 py-1.5 rounded-lg self-start',
  privacy: 'mt-4 text-xs text-[#5A6070]/70',
  errorText: 'text-sm text-red-600 mt-3',
  font: 'Montserrat, Arial, sans-serif',
}

// ─── V2 style set (violet/bold) ───────────────────────────────────────────────
const S2 = {
  section: 'bg-gray-50 border-t-4 border-orange-400',
  inner: 'max-w-6xl mx-auto px-5 sm:px-8 py-20',
  heading: 'text-3xl sm:text-4xl font-black text-gray-900 mb-4',
  subtitle: 'text-lg text-gray-500 max-w-xl leading-relaxed mb-10',
  card: 'bg-white rounded-2xl border-2 border-gray-100 shadow-sm p-8 sm:p-10 max-w-2xl',
  langBtn: (active) =>
    active
      ? 'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-black bg-violet-700 text-white'
      : 'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold border-2 border-gray-100 text-gray-700 hover:border-violet-300 transition-colors',
  label: 'block text-xs font-black text-gray-700 mb-1.5 uppercase tracking-wide',
  input:
    'w-full px-4 py-3 text-sm border-2 border-gray-100 rounded-xl outline-none transition-colors bg-white text-gray-900 placeholder:text-gray-400 focus:border-violet-400',
  btn: 'w-full sm:w-auto px-6 py-3.5 bg-orange-400 text-white text-sm font-black rounded-xl hover:bg-orange-500 transition-colors',
  successBg: 'bg-emerald-50 border-2 border-emerald-200 rounded-xl px-5 py-4 mb-8',
  successText: 'text-sm text-emerald-700 font-bold',
  dlCard:
    'group bg-white rounded-2xl border-2 border-gray-100 hover:border-violet-300 p-5 flex flex-col gap-4 transition-all hover:shadow-xl hover:shadow-violet-100',
  dlTitle: 'text-sm font-black text-gray-900',
  dlDesc: 'text-sm text-gray-500 leading-relaxed',
  dlBtn:
    'inline-flex items-center gap-2 self-start text-sm font-bold text-white bg-violet-700 group-hover:bg-violet-800 transition-colors px-4 py-2.5 rounded-xl',
  comingSoon: 'inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg self-start',
  privacy: 'mt-4 text-xs text-gray-400',
  errorText: 'text-sm text-red-500 mt-3',
  font: 'inherit',
}

// ─── V3 style set (earthy/serif) ──────────────────────────────────────────────
const S3 = {
  section: 'py-20',
  inner: 'max-w-5xl mx-auto px-6 sm:px-10',
  heading: 'text-3xl font-bold mb-4',
  subtitle: 'text-sm leading-relaxed max-w-lg mb-10',
  card: 'border p-8 sm:p-10 max-w-2xl',
  langBtn: (active) =>
    active
      ? 'flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-[#92400E] text-white'
      : 'flex items-center gap-2 px-4 py-2 text-sm font-medium border text-[#1C1917] hover:bg-[#F7F5F0] transition-colors',
  label: 'block text-[10px] font-semibold tracking-[0.15em] uppercase mb-2',
  input:
    'w-full px-4 py-2.5 text-sm border outline-none transition-colors bg-transparent placeholder:opacity-40 focus:border-[#92400E]',
  btn: 'w-full sm:w-auto px-6 py-3 bg-[#1C1917] text-[#F7F5F0] text-sm font-semibold hover:bg-[#92400E] transition-colors',
  successBg: 'border-l-4 border-[#92400E] pl-5 py-3 mb-8',
  successText: 'text-sm',
  dlCard: 'flex items-start justify-between gap-6 py-7 border-b',
  dlTitle: 'text-base font-bold mb-1 leading-snug',
  dlDesc: 'text-sm leading-relaxed',
  dlBtn:
    'inline-flex items-center gap-1.5 text-xs font-semibold border px-3 py-1.5 transition-colors hover:bg-[#1C1917] hover:text-[#F7F5F0]',
  comingSoon: 'inline-flex items-center gap-1.5 text-xs opacity-60 border px-3 py-1.5 self-start',
  privacy: 'mt-4 text-xs opacity-60',
  errorText: 'text-sm text-red-500 mt-3',
  font: "'Playfair Display', Georgia, serif",
}

const STYLES = { v1: S1, v2: S2, v3: S3 }

function DownloadCard({ item, s, variant }) {
  const { t } = useTranslation()

  if (variant === 'v3') {
    return (
      <div className={s.dlCard} style={{ borderColor: '#D4C5A9' }}>
        <div className="flex-1 min-w-0">
          <h3 className={s.dlTitle} style={{ fontFamily: s.font, color: '#1C1917' }}>
            {t(item.titleKey)}
          </h3>
          <p className={s.dlDesc} style={{ color: '#78716C' }}>{t(item.descKey)}</p>
        </div>
        <div className="shrink-0">
          {item.comingSoon ? (
            <span className={s.comingSoon} style={{ color: '#78716C', borderColor: '#D4C5A9' }}>
              {t('downloads.comingSoon')}
            </span>
          ) : item.external ? (
            <a href={item.file} target="_blank" rel="noopener noreferrer"
              className={s.dlBtn} style={{ color: '#1C1917', borderColor: '#1C1917' }}>
              <ExternalIcon size={11} />
              {t('downloads.openButton')}
            </a>
          ) : (
            <a href={item.file} download className={s.dlBtn}
              style={{ color: '#1C1917', borderColor: '#1C1917' }}>
              <DownloadIcon size={11} />
              {t('downloads.downloadButton')}
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={s.dlCard}>
      <div className="flex-1">
        <h3 className={s.dlTitle} style={{ fontFamily: s.font }}>{t(item.titleKey)}</h3>
        <p className={s.dlDesc}>{t(item.descKey)}</p>
      </div>
      {item.comingSoon ? (
        <span className={s.comingSoon}>{t('downloads.comingSoon')}</span>
      ) : item.external ? (
        <a href={item.file} target="_blank" rel="noopener noreferrer" className={s.dlBtn}>
          <ExternalIcon />
          {t('downloads.openButton')}
        </a>
      ) : (
        <a href={item.file} download className={s.dlBtn}>
          <DownloadIcon />
          {t('downloads.downloadButton')}
        </a>
      )}
    </div>
  )
}

export default function ContactForm({ variant = 'v1', sectionId = 'kontakt' }) {
  const { t } = useTranslation()
  const s = STYLES[variant]

  const [formLang, setFormLang] = useState('de')
  const [fields, setFields] = useState({
    einsatzzweck: '',
    land: '',
    zielgruppe: '',
    partner: '',
    email: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [unlocked, setUnlocked] = useState(() => !!localStorage.getItem('fresque_unlocked'))
  const [unlockedLang, setUnlockedLang] = useState(
    () => localStorage.getItem('fresque_unlocked_lang') || 'de'
  )

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const ok = await submitForm({ ...fields, language: formLang })
    if (ok) {
      localStorage.setItem('fresque_unlocked', '1')
      localStorage.setItem('fresque_unlocked_lang', formLang)
      setUnlockedLang(formLang)
      setUnlocked(true)
      setStatus('success')
    } else {
      setStatus('error')
    }
  }

  const items = downloadsByLang[unlockedLang] ?? downloadsByLang.de

  if (unlocked) {
    return (
      <section id={sectionId} className={s.section}>
        <div className={s.inner}>
          {variant === 'v3' ? (
            <div className="flex items-baseline gap-6 mb-12">
              <h2 className={s.heading} style={{ fontFamily: s.font, color: '#1C1917' }}>
                {t('downloads.title')}
              </h2>
              <div className="h-px flex-1" style={{ background: '#D4C5A9' }} />
            </div>
          ) : (
            <div className="mb-10">
              <h2 className={s.heading} style={{ fontFamily: variant === 'v1' ? s.font : undefined }}>
                {t('downloads.title')}
              </h2>
              <p className={s.subtitle}>{t('downloads.subtitle')}</p>
            </div>
          )}

          <div className={s.successBg}>
            <p className={s.successText}>{t('contact.success_text')}</p>
          </div>

          {/* Language switcher for downloads */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {FORM_LANGS.map(l => (
              <button key={l.code} type="button"
                onClick={() => { setUnlockedLang(l.code); localStorage.setItem('fresque_unlocked_lang', l.code) }}
                className={s.langBtn(unlockedLang === l.code)}>
                <span>{l.flag}</span> <span>{l.label}</span>
              </button>
            ))}
          </div>

          {variant === 'v3' ? (
            <div>
              <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: '#D4C5A9' }}>
                <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#92400E' }}>Material</span>
                <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#92400E' }}>Sprache / Langue / Język</span>
              </div>
              {items.map(item => (
                <DownloadCard key={item.id} item={item} s={s} variant={variant} />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-5">
              {items.map(item => (
                <DownloadCard key={item.id} item={item} s={s} variant={variant} />
              ))}
            </div>
          )}
        </div>
      </section>
    )
  }

  return (
    <section id={sectionId} className={s.section}>
      <div className={s.inner}>
        {variant === 'v3' ? (
          <div className="flex items-baseline gap-6 mb-12">
            <h2 className={s.heading} style={{ fontFamily: s.font, color: '#1C1917' }}>
              {t('contact.title')}
            </h2>
            <div className="h-px flex-1" style={{ background: '#D4C5A9' }} />
          </div>
        ) : (
          <div className="mb-10">
            <h2 className={s.heading} style={{ fontFamily: variant === 'v1' ? s.font : undefined }}>
              {t('contact.title')}
            </h2>
            <p className={variant === 'v3' ? `${s.subtitle} text-[#78716C]` : s.subtitle}>
              {t('contact.subtitle')}
            </p>
          </div>
        )}

        <div className={s.card} style={variant === 'v3' ? { borderColor: '#D4C5A9' } : undefined}>
          {/* Language selector */}
          <div className="mb-7">
            <p className={s.label} style={variant === 'v3' ? { color: '#92400E' } : undefined}>
              {t('contact.langLabel')}
            </p>
            <div className="flex gap-2 flex-wrap">
              {FORM_LANGS.map(l => (
                <button key={l.code} type="button"
                  onClick={() => setFormLang(l.code)}
                  className={s.langBtn(formLang === l.code)}>
                  <span>{l.flag}</span> <span>{l.label}</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={s.label} style={variant === 'v3' ? { color: '#92400E' } : undefined}>
                {t('contact.field_einsatzzweck')}
              </label>
              <textarea
                value={fields.einsatzzweck}
                onChange={set('einsatzzweck')}
                placeholder={t('contact.placeholder_einsatzzweck')}
                rows={3}
                required
                className={`${s.input} resize-none`}
                style={variant === 'v3' ? { borderColor: '#D4C5A9', color: '#1C1917' } : undefined}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={s.label} style={variant === 'v3' ? { color: '#92400E' } : undefined}>
                  {t('contact.field_land')}
                </label>
                <input type="text" value={fields.land} onChange={set('land')}
                  placeholder={t('contact.placeholder_land')} required
                  className={s.input}
                  style={variant === 'v3' ? { borderColor: '#D4C5A9', color: '#1C1917' } : undefined}
                />
              </div>
              <div>
                <label className={s.label} style={variant === 'v3' ? { color: '#92400E' } : undefined}>
                  {t('contact.field_zielgruppe')}
                </label>
                <input type="text" value={fields.zielgruppe} onChange={set('zielgruppe')}
                  placeholder={t('contact.placeholder_zielgruppe')} required
                  className={s.input}
                  style={variant === 'v3' ? { borderColor: '#D4C5A9', color: '#1C1917' } : undefined}
                />
              </div>
            </div>

            <div>
              <label className={s.label} style={variant === 'v3' ? { color: '#92400E' } : undefined}>
                {t('contact.field_partner')}
              </label>
              <input type="text" value={fields.partner} onChange={set('partner')}
                placeholder={t('contact.placeholder_partner')}
                className={s.input}
                style={variant === 'v3' ? { borderColor: '#D4C5A9', color: '#1C1917' } : undefined}
              />
            </div>

            <div>
              <label className={s.label} style={variant === 'v3' ? { color: '#92400E' } : undefined}>
                {t('contact.field_email')}
              </label>
              <input type="email" value={fields.email} onChange={set('email')}
                placeholder={t('contact.placeholder_email')} required
                className={s.input}
                style={variant === 'v3' ? { borderColor: '#D4C5A9', color: '#1C1917' } : undefined}
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button type="submit" disabled={status === 'sending'} className={s.btn}
                style={variant === 'v1' ? { fontFamily: s.font } : undefined}>
                {status === 'sending' ? t('contact.sending') : t('contact.button')}
              </button>
              <p className={s.privacy}>{t('contact.privacy')}</p>
            </div>

            {status === 'error' && (
              <p className={s.errorText}>{t('contact.error')}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
