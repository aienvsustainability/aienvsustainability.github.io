import React from "react"
import Image from "next/image"
import Breadcrumb from "@/components/ui/breadcrumb"
import { CustomMetadata } from "@/types"
import { carddata } from "@/constants"
import { CardGrid } from "@/components/ui/cards"

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
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function OurGoals() {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/" },
        { label: "Our Goals", active: true }
    ]

    return (
        <main className="flex flex-col items-center justify-center w-full h-full">
            <Breadcrumb
                title="Our Goals"
                subtitle={`Learn how CAIES Foundation drives impactful change through research, innovation, and education with sustainable, scalable solutions.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="w-full bg-background">
                <div className="mx-auto flex flex-col items-center justify-center gap-8 px-4 py-10 sm:px-8 lg:px-48 lg:py-20">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/assets/img/our-goals.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Our Vision"
                            className="aspect-video h-full w-full object-cover rounded-2xl"
                        />
                        <div className="mt-8 flex flex-col items-center justify-center py-8">
                            <h2 className="text-2xl font-black text-main sm:text-3xl lg:text-5xl">Our Vision</h2>
                            <p className="mt-8 max-w-5xl text-center text-base text-secondary font-normal">
                                At the CAIES Foundation, our goals reflect our commitment to driving impactful change through research, innovation, and education. These goals guide our mission to create solutions that are actionable, scalable, and sustainable
                            </p>
                            <CardGrid cards={carddata.goals} className="h-137" />
                            <div className="mt-2 flex flex-col items-center justify-center py-8">
                                <p className="max-w-5xl text-left text-base text-secondary font-normal">
                                    The CAIES Foundation reaffirms its commitment to driving positive change and fostering a sustainable future for future generations through these goals. Every step we take is guided by a deep sense of responsibility to science, society, and humanity, ensuring our initiatives align with our vision of a better, more sustainable world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
