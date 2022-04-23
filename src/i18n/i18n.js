import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import en from './en.json'
import ar from './ar.json'
import { languages } from "../Config";

i18next.use(initReactI18next).init({
    lng: languages.EN,
    fallbackLng: languages.EN,
    resources: {
        en,
        ar
    },
    interpolation: {
        escapeValue: false
    }
})


export default i18next