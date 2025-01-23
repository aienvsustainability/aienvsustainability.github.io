import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import AiForScientistSection from "@/components/ai-for-scientist/Section"
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
    title: "AI For Scientists",
    description:
        "Discover CAIES Foundation's AI for Scientists initiative, bridging science and AI innovation to accelerate research, solve complex problems, and drive discoveries.",
    alternates: {
        canonical: "/initiatives/ai-for-scientist",
        languages: {
            "en-US": "/initiatives/ai-for-scientist",
        },
    },
    openGraph: {
        title: "CAIES Fondation - AI For Scientists",
        description:
            "Discover CAIES Foundation's AI for Scientists initiative, bridging science and AI innovation to accelerate research, solve complex problems, and drive discoveries.",
        url: "https://caienvsus.org/initiatives/ai-for-scientist",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/aiscience.jpg",
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

const AiForScientist = () => {
    return (
        <>
            <Navigation />
            <AiForScientistSection />
            <Footer />
        </>
    )
}

export default AiForScientist
