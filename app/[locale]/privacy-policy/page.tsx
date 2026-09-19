import FortSectionSt from '@/components/FortSectionSt'
import legalDetails from '@/data/fortales/legal'
import organization from '@/data/fortales/organization'
import { availableLocales } from '@/data/locales'
import getLangAlternates from '@/lib/utils/getLangAlternates'
import type { LocaleKey } from '@/lib/types/localeKey'
import type { Metadata } from 'next'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

type PrivacyBlock =
    | { type: 'paragraph'; text: string }
    | { type: 'subheading'; text: string }
    | { type: 'list'; items: string[] }

type PrivacySection = {
    title: string
    blocks: PrivacyBlock[]
}

const BASE_URL = organization.url

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: LocaleKey }>;
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'Metadata.PrivacyPolicy' })
    const canonical = `${BASE_URL}/${locale}/privacy-policy`

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
            languages: getLangAlternates('/privacy-policy', BASE_URL),
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

export default function PrivacyPolicy() {
    const t = useTranslations('PrivacyPolicy')
    const sections = t.raw('sections') as PrivacySection[]

    const renderText = (text: string) => {
        const values: Record<string, string> = {
            '{legalName}': organization.legalName,
            '{businessIdentification}': legalDetails.businessIdentification,
            '{businessAddress}': legalDetails.businessAddress,
            '{phone}': organization.phone,
            '{privacyEmail}': legalDetails.privacyEmail,
        }
        const parts = text.split(/(\{legalName\}|\{businessIdentification\}|\{businessAddress\}|\{phone\}|\{privacyEmail\})/g)

        return parts.map((part, index) => {
            if (part === '{privacyEmail}') {
                return (
                    <a key={index} href={`mailto:${legalDetails.privacyEmail}`} className="underline">
                        {legalDetails.privacyEmail}
                    </a>
                )
            }

            return values[part] ?? part
        })
    }

    return (
    <main>
        <section className="
            px-8 py-24
            md:px-16 md:py-32
            xl:px-32
            flex flex-col gap-8
            md:flex-row md:justify-between md:items-center md:gap-16
            bg-main"
        >
            <h1 className="text-3xl md:text-5xl text-main font-['Source_Serif_4']">
                {t('title')}
            </h1>
            <div className="w-full md:w-auto flex items-center">
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
                    className="w-30 md:w-64"
                    alt={t('logoAlt')}
                />
            </div>
        </section>

        <FortSectionSt bgColor="bg-secondary">
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
                    {sections.map(section => (
                        <section key={section.title} className="flex flex-col gap-4">
                            <h2 className="text-2xl text-main font-semibold">
                                {section.title}
                            </h2>

                            {section.blocks.map((block, index) => {
                                if (block.type === 'subheading') {
                                    return (
                                        <h3 key={index} className="text-lg text-main font-semibold">
                                            {block.text}
                                        </h3>
                                    )
                                }

                                if (block.type === 'list') {
                                    return (
                                        <ul key={index} className="ml-6 list-disc flex flex-col gap-2">
                                            {block.items.map((item, itemIndex) => (
                                                <li key={itemIndex}>{renderText(item)}</li>
                                            ))}
                                        </ul>
                                    )
                                }

                                return <p key={index}>{renderText(block.text)}</p>
                            })}
                        </section>
                    ))}
                </div>
            </article>
        </FortSectionSt>
    </main>
    )
}
