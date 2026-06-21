import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useModal } from '../../context/ModalContext'

const RED = '#C41E3A'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('v3-visible')
      }),
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll('.v3-fade')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function V3Hero() {
  const { t } = useTranslation()
  const { openModal } = useModal()
  const [scrollY, setScrollY] = useState(0)
  useScrollReveal()

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const sections = [
    {
      num: '01',
      title: t('hero.whatIsTitle'),
      text: t('hero.whatIsText'),
      card: '/cards/vorder-1.png',
      cta: false,
    },
    {
      num: '02',
      title: t('hero.forWhomTitle'),
      text: t('hero.forWhomText'),
      card: '/cards/vorder-2.png',
      cta: false,
    },
    {
      num: '03',
      title: t('hero.howTitle'),
      text: t('hero.howText'),
      card: '/cards/vorder-3.png',
      cta: true,
    },
  ]

  return (
    <article id="v3-top">

      {/* ── HERO OPENING ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <div className="v3-hero-grid">

          {/* Left: text */}
          <div>
            <div
              className="v3-fade"
              style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: RED, marginBottom: 28, fontWeight: 700 }}
            >
              {t('hero.tagline')}
            </div>

            <h1
              className="v3-fade v3-fade-d1"
              style={{
                fontSize: 'clamp(44px, 6.5vw, 88px)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.0,
                color: '#0F0F0F',
                marginBottom: 32,
              }}
            >
              {t('hero.title')}
            </h1>

            <p
              className="v3-fade v3-fade-d2"
              style={{ fontSize: 18, lineHeight: 1.7, color: '#555', maxWidth: 460, marginBottom: 48 }}
            >
              {t('hero.subtitle')}
            </p>

            <button
              onClick={openModal}
              className="v3-fade v3-fade-d3"
              style={{
                fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '15px 40px', background: RED, color: '#fff', border: 'none',
                cursor: 'pointer', transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#9B1530' }}
              onMouseLeave={e => { e.currentTarget.style.background = RED }}
            >
              {t('hero.ctaDownload')} ↓
            </button>

            {/* Subtle stats */}
            <div
              className="v3-fade v3-fade-d4"
              style={{ display: 'flex', gap: 40, marginTop: 64, paddingTop: 32, borderTop: '1px solid #e8e8e8' }}
            >
              {[
                { n: '3', l: t('hero.statLaender') },
                { n: "90'", l: t('hero.statWorkshop') },
                { n: '24', l: t('hero.statTeiln') },
              ].map(({ n, l }) => (
                <div key={n}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#111', letterSpacing: '-0.03em' }}>{n}</div>
                  <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#aaa', marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: card preview with parallax */}
          <div className="v3-card-preview v3-fade v3-fade-d2">
            <div style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
              <div style={{
                padding: 24,
                background: '#f5f5f5',
                boxShadow: '0 48px 120px rgba(0,0,0,0.10)',
              }}>
                <img
                  src="/cards/vorder-4.png"
                  alt="Karte: Gründung Weimarer Dreieck 1991"
                  style={{ width: '100%', maxWidth: 420, display: 'block' }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ borderTop: '1px solid #e8e8e8', margin: '0 40px' }} />

      {/* ── STICKY INFO SECTIONS ── */}
      {sections.map((sec, i) => (
        <section
          key={sec.num}
          style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 40px' }}
        >
          <div className="v3-section-grid">

            {/* Sticky left: section label */}
            <div className="v3-sticky-label">
              <div style={{ fontSize: 10, letterSpacing: '0.2em', color: '#ddd', fontWeight: 700, marginBottom: 12 }}>
                {sec.num}
              </div>
              <h2
                className="v3-fade"
                style={{ fontSize: 20, fontWeight: 700, color: '#111', letterSpacing: '-0.01em', lineHeight: 1.35 }}
              >
                {sec.title}
              </h2>
              <div
                className="v3-fade"
                style={{ width: 28, height: 3, background: RED, marginTop: 14 }}
              />
            </div>

            {/* Right: content + card */}
            <div className="v3-content-grid">
              <div className="v3-fade" style={{ transitionDelay: `${0.1 + i * 0.05}s` }}>
                <p style={{ fontSize: 18, lineHeight: 1.85, color: '#444' }}>
                  {sec.text}
                </p>
                {sec.cta && (
                  <button
                    onClick={openModal}
                    style={{
                      marginTop: 36,
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      background: 'none', border: 'none', borderBottom: `2px solid ${RED}`,
                      paddingBottom: 3, color: '#111', cursor: 'pointer',
                    }}
                  >
                    {t('hero.ctaDownload')} →
                  </button>
                )}
              </div>

              {/* Card image – fills full height of text column */}
              <div
                className="v3-fade"
                style={{
                  transitionDelay: `${0.2 + i * 0.05}s`,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div style={{
                  padding: 16,
                  background: '#f5f5f5',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.07)',
                  width: '100%',
                }}>
                  <img
                    src={sec.card}
                    alt=""
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
              </div>
            </div>

          </div>

          {i < sections.length - 1 && (
            <div style={{ borderTop: '1px solid #f0f0f0', marginTop: 60 }} />
          )}
        </section>
      ))}

    </article>
  )
}
