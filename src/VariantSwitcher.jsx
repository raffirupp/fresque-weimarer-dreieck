import { NavLink } from 'react-router-dom'

const variants = [
  { to: '/', label: 'V1 · Offiziell' },
  { to: '/v2', label: 'V2 · Modern' },
  { to: '/v3', label: 'V3 · Artsy' },
]

export default function VariantSwitcher() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full px-3 py-2 shadow-lg">
      <span className="text-white/50 mr-1 tracking-wide uppercase text-[10px]">Design</span>
      {variants.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `px-3 py-1 rounded-full transition-colors ${
              isActive ? 'bg-white text-black' : 'text-white/70 hover:text-white hover:bg-white/10'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}
