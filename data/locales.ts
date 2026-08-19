import { LocaleKey } from "@/lib/types/localeKey"

export const availableLocales = {
    en: 'en-US',
    es: 'es-EC',
    fr: 'fr-FR',
    de: 'de-DE',
    it: 'it-IT',
} as const

export const localeCodesArray = Array.from(Object.keys(availableLocales)).map(el => [availableLocales[el as LocaleKey], el])