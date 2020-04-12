import i18n from "i18next";
import moment from "moment";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import fr from "../locales/fr.json";

import "moment/locale/fr";

export function getCurrentLanguage() {
  const language = window.localStorage.getItem("language") || "";
  if (!["en", "fr"].includes(language)) {
    window.localStorage.setItem("language", "en");
  }

  moment.locale(language);
  return language;
}

i18n.use(initReactI18next).init({
  lng: getCurrentLanguage(),
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  resources: {
    en,
    fr,
  },
});

export default i18n;
