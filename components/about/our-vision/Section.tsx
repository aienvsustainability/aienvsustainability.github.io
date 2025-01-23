import React from "react"
import Breadcrumb from "../../Breadcrumb"
import Image from "next/image"
// import Link from "next/link"
import { GiReceiveMoney, GiStumpRegrowth } from "react-icons/gi"
import {
    FaPeopleCarryBox,
    FaPeopleGroup,
    FaPeopleRobbery,
} from "react-icons/fa6"
import { GrTechnology } from "react-icons/gr"

const OurVisionSection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/" },
        { label: "Our Vision", active: true },
    ]
    return (
        <>
            <Breadcrumb
                title="Our Vision"
                subtitle={`Explore the CAIES Foundation's vision of a sustainable future, integrating innovation, AI, and research to address environmental, economic, and societal challenges.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="w-full bg-neutral-50">
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-4 py-10 sm:px-8 lg:px-48 lg:py-20">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/assets/img/our-vision.jpg"
                            width={1920}
                            height={1080}
                            sizes="100vw"
                            alt="thumbnail"
                            className="rounded-2xl"
                        />
                        <div className="mt-8 flex flex-col items-center justify-center py-8">
                            <h2 className="text-2xl font-black text-neutral-800 sm:text-3xl lg:text-5xl">
                                Our Vision
                            </h2>
                            <p className="mt-8 max-w-5xl text-center text-sm font-normal text-neutral-600 sm:text-base">
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
                            <div className="mt-12 w-full max-w-5xl">
                                <h2 className="text-left text-lg font-bold text-neutral-800 sm:text-xl lg:text-3xl">
                                    Key focus areas
                                </h2>
                                <div className="my-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="flex h-80 flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <GiStumpRegrowth />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                001
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Environmental Sustainability
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Promote the conservation of
                                                natural resources. Implement
                                                strategies to reduce ecological
                                                footprints. Inspire and engage
                                                global communities to act in
                                                harmony with nature.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-80 flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <GiReceiveMoney />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                002
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Economic Growth
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Foster innovations that drive
                                                productivity and efficiency.
                                                Create equitable opportunities
                                                for all stakeholders. Support
                                                sustainable development models
                                                that balance profit with
                                                environmental care.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-80 flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <FaPeopleRobbery />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                003
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Societal Well-Being
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Prioritize inclusivity and
                                                social equity. Empower
                                                individuals and communities with
                                                knowledge and tools for
                                                impactful action. Advocate for
                                                long-term social progress
                                                alongside environmental and
                                                economic goals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1 mt-6 w-full max-w-5xl">
                                <h2 className="text-left text-lg font-bold text-neutral-800 sm:text-xl lg:text-3xl">
                                    Our approach
                                </h2>
                                <div className="my-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="flex h-80 flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <GrTechnology />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                001
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Technology-Driven Solutions
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Leverage AI, machine learning,
                                                and geospatial tools to tackle
                                                complex sustainability
                                                challenges.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-80 flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <FaPeopleCarryBox />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                002
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Interdisciplinary Collaboration
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Integrate expertise across
                                                research, innovation, and action
                                                to create comprehensive
                                                solutions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-80 flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <FaPeopleGroup />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                003
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Global Leadership
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Position ourselves as a thought
                                                leader in sustainability,
                                                inspiring others to join our
                                                mission.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 flex flex-col items-center justify-center py-8">
                                <p className="max-w-5xl text-left text-sm font-normal text-neutral-600 sm:text-base">
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
        </>
    )
}

export default OurVisionSection
