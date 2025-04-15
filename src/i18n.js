import i18next from 'i18next';
import { initReactI18next } from "react-i18next";
import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';


const dir = (lng) => {
    let direction = lng === 'ar' ? 'rtl' : 'ltr';
    document.body.style.direction = direction;
}

const language = localStorage.getItem('language') || 'ar';
dir(language);
i18next
    .use(initReactI18next)
    .init({
        lng: language,
        fallbackLng: language, // Default language fallback
        interpolation: {
            escapeValue: false // React already does escaping
        },
        resources: {
            en: {
                translation: enTranslation
            },
            ar: {
                translation: arTranslation
            }
        },
    });

i18next.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
    dir(lng);

});


export default i18next;