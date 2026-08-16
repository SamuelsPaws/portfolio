import { LocaleKey } from "./localeKey"
import { Tech } from "./tech"

export type ProjectData = {
    slug: string,
    title: string,
    type: string,
    tech: string[],
    liveUrl: string | null,
    coverSrc: string,
    gallery: string[],
    description: { [K in LocaleKey]: string },
    implementations: { [K in LocaleKey]: string[] } | null,
    overview: { [K in LocaleKey]: string },
    keyFeatures: { [K in LocaleKey]: string[] },
    technicalHighlights: { [K in LocaleKey]: string[] },
    results: { [K in LocaleKey]: string[] } | null,
    challenges: { [K in LocaleKey]: string[] } | null,
    whatDemonstrates: { [K in LocaleKey]: string[] } | null,
    myRole: { [K in LocaleKey]: string },
}