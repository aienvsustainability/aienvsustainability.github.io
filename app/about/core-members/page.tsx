import React from "react"
import Image from "next/image"
import Breadcrumb from "@/components/ui/breadcrumb"
import { CustomMetadata } from "@/types"

export const metadata: CustomMetadata = {
    title: "Core Members",
    description:
        "Meet the core team of CAIES Foundation, including directors, HRM, and legal experts, dedicated to driving innovation, research, and impactful change.",
    alternates: {
        canonical: "/about/core-members",
        languages: {
            "en-US": "/about/core-members",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Core Members",
        description:
            "Meet the core team of CAIES Foundation, including directors, HRM, and legal experts, dedicated to driving innovation, research, and impactful change.",
        url: "https://caienvsus.org/about/core-members",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/about.png",
                width: 1080,
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
            noimageindex: false,
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function About() {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/" },
        { label: "Core Members", active: true },
    ]
    return (
        <main className="flex h-full w-full flex-col items-center justify-center">
            <Breadcrumb
                title="Core Members"
                subtitle={`Working together, growing together!`}
                imageUrl="/assets/img/page-header-bg.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="about-section" className="bg-background relative">
                <div
                    id="container"
                    className="circle shape border-main/10 border-b p-48 max-lg:px-8 max-lg:py-24">
                    <div
                        id="about-wrap"
                        className="-mx-4 flex flex-row items-center max-lg:flex-col">
                        <div
                            id="image"
                            className="relative min-h-px w-full px-4">
                            <div
                                id="about-image"
                                className="size-125 min-w-4/5 overflow-hidden rounded-md max-lg:mb-8 max-lg:w-full">
                                <Image
                                    src="/assets/img/about.jpg"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt="about"
                                    className="aspect-square h-125 w-125 cursor-pointer rounded-md object-cover transition-transform duration-500 ease-linear hover:scale-105"
                                />
                            </div>
                        </div>
                        <div
                            id="about-content"
                            className="relative min-h-px w-full px-4">
                            <h2 className="text-main font-condensed mb-5 text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                                About the CAIES Foundation
                            </h2>
                            <p className="text-secondary pr-5 text-lg font-normal">
                                The Center for Artificial Intelligence and
                                Environmental Sustainability (CAIES) Foundation,
                                is a niche Section (8) non-profit organization
                                that focuses on trans-disciplinary challenges,
                                which require sustainable outcomes that are
                                implementable and operational in the areas of
                                environment, economics, and society through
                                extensive research and development using cutting
                                edge data science, machine learning, artificial
                                intelligence, and geospatial tools and
                                technologies. Solutions are designed based on
                                the &apos;goals&apos; considering its
                                multidimensional aspects which are grounded in
                                micro and macro scientific and technical rigors.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    id="directors"
                    className="px-48 py-20 max-lg:border-t max-lg:border-b max-lg:px-8">
                    <div
                        id="heading"
                        className="mb-12 items-center justify-center text-center">
                        <h2 className="text-main font-condensed text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                            The Directors
                        </h2>
                        <span className="border-primary inline-block h-2 w-16 border-t-4 text-center"></span>
                    </div>
                    <div id="content">
                        <p className="text-secondary mb-4 text-left text-lg leading-8">
                            <b>Dr. Sushant Singh</b>, a founding Director of the
                            CAIES Foundation, boasts over 18 years of experience
                            in environmental science, data science, and
                            management. He holds Ph.D. degrees in Environmental
                            Science and Environmental Management, both earned
                            with full scholarships. Sushant is a prolific
                            author, having published articles in top journals
                            and initiated the world&apos;s first scholarship for
                            arsenic research. His work, including a highly
                            downloaded paper in &quot;Frontiers in Ecology and
                            the Environment,&quot; has been recognized globally.
                            Sushant is dedicated to supporting young
                            researchers, designing educational programs, and
                            contributing to environmental solutions. Besides his
                            professional endeavors, he engages in creative
                            activities like writing stories, poems, and plays
                            addressing social and environmental issues.
                        </p>
                        <p className="text-secondary mb-4 text-left text-lg leading-8">
                            <b>Mrs. Rashmi Singh</b>, a founding Director of the
                            CAIES Foundation, possesses over 15 years of
                            professional experience in development sectors,
                            focusing on human health, drug abuse, and social
                            issues. Holding a Master&apos;s degree in Social
                            Work from Patna University, she has worked with
                            prominent non-profit organizations and contributed
                            as a teacher and journalist. Rashmi has delivered
                            talks on All India Radio, Bihar, addressing topics
                            such as women&apos;s role in child development and
                            solutions to societal challenges. In addition to her
                            professional pursuits, she engages in social
                            activities to empower women and is also an author of
                            several poems.
                        </p>
                    </div>
                    <div
                        id="image"
                        className="mt-12 flex flex-row items-center max-lg:flex-col">
                        <div className="relative min-h-px w-full px-4">
                            <div className="-mx-4 flex flex-row items-center justify-center gap-4 max-lg:flex-col">
                                <div className="flex p-1">
                                    <div
                                        id="details"
                                        className="relative cursor-pointer overflow-hidden">
                                        <Image
                                            src="/assets/img/profile.jpg"
                                            alt="sushant"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            quality={100}
                                            className="aspect-square size-75 object-cover object-center"
                                        />
                                        <div className="hover">
                                            <h3 className="text-5 text-primary font-semibold">
                                                Dr. Sushant Singh
                                            </h3>
                                            <span className="text-sm text-white">
                                                Director
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex p-1">
                                    <div
                                        id="details"
                                        className="relative cursor-pointer overflow-hidden">
                                        <Image
                                            src="/assets/img/rashmi.jpg"
                                            alt="rashmi"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            quality={100}
                                            className="aspect-square size-75 object-cover object-center"
                                        />
                                        <div className="hover">
                                            <h3 className="text-5 text-primary font-semibold">
                                                Rashmi Singh
                                            </h3>
                                            <span className="text-sm text-white">
                                                Director
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="directors" className="px-48 pt-8 pb-20 max-lg:px-8">
                    <div
                        id="heading"
                        className="mb-12 items-center justify-center text-center">
                        <h2 className="text-main font-condensed text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                            HRM and Legal
                        </h2>
                        <span className="border-primary inline-block h-2 w-16 border-t-4 text-center"></span>
                    </div>
                    <div id="content">
                        <p className="text-secondary mb-4 text-left text-lg leading-8">
                            <b>Mr. Chandan Kumar Sinha</b> has recently joined
                            the CAIES Foundation as a Coordinator: HRM and
                            Legal. He has earned a law degree from Choudary
                            Charan Singh University, Meerut. Earlier in 2012, he
                            completed his specialisation in human resources
                            management at Symbiosis Distance Learning, Pune. Mr.
                            Sinha has over 20 years of working experience
                            working with various organisations, such as Singhal
                            & Bajaj Pvt. Ltd., Patna, Unibeton Ready Mix (Dubai)
                            under the Al Fara Group of Companies U.A.E., PCI
                            Geomatics India, and Octro in Noida. Mr. Sinha has
                            wide experience in public dealing, legal compliance,
                            human resource management, and maintenance. He
                            believes in learning for inner growth and the
                            expansion of the CAIES Foundation.
                        </p>
                    </div>
                    <div
                        id="image"
                        className="mt-12 flex items-center sm:flex-row">
                        <div className="relative min-h-px w-full px-4">
                            <div className="-mx-4 flex items-center justify-center gap-4 sm:flex-row">
                                <div className="flex p-1">
                                    <div
                                        id="details"
                                        className="relative cursor-pointer overflow-hidden">
                                        <Image
                                            src="/assets/img/chandan.jpg"
                                            alt="chandan"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            quality={100}
                                            className="aspect-square size-75 object-cover object-center"
                                        />
                                        <div className="hover">
                                            <h3 className="text-5 text-primary font-semibold">
                                                Chandan Kumar Sinha
                                            </h3>
                                            <span className="text-sm text-white">
                                                HRM and Legal
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
