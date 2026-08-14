import { LocaleKey } from "../types/localeKey";

export default function localeNameMapper(locale: LocaleKey): string {
    if (locale === 'en') return 'English';
    if (locale === 'es') return 'Spanish';
    if (locale === 'fr') return 'French';
    if (locale === 'de') return 'German';
    if (locale === 'it') return 'Italian';
    return 'English';
}