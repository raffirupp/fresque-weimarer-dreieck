import { useTranslation } from 'react-i18next'
import { team } from '../../data/team'

function PersonCard({ person }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-xl border border-[#E2DDD8] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left hover:shadow-md transition-shadow">
      <img
        src={person.photo}
        alt={person.name}
        width={72}
        height={72}
        className="w-16 h-16 rounded-full object-cover shrink-0 bg-[#EBF0F8]"
      />
      <div>
        <p className="font-bold text-[#1E3A5F] text-sm mb-0.5" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          {person.name}
        </p>
        <p className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest mb-2">{t(person.roleKey)}</p>
        <p className="text-sm text-[#5A6070] leading-relaxed">{t(person.bioKey)}</p>
      </div>
    </div>
  )
}

export default function V1Team() {
  const { t } = useTranslation()

  return (
    <section id="team" className="bg-white border-t border-[#E2DDD8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A5F] mb-3" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          {t('team.title')}
        </h2>
        <p className="text-base text-[#5A6070] max-w-xl mb-10 leading-relaxed">{t('team.subtitle')}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
