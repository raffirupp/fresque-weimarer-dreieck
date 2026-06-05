import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from './i18n/de.json'
import en from './i18n/en.json'
import fr from './i18n/fr.json'

const savedLang = localStorage.getItem('lang') || 'de'

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
    fr: { translation: fr },
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
