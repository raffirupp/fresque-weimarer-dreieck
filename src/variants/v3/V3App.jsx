import { ModalProvider } from '../../context/ModalContext'
import V3Header from './V3Header'
import V3Hero from './V3Hero'
import V3Footer from './V3Footer'
import CardGallery from '../../components/CardGallery'
import ContactModal from '../../components/ContactModal'

export default function V3App() {
  return (
    <ModalProvider>
      <style>{`
        .v3 { background: #fff; color: #111; font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; }

        /* Scroll reveal */
        .v3-fade {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .v3-fade.v3-visible { opacity: 1; transform: translateY(0); }

        .v3-fade-d1 { transition-delay: 0.12s; }
        .v3-fade-d2 { transition-delay: 0.24s; }
        .v3-fade-d3 { transition-delay: 0.36s; }
        .v3-fade-d4 { transition-delay: 0.48s; }

        /* Sticky section label */
        .v3-sticky-label { position: sticky; top: 80px; }

        /* Section grid */
        .v3-section-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 80px;
        }
        @media (max-width: 900px) {
          .v3-section-grid { grid-template-columns: 1fr; gap: 32px; }
          .v3-sticky-label { position: static; }
        }

        .v3-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: stretch;
        }
        @media (max-width: 700px) {
          .v3-content-grid { grid-template-columns: 1fr; }
        }

        .v3-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: 90vh;
          padding: 100px 0 80px;
        }
        @media (max-width: 900px) {
          .v3-hero-grid { grid-template-columns: 1fr; min-height: auto; padding: 60px 0; }
          .v3-card-preview { display: none; }
        }
      `}</style>
      <div className="v3">
        <V3Header />
        <main>
          <V3Hero />
          <CardGallery variant="v3" />
        </main>
        <V3Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  )
}
