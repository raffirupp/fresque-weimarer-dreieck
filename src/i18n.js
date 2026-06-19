import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from './i18n/de.json'
import fr from './i18n/fr.json'
import pl from './i18n/pl.json'

const savedLang = localStorage.getItem('lang') || 'de'

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    fr: { translation: fr },
    pl: { translation: pl },
  },
  lng: savedLang,
  fallbackLng: 'de',
  load: 'languageOnly',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng)
})

export default i18n
