import { ModalProvider } from '../../context/ModalContext'
import V3Header from './V3Header'
import V3Hero from './V3Hero'
import V3Team from './V3Team'
import V3Footer from './V3Footer'
import CardGallery from '../../components/CardGallery'
import ContactModal from '../../components/ContactModal'

const SERIF = "'Playfair Display', Georgia, 'Times New Roman', serif"
const SANS = "'Inter', system-ui, sans-serif"

export default function V3App() {
  return (
    <ModalProvider>
      <div style={{ fontFamily: SANS, background: '#F7F5F0', color: '#1C1917', minHeight: '100vh' }}>
        <style>{`
          .v3-serif { font-family: ${SERIF}; }
          .v3-bg { background: #F7F5F0; }
          .v3-accent { color: #92400E; }
          .v3-accent-bg { background: #92400E; }
          .v3-border { border-color: #D4C5A9; }
          .v3-muted { color: #78716C; }
        `}</style>
        <V3Header />
        <main>
          <V3Hero />
          <CardGallery variant="v3" />
          <V3Team />
        </main>
        <V3Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  )
}
