import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import { prop } from 'ramda';

const htmlLang =
  prop(0, document.getElementsByTagName('html')).getAttribute('lang') || 'en';

const lang = ['en', 'de'].find(e => e === htmlLang.toLowerCase()) || 'en';
i18n.use(initReactI18next).init({
  lng: lang,
  fallbackLng: 'en',
  resources: {
    en
  },
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
