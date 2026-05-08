export default function localeNameMapper(locale: string): string {
    if (locale === 'en') return 'English';
    if (locale === 'es') return 'Spanish';
    return 'English';
}