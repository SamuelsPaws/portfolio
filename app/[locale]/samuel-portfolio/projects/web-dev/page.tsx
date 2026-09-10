import ProjectsPageTemplate from "../ProjectsPageTemplate";
import projectData from '@/data/projects.json'
import mapProjectCard from "@/lib/utils/mapProjectCard";
import { LocaleKey } from "@/lib/types/localeKey";
import { getTranslations } from "next-intl/server";
import { ProjectData } from "@/lib/types/projectData";
import { projectSorterWeb } from "@/lib/utils/prioritySort";
import { availableLocales, localeCodesArray } from "@/data/locales";
import portfolioSam from "@/data/portfolioSam";
import { Metadata } from "next";

type Props = {
    params: Promise<{
        locale: LocaleKey
    }>
}

const BASE_URL = portfolioSam.url;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: LocaleKey }>
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "Metadata.WebdevProjects",
    });

    const canonical = `${BASE_URL}/${locale}/projects/web-dev`;

    return {
        metadataBase: new URL(BASE_URL),

        title: t("title"),
        description: t("description"),
        
        keywords: t.raw("keywords"),
        applicationName: portfolioSam.name,
        authors: [
            {
                name: portfolioSam.author,
            },
        ],
        creator: portfolioSam.author,
        publisher: portfolioSam.author,
        alternates: {
            canonical,
            languages: Object.fromEntries(localeCodesArray.map(el => [el[0], `${BASE_URL}/${el[1]}/projects/web-dev`])),
        },

        openGraph: {
            title: t("ogTitle"),
            description: t("ogDescription"),
            url: canonical,
            siteName: portfolioSam.name,
            locale: availableLocales[locale],
            type: "website",
            images: [
                {
                    url: portfolioSam.image,
                    width: 1200,
                    height: 630,
                    alt: portfolioSam.name,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: t("twitterTitle"),
            description: t("twitterDescription"),
            images: [portfolioSam.image],
        },

        category: t('category'),

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
  };
}

export default async function WebDevProjects({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations('Projects')
    
    return (
    <ProjectsPageTemplate
        h1="Web Development Projects"
        projects={
            projectData
                .filter(el => el.type === 'web-dev')
                .sort(projectSorterWeb)
                .map(el => mapProjectCard(el as ProjectData, locale))
        }
        bgColor="bg-gray-300"
    />
    )
}