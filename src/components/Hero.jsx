import { useTranslation } from 'react-i18next'

function TrioAccent() {
  return (
    <div className="flex gap-1.5 h-1 w-16 mb-6" aria-hidden="true">
      <div className="flex-1 rounded-full bg-gold" />
      <div className="flex-1 rounded-full bg-navy" />
      <div className="flex-1 rounded-full bg-wine" />
    </div>
  )
}

function InfoCard({ title, text, accent }) {
  const accentMap = {
    gold: 'border-t-gold',
    wine: 'border-t-wine',
    coral: 'border-t-coral',
  }
  return (
    <div
      className={`bg-white rounded-lg border border-border p-6 border-t-2 ${accentMap[accent] ?? 'border-t-navy'}`}
    >
      <h3
        className="text-base font-semibold text-navy mb-2 leading-snug"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{text}</p>
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="info" className="bg-sand">
      {/* Hero band */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <p
          className="text-xs font-semibold tracking-widest text-gold uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('hero.tagline')}
        </p>
        <TrioAccent />
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight max-w-3xl mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('hero.title')}
        </h1>
        <p className="text-lg sm:text-xl text-ink max-w-2xl mb-3 font-medium">
          {t('hero.subtitle')}
        </p>
        <p className="text-base text-muted max-w-2xl leading-relaxed mb-10">
          {t('hero.intro')}
        </p>
        <a
          href="#downloads"
          className="inline-block bg-navy text-white text-sm font-semibold px-6 py-3 rounded transition-colors hover:bg-navy-dark focus-visible:outline-navy"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('hero.ctaDownload')}
        </a>
      </div>

      {/* Info cards */}
      <div className="bg-white border-t border-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
          <div className="grid sm:grid-cols-3 gap-5">
            <InfoCard
              title={t('hero.whatIsTitle')}
              text={t('hero.whatIsText')}
              accent="gold"
            />
            <InfoCard
              title={t('hero.forWhomTitle')}
              text={t('hero.forWhomText')}
              accent="wine"
            />
            <InfoCard
              title={t('hero.howTitle')}
              text={t('hero.howText')}
              accent="coral"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
