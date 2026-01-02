import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
    aiyoddhabenefits,
} from "@/constants"
import { VscBookmark } from "react-icons/vsc"
import Breadcrumb from "@/components/ui/breadcrumb"
import { CustomMetadata } from "@/types"

export const metadata: CustomMetadata = {
    title: "AI Yoddha",
    description:
        "Creating responsible AI Warriors for India's future",
    alternates: {
        canonical: "/initiatives/ai-yoddha",
        languages: {
            "en-US": "/initiatives/ai-yoddha",
        },
    },
    openGraph: {
        title: "CAIES Fondation - AI Yoddha",
        description:
            "Creating responsible AI Warriors for India's future",
        url: "https://caienvsus.org/initiatives/ai-yoddha",
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

const AIYoddhaSection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Initiatives", link: "/" },
        { label: "AI Yoddha", active: true },
    ]
    return (
        <main className="flex h-full w-full flex-col items-center justify-center">
            <Breadcrumb
                title="AI Yoddha"
                subtitle={`Creating responsible AI Warriors for India's future`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="bg-background w-full">
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-8 py-20 lg:px-48">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/assets/img/ai-yoddha.webp"
                            width={0}
                            height={0}
                            sizes="100vw"
                            quality={100}
                            priority
                            alt="thumbnail"
                            className="aspect-video h-full w-full rounded-2xl object-cover object-center"
                        />
                        <div className="mt-8 flex flex-col items-center justify-center py-8">
                            <h2 className="text-main font-condensed text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                                AI Yoddha
                            </h2>
                            <p className="text-secondary mt-8 max-w-4xl text-center text-base font-normal">
                                At CAIES Foundation, our Al Yoddha Initiative is
                                dedicated to democratizing Artificial
                                Intelligence education by nurturing ethical,
                                future-ready, and socially responsible Al
                                warriors from school to community levels. This
                                initiative empowers students, teachers, and
                                schools-particularly in under- resourced
                                regions-with the tools, training, and mindset
                                needed to understand and apply Al meaningfully.
                                By integrating Al, Robotics, GenAl, and
                                AgenticAl into a context- aware and NEP
                                2020-aligned curriculum, Al Yoddha fosters
                                curiosity, problem-solving, and innovation from
                                an early age. Through interactive workshops,
                                curriculum support, diagnostics, and
                                project-based learning, we are shaping a
                                generation of Al-literate changemakers who will
                                use technology to serve their families,
                                communities, and the nation.
                            </p>

                            <div className="my-12 grid grid-cols-1 items-center justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {aiyoddhabenefits.map((benefit) => (
                                    <div
                                        key={benefit.id}
                                        className="group flex h-60 w-full flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="text-primary border-primary bg-background flex size-14 items-center justify-center rounded-full border border-dashed text-xl transition-all duration-500 ease-in-out group-hover:rotate-180">
                                                <VscBookmark />
                                            </div>
                                            <span className="text-secondary/60 text-sm font-medium">
                                                {String(benefit.id).padStart(
                                                    3,
                                                    "0"
                                                )}{" "}
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="text-main mb-2 text-base font-semibold">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-secondary text-sm font-medium">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="mailto:sushant.singh@cainevsus.org"
                                className="bg-primary mt-8 flex max-w-sm items-center justify-center rounded-md p-4 text-base font-medium text-white">
                                Please contact for more information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AIYoddhaSection
