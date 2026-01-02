import React from "react"
import Image from "next/image"
import Breadcrumb from "@/components/ui/breadcrumb"
import { CustomMetadata } from "@/types"
import { carddata } from "@/constants"
import { CardGrid } from "@/components/ui/cards"

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
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function OurVision() {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/" },
        { label: "Our Vision", active: true }
    ]

    return (
        <main className="flex h-full w-full flex-col items-center justify-center">
            <Breadcrumb
                title="Our Vision"
                subtitle={`Explore the CAIES Foundation's vision of a sustainable future, integrating innovation, AI, and research to address environmental, economic, and societal challenges.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />

            <section id="main-section" className="bg-background w-full">
                <div className="mx-auto flex flex-col items-center justify-center gap-8 px-4 py-10 sm:px-8 lg:px-48 lg:py-20">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/assets/img/our-vision.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Our Vision"
                            className="aspect-video h-full w-full rounded-2xl object-cover"
                        />
                        <div className="mt-8 flex flex-col items-center justify-center py-8">
                            <h2 className="text-main font-condensed text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                                Our Vision
                            </h2>
                            <p className="text-secondary mt-8 max-w-5xl text-center text-base font-normal">
                                The CAIES Foundation envisions a world where
                                sustainability is not just a goal but a way of
                                life, achieved through the seamless integration
                                of innovation, research, and action. Our vision
                                is to become a global leader in addressing
                                critical challenges at the intersection of the
                                environment, economics, and society. By
                                leveraging cutting-edge technologies such as
                                artificial intelligence, machine learning, and
                                geospatial tools, we aim to drive transformative
                                change that promotes environmental
                                sustainability, fosters economic growth, and
                                enhances societal well-being. Our ultimate
                                aspiration is to create a sustainable future
                                where individuals, communities, and
                                organizations are empowered to act as stewards
                                of the planet, contributing to a thriving and
                                equitable world.
                            </p>
                            <CardGrid
                                title="Key focus areas"
                                cards={carddata.focusAreas}
                                className="h-80"
                            />
                            <CardGrid
                                title="Our approach"
                                cards={carddata.approach}
                                className="h-80"
                            />
                            <div className="mt-2 flex flex-col items-center justify-center py-8">
                                <p className="text-secondary max-w-5xl text-left text-base font-normal">
                                    We aspire to be a global thought leader and
                                    changemaker, fostering a culture where
                                    individuals, organizations, and communities
                                    become active custodians of the planet. By
                                    equipping them with the knowledge, tools,
                                    and inspiration needed to make a meaningful
                                    impact, we aim to build a thriving world—one
                                    that balances prosperity with ecological
                                    harmony and social equity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
