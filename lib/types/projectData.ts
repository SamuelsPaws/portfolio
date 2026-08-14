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
    implementations: { [K in LocaleKey]: string[] },
    overview: { [K in LocaleKey]: string },
    keyFeatures: { [K in LocaleKey]: string[] },
    technicalHighlights: { [K in LocaleKey]: string[] },
    results: { [K in LocaleKey]: string[] },
    challenges: { [K in LocaleKey]: string[] },
    whatDemonstrates: { [K in LocaleKey]: string[] },
    myRole: { [K in LocaleKey]: string },
}