import FortSectionSt from "@/components/FortSectionSt";
import organization from "@/data/fortales/organization";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { LocaleKey } from "@/lib/types/localeKey";
import getLangAlternates from "@/lib/utils/getLangAlternates";
import { availableLocales } from "@/data/locales";
import legalDetails from "@/data/fortales/legal";

type TermsSection = {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    bulletsAfterParagraph?: number;
}

const BASE_URL = organization.url

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: LocaleKey }>;
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({
        locale,
        namespace: 'Metadata.TermsOfService',
    })
    const canonical = `${BASE_URL}/${locale}/terms-of-service`

    return {
        metadataBase: new URL(BASE_URL),
        title: t('title'),
        description: t('description'),
        applicationName: organization.name,
        authors: [{ name: organization.author }],
        creator: organization.author,
        publisher: organization.author,
        alternates: {
            canonical,
            languages: getLangAlternates('/terms-of-service', BASE_URL),
        },
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            url: canonical,
            siteName: organization.name,
            locale: availableLocales[locale],
            type: 'website',
            images: [{
                url: organization.image,
                width: 1200,
                height: 630,
                alt: organization.name,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('twitterTitle'),
            description: t('twitterDescription'),
            images: [organization.image],
        },
        robots: {
            index: false,
            follow: false,
            nocache: true,
            googleBot: {
                index: false,
                follow: false,
                noimageindex: true,
            },
        },
    }
}

export default function TermsOfService() {
    const t = useTranslations('TermsOfService')
    const sections = t.raw('sections') as TermsSection[]

    const renderText = (text: string) => {
        const parts = text.split(/(\{legalName\}|\{privacyPolicy\})/g)

        return parts.map((part, index) => {
            if (part === '{legalName}') {
                return <span key={index}>{organization.legalName}</span>
            }

            if (part === '{privacyPolicy}') {
                return (
                    <Link key={index} href="/privacy-policy" className="underline">
                        {t('privacyPolicy')}
                    </Link>
                )
            }

            return part
        })
    }

    return (
    <main>
        {/* Banner */}
        <section className="
            px-8 py-24
            md:px-16 md:py-32
            xl:px-32
            flex flex-col gap-8
            md:flex-row md:justify-between md:items-center md:gap-16
            bg-main"
        >
            {/* Left */}
            <h1 className="text-3xl md:text-5xl text-main font-['Source_Serif_4']">
                {t('title')}
            </h1>
            {/* Right */}
            <div className="
                w-full md:w-auto
                flex items-center"
            >
                <Image
                    src="/assets/fortales-logo.svg"
                    width={96}
                    height={96}
                    className="w-12 md:w-24"
                    alt={t('logoAlt')}
                />
                <Image
                    src="/assets/fortales-text.svg"
                    width={248}
                    height={64}
                    className="w-30 md:w-64 -translate-x-0"
                    alt={t('logoAlt')}
                />
            </div>
        </section>
        <FortSectionSt
            bgColor="bg-secondary"
        >
            <article className="max-w-4xl mx-auto text-secondary">
                <p className="mb-8">
                    <strong className="text-main">{t('lastUpdatedLabel')}:</strong>{' '}
                    {t('lastUpdated')}
                </p>

                <div className="mb-12 flex flex-col gap-4">
                    {(t.raw('introduction') as string[]).map((paragraph, index) => (
                        <p key={index}>{renderText(paragraph)}</p>
                    ))}
                </div>

                <div className="flex flex-col gap-12">
                    {sections.map((section, sectionIndex) => (
                        <section key={section.title} className="flex flex-col gap-4">
                            <h2 className="text-2xl text-main font-semibold">
                                {section.title}
                            </h2>

                            {section.paragraphs.map((paragraph, paragraphIndex) => (
                                <div key={paragraphIndex} className="contents">
                                    <p>{renderText(paragraph)}</p>

                                    {section.bullets && paragraphIndex === (section.bulletsAfterParagraph ?? 1) && (
                                        <ul className="ml-6 list-disc flex flex-col gap-2">
                                            {section.bullets.map((item, index) => (
                                                <li key={index}>{renderText(item)}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {sectionIndex === sections.length - 1 && paragraphIndex === 0 && (
                                        <dl className="grid grid-cols-1 gap-3 md:grid-cols-[max-content_1fr]">
                                            <dt className="font-semibold text-main">{t('contact.commercialName')}</dt>
                                            <dd>{organization.name}</dd>

                                            <dt className="font-semibold text-main">{t('contact.websiteOperator')}</dt>
                                            <dd>{organization.legalName}</dd>

                                            <dt className="font-semibold text-main">{t('contact.businessIdentification')}</dt>
                                            <dd>{legalDetails.businessIdentification}</dd>

                                            <dt className="font-semibold text-main">{t('contact.businessAddress')}</dt>
                                            <dd>{legalDetails.businessAddress}</dd>

                                            <dt className="font-semibold text-main">{t('contact.email')}</dt>
                                            <dd>
                                                <a href={`mailto:${organization.email}`} className="underline">
                                                    {organization.email}
                                                </a>
                                            </dd>

                                            <dt className="font-semibold text-main">{t('contact.website')}</dt>
                                            <dd>
                                                <a href={organization.url} className="underline">
                                                    {organization.url}
                                                </a>
                                            </dd>
                                        </dl>
                                    )}
                                </div>
                            ))}
                        </section>
                    ))}
                </div>
            </article>
        </FortSectionSt>
    </main>
    )
}
