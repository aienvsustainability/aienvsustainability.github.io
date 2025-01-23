import OurVisionSection from "@/components/about/our-vision/Section"
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
    title: "Our Vision",
    description:
        "Explore the CAIES Foundation's vision of a sustainable future, integrating innovation, AI, and research to address environmental, economic, and societal challenges.",
    alternates: {
        canonical: "/about/our-vision",
        languages: {
            "en-US": "/about/our-vision",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Our Vision",
        description:
            "Explore the CAIES Foundation's vision of a sustainable future, integrating innovation, AI, and research to address environmental, economic, and societal challenges.",
        url: "https://caienvsus.org/about/our-vision",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/our-vision.png",
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

const OurVision = () => {
    return (
        <>
            <Navigation />
            <OurVisionSection />
            <Footer />
        </>
    )
}

export default OurVision
