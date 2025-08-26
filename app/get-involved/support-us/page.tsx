import React from "react"
import Breadcrumb from "@/components/ui/breadcrumb"
import { VisionCard } from "@/components/ui/cards"
import { supportUs } from "@/constants"
import { CustomMetadata } from "@/types"

export const metadata: CustomMetadata = {
    title: "Support Us",
    description:
        "Empower our mission by contributing your knowledge, skills, resources, or mentorship to advance AI, sustainability, and Vedic sciences for sustainable transformation.",
    alternates: {
        canonical: "/get-involved/support-us",
        languages: {
            "en-US": "/get-involved/support-us",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Support Us",
        description:
            "Empower our mission by contributing your knowledge, skills, resources, or mentorship to advance AI, sustainability, and Vedic sciences for sustainable transformation.",
        url: "https://caienvsus.org/get-involved/support-us",
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

const page = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Get Involved", link: "/" },
        { label: "Support Us", active: true },
    ]
    return (
        <main className="flex h-full w-full flex-col items-center justify-center">
            <Breadcrumb
                title="Support Us"
                subtitle={`Empower our mission by contributing your knowledge, skills, resources, or mentorship to advance AI, sustainability, and vedic sciences for sustainable transformation.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="bg-background w-full">
                <div className="mx-auto flex w-full flex-col gap-8 px-4 py-10 sm:px-8 lg:px-48 lg:py-20">
                    {supportUs.map((section, idx) => (
                        <React.Fragment key={idx}>
                            <div className="flex flex-col items-start">
                                <h2 className="text-main mb-4 text-3xl font-bold lg:text-4xl">
                                    {section.title}
                                </h2>
                                <p className="text-secondary text-base font-medium lg:text-lg">
                                    {section.description}
                                </p>
                            </div>
                            <div
                                className={`grid grid-cols-1 gap-5 pb-14 sm:grid-cols-2 lg:grid-cols-3 ${
                                    idx !== supportUs.length - 1
                                        ? "border-main/20 border-b border-dashed"
                                        : ""
                                }`}>
                                {section.cards.map((card, i) => (
                                    <VisionCard key={i} {...card} />
                                ))}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default page
