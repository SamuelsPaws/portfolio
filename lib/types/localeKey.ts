import { availableLocales } from "@/data/locales"

export type LocaleKey = keyof typeof availableLocales
export type LocaleCode = (typeof availableLocales)[LocaleKey]