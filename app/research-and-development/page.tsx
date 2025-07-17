import React from "react"
import Breadcrumb from "@/components/ui/breadcrumb"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CustomMetadata } from "@/types"

export const metadata: CustomMetadata = {
    title: "Research and Development",
    description:
        "CAIES R&D innovates at the intersection of AI, sustainability & Vedic science, creating ethical, scalable solutions for Bharat and a sustainable future.",
    alternates: {
        canonical: "/research-and-development",
        languages: {
            "en-US": "/research-and-development",
        },
    },
    openGraph: {
        title: "CAIES Foundation - Research and Development",
        description:
            "CAIES R&D innovates at the intersection of AI, sustainability & Vedic science, creating ethical, scalable solutions for Bharat and a sustainable future.",
        url: "https://caienvsus.org/research-and-development",
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

const page = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        {
            label: "Research & Development",
            link: "/research-and-development",
            active: true,
        },
    ]
    return (
        <main className="flex h-full w-full flex-col items-center justify-center">
            <Breadcrumb
                title="Research and Development"
                subtitle={`Innovating at the intersection of AI, sustainability, and Vedic science to build a smarter, greener future.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="bg-background w-full">
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-8 overflow-hidden px-8 py-20 lg:px-0">
                    <h2 className="text-main text-3xl font-black lg:text-5xl">
                        Research and Development
                    </h2>
                    <p className="text-secondary mt-8 w-full text-center text-base font-normal">
                        The Research and Development (R&amp;D) wing of the CAIES
                        Foundation is committed to pioneering innovations at the
                        confluence of Artificial Intelligence, Environmental
                        Sustainability, and Vedic Science. Rooted in scientific
                        rigor and ancient wisdom, our R&amp;D initiatives aim to
                        solve contemporary challenges through interdisciplinary
                        research, ethical AI applications, and nature-aligned
                        technologies. From conceptual studies to pilot projects
                        and scalable solutions, we bridge tradition with
                        technology to empower communities and safeguard the
                        planet. By collaborating with academic institutions,
                        industry leaders, and grassroots innovators, CAIES
                        R&amp;D fosters a knowledge-driven, future-ready
                        ecosystem for Bharat and the world.
                    </p>
                    {/* <div className="bg-main/20 h-px w-full" /> */}
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="w-full">
                            <AccordionTrigger className="text-main flex w-full cursor-pointer items-center text-2xl font-medium">
                                Identification And Characterization Of Exosomal MicroRNAs
                            </AccordionTrigger>
                            <AccordionContent className="flex w-full flex-col gap-4 text-lg text-balance">
                                <strong>Project Title:</strong>Identification
                                and characterization of exosomal microRNAs with
                                prognostic and therapeutic implications in
                                non-small cell lung cancer: An approach towards
                                molecular therapeutic developments for patients
                                exposed to tobacco smoke and arsenic
                                <br />
                                <strong>Funding Agency:</strong> Department of
                                Health Research (DHR), Ministry of Health and
                                Family Welfare (MoHFW)
                                <br />
                                <strong>Project Area:</strong> Kolkata, West Bengal, Bharat
                                <br />
                                <strong>Project Period:</strong> 2023-2026
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </main>
    )
}

export default page
