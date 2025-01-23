import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(),
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about/our-vision`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about/our-goals`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about/core-members`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about/our-team`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/publications`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/initiatives/research-academy`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/initiatives/ai-for-scientist`,
            lastModified: new Date().toISOString(),
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
            priority: 0.5,
        },
    ]
}
