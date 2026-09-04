import ProjectCard from "@/components/ProjectCard";
import BlackBtn from "@/components/ui-reusables/BlackBtn";
import projectData from "@/data/projects.json"
import featuredProjects from "@/data/featuredProjects.json"
import mapProjectCard from "@/lib/utils/mapProjectCard";
import { getTranslations } from "next-intl/server";
import { LocaleKey } from "@/lib/types/localeKey";
import SectionSt from "@/components/SectionSt";
import { projectSorterWeb } from "@/lib/utils/prioritySort";
import portfolioSam from "@/data/portfolioSam";
import { Metadata } from "next";
import { availableLocales, localeCodesArray } from "@/data/locales";

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
        namespace: "Metadata.Home",
    });

    const canonical = `${BASE_URL}/${locale}`;

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
            languages: Object.fromEntries(localeCodesArray.map(el => [el[0], `${BASE_URL}/${el[1]}`])),
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

export default async function Home({ params }: Props) {
    const { locale } = await params
    const t = await getTranslations('HomePage')

    const projects = projectData.map(el => mapProjectCard(el, locale))

    return (
    <main>
        {/* Hero */}
        <section className="
            h-[102vh]
            px-8 lg:px-16
            flex flex-col items-center justify-center gap-8 lg:gap-16
            bg-br-white dark:bg-br-black"
        >
            <h1 className="
                text-3xl md:text-5xl xl:text-6xl
                text-center
                text-black dark:text-br-white
                font-semibold leading-12 lg:leading-20"
            >
                {t('h1-1')}<br />{t('h1-2')}
            </h1>
            <BlackBtn
                href="/projects/web-dev"
                label={t('heroCta')}
                external={false}
                size={'md'}
            />
        </section>
        {/* Bump */}
        {/* Web dev projects */}
        <SectionSt
            title={t('h2WebDev')}
            bgColor="bg-gray-400 dark:bg-br-gray-600"
        >
            {/* Container with the cards */}
            <div className="
                w-full mb-8 md:mb-16
                flex flex-col gap-8
                lg:flex-row lg:justify-center lg:items-center lg:gap-8"
            >
                {projects.filter(el => featuredProjects["web-dev"].includes(el.slug)).sort(projectSorterWeb).map((el, index) => (
                    <ProjectCard
                        key={index}
                        project={el}
                        theme="light"
                    />
                ))}
            </div>
            <BlackBtn
                href="/projects/web-dev"
                label={t('moreProjects')}
                external={false}
                size='md'
                className="mx-auto"
            />
        </SectionSt>
        {/* Beyond web dev */}
        <SectionSt
            title={t('h2Beyond')}
            bgColor="bg-br-white dark:bg-br-black"
        >
            {/* Container with the cards */}
            <div className="
                w-full mb-16
                flex flex-col gap-4
                lg:flex-row lg:justify-center lg:items-center lg:gap-8"
            >
                {projects.filter(el => featuredProjects.other.includes(el.slug)).map((el, index) => (
                    <ProjectCard
                        key={index}
                        project={el}
                        theme="dark"
                    />
                ))}
            </div>
            <BlackBtn
                href="/projects/other"
                label={t('moreProjects')}
                external={false}
                size='md'
                className="mx-auto"
            />
        </SectionSt>
    </main>
  );
}
