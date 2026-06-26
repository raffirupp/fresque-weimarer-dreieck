import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { downloadsByLang } from '../data/downloads'
import { submitContactForm } from '../services/formService'
import { useModal } from '../context/ModalContext'

const FORM_LANGS = [
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
]

// ─── Per-variant style tokens ────────────────────────────────────────────────

const S = {
  v1: {
    backdrop: 'bg-black/50 backdrop-blur-sm',
    box: 'bg-white rounded-2xl shadow-2xl',
    stripe: ['#B8860B', '#1E3A5F', '#7A2F3E'],
    header: { background: undefined },
    titleCls: 'text-xl font-extrabold text-[#1E3A5F]',
    titleFont: 'Montserrat, sans-serif',
    subtitleCls: 'text-sm text-[#5A6070] mt-1',
    closeCls: 'p-2 rounded-lg transition-colors text-[#5A6070] hover:text-[#1E3A5F] hover:bg-[#F5F3EE]',
    noteBox: 'bg-[#F5F3EE] rounded-xl px-4 py-3 mb-6',
    noteText: 'text-sm text-[#5A6070]',
    labelCls: 'block text-[11px] font-semibold text-[#1E3A5F] mb-1.5 uppercase tracking-wide',
    inputCls: 'w-full px-4 py-2.5 text-sm border border-[#E2DDD8] rounded-lg outline-none transition-colors bg-white text-[#1A1A2E] placeholder:text-[#5A6070]/40 focus:border-[#1E3A5F]',
    inputStyle: undefined,
    langActive: 'bg-[#1E3A5F] text-white',
    langInactive: 'border border-[#E2DDD8] text-[#1A1A2E] hover:border-[#1E3A5F]',
    langActiveStyle: undefined,
    langInactiveStyle: undefined,
    submitCls: 'px-6 py-3 bg-[#1E3A5F] text-white text-sm font-bold rounded-lg hover:bg-[#122848] transition-colors disabled:opacity-60',
    submitStyle: undefined,
    skipCls: 'text-sm text-[#5A6070] hover:text-[#1E3A5F] underline underline-offset-2',
    successBox: 'bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 mb-8',
    successTitle: 'text-sm font-bold text-emerald-800 mb-0.5',
    successText: 'text-sm text-emerald-700',
    dlLangActive: 'bg-[#1E3A5F] text-white',
    dlLangInactive: 'border border-[#E2DDD8] text-[#5A6070] hover:border-[#1E3A5F]',
    dlCard: 'bg-[#F5F3EE] rounded-xl p-5 flex flex-col gap-3',
    dlCardStyle: undefined,
    dlTitle: 'text-sm font-bold text-[#1E3A5F]',
    dlDesc: 'text-xs text-[#5A6070] leading-relaxed',
    dlBtn: 'inline-flex items-center gap-2 self-start text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#122848] px-4 py-2 rounded-lg transition-colors',
    dlBtnStyle: undefined,
    comingSoon: 'inline-flex items-center text-xs text-[#5A6070] bg-white border border-[#E2DDD8] px-3 py-1.5 rounded-lg self-start',
    dlGrid: 'grid sm:grid-cols-2 gap-4',
    privacyCls: 'text-xs text-[#5A6070]/60',
    errorCls: 'text-sm text-red-600 mt-2',
    font: 'Montserrat, sans-serif',
  },

  v2: {
    backdrop: 'bg-black/70 backdrop-blur-sm',
    box: 'rounded-2xl shadow-2xl',
    boxStyle: { background: '#0A1928', color: '#fff' },
    stripe: ['#B8860B', 'rgba(255,255,255,0.4)', '#7A2F3E'],
    titleCls: 'text-xl font-black text-white',
    titleFont: 'Montserrat, sans-serif',
    subtitleCls: 'text-sm mt-1',
    subtitleStyle: { color: 'rgba(255,255,255,0.5)' },
    closeCls: 'p-2 rounded-lg transition-colors',
    closeStyle: { color: 'rgba(255,255,255,0.4)' },
    noteBox: 'rounded-xl px-4 py-3 mb-6',
    noteBoxStyle: { background: 'rgba(255,255,255,0.07)' },
    noteText: 'text-sm',
    noteTextStyle: { color: 'rgba(255,255,255,0.5)' },
    labelCls: 'block text-[11px] font-bold mb-1.5 uppercase tracking-wide',
    labelStyle: { color: '#B8860B' },
    inputCls: 'w-full px-4 py-2.5 text-sm border rounded-lg outline-none transition-colors',
    inputStyle: { borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', color: '#fff' },
    langActive: 'text-sm font-black rounded-lg px-4 py-2',
    langActiveStyle: { background: '#B8860B', color: '#0A1928' },
    langInactive: 'text-sm font-bold rounded-lg px-4 py-2 transition-colors',
    langInactiveStyle: { border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' },
    submitCls: 'px-6 py-3 text-sm font-black rounded-lg disabled:opacity-60 transition-colors',
    submitStyle: { background: '#B8860B', color: '#0A1928' },
    skipCls: 'text-sm underline underline-offset-2',
    skipStyle: { color: 'rgba(255,255,255,0.4)' },
    successBox: 'rounded-xl px-5 py-4 mb-8',
    successBoxStyle: { background: 'rgba(5,150,105,0.12)', border: '1px solid rgba(5,150,105,0.3)' },
    successTitle: 'text-sm font-black text-emerald-400 mb-0.5',
    successText: 'text-sm text-emerald-400',
    dlLangActive: 'text-xs font-black rounded-lg px-3 py-1.5',
    dlLangActiveStyle: { background: '#B8860B', color: '#0A1928' },
    dlLangInactive: 'text-xs font-bold rounded-lg px-3 py-1.5 transition-colors',
    dlLangInactiveStyle: { border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)' },
    dlCard: 'rounded-xl p-5 flex flex-col gap-3',
    dlCardStyle: { background: 'rgba(255,255,255,0.06)' },
    dlTitle: 'text-sm font-bold text-white',
    dlDesc: 'text-xs leading-relaxed',
    dlDescStyle: { color: 'rgba(255,255,255,0.45)' },
    dlBtn: 'inline-flex items-center gap-2 self-start text-sm font-bold px-4 py-2 rounded-lg transition-colors',
    dlBtnStyle: { background: '#B8860B', color: '#0A1928' },
    comingSoon: 'inline-flex items-center text-xs px-3 py-1.5 rounded-lg self-start',
    comingSoonStyle: { border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)' },
    dlGrid: 'grid sm:grid-cols-2 gap-4',
    privacyCls: 'text-xs',
    privacyStyle: { color: 'rgba(255,255,255,0.25)' },
    errorCls: 'text-sm text-red-400 mt-2',
    font: 'Montserrat, sans-serif',
  },

  v3: {
    backdrop: 'bg-black/40 backdrop-blur-sm',
    box: 'bg-white shadow-2xl',
    boxStyle: undefined,
    stripe: null,
    topAccent: '#C41E3A',
    titleCls: 'text-lg font-bold tracking-tight text-black',
    titleFont: 'inherit',
    subtitleCls: 'text-sm text-gray-400 mt-1',
    closeCls: 'p-2 transition-colors text-gray-300 hover:text-black',
    noteBox: 'border-l-4 pl-4 py-1 mb-6',
    noteBoxStyle: { borderColor: '#C41E3A' },
    noteText: 'text-sm text-gray-400',
    labelCls: 'block text-[10px] font-bold mb-2 uppercase tracking-[0.15em]',
    labelStyle: { color: '#C41E3A' },
    inputCls: 'w-full px-0 py-2.5 text-sm border-b outline-none transition-colors bg-white text-black placeholder:text-gray-300',
    inputStyle: { borderColor: '#e8e8e8' },
    langActive: 'flex items-center gap-2 px-4 py-2 text-sm font-bold text-white',
    langActiveStyle: { background: '#111' },
    langInactive: 'flex items-center gap-2 px-4 py-2 text-sm text-gray-500 hover:text-black border border-gray-200 transition-colors',
    submitCls: 'px-8 py-3 text-xs font-bold uppercase tracking-[0.12em] disabled:opacity-60 transition-colors',
    submitStyle: { background: '#111', color: '#fff' },
    skipCls: 'text-sm text-gray-400 hover:text-black underline underline-offset-2',
    successBox: 'border-l-4 pl-4 py-2 mb-8',
    successBoxStyle: { borderColor: '#059669' },
    successTitle: 'text-sm font-bold text-green-700 mb-0.5',
    successText: 'text-sm text-green-600',
    dlLangActive: 'flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white',
    dlLangActiveStyle: { background: '#111' },
    dlLangInactive: 'flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-500 hover:text-black border border-gray-200 transition-colors',
    dlCard: 'py-6 border-b border-gray-100 flex flex-col gap-2',
    dlCardStyle: undefined,
    dlTitle: 'text-sm font-bold text-black',
    dlDesc: 'text-xs text-gray-500 leading-relaxed',
    dlBtn: 'inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-widest px-4 py-2 transition-colors mt-2',
    dlBtnStyle: { border: '1.5px solid #111', color: '#111', letterSpacing: '0.08em' },
    comingSoon: 'inline-flex items-center text-xs text-gray-400 px-3 py-1.5 self-start border border-gray-200 mt-2',
    dlGrid: 'flex flex-col',
    privacyCls: 'text-xs text-gray-300',
    errorCls: 'text-sm text-red-600 mt-2',
    font: 'inherit',
  },
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M6 2H2v10h10V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 2h3v3M12 2L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Download card ────────────────────────────────────────────────────────────

function DownloadCard({ item, s, variant }) {
  const { t } = useTranslation()

  const actionEl = item.comingSoon ? (
    <span className={s.comingSoon} style={s.comingSoonStyle}>
      {t('downloads.comingSoon')}
    </span>
  ) : item.external ? (
    <a href={item.file} target="_blank" rel="noopener noreferrer" className={s.dlBtn} style={s.dlBtnStyle}>
      <ExternalIcon /> {t('downloads.openButton')}
    </a>
  ) : (
    <a href={item.file} download className={s.dlBtn} style={s.dlBtnStyle}>
      <DownloadIcon /> {t('downloads.downloadButton')}
    </a>
  )

  return (
    <div className={s.dlCard} style={s.dlCardStyle}>
      <h4 className={s.dlTitle} style={{ fontFamily: s.font }}>{t(item.titleKey)}</h4>
      <p className={s.dlDesc} style={s.dlDescStyle}>{t(item.descKey)}</p>
      {actionEl}
    </div>
  )
}

// ─── Form view ────────────────────────────────────────────────────────────────

function FormView({ s, variant, onSuccess }) {
  const { t } = useTranslation()
  const [formLang, setFormLang] = useState('de')
  const [fields, setFields] = useState({ einsatzzweck: '', land: '', zielgruppe: '', partner: '', email: '' })
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState('idle')

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (honeypot) { onSuccess(formLang); return }
    setStatus('sending')
    const { ok } = await submitContactForm({ ...fields, language: formLang })
    if (ok) onSuccess(formLang)
    else setStatus('error')
  }

  return (
    <div className="p-6 sm:p-8">
      {/* Language selector */}
      <div className="mb-6">
        <p className={s.labelCls} style={s.labelStyle}>{t('contact.langLabel')}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          {FORM_LANGS.map(l => (
            <button
              key={l.code}
              type="button"
              onClick={() => setFormLang(l.code)}
              className={`flex items-center gap-2 ${formLang === l.code ? s.langActive : s.langInactive}`}
              style={formLang === l.code ? s.langActiveStyle : s.langInactiveStyle}
            >
              <span>{l.flag}</span><span>{l.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Optional note */}
      <div className={s.noteBox} style={s.noteBoxStyle}>
        <p className={s.noteText} style={s.noteTextStyle}>{t('contact.optional_note')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot – hidden from humans, filled only by bots */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={e => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
        />
        <div>
          <label className={s.labelCls} style={s.labelStyle}>{t('contact.field_einsatzzweck')}</label>
          <textarea
            value={fields.einsatzzweck}
            onChange={set('einsatzzweck')}
            placeholder={t('contact.placeholder_einsatzzweck')}
            rows={2}
            className={`${s.inputCls} resize-none`}
            style={s.inputStyle}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={s.labelCls} style={s.labelStyle}>{t('contact.field_land')}</label>
            <input type="text" value={fields.land} onChange={set('land')}
              placeholder={t('contact.placeholder_land')} className={s.inputCls} style={s.inputStyle} />
          </div>
          <div>
            <label className={s.labelCls} style={s.labelStyle}>{t('contact.field_zielgruppe')}</label>
            <input type="text" value={fields.zielgruppe} onChange={set('zielgruppe')}
              placeholder={t('contact.placeholder_zielgruppe')} className={s.inputCls} style={s.inputStyle} />
          </div>
        </div>

        <div>
          <label className={s.labelCls} style={s.labelStyle}>{t('contact.field_partner')}</label>
          <input type="text" value={fields.partner} onChange={set('partner')}
            placeholder={t('contact.placeholder_partner')} className={s.inputCls} style={s.inputStyle} />
        </div>

        <div>
          <label className={s.labelCls} style={s.labelStyle}>{t('contact.field_email')}</label>
          <input type="email" value={fields.email} onChange={set('email')}
            placeholder={t('contact.placeholder_email')} className={s.inputCls} style={s.inputStyle} />
        </div>

        <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
          <button type="submit" disabled={status === 'sending'}
            className={s.submitCls} style={s.submitStyle}>
            {status === 'sending' ? t('contact.sending') : t('contact.button')}
          </button>
          <button type="button" onClick={() => onSuccess(formLang)}
            className={s.skipCls} style={s.skipStyle}>
            {t('contact.skip')}
          </button>
        </div>

        {status === 'error' && <p className={s.errorCls}>{t('contact.error')}</p>}
      </form>

      <p className={`${s.privacyCls} mt-5`} style={s.privacyStyle}>
        {t('contact.privacy')}{' '}
        <a
          href="https://www.dfjw.org/datenschutzerklaerung"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          {t('contact.privacyLinkText')}
        </a>
      </p>
    </div>
  )
}

// ─── Success / downloads view ─────────────────────────────────────────────────

function SuccessView({ s, variant, lang, onChangeLang }) {
  const { t } = useTranslation()
  const items = downloadsByLang[lang] ?? downloadsByLang.de

  return (
    <div className="p-6 sm:p-8">
      <div className={s.successBox} style={s.successBoxStyle}>
        <p className={s.successTitle}>{t('contact.success_title')}</p>
        <p className={s.successText}>{t('contact.success_text')}</p>
      </div>

      <div className="flex gap-2 flex-wrap mb-6">
        {FORM_LANGS.map(l => (
          <button key={l.code} type="button" onClick={() => onChangeLang(l.code)}
            className={lang === l.code ? s.dlLangActive : s.dlLangInactive}
            style={lang === l.code ? s.dlLangActiveStyle : s.dlLangInactiveStyle}>
            <span>{l.flag}</span><span>{l.label}</span>
          </button>
        ))}
      </div>

      <div className={s.dlGrid}>
        {items.map(item => (
          <DownloadCard key={item.id} item={item} s={s} variant={variant} />
        ))}
      </div>
    </div>
  )
}

// ─── Main modal ───────────────────────────────────────────────────────────────

export default function ContactModal({ variant = 'v1' }) {
  const { open, closeModal } = useModal()
  const { t } = useTranslation()
  const s = S[variant]

  const savedUnlocked = !!localStorage.getItem('fresque_unlocked')
  const savedLang = localStorage.getItem('fresque_unlocked_lang') || 'de'

  const [unlocked, setUnlocked] = useState(savedUnlocked)
  const [downloadLang, setDownloadLang] = useState(savedLang)

  useEffect(() => {
    if (open) {
      setUnlocked(!!localStorage.getItem('fresque_unlocked'))
      setDownloadLang(localStorage.getItem('fresque_unlocked_lang') || 'de')
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, closeModal])

  if (!open) return null

  const handleSuccess = (lang) => {
    localStorage.setItem('fresque_unlocked', '1')
    localStorage.setItem('fresque_unlocked_lang', lang)
    setDownloadLang(lang)
    setUnlocked(true)
  }

  const handleChangeLang = (lang) => {
    setDownloadLang(lang)
    localStorage.setItem('fresque_unlocked_lang', lang)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-6 sm:pt-12"
      role="dialog" aria-modal="true" aria-label={t('contact.title')}>

      {/* Backdrop */}
      <div className={`fixed inset-0 ${s.backdrop}`} onClick={closeModal} aria-hidden="true" />

      {/* Modal box */}
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto ${s.box}`} style={s.boxStyle}>

        {/* Top accent: tricolor stripe (V1/V2) or thin red line (V3) */}
        {s.stripe ? (
          <div className="flex h-1 overflow-hidden" style={{ borderRadius: variant === 'v1' ? '16px 16px 0 0' : '16px 16px 0 0' }} aria-hidden="true">
            {s.stripe.map((c, i) => <div key={i} className="flex-1" style={{ background: c }} />)}
          </div>
        ) : (
          <div style={{ height: 3, background: s.topAccent }} aria-hidden="true" />
        )}

        {/* Header */}
        <div className="flex items-start justify-between px-6 sm:px-8 pt-5 pb-0">
          <div>
            <h2 className={s.titleCls} style={{ fontFamily: s.font }}>
              {unlocked ? t('downloads.title') : t('contact.title')}
            </h2>
            {!unlocked && (
              <p className={s.subtitleCls} style={s.subtitleStyle}>{t('contact.subtitle')}</p>
            )}
          </div>
          <button onClick={closeModal} className={s.closeCls} style={s.closeStyle} aria-label="Schließen">
            <XIcon />
          </button>
        </div>

        {/* Content */}
        {unlocked
          ? <SuccessView s={s} variant={variant} lang={downloadLang} onChangeLang={handleChangeLang} />
          : <FormView s={s} variant={variant} onSuccess={handleSuccess} />
        }
      </div>
    </div>
  )
}
