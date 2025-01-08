import React from "react"
import Breadcrumb from "../Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { researchAcademyBenefits } from "@/constants"
import { VscBookmark } from "react-icons/vsc"

const ResearchAcademySection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Initiatives", link: "/" },
        { label: "Research Academy", active: true },
    ]
    return (
        <>
            <Breadcrumb
                title="Research Academy"
                subtitle={`Empowering minds to drive innovation, solve global challenges,\nand lead the future of research and technology.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="w-full bg-neutral-50">
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-48 py-20 max-lg:px-8">
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/assets/img/research.jpg"
                            width={1920}
                            height={1080}
                            sizes="100vw"
                            alt="thumbnail"
                            className="rounded-2xl"
                        />
                        <div className="flex flex-col justify-center items-center py-8">
                            <h2 className="text-5xl font-black text-neutral-800">
                                Research Academy
                            </h2>
                            <p className="mt-8 max-w-4xl text-base text-center font-normal text-neutral-600">
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

                            <div className="my-12 grid grid-cols-4 items-center justify-center gap-5">
                                {researchAcademyBenefits.map((benefit) => (
                                    <div
                                        key={benefit.id}
                                        className="w-74 group flex h-80 flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-14 items-center justify-center rounded-full border border-dashed text-main border-main bg-slate-50 text-xl transition-all duration-500 ease-in-out group-hover:rotate-180">
                                                <VscBookmark />
                                            </div>
                                            <span className="text-sm font-medium text-neutral-400">
                                                {String(benefit.id).padStart(
                                                    3,
                                                    "0"
                                                )}{" "}
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="mailto:sushant.singh@cainevsus.org"
                                className="mt-8 flex max-w-sm items-center justify-center rounded-md bg-main p-4 text-base font-medium text-white">
                                Please contact for more information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResearchAcademySection
