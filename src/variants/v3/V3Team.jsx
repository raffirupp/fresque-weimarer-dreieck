import { useTranslation } from 'react-i18next'
import { team } from '../../data/team'

function PersonCard({ person }) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col border-t pt-8" style={{ borderColor: '#D4C5A9' }}>
      <div className="w-14 h-14 rounded-full overflow-hidden mb-5" style={{ background: '#E7E2DA' }}>
        <img src={person.photo} alt={person.name} width={56} height={56} className="w-full h-full object-cover" />
      </div>
      <p className="font-bold text-sm mb-0.5" style={{ color: '#1C1917', fontFamily: "'Playfair Display', Georgia, serif" }}>
        {person.name}
      </p>
      <p className="text-[10px] tracking-widest uppercase mb-4" style={{ color: '#92400E' }}>{t(person.roleKey)}</p>
      <p className="text-sm leading-loose flex-1" style={{ color: '#78716C' }}>{t(person.bioKey)}</p>
    </div>
  )
}

export default function V3Team() {
  const { t } = useTranslation()

  return (
    <section id="v3-team" className="border-t" style={{ borderColor: '#D4C5A9' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-20">
        <div className="flex items-baseline gap-6 mb-4">
          <h2
            className="text-3xl font-bold shrink-0"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#1C1917' }}
          >
            {t('team.title')}
          </h2>
          <div className="h-px flex-1" style={{ background: '#D4C5A9' }} aria-hidden="true" />
        </div>
        <p className="text-sm leading-relaxed max-w-lg mb-14" style={{ color: '#78716C' }}>{t('team.subtitle')}</p>
        <div className="grid sm:grid-cols-3 gap-8">
          {team.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
