import { ModalProvider } from '../../context/ModalContext'
import V1Header from './V1Header'
import V1Hero from './V1Hero'
import V1Team from './V1Team'
import V1Footer from './V1Footer'
import CardGallery from '../../components/CardGallery'
import ContactModal from '../../components/ContactModal'

export default function V1App() {
  return (
    <ModalProvider>
      <V1Header />
      <main>
        <V1Hero />
        <CardGallery variant="v1" />
        <V1Team />
      </main>
      <V1Footer />
      <ContactModal />
    </ModalProvider>
  )
}
