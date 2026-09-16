import { portfolio } from '@/data/fortales/portfolio'
import type { PortfolioProject } from '@/lib/types/fortales/portfolio'
import organization from '@/data/fortales/organization'
import type { LocaleKey } from '@/lib/types/localeKey'
import { myPackages } from '@/data/fortales/packages'
import { addOns } from '@/data/fortales/addons'
import { availableLocales } from '@/data/locales'
import { getTranslations } from 'next-intl/server'
import { Breadcrumb } from '../types/globalTypes'

type JsonLdValue = string | number | boolean | JsonLdValue[] | JsonLdObject
type JsonLdObject = { [key: string]: JsonLdValue }

function omitEmpty(value: JsonLdValue): JsonLdValue | undefined {
    if (typeof value === 'string') return value.trim() ? value : undefined

    if (Array.isArray(value)) {
        const items = value.map(omitEmpty).filter(item => item !== undefined)
        return items.length ? items : undefined
    }

    if (typeof value === 'object') {
        const entries = Object.entries(value)
            .map(([key, item]) => [key, omitEmpty(item)] as const)
            .filter((entry): entry is readonly [string, JsonLdValue] => entry[1] !== undefined)

        return entries.some(([key]) => key !== '@type')
            ? Object.fromEntries(entries)
            : undefined
    }

    return value
}

export function generateOrgSchema(locale: LocaleKey): JsonLdObject {
    const schema: JsonLdObject = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': new URL('/#organization', organization.url).href,
        name: organization.name,
        legalName: organization.legalName,
        alternateName: organization.alternateName,
        description: organization.description[locale],
        url: organization.url,
        email: organization.email,
        telephone: organization.telephone,
        image: organization.image ? new URL(organization.image, organization.url).href : '',
        logo: organization.logo ? new URL(organization.logo, organization.url).href : '',
        sameAs: organization.sameAs,
        address: organization.address,
        contactPoint: organization.contactPoint,
        areaServed: organization.areaServed,
        foundingDate: organization.foundingDate,
        founder: organization.founder,
        taxID: organization.taxID,
        knowsAbout: organization.knowsAbout
    }

    return omitEmpty(schema) as JsonLdObject
}

export async function generateContactSchema(locale: LocaleKey): Promise<JsonLdObject> {
    const [metadata, contact] = await Promise.all([
        getTranslations({ locale, namespace: 'Metadata.FortContact' }),
        getTranslations({ locale, namespace: 'FortContact' })
    ])
    const url = new URL(`/${locale}/contact`, organization.url).href
    const organizationNode = { ...generateOrgSchema(locale) }
    delete organizationNode['@context']
    const provider = { '@id': organizationNode['@id'] }

    return omitEmpty({
        '@context': 'https://schema.org',
        '@graph': [
            organizationNode,
            {
                '@type': 'ContactPage',
                '@id': `${url}#webpage`,
                url,
                name: metadata('title'),
                description: metadata('description'),
                inLanguage: availableLocales[locale],
                publisher: provider,
                about: provider,
                mainEntity: provider,
                hasPart: { '@id': `${url}#faq` }
            },
            {
                '@type': 'FAQPage',
                '@id': `${url}#faq`,
                name: contact('h2Faq'),
                inLanguage: availableLocales[locale],
                isPartOf: { '@id': `${url}#webpage` },
                publisher: provider,
                // Keep these in sync with the four FAQ cards on the contact page.
                mainEntity: Array.from({ length: 4 }, (_, index) => ({
                    '@type': 'Question',
                    name: contact(`q${index + 1}`),
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: contact(`a${index + 1}`)
                    }
                }))
            }
        ]
    }) as JsonLdObject
}

export async function generatePricingSchema(locale: LocaleKey): Promise<JsonLdObject> {
    const [metadata, pricing] = await Promise.all([
        getTranslations({ locale, namespace: 'Metadata.FortPricing' }),
        getTranslations({ locale, namespace: 'FortPricing' })
    ])
    const url = new URL(`/${locale}/pricing`, organization.url).href
    const orgSchema = generateOrgSchema(locale)
    const provider = { '@id': orgSchema['@id'] }

    const addonOffers = addOns.map(addon => ({
        '@type': 'Offer',
        '@id': `${url}#addon-${addon.slug}`,
        url,
        name: addon.title[locale],
        description: addon.copy[locale],
        price: addon.price / 100,
        priceCurrency: 'USD',
        priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: addon.price / 100,
            priceCurrency: 'USD',
            description: addon.paymentDetail[locale]
        },
        seller: provider,
        itemOffered: {
            '@type': 'Service',
            name: addon.title[locale],
            description: addon.copy[locale],
            provider
        }
    }))

    const packageOffers = Object.values(myPackages).map(pkg => ({
        '@type': 'Offer',
        '@id': `${url}/${pkg.slug}#offer`,
        url: `${url}/${pkg.slug}`,
        name: pkg.title[locale],
        description: pkg.description[locale],
        price: pkg.price / 100,
        priceCurrency: 'USD',
        priceSpecification: {
            '@type': 'PriceSpecification',
            price: pkg.price / 100,
            priceCurrency: 'USD',
            description: pkg.paymentFrequency[locale]
        },
        seller: provider,
        // Add-ons are optional extras, not part of the advertised base price.
        addOn: addonOffers.filter((_, index) => !addOns[index].includedIn.some(slug => slug === pkg.slug))
            .map(offer => ({ '@id': offer['@id'] })),
        itemOffered: {
            '@type': 'Service',
            '@id': `${url}/${pkg.slug}#service`,
            url: `${url}/${pkg.slug}`,
            name: pkg.title[locale],
            description: pkg.description[locale],
            provider
        }
    }))

    const catalog: JsonLdObject = {
        '@type': 'OfferCatalog',
        '@id': `${url}#catalog`,
        name: pricing('h1'),
        url,
        itemListElement: [
            ...packageOffers,
            {
                '@type': 'OfferCatalog',
                '@id': `${url}#addons`,
                name: pricing('h3AddOns'),
                numberOfItems: addonOffers.length,
                itemListElement: addonOffers
            }
        ]
    }

    const organizationNode = { ...orgSchema }
    delete organizationNode['@context']
    organizationNode.hasOfferCatalog = { '@id': catalog['@id'] }

    return omitEmpty({
        '@context': 'https://schema.org',
        '@graph': [
            organizationNode,
            {
                '@type': 'CollectionPage',
                '@id': `${url}#webpage`,
                url,
                name: metadata('title'),
                description: metadata('description'),
                inLanguage: availableLocales[locale],
                publisher: provider,
                mainEntity: { '@id': catalog['@id'] }
            },
            catalog
        ]
    }) as JsonLdObject
}

export async function generateAboutSchema(locale: LocaleKey): Promise<JsonLdObject> {
    const [metadata, about] = await Promise.all([
        getTranslations({ locale, namespace: 'Metadata.FortAbout' }),
        getTranslations({ locale, namespace: 'FortAbout' }),
    ])
    const url = new URL(`/${locale}/about`, organization.url).href
    const organizationNode = { ...generateOrgSchema(locale) }
    delete organizationNode['@context']
    const provider = { '@id': organizationNode['@id'] }

    return omitEmpty({
        '@context': 'https://schema.org',
        '@graph': [
            organizationNode,
            {
                '@type': 'AboutPage',
                '@id': `${url}#webpage`,
                url,
                name: metadata('title'),
                description: metadata('description'),
                inLanguage: availableLocales[locale],
                publisher: provider,
                about: provider,
                mainEntity: provider,
                hasPart: { '@id': `${url}#faq` },
            },
            {
                '@type': 'FAQPage',
                '@id': `${url}#faq`,
                name: about('h2Faq'),
                inLanguage: availableLocales[locale],
                isPartOf: { '@id': `${url}#webpage` },
                publisher: provider,
                // Keep these aligned with the nine FAQ cards on the About page.
                mainEntity: Array.from({ length: 9 }, (_, index) => ({
                    '@type': 'Question',
                    name: about(`q${index + 1}`),
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: about(`a${index + 1}`),
                    },
                })),
            },
        ],
    }) as JsonLdObject
}

