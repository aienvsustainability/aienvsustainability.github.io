import React from "react"
import Image from "next/image"
import Link from "next/link"
import { VscBookmark } from "react-icons/vsc"
import { aiForScientistBenefits } from "@/constants"
import Breadcrumb from "@/components/ui/breadcrumb"
import { CustomMetadata } from "@/types"

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

export default function AiForScientist() {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Initiatives", link: "/" },
        { label: "AI for scientists", active: true },
    ]
    return (
        <main className="flex flex-col items-center justify-center w-full h-full">
            <Breadcrumb
                title="AI for Scientists"
                subtitle={`Discover CAIES Foundation's AI for Scientists initiative, bridging science and AI innovation to accelerate research, solve complex problems, and drive discoveries.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="w-full bg-background">
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-4 py-10 sm:px-8 lg:px-48 lg:py-20">
                    <div className="flex flex-col">
                        <Image
                            src="/assets/img/aiscience.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                            quality={100}
                            alt="thumbnail"
                            className="aspect-video w-full h-full object-cover rounded-2xl"
                        />
                        <div className="mt-8 flex flex-col items-center justify-center py-8">
                            <h2 className="text-3xl font-black text-main sm:text-4xl lg:text-5xl">
                                AI for Scientists
                            </h2>
                            <p className="mt-4 max-w-xl text-center text-sm font-normal text-secondary sm:mt-8 sm:text-base lg:max-w-4xl">
                                At CAIES Foundation, our AI for Scientists
                                initiative empowers researchers across
                                disciplines with cutting-edge Artificial
                                Intelligence tools and techniques. This program
                                bridges the gap between scientific inquiry and
                                AI-powered innovation, enabling scientists to
                                accelerate their research, uncover new insights,
                                and solve complex problems. Through training,
                                workshops, tutorials, and resources, we aim to
                                make AI accessible and actionable for the
                                scientific community, fostering groundbreaking
                                discoveries that benefit humanity and the
                                environment.
                            </p>
                            <div className="my-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:my-12 lg:grid-cols-4">
                                {aiForScientistBenefits.map((benefit) => (
                                    <div
                                        key={benefit.id}
                                        className="w-full group flex h-80 flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-14 items-center justify-center rounded-full border border-dashed border-primary bg-background text-xl text-primary transition-all duration-500 ease-in-out group-hover:rotate-180">
                                                <VscBookmark />
                                            </div>
                                            <span className="text-sm font-medium text-secondary/60">
                                                {String(benefit.id).padStart(
                                                    3,
                                                    "0"
                                                )}
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-main">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm font-medium text-secondary">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="mailto:sushant.singh@cainevsus.org"
                                className="mt-8 flex max-w-sm items-center justify-center rounded-md bg-primary p-4 text-base font-medium text-white">
                                Please contact for more information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
