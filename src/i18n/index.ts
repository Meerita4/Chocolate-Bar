import { de } from "./de";

export const languages = {
  de: "Deutsch",
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "de";

export const translations = {
  de,
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(_lang: Lang) {
  // Only DE available now; EN and ES will be added later
  return translations["de"];
}
