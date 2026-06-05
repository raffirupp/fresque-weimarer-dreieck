import { useTranslation } from 'react-i18next'
import { team } from '../data/team'

function PersonCard({ person }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-lg border border-border p-6 flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row sm:gap-5">
      <img
        src={person.photo}
        alt={person.name}
        width={72}
        height={72}
        className="w-16 h-16 rounded-full object-cover shrink-0 bg-navy-light mb-4 sm:mb-0"
      />
      <div>
        <p
          className="font-semibold text-navy text-base mb-0.5"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {person.name}
        </p>
        <p className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
          {t(person.roleKey)}
        </p>
        <p className="text-sm text-muted leading-relaxed">{t(person.bioKey)}</p>
      </div>
    </div>
  )
}

export default function Team() {
  const { t } = useTranslation()

  return (
    <section id="team" className="bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-navy mb-3"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('team.title')}
        </h2>
        <p className="text-base text-muted max-w-xl mb-10 leading-relaxed">
          {t('team.subtitle')}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
