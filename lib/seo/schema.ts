import organization from '@/data/fortales/organization'
import type { LocaleKey } from '@/lib/types/localeKey'

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
