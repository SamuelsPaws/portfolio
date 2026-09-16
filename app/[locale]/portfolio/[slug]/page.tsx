import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import type { Metadata } from "next";
import organization from "@/data/fortales/organization";
import { availableLocales } from "@/data/locales";
import getLangAlternates from "@/lib/utils/getLangAlternates";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import FortSectionSt from "@/components/FortSectionSt";
import TargetForScroll from "@/components/TargetForScroll";
import Eyebrow from "@/components/ui-reusables/Eyebrow";
import FortCtaBtn from "@/components/ui-reusables/FortCtaBtn";
import { portfolio } from "@/data/fortales/portfolio";
import type { LocaleKey } from "@/lib/types/localeKey";
import ImplementationItem from "../components/project-card/subcomponents/ImplementationItem";
import HighlightItem from "../components/project-card/subcomponents/HighlightItem";
import CenteredP from "@/components/ui-reusables/CenteredP";
import GoalItem from "./components/GoalItem";
import CenterH2 from "@/components/CenterH2";
import SolutionCard from "./components/SolutionCard";
import SimpleH2 from "@/components/SimpleH2";
import RelatedProjectCard from "./components/RelatedProjectCard";
import FortSectionCta from "@/components/cta-section/FortSectionCta";
import { generateBreadcrumbSchema, generatePortfolioProjectSchema } from "@/lib/seo/schema";
import { getBreadcrumbs } from "@/data/breadcrumbs";

type Props = {
    params: Promise<{
        locale: LocaleKey;
        slug: string;
    }>;
};

function getProjectMetadataNamespace(slug: string) {
    switch (slug) {
        case 'ilalo-hotel':
            return 'IlaloHotel';
        case 'hivissual':
            return 'Hivissual';
        case 'plasma-vida-center':
            return 'PlasmaVidaCenter';
        default:
            notFound();
    }
}

const BASE_URL = organization.url;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const project = portfolio.find(project => project.slug === slug);
    if (!project) notFound();

    const namespace = getProjectMetadataNamespace(slug);
    const t = await getTranslations({
        locale,
        namespace: `Metadata.FortPortfolioSlug.${namespace}`,
    });

    const canonical = `${BASE_URL}/${locale}/portfolio/${slug}`;

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
            languages: getLangAlternates(`/portfolio/${slug}`, BASE_URL),
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
                    url: project.ogImage,
                    alt: project.imgAlt[locale],
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: t("twitterTitle"),
            description: t("twitterDescription"),
            images: [project.ogImage],
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

export default async function PortfolioProjectPage({ params }: Props) {
    const { locale, slug } = await params;
    const project = portfolio.find(project => project.slug === slug);

    if (!project) notFound();

    const projectSchema = generatePortfolioProjectSchema(locale, project)
    const breadcrumbSchema = generateBreadcrumbSchema(getBreadcrumbs(locale)[`portfolio/${slug}`], organization.url, locale)

    const relatedProjects = portfolio.filter(project => project.slug !== slug);

    const t = await getTranslations({ locale, namespace: 'FortPortfolio' });

    return (
        <main className="pt-header-height">
            <JsonLd data={projectSchema} />
            <JsonLd data={breadcrumbSchema} />
            <section className="
                px-8 py-12 sm:py-16 md:px-16 lg:py-24 xl:px-32
                flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16
                bg-main"
            >
                {/* Left div */}
                <div className="w-full min-w-0 lg:w-1/2">
                    <Image
                        src={project.ogImage}
                        width={project.imgW}
                        height={project.imgH}
                        alt={project.imgAlt[locale]}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="
                            w-full aspect-[3/2] lg:aspect-auto lg:h-140
                            bg-gray-200 dark:bg-br-gray-800
                            object-contain rounded-2xl sm:rounded-4xl shadow-img"
                        priority
                    />
                </div>
                {/* Right div */}
                <div className="w-full min-w-0 lg:flex-1 wrap-break-word">
                    <Eyebrow
                        text={project.eyebrow[locale]}
                        desat
                        wide
                    />
                    <h1 className="
                        mb-6
                        text-4xl sm:text-5xl xl:text-7xl leading-tight
                        text-main font-['Source_Serif_4']"
                    >
                        {project.title}
                    </h1>
                    <p className="mb-6 sm:mb-8 text-my-md text-secondary leading-relaxed">
                        {project.copy[locale]}
                    </p>
                    <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-4">
                        {project.implementations.map((implementation, index) => (
                            <ImplementationItem
                                key={index}
                                text={implementation[locale]}
                            />
                        ))}
                    </div>
                    <div className="
                        mb-8 pt-6
                        grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6
                        border-t border-gray-300"
                    >
                        {project.highlights.map(highlight => (
                            <HighlightItem
                                key={`${highlight.iconId}-${highlight.text[locale]}`}
                                iconId={highlight.iconId}
                                text={highlight.text[locale]}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <FortCtaBtn
                            href="#content"
                            label={t('caseStudyCta')}
                        />
                        <FortCtaBtn
                            href={project.liveUrl}
                            label={t('seeLiveSite')}
                            type="secondary"
                            external
                        />
                    </div>
                </div>
            </section>
            <FortSectionSt
                title={t('h2Challenge')}
                bgColor="bg-secondary"
            >
                <TargetForScroll id="content" />
                <CenteredP
                    text={project.challengeCopy[locale]}
                />
                <CenterH2
                    text={t('h2Goals')}
                />
                <div className="
                    w-fit mx-auto
                    flex flex-col gap-4"
                >
                    {project.goals.map((goal, index) => (
                        <GoalItem
                            key={`${goal.iconId}-${index}`}
                            iconId={goal.iconId}
                            text={goal.text[locale]}
                        />
                    ))}
                </div>
            </FortSectionSt>
            <FortSectionSt
                title={t('h2Solution')}
                bgColor="bg-main"
            >
                <div className="flex flex-col gap-8 md:gap-16">
                    {project.solution.map((el, index) => (
                        <SolutionCard
                            key={index}
                            title={el.title[locale]}
                            copy={el.copy[locale]}
                            media={el.gallery ? el.gallery : null}
                        />
                    ))}
                </div>
            </FortSectionSt>
            <FortSectionSt
                bgColor="bg-secondary"
            >
                <SimpleH2
                    text={t('relatedProjects')}
                    className="mb-8 md:mb-16 text-3xl md:text-5xl"
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 xl:gap-16">
                    {relatedProjects.map(relatedProject => (
                        <RelatedProjectCard
                            key={relatedProject.slug}
                            project={relatedProject}
                            locale={locale}
                            ctaLabel={t('caseStudyCta')}
                        />
                    ))}
                </div>
            </FortSectionSt>
            <FortSectionCta bgColor="bg-main" />
        </main>
    );
}
