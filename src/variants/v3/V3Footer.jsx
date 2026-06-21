import { useTranslation } from 'react-i18next'

export default function V3Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid #e8e8e8', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 40px 40px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: '#111', marginBottom: 4 }}>
              Fresque · Weimarer Dreieck
            </div>
            <div style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#aaa', marginBottom: 20 }}>
              Generation Europa 2025
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#B8860B' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1E3A5F' }} />
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7A2F3E' }} />
            </div>
          </div>

          <div>
            <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12, fontWeight: 700 }}>
              {t('footer.imprintTitle')}
            </div>
            <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7 }}>
              {t('footer.imprintText')}
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 11, color: '#bbb' }}>
            &copy; {year} {t('footer.orgName')}. {t('footer.rights')}
          </p>
          <div style={{ display: 'flex', gap: 2, fontSize: 16 }}>
            <span title="Europäische Union">🇪🇺</span>
            <span title="Deutschland">🇩🇪</span>
            <span title="France">🇫🇷</span>
            <span title="Polska">🇵🇱</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
