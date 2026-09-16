import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, generatePricingPackageSchema } from "@/lib/seo/schema";
import { getBreadcrumbs } from "@/data/breadcrumbs";
import { notFound } from "next/navigation";
import FortSectionSt from "@/components/FortSectionSt"
import SimpleH2 from "@/components/SimpleH2"
import { myPackages } from "@/data/fortales/packages"
import FeatureLi from "./components/FeatureLi"
import { addOns } from "@/data/fortales/addons"
import AddOnLi from "./components/addon-li/AddOnLi"
import { LocaleKey } from "@/lib/types/localeKey"
import MoreAddOnsArea from "./components/MoreAddOnsArea"
import Summary from "./components/Summary"
import StepCard from "@/components/ui-reusables/StepCard"
import { getTranslations } from "next-intl/server"
import organization from "@/data/fortales/organization"
import { Metadata } from "next"
import getLangAlternates from "@/lib/utils/getLangAlternates"
import { availableLocales } from "@/data/locales"

const themes = {
}

const noRepeat = [
    'Up to 6 pages',
    'Up to 2 languages'
]

type Props = {
    params: Promise<{
        'package-slug': 'starter' | 'premium',
        locale: LocaleKey
    }>
}

function getPackageNamespace(packageSlug: string): 'Starter' | 'Premium' {
    switch (packageSlug) {
        case 'starter':
            return 'Starter';
        case 'premium':
            return 'Premium';
        default:
            notFound();
    }
}

const BASE_URL = organization.url;

export async function generateMetadata({ params }: {
    params: Promise<{
        locale: LocaleKey,
        'package-slug': 'starter' | 'premium'
}>,
}): Promise<Metadata> {
    const resolvedParams = await params
    const locale = resolvedParams.locale
    const packageSlug = resolvedParams['package-slug']

    const langNamespace = getPackageNamespace(packageSlug)

    const t = await getTranslations({ locale, namespace: `Metadata.FortPackageSlug.${langNamespace}` });

    const canonical = `${BASE_URL}/${locale}/pricing/${packageSlug}`;

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
            languages: getLangAlternates(`/pricing/${packageSlug}`, BASE_URL),
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

export default async function PricingPackagePage({ params }: Props) {
    const resolved = await params
    const slug = resolved["package-slug"]
    const locale = resolved.locale
    const t = await getTranslations('FortPackageSlug')

    if (!Object.hasOwn(myPackages, slug)) notFound()
    const myPackage = myPackages[slug]
    const packageSchema = generatePricingPackageSchema(locale, myPackage)
    const breadcrumbSchema = generateBreadcrumbSchema(getBreadcrumbs(locale)[`pricing/${slug}`], organization.url, locale)
    const availableAddOns = addOns.filter(el => !(el.includedIn as readonly string[]).includes(slug))

    const getFeaturesFromOther = () => {
        if (myPackage.everythingIn[0]) {
            const otherPackage = myPackages[myPackage.everythingIn[0] as 'starter' | 'premium'] ?? undefined

            if (otherPackage !== undefined) {
                return otherPackage.features.filter(el => !noRepeat.includes(el.text.en))
            }

            return null
        }

        return null
    }

    const featuresFromOther = getFeaturesFromOther()

    return (
    <main>
        <JsonLd data={packageSchema} />
        <JsonLd data={breadcrumbSchema} />
        <section className="
            px-8 pt-24 pb-16
            md:px-32 md:py-32
            bg-main"
        >
            <h1 className="
                mb-16
                text-4xl md:text-7xl text-main font-['Source_Serif_4']"
            >
                {myPackage.title[locale]}
                <span className="text-2xl md:text-4xl text-secondary italic">
                    {` / ${t('descriptor')}`}
                </span>
            </h1>
            <p className="
                w-full md:w-1/2
                text-my-md text-secondary"
            >
                {t('copy')}
            </p>
        </section>
        {/* Included and add-ons */}
        <section className="
            flex flex-col lg:flex-row items-stretch
            border-y border-y-gray-300"
        >
            {/* Left div */}
            <div className="
                w-full lg:w-[45%]
                px-8 py-16
                md:pl-16 md:pr-16 md:py-32
                xl:pl-32
                bg-main
                lg:border-r border-r-gray-300"
            >
                <SimpleH2
                    text={t('h2Included')}
                    className="mb-8 text-most-h2"
                />
                <ul className="
                    sticky top-[calc(var(--spacing-header-height)+2rem)]
                    flex flex-col gap-4"
                >
                    {myPackage.features.map(el => el.text[locale]).map((el, index) => (
                        <FeatureLi
                            key={index}
                            text={el}
                        />
                    ))}
                    {featuresFromOther && (
                        featuresFromOther.map(el => el.text[locale]).map((el, index) => (
                            <FeatureLi
                                key={index}
                                text={el}
                            />
                        ))
                    )}
                </ul>
            </div>
            {/* Right div */}
            <div className="
                w-full
                md:flex-1 md:w-auto
                px-8 py-16
                md:pl-16 md:pr-16 md:py-32
                xl:pr-32
                bg-gray-100 dark:bg-br-gray-800"
            >
                <SimpleH2
                    text={t('h2Customize')}
                    className="mb-8 text-most-h2"
                />
                <p className="mb-8 text-my-md text-gray-title font-semibold">
                    {t('mostPopularAO')}
                </p>
                <ul className="
                    w-full
                    flex flex-col gap-4"
                >
                    {availableAddOns.slice(0, 6).map((el, index) => (
                        <AddOnLi
                            key={index}
                            addOnData={el}
                            addOnSlug={el.slug}
                            locale={locale}
                        />
                    ))}
                </ul>
                <MoreAddOnsArea
                    addOns={availableAddOns.slice(6)}
                    locale={locale}
                    seeMoreLabel={t('seeMoreAO')}
                    seeLessLabel={t('seeLessAO')}
                />
                <p className="
                    mt-4 md:mt-8 mb-4
                    text-my-md text-secondary"
                >
                    {t('customCopy')}
                </p>
                <textarea
                    name="custom-request"
                    id="custom-request"
                    className="
                        w-full
                        p-4
                        bg-main
                        text-my-md text-secondary
                        border border-gray-300 rounded-md"
                    placeholder={t('customPlaceholder')}
                >
                </textarea>
            </div>
        </section>
        <FortSectionSt
            bgColor="bg-secondary"
        >
            <Summary locale={locale} packageSlug={slug} />
        </FortSectionSt>
        <FortSectionSt
            title={t('h2WhatNext')}
            bgColor="bg-main"
        >
            <div className="
                w-full md:w-fit mx-auto
                flex flex-col gap-8 flex-wrap
                md:flex-row md:gap-16 md:justify-center"
            >
                <StepCard
                    iconId="glass-file"
                    num={1}
                    title={t('h3Step1')}
                    copy={t('step1Copy')}
                />
                <StepCard
                    iconId="message-bubble"
                    num={2}
                    title={t('h3Step2')}
                    copy={t('step2Copy')}
                />
                <StepCard
                    iconId="file-solid"
                    num={3}
                    title={t('h3Step3')}
                    copy={t('step3Copy')}
                    iconCn="scale-90"
                />
            </div>
        </FortSectionSt>
        {/* <FortSectionCta bgColor="bg-secondary" /> */}
    </main>
    )
}