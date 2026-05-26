import { de } from "./de";
import { en } from "./en";
import { es } from "./es";

export const languages = {
  de: "Deutsch",
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "de";

export const translations = { de, en, es } as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return translations[lang] ?? translations[defaultLang];
}
