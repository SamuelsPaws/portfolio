import { myPackages } from '@/data/fortales/packages'
import { portfolio } from '@/data/fortales/portfolio'
import type { Breadcrumb, StringPerLocale } from '@/lib/types/globalTypes'
import type { LocaleKey } from '@/lib/types/localeKey'

const labels = {
    "home": {
        "en": "Home",
        "es": "Inicio",
        "fr": "Accueil",
        "de": "Startseite",
        "it": "Home"
    },
    "portfolio": {
        "en": "Portfolio",
        "es": "Portafolio",
        "fr": "Réalisations",
        "de": "Referenzen",
        "it": "Portfolio"
    },
    "about": {
        "en": "About",
        "es": "Quiénes Somos",
        "fr": "À Propos",
        "de": "Über Uns",
        "it": "Chi Siamo"
    },
    "contact": {
        "en": "Contact",
        "es": "Contacto",
        "fr": "Contact",
        "de": "Kontakt",
        "it": "Contatto"
    },
    "pricing": {
        "en": "Prices",
        "es": "Precios",
        "fr": "Tarifs",
        "de": "Preise",
        "it": "Prezzi"
    }
} satisfies Record<string, StringPerLocale>

export function getBreadcrumbs(locale: LocaleKey): Record<string, Breadcrumb[]> {
    const home: Breadcrumb = { name: labels.home[locale], url: '' }
    const routes: Record<string, Breadcrumb[]> = { home: [home] }

    for (const route of ['portfolio', 'about', 'contact', 'pricing'] as const) {
        routes[route] = [home, { name: labels[route][locale], url: `/${route}` }]
    }

    for (const pkg of Object.values(myPackages)) {
        const route = `pricing/${pkg.slug}`
        routes[route] = [
            ...routes.pricing,
            { name: pkg.title[locale], url: `/${route}` },
        ]
    }

    for (const project of portfolio) {
        const route = `portfolio/${project.slug}`
        routes[route] = [
            ...routes.portfolio,
            { name: project.title, url: `/${route}` },
        ]
    }
    
    return routes
}

const breadcrumbs = getBreadcrumbs('en')

export default breadcrumbs
