import { useTranslation } from 'react-i18next'
import { team } from '../../data/team'

function PersonCard({ person }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row sm:gap-5">
      <img
        src={person.photo}
        alt={person.name}
        width={72}
        height={72}
        className="w-16 h-16 rounded-full object-cover shrink-0 bg-violet-50 mb-4 sm:mb-0"
      />
      <div>
        <p className="font-black text-gray-900 text-base mb-0.5">{person.name}</p>
        <p className="text-xs font-bold text-violet-700 uppercase tracking-widest mb-2">{t(person.roleKey)}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{t(person.bioKey)}</p>
      </div>
    </div>
  )
}

export default function V2Team() {
  const { t } = useTranslation()

  return (
    <section id="v2-team" className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">{t('team.title')}</h2>
        <p className="text-base text-gray-500 max-w-xl mb-10 leading-relaxed">{t('team.subtitle')}</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {team.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
