import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "../locales/en"
import de from "../locales/de"

const htmlLang = "en-de"

const lang = ["en-us", "de-de"].find(e => e === htmlLang.toLowerCase()) || "en"
i18n.use(initReactI18next).init({
  lng: lang,
  fallbackLng: "en-en",
  resources: {
    en,
    de,
  },
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
