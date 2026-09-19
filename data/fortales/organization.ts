import type { LocaleKey } from '@/lib/types/localeKey'

const url = 'https://fortal.es'
const email = 'info@fortal.es'
const phone = '+593984892528'

// Source data for metadata and Schema.org Organization JSON-LD.
// Select description[locale], omit app-only phone/author fields, and resolve
// image against url when building JSON-LD. Fill or omit empty placeholders.
const organization = {
    name: 'Fortales',
    legalName: 'Samuel Santiago Baquero Jacome',
    alternateName: [] as string[], // TODO: Other established business names.
    description: {
        en: 'Fortales designs and develops fast, modern, multilingual websites that help businesses strengthen their online presence and connect with their customers. Our services include custom web development, search engine optimization, integrations, and ongoing website support.',
        es: 'Fortales diseña y desarrolla sitios web rápidos, modernos y multilingües que ayudan a las empresas a fortalecer su presencia en línea y conectar con sus clientes. Nuestros servicios incluyen desarrollo web a medida, optimización para motores de búsqueda, integraciones y soporte continuo para sitios web.',
        fr: 'Fortales conçoit et développe des sites web rapides, modernes et multilingues qui aident les entreprises à renforcer leur présence en ligne et à nouer des liens avec leurs clients. Nos services comprennent le développement web sur mesure, le référencement naturel, les intégrations et un accompagnement continu pour les sites web.',
        de: 'Fortales gestaltet und entwickelt schnelle, moderne und mehrsprachige Websites, die Unternehmen dabei helfen, ihre Online-Präsenz zu stärken und ihre Kunden zu erreichen. Unsere Leistungen umfassen individuelle Webentwicklung, Suchmaschinenoptimierung, Integrationen und laufende Website-Betreuung.',
        it: 'Fortales progetta e sviluppa siti web veloci, moderni e multilingue che aiutano le aziende a rafforzare la propria presenza online e a entrare in contatto con i clienti. I nostri servizi includono sviluppo web su misura, ottimizzazione per i motori di ricerca, integrazioni e assistenza continua per i siti web.'
    } satisfies Record<LocaleKey, string>,
    url,
    email,
    phone,
    telephone: phone,
    author: 'Fortales',
    image: '/opengraph-image.jpg',
    logo: `${url}/assets/fortales-logo.svg`,
    sameAs: [] as string[], // TODO: Absolute URLs of official social/business profiles.
    address: {
        '@type': 'PostalAddress',
        streetAddress: '', // TODO: Public business street address.
        addressLocality: '', // TODO: City.
        addressRegion: '', // TODO: Province/state.
        postalCode: '', // TODO: Postal code.
        addressCountry: '' // TODO: Two-letter country code, e.g. EC.
    },
    contactPoint: [
        {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email,
            telephone: phone,
            availableLanguage: [] as string[] // TODO: Confirm support languages; site locales alone do not establish these.
        }
    ],
    areaServed: [] as string[], // TODO: Countries/regions served, or Worldwide if confirmed.
    foundingDate: '', // TODO: Founding date in YYYY-MM-DD format.
    founder: {
        '@type': 'Person',
        name: '', // TODO: Confirm founder's full name.
        url: '' // TODO: Absolute URL of founder's public profile.
    },
    taxID: '', // TODO: Public business tax identifier, if applicable.
    knowsAbout: [
        'Web design',
        'Web development',
        'Multilingual websites',
        'Search engine optimization',
        'Website integrations',
        'Website maintenance'
    ]
}

export default organization
