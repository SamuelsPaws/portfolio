import FortSectionSt from "@/components/FortSectionSt";
import TargetForScroll from "@/components/TargetForScroll";
import Eyebrow from "@/components/ui-reusables/Eyebrow";
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn";
import Image from "next/image";
import ProjectCard from "./components/project-card/ProjectCard";
import type { LocaleKey } from "@/lib/types/localeKey";
import { portfolio } from "@/data/fortales/portfolio";
import FortSectionCta from "@/components/cta-section/FortSectionCta";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import organization from "@/data/fortales/organization";
import { availableLocales } from "@/data/locales";
import getLangAlternates from "@/lib/utils/getLangAlternates";
import { generateBreadcrumbSchema, generatePortfolioSchema } from "@/lib/seo/schema";
import { getBreadcrumbs } from "@/data/breadcrumbs";
import JsonLd from "@/components/JsonLd";

type Props = {
    params: Promise<{
        locale: LocaleKey
    }>
}

const BASE_URL = organization.url;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: "Metadata.FortPortfolio",
    });

    const canonical = `${BASE_URL}/${locale}/portfolio`;

    return {
        metadataBase: new URL(BASE_URL),

        title: t("title"),
        description: t("description"),
        
        keywords: t.raw("keywords"),
        applicationName: organization.name,
        authors: [
            {
                name: organization.author,
            },
        ],
        creator: organization.author,
        publisher: organization.author,
        alternates: {
            canonical,
            languages: getLangAlternates('/portfolio', BASE_URL),
        },

        openGraph: {
            title: t("ogTitle"),
            description: t("ogDescription"),
            url: canonical,
            siteName: organization.name,
            locale: availableLocales[locale],
            type: "website",
            images: [
                {
                    url: organization.image,
                    width: 1200,
                    height: 630,
                    alt: organization.name,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: t("twitterTitle"),
            description: t("twitterDescription"),
            images: [organization.image],
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

export default async function Portfolio({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'FortPortfolio' })
    
    const pageSchema = await generatePortfolioSchema(locale)
    const breadcrumbSchema = generateBreadcrumbSchema(getBreadcrumbs(locale)['portfolio'], organization.url, locale)

    return (
    <main>
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={pageSchema} />
        {/* Hero */}
        <section className="
            relative lg:min-h-170
            px-8 py-24 md:px-16 md:py-32 xl:px-32
            flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-16
            bg-main"
        >
            {/* Left div */}
            <div className="w-full min-w-0 lg:w-1/2 wrap-break-word">
                <Eyebrow text={t('heroBrow')} />
                <h1 className="
                    mb-4 md:mb-8
                    text-4xl sm:text-5xl xl:text-7xl leading-tight text-main font-['Source_Serif_4']"
                >
                    {t('h1')}
                </h1>
                <p className="
                    mb-8
                    text-my-md text-secondary leading-relaxed"
                >
                    {t('heroCopy')}
                </p>
                <FortCtaBtn
                    href="#content"
                    label={t('exploreCta')}
                />
            </div>
            {/* Right image */}
            <Image
                src="/assets/fort-portfolio.webp"
                width={1448}
                height={1086}
                className="
                    w-full min-w-0 aspect-[4/3] lg:aspect-auto lg:w-1/2 lg:h-120 object-cover
                    rounded-2xl sm:rounded-4xl shadow-img"
                sizes="(min-width: 1024px) 60vw, 100vw"
                alt=""
                priority
            />
        </section>
        <FortSectionSt
            title={t('h2Projects')}
            bgColor="bg-secondary"
        >
            <TargetForScroll id="content" />
            {portfolio.map((project, index) => (
                <ProjectCard
                    key={project.slug}
                    {...project}
                    locale={locale}
                    ctaLabel={t('caseStudyCta')}
                    ctaHref={`/portfolio/${project.slug}`}
                    reversed={index % 2 === 1}
                    isFirst={index === 0}
                    isLast={index === portfolio.length - 1}
                />
            ))}
        </FortSectionSt>
        <FortSectionCta bgColor="bg-main" />
    </main>
    )
}
