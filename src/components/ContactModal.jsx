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

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
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

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M6 2H2v10h10V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 2h3v3M12 2L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DownloadCard({ item }) {
  const { t } = useTranslation()
  return (
    <div className="bg-[#F5F3EE] rounded-xl p-5 flex flex-col gap-3">
      <div>
        <h4 className="text-sm font-bold text-[#1E3A5F] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {t(item.titleKey)}
        </h4>
        <p className="text-xs text-[#5A6070] leading-relaxed">{t(item.descKey)}</p>
      </div>
      {item.comingSoon ? (
        <span className="inline-flex items-center text-xs text-[#5A6070] bg-white border border-[#E2DDD8] px-3 py-1.5 rounded-lg self-start">
          {t('downloads.comingSoon')}
        </span>
      ) : item.external ? (
        <a
          href={item.file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#122848] transition-colors px-4 py-2 rounded-lg"
        >
          <ExternalIcon />
          {t('downloads.openButton')}
        </a>
      ) : (
        <a
          href={item.file}
          download
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-white bg-[#1E3A5F] hover:bg-[#122848] transition-colors px-4 py-2 rounded-lg"
        >
          <DownloadIcon />
          {t('downloads.downloadButton')}
        </a>
      )}
    </div>
  )
}

function ContactForm({ onSuccess }) {
  const { t } = useTranslation()
  const [formLang, setFormLang] = useState('de')
  const [fields, setFields] = useState({ einsatzzweck: '', land: '', zielgruppe: '', partner: '', email: '' })
  const [status, setStatus] = useState('idle')

  const set = (key) => (e) => setFields(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const { ok } = await submitContactForm({ ...fields, language: formLang })
    if (ok) {
      localStorage.setItem('fresque_unlocked', '1')
      localStorage.setItem('fresque_unlocked_lang', formLang)
      onSuccess(formLang)
    } else {
      setStatus('error')
    }
  }

  const inputCls = 'w-full px-4 py-2.5 text-sm border border-[#E2DDD8] rounded-lg outline-none transition-colors bg-white text-[#1A1A2E] placeholder:text-[#5A6070]/50 focus:border-[#1E3A5F]'
  const labelCls = 'block text-[11px] font-semibold text-[#1E3A5F] mb-1.5 uppercase tracking-wide'

  return (
    <div className="p-6 sm:p-8">
      {/* Language selector */}
      <div className="mb-7">
        <p className={labelCls}>{t('contact.langLabel')}</p>
        <div className="flex gap-2 flex-wrap">
          {FORM_LANGS.map(l => (
            <button
              key={l.code}
              type="button"
              onClick={() => setFormLang(l.code)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                formLang === l.code
                  ? 'bg-[#1E3A5F] text-white'
                  : 'border border-[#E2DDD8] text-[#1A1A2E] hover:border-[#1E3A5F]'
              }`}
            >
              <span>{l.flag}</span> <span>{l.label}</span>
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className={labelCls}>{t('contact.field_einsatzzweck')}</label>
          <textarea
            value={fields.einsatzzweck}
            onChange={set('einsatzzweck')}
            placeholder={t('contact.placeholder_einsatzzweck')}
            rows={3}
            required
            className={`${inputCls} resize-none`}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>{t('contact.field_land')}</label>
            <input
              type="text"
              value={fields.land}
              onChange={set('land')}
              placeholder={t('contact.placeholder_land')}
              required
              className={inputCls}
            />
          </div>
          <div>
            <label className={labelCls}>{t('contact.field_zielgruppe')}</label>
            <input
              type="text"
              value={fields.zielgruppe}
              onChange={set('zielgruppe')}
              placeholder={t('contact.placeholder_zielgruppe')}
              required
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label className={labelCls}>{t('contact.field_partner')}</label>
          <input
            type="text"
            value={fields.partner}
            onChange={set('partner')}
            placeholder={t('contact.placeholder_partner')}
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>{t('contact.field_email')}</label>
          <input
            type="email"
            value={fields.email}
            onChange={set('email')}
            placeholder={t('contact.placeholder_email')}
            required
            className={inputCls}
          />
        </div>

        <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-3 bg-[#1E3A5F] text-white text-sm font-bold rounded-lg hover:bg-[#122848] transition-colors disabled:opacity-60"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {status === 'sending' ? t('contact.sending') : t('contact.button')}
          </button>
          <p className="text-xs text-[#5A6070]/70">{t('contact.privacy')}</p>
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-600">{t('contact.error')}</p>
        )}
      </form>
    </div>
  )
}

function SuccessView({ lang, onChangeLang }) {
  const { t } = useTranslation()
  const items = downloadsByLang[lang] ?? downloadsByLang.de

  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-4 mb-8">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
          <circle cx="10" cy="10" r="9" stroke="#059669" strokeWidth="1.5" />
          <path d="M6 10l3 3 5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <p className="text-sm font-bold text-emerald-800 mb-0.5">{t('contact.success_title')}</p>
          <p className="text-sm text-emerald-700">{t('contact.success_text')}</p>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        {FORM_LANGS.map(l => (
          <button
            key={l.code}
            type="button"
            onClick={() => onChangeLang(l.code)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              lang === l.code
                ? 'bg-[#1E3A5F] text-white'
                : 'border border-[#E2DDD8] text-[#5A6070] hover:border-[#1E3A5F]'
            }`}
          >
            <span>{l.flag}</span> {l.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(item => (
          <DownloadCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function ContactModal() {
  const { open, closeModal } = useModal()
  const { t } = useTranslation()

  const savedUnlocked = !!localStorage.getItem('fresque_unlocked')
  const savedLang = localStorage.getItem('fresque_unlocked_lang') || 'de'

  const [unlocked, setUnlocked] = useState(savedUnlocked)
  const [downloadLang, setDownloadLang] = useState(savedLang)

  // Keep in sync with localStorage when modal re-opens
  useEffect(() => {
    if (open) {
      setUnlocked(!!localStorage.getItem('fresque_unlocked'))
      setDownloadLang(localStorage.getItem('fresque_unlocked_lang') || 'de')
    }
  }, [open])

  // Trap focus and close on Escape
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
    setDownloadLang(lang)
    setUnlocked(true)
  }

  const handleChangeLang = (lang) => {
    setDownloadLang(lang)
    localStorage.setItem('fresque_unlocked_lang', lang)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-6 sm:pt-14" role="dialog" aria-modal="true" aria-label={t('contact.title')}>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal box */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Tricolor stripe */}
        <div className="flex h-1 rounded-t-2xl overflow-hidden" aria-hidden="true">
          <div className="flex-1" style={{ background: '#B8860B' }} />
          <div className="flex-1" style={{ background: '#1E3A5F' }} />
          <div className="flex-1" style={{ background: '#7A2F3E' }} />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-6 sm:px-8 pt-6 pb-0">
          <div>
            <h2
              className="text-xl font-extrabold text-[#1E3A5F] leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {unlocked ? t('downloads.title') : t('contact.title')}
            </h2>
            {!unlocked && (
              <p className="text-sm text-[#5A6070] mt-1">{t('contact.subtitle')}</p>
            )}
          </div>
          <button
            onClick={closeModal}
            className="p-2 text-[#5A6070] hover:text-[#1E3A5F] hover:bg-[#F5F3EE] rounded-lg transition-colors shrink-0 ml-4 mt-0.5"
            aria-label="Schließen"
          >
            <XIcon />
          </button>
        </div>

        {unlocked ? (
          <SuccessView lang={downloadLang} onChangeLang={handleChangeLang} />
        ) : (
          <ContactForm onSuccess={handleSuccess} />
        )}
      </div>
    </div>
  )
}
