import { Tech } from "./tech";

export type ProjectShort = {
    title: string,
    type: string,
    description: string,
    tech: string[],
    implementations: string[] | null,
    liveUrl: string | null,
    imgSrc: string,
    slug: string
}