import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import TeamSection from "@/components/about/team/Section"
import React from "react"

interface CustomMetadata {
    title: string
    description: string
    alternates?: {
        canonical?: string
        languages?: {
            "en-US": string
        }
    }
    openGraph?: {
        title: string
        description: string
        url: string
        siteName: string
        images: {
            url: string
            width: number
            height: number
        }[]
        locale: string
        type: string
    }
    robots?: {
        index: boolean
        follow: boolean
        nocache: boolean
        googleBot: {
            index: boolean
            follow: boolean
            "max-video-preview": number
            "max-image-preview": string
            "max-snippet": number
        }
    }
}

export const metadata: CustomMetadata = {
    title: "Our Team",
    description:
        "Discover CAIES Foundation's pioneering team leveraging ML to assess arsenicosis resilience, study cellular redox, and innovate in landslide mapping.",
    alternates: {
        canonical: "/about/our-team",
        languages: {
            "en-US": "/about/our-team",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Our Team",
        description:
            "Discover CAIES Foundation's pioneering team leveraging ML to assess arsenicosis resilience, study cellular redox, and innovate in landslide mapping.",
        url: "https://caienvsus.org/about/our-team",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/page-header-bg.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

const Team = () => {
    return (
        <>
            <Navigation />
            <TeamSection />
            <Footer />
        </>
    )
}

export default Team
