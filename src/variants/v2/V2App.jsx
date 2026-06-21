import { ModalProvider } from '../../context/ModalContext'
import V2Header from './V2Header'
import V2Hero from './V2Hero'
import V2Scrolly from './V2Scrolly'
import V2Footer from './V2Footer'
import CardGallery from '../../components/CardGallery'
import ContactModal from '../../components/ContactModal'

export default function V2App() {
  return (
    <ModalProvider>
      <div style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
        <V2Header />
        <main>
          <V2Hero />
          <V2Scrolly />
          <CardGallery variant="v2" />
        </main>
        <V2Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  )
}