export async function generatePortfolioSchema(locale: LocaleKey): Promise<JsonLdObject> {
    const metadata = await getTranslations({ locale, namespace: 'Metadata.FortPortfolio' })
    const url = new URL(`/${locale}/portfolio`, organization.url).href
    const organizationNode = { ...generateOrgSchema(locale) }
    delete organizationNode['@context']
    const provider = { '@id': organizationNode['@id'] }

    return omitEmpty({
        '@context': 'https://schema.org',
        '@graph': [
            organizationNode,
            {
                '@type': 'CollectionPage',
                '@id': `${url}#webpage`,
                url,
                name: metadata('title'),
                description: metadata('description'),
                inLanguage: availableLocales[locale],
                publisher: provider,
                mainEntity: { '@id': `${url}#projects` },
            },
            {
                '@type': 'ItemList',
                '@id': `${url}#projects`,
                numberOfItems: portfolio.length,
                itemListElement: portfolio.map((project, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: {
                        '@type': 'CreativeWork',
                        '@id': `${url}/${project.slug}#project`,
                        url: `${url}/${project.slug}`,
                        name: project.title,
                        description: project.copy[locale],
                        image: new URL(project.imgSrc, organization.url).href,
                        creator: provider,
                    },
                })),
            },
        ],
    }) as JsonLdObject
}

export function generatePortfolioProjectSchema(
    locale: LocaleKey,
    project: PortfolioProject,
): JsonLdObject {
    const url = new URL(`/${locale}/portfolio/${project.slug}`, organization.url).href
    const organizationNode = { ...generateOrgSchema(locale) }
    delete organizationNode['@context']
    const provider = { '@id': organizationNode['@id'] }
    const image = {
        '@type': 'ImageObject',
        url: new URL(project.ogImage, organization.url).href,
        caption: project.imgAlt[locale],
    }

    return omitEmpty({
        '@context': 'https://schema.org',
        '@graph': [
            organizationNode,
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: project.title,
                description: project.copy[locale],
                inLanguage: availableLocales[locale],
                publisher: provider,
                primaryImageOfPage: image,
                mainEntity: { '@id': `${url}#project` },
                relatedLink: project.liveUrl,
            },
            {
                '@type': 'CreativeWork',
                '@id': `${url}#project`,
                url,
                name: project.title,
                description: project.copy[locale],
                inLanguage: availableLocales[locale],
                creator: provider,
                mainEntityOfPage: { '@id': `${url}#webpage` },
                image,
                text: [
                    project.challengeCopy[locale],
                    ...project.goals.map(goal => goal.text[locale]),
                    ...project.solution.map(solution => `${solution.title[locale]}\n${solution.copy[locale]}`),
                ].join('\n\n'),
            },
        ],
    }) as JsonLdObject
}

export function generatePricingPackageSchema(
    locale: LocaleKey,
    pkg: (typeof myPackages)[keyof typeof myPackages],
): JsonLdObject {
    const url = new URL(`/${locale}/pricing/${pkg.slug}`, organization.url).href
    const organizationNode = { ...generateOrgSchema(locale) }
    delete organizationNode['@context']
    const provider = { '@id': organizationNode['@id'] }

    return omitEmpty({
        '@context': 'https://schema.org',
        '@graph': [
            organizationNode,
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: pkg.title[locale],
                description: pkg.description[locale],
                inLanguage: availableLocales[locale],
                publisher: provider,
                mainEntity: { '@id': `${url}#service` },
            },
            {
                '@type': 'Service',
                '@id': `${url}#service`,
                url,
                name: pkg.title[locale],
                description: pkg.description[locale],
                provider,
                mainEntityOfPage: { '@id': `${url}#webpage` },
                offers: { '@id': `${url}#offer` },
            },
            {
                '@type': 'Offer',
                '@id': `${url}#offer`,
                url,
                name: pkg.title[locale],
                description: pkg.description[locale],
                price: pkg.price / 100,
                priceCurrency: 'USD',
                priceSpecification: {
                    '@type': 'PriceSpecification',
                    price: pkg.price / 100,
                    priceCurrency: 'USD',
                    description: pkg.paymentFrequency[locale],
                },
                seller: provider,
                itemOffered: { '@id': `${url}#service` },
            },
        ],
    }) as JsonLdObject
}

export function generateBreadcrumbSchema(
    breadcrumbs: Breadcrumb[],
    baseUrl: string,
    locale: LocaleKey
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: breadcrumb.name,
            item: `${baseUrl}/${locale}${breadcrumb.url}`,
        })),
    }
}