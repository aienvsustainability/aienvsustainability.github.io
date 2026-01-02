import React from "react"
import Image from "next/image"
import Link from "next/link"
import { researchAcademyBenefits } from "@/constants"
import { VscBookmark } from "react-icons/vsc"
import Breadcrumb from "@/components/ui/breadcrumb"
import { CustomMetadata } from "@/types"

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

const ResearchAcademySection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Initiatives", link: "/" },
        { label: "Research Academy", active: true },
    ]
    return (
        <main className="flex h-full w-full flex-col items-center justify-center">
            <Breadcrumb
                title="Research Academy"
                subtitle={`Join the Research Academy at CAIES Foundation, a hub for innovation, collaboration, and AI-driven research tackling global challenges and advancing sustainability.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="bg-background w-full">
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-8 py-20 lg:px-48">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/assets/img/research.jpg"
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
                                Research Academy
                            </h2>
                            <p className="text-secondary mt-8 max-w-4xl text-center text-base font-normal">
                                The Research Academy at CAIES Foundation is a
                                hub for fostering excellence in research and
                                innovation. This initiative provides scholars,
                                professionals, and students a platform to engage
                                in collaborative research, receive mentorship,
                                and access state-of-the-art facilities. Focused
                                on addressing global challenges, the academy
                                emphasizes interdisciplinary studies,
                                sustainability, and the integration of AI into
                                research methodologies. By cultivating talent
                                and advancing knowledge, the Research Academy is
                                shaping the next generation of leaders in
                                science, technology, and environmental
                                stewardship.
                            </p>

                            <div className="my-12 grid grid-cols-1 items-center justify-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                {researchAcademyBenefits.map((benefit) => (
                                    <div
                                        key={benefit.id}
                                        className="group flex h-80 w-full flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
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

export default ResearchAcademySection
