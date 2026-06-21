import { ModalProvider } from '../../context/ModalContext'
import V1Header from './V1Header'
import V1Hero from './V1Hero'
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
      </main>
      <V1Footer />
      <ContactModal variant="v1" />
    </ModalProvider>
  )
}
