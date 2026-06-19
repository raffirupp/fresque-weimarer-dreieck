import V2Header from './V2Header'
import V2Hero from './V2Hero'
import V2Scrolly from './V2Scrolly'
import V2Downloads from './V2Downloads'
import V2Footer from './V2Footer'

export default function V2App() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
      <V2Header />
      <main>
        <V2Hero />
        <V2Scrolly />
        <V2Downloads />
      </main>
      <V2Footer />
    </div>
  )
}
