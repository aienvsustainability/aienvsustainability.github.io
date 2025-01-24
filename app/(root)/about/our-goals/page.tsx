import OurGoalsSection from "@/components/about/our-goals/Section"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
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
    title: "Our Goals",
    description:
        "Learn how CAIES Foundation drives impactful change through research, innovation, and education with sustainable, scalable solutions.",
    alternates: {
        canonical: "/about/our-goals",
        languages: {
            "en-US": "/about/our-goals",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Our Goals",
        description:
            "Learn how CAIES Foundation drives impactful change through research, innovation, and education with sustainable, scalable solutions.",
        url: "https://caienvsus.org/about/our-goals",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/our-goals.jpg",
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

const OurGoals = () => {
    return (
        <>
            <Navigation />
            <OurGoalsSection />
            <Footer />
        </>
    )
}

export default OurGoals
