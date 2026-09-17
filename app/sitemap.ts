import organization from '@/data/fortales/organization'
import { myPackages } from '@/data/fortales/packages'
import { portfolio } from '@/data/fortales/portfolio'
import { availableLocales } from '@/data/locales'
import { navLinksFort, navLinksSamPort } from '@/data/nav'
import projects from '@/data/projects.json'
import getLangAlternates from '@/lib/utils/getLangAlternates'
import type { MetadataRoute } from 'next'

const BASE_URL = organization.url
const EXCLUDED_ROUTES = new Set(['/discovery-form'])

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = new Set([
        ...navLinksFort.filter(link => !link.external).map(link => link.href),
        ...Object.values(myPackages).map(pkg => `/pricing/${pkg.slug}`),
        ...portfolio.map(project => `/portfolio/${project.slug}`),
    ])

    return Array.from(routes).filter(route => !EXCLUDED_ROUTES.has(route)).flatMap(route => {
        const path = route === '/' ? '' : route
        const languages = getLangAlternates(path, BASE_URL)

        return Object.keys(availableLocales).map(locale => ({
            url: `${BASE_URL}/${locale}${path}`,
            changeFrequency: 'monthly' as const,
            priority: path === '' ? 1 : 0.8,
            alternates: { languages },
        }))
    })
}
