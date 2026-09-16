import type { IconId } from '@/components/CustomIcon'
import type { StringPerLocale } from '@/lib/types/globalTypes'

export interface PortfolioProject {
    slug: string;
    liveUrl: string;
    imgSrc: string;
    ogImage: string;
    imgW: number;
    imgH: number;
    imgAlt: StringPerLocale;
    eyebrow: StringPerLocale;
    title: string;
    copy: StringPerLocale;
    challengeCopy: StringPerLocale;
    goals: {
        iconId: IconId;
        text: StringPerLocale;
    }[];
    solution: {
        title: StringPerLocale;
        copy: StringPerLocale;
        gallery?: string[];
    }[];
    implementations: StringPerLocale[];
    highlights: {
        iconId: IconId;
        text: StringPerLocale;
    }[];
}
