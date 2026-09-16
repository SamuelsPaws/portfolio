import type { IconId } from '@/components/CustomIcon'
import type { StringPerLocale } from '@/lib/types/globalTypes'
import { Media } from '../galleryTypes';

export interface PortfolioProject {
    featured: boolean;
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
        gallery?: Media[];
    }[];
    implementations: StringPerLocale[];
    highlights: {
        iconId: IconId;
        text: StringPerLocale;
    }[];
}
