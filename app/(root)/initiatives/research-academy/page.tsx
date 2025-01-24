import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import ResearchAcademySection from "@/components/research-academy/Section"
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
    title: "Research Academy",
    description:
        "Join the Research Academy at CAIES Foundation, a hub for innovation, collaboration, and AI-driven research tackling global challenges and advancing sustainability.",
    alternates: {
        canonical: "/initiatives/research-academy",
        languages: {
            "en-US": "/initiatives/research-academy",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Research Academy",
        description:
            "Join the Research Academy at CAIES Foundation, a hub for innovation, collaboration, and AI-driven research tackling global challenges and advancing sustainability.",
        url: "https://caienvsus.org/initiatives/research-academy",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/research.jpg",
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

const ResearchAcademy = () => {
    return (
        <>
            <Navigation />
            <ResearchAcademySection />
            <Footer />
        </>
    )
}

export default ResearchAcademy
