import organization from '@/data/fortales/organization'
import { MetadataRoute } from 'next'

const BASE_URL = organization.url

export default function sitemap(): MetadataRoute.Sitemap {
    const frequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'

    const routes = [
        '',
        '/pricing',
        '/about'
    ].map(route => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: frequency,
        priority: route === "" ? 1 : 0.8,
    }))

    return routes
}