import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
            lastModified: new Date().toISOString(),
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
            lastModified: new Date().toISOString(),
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/team`,
            lastModified: new Date().toISOString(),
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/awards`,
            lastModified: new Date().toISOString(),
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/publications`,
            lastModified: new Date().toISOString(),
            priority: 0.8
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
            lastModified: new Date().toISOString(),
            priority: 0.5
        },
    ]
}