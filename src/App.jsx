import './i18n.js'
import Header from './components/Header'
import Hero from './components/Hero'
import Downloads from './components/Downloads'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Downloads />
        <Team />
      </main>
      <Footer />
    </>
  )
}
