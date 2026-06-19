import V1Header from './V1Header'
import V1Hero from './V1Hero'
import V1Downloads from './V1Downloads'
import V1Team from './V1Team'
import V1Footer from './V1Footer'

export default function V1App() {
  return (
    <>
      <V1Header />
      <main>
        <V1Hero />
        <V1Downloads />
        <V1Team />
      </main>
      <V1Footer />
    </>
  )
}
