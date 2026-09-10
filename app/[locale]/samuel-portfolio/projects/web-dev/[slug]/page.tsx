import { notFound } from "next/navigation";
import ProjectPageTemplate from "../../ProjectPageTemplate";
import projectData from "@/data/projects.json"
import { ProjectData } from "@/lib/types/projectData";
import { LocaleKey } from "@/lib/types/localeKey";
import { Metadata } from "next";
import portfolioSam from "@/data/portfolioSam";
import { getTranslations } from "next-intl/server";
import getLangAlternates from "@/lib/utils/getLangAlternates";
import { availableLocales } from "@/data/locales";

// export async function generateStaticParams() {
//     return [
//         { slug: 'lpdh' },
//         { slug: 'plasma-vida' },
//         { slug: 'dwm' },
//     ]
// }

type Props = {
    params: Promise<{
        slug: string,
        locale: LocaleKey
    }>
}

const BASE_URL = portfolioSam.url

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params
    const t = await getTranslations({
        locale,
        namespace: "Metadata.ProjectSlug",
    })
    const project = projectData.find(el => el.slug === slug)

    if (!project) {
        notFound()
    }

    const canonical = `${BASE_URL}/${locale}/projects/web-dev/${slug}`

    const title = `${project.title} | ${t('webProject')} | Samuel Baquero`

    const description = project.description[locale]
    const ogDescription = project.description[locale]

    return {
        metadataBase: new URL(BASE_URL),

        title,
        description,
        applicationName: portfolioSam.name,
        authors: [
            {
                name: portfolioSam.name,
            },
        ],
        creator: portfolioSam.author,
        publisher: portfolioSam.author,
        
        alternates: {
            canonical,
            languages: getLangAlternates(`/projects/web-dev/${slug}`),
        },

        openGraph: {
            title,
            description: ogDescription,
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
            title,
            description: ogDescription,
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

export default async function WebDevProject({ params }: Props) {
    const { slug, locale } = await params
    const project = projectData.find(el => el.slug === slug)

    if (project === undefined) {
        notFound()
    }

    return (
    <ProjectPageTemplate
        project={project}
        locale={locale}
    />
    )
}