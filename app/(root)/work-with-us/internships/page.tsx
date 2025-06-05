import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import InternshipsSection from "@/components/internships/Section"
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
    title: "Internship Opportunities at the CAIES Foundation",
    description:
        "Unlock your potential with CAIES Foundation internships—gain experience and make real impact in AI, Sustainability, Data Science & more.",
    alternates: {
        canonical: "/work-with-us/internships",
        languages: {
            "en-US": "/work-with-us/internships",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Internship Opportunities at the CAIES Foundation",
        description:
            "Unlock your potential with CAIES Foundation internships—gain experience and make real impact in AI, Sustainability, Data Science & more.",
        url: "https://caienvsus.org/work-with-us/internships",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/available-internship.webp",
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

const Internships = () => {
    return (
        <>
            <Navigation />
            <InternshipsSection />
            <Footer />
        </>
    )
}

export default Internships
