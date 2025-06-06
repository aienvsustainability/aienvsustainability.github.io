import React from "react"
import Image from "next/image"
import Link from "next/link"
import { VscBookmark } from "react-icons/vsc"
import { AvailableInternshipTrack, scholars } from "@/constants"
import Breadcrumb from "@/components/ui/breadcrumb"
import Marquee from "@/components/ui/marquee"
import { CustomMetadata } from "@/types"

export const metadata: CustomMetadata = {
    title: "Internship Opportunities at the CAIES Foundation",
    description:
        "Unlock your potential with CAIES Foundation internships—gain experience and make real impact in AI, Sustainability, Data Science & more.",
    alternates: {
        canonical: "/work-with-us/internships",
        languages: {
            "en-US": "/work-with-us/internships",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Internship Opportunities at the CAIES Foundation",
        description:
            "Unlock your potential with CAIES Foundation internships—gain experience and make real impact in AI, Sustainability, Data Science & more.",
        url: "https://caienvsus.org/work-with-us/internships",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/available-internship.webp",
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

export default function Internships() {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Work With Us", link: "/" },
        { label: "Internships", active: true },
    ]
    return (
        <main className="flex flex-col overlow-hidden overflow-x-hidden items-center justify-center w-full h-full">
            <Breadcrumb
                title="Shape the Future with Us"
                subtitle={`Unlock your potential, gain real-world experience, and contribute to meaningful research in Artificial Intelligence, Sustainability, Data Science, and more.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="w-full bg-background">
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-2 py-6 sm:px-4 sm:py-8 md:px-8 md:py-10 lg:px-48 lg:py-20">
                    <div className="flex flex-col w-full">
                        <div className="w-full">
                            <Image
                                src="/assets/img/available-internship.webp"
                                width={1920}
                                height={1080}
                                sizes="100vw"
                                alt="thumbnail"
                                className="rounded-2xl w-full h-auto object-cover"
                                priority
                            />
                        </div>
                        <div className="mt-6 flex flex-col items-center justify-center py-4 sm:py-8">
                            <h2 className="text-2xl font-black text-center text-main sm:text-3xl md:text-4xl lg:text-5xl"></h2>
                            <p className="mt-4 max-w-xl text-center text-base font-normal text-secondary sm:mt-8 lg:max-w-4xl">
                                The CAIES Foundation generously promotes and
                                supports research in fundamental and applied
                                sciences and engineering by offering internships
                                to students from schools, colleges, and
                                universities. We seek curious, committed, and
                                socially driven individuals who are passionate
                                about science, technology, and sustainability
                                and aspire to make meaningful contributions to
                                society.
                                <br />
                                <br />
                                <strong>
                                    &quot;If you know what you want, we know how
                                    to make it happen.&quot;
                                </strong>
                                <br />
                                <br />
                                Our internship program is designed not just as a
                                learning platform but as a launchpad for career
                                excellence, offering guidance, exposure, and
                                real-world project experience under expert
                                mentorship. We only accept students who
                                demonstrate a strong commitment to learning and
                                a genuine desire to maximize the benefits of the
                                experience.
                            </p>
                            <div className="my-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:my-12 lg:grid-cols-3">
                                {AvailableInternshipTrack.map((intership) => (
                                    <div
                                        key={intership.id}
                                        className="group flex h-80 w-full flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-14 items-center justify-center rounded-full border border-dashed border-primary bg-background text-xl text-primary transition-all duration-500 ease-in-out group-hover:rotate-180">
                                                <VscBookmark />
                                            </div>
                                            <span className="text-sm font-medium text-secondary/60">
                                                {String(intership.id).padStart(
                                                    3,
                                                    "0"
                                                )}
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-main">
                                                {intership.title}
                                            </h3>
                                            <p className="text-sm font-medium text-secondary">
                                                {intership.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="my-8 w-full h-fit flex items-start justify-center flex-col">
                                <h3 className="text-2xl mb-8 text-main font-bold">
                                    Meet Our Alumni
                                </h3>

                                <div className="relative w-full">
                                    {/* Gradient overlays */}
                                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background via-background/80 to-transparent" />
                                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background via-background/80 to-transparent" />

                                    <Marquee
                                        pauseOnHover
                                        className="gap-4 [--duration:20s] md:gap-5 items-center justify-center flex overflow-hidden">
                                        {scholars
                                            .filter((scholar) => scholar.status)
                                            .map((scholar, index) => (
                                                <div key={index} className="flex p-1 overflow-hidden">
                                                    <Link href={scholar.linkedinUrl} target="_blank">
                                                        <div
                                                            id="details"
                                                            className="relative cursor-pointer rounded-full overflow-hidden">
                                                            <Image
                                                                src={scholar.imageUrl}
                                                                width={0}
                                                                height={0}
                                                                sizes="100vw"
                                                                className="aspect-square size-60 object-cover"
                                                                alt={scholar.name}
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                    </Marquee>
                                </div>
                            </div>
                            <div className="mt-8 w-full h-fit flex items-start justify-center flex-col">
                                <h3 className="text-2xl text-main mb-8 font-bold">
                                    Application and Selection Process
                                </h3>
                                <Image src="/assets/img/steps.webp" alt="steps" height={0} width={0} className="h-full w-full object-contain" sizes="100vw" />
                            </div>
                            <div className="mt-12 w-full overflow-x-auto">
                                <h3 className="text-main text-2xl font-bold">
                                    Important Notes
                                </h3>
                                <div className="mt-6 flex flex-col gap-2">
                                    <ul className="gap-2 text-secondary text-base">
                                        <li className="mb-2">
                                            1. We do not charge students for
                                            internships, except for a nominal
                                            registration fee, which is only due
                                            after they are selected and have
                                            accepted the offer letter.
                                        </li>
                                        <li className="mb-2">
                                            2. Registration categories and fees:
                                            <table className="mt-4 w-full border border-main/10 bg-white text-left text-sm text-secondary">
                                                <thead className="bg-secondary/40 text-center font-semibold text-main">
                                                    <tr>
                                                        <th
                                                            className="border border-main/10 px-4 py-3"
                                                            rowSpan={2}>
                                                            Academic Category
                                                        </th>
                                                        <th
                                                            className="border border-main/10 px-4 py-3"
                                                            rowSpan={2}>
                                                            Class
                                                        </th>
                                                        <th
                                                            className="border border-main/10 px-4 py-3"
                                                            colSpan={2}>
                                                            Registration Fee
                                                        </th>
                                                        <th
                                                            className="border border-main/10 px-4 py-3"
                                                            rowSpan={2}>
                                                            Fee Waiver
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th className="border border-main/10 px-4 py-3">
                                                            Private Institution
                                                        </th>
                                                        <th className="border border-main/10 px-4 py-3">
                                                            Government
                                                            Institution
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                    <tr>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            School
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            6–8
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 501/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 101/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Only for students
                                                            from Government
                                                            Schools
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            School
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            8–10
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 501/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 101/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Only for students
                                                            from Government
                                                            Schools
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            College
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            12
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 501/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 101/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            No waiver
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            College
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            UG
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 1001/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 201/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            No waiver
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            College
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            PG
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 1501/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            Rs. 501/-
                                                        </td>
                                                        <td className="border border-main/10 px-4 py-2">
                                                            No waiver
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </li>
                                        <li className="mb-2">
                                            3. All internship opportunities are
                                            currently unpaid.
                                        </li>
                                        <li className="mb-2">
                                            4. If a project is externally
                                            funded, interns may receive stipends
                                            based on the project&apos;s budget
                                            and their qualifications.
                                        </li>
                                        <li className="mb-2">
                                            5. Students are encouraged to
                                            propose their project ideas that
                                            align with the CAIES Foundation’s
                                            mission. Alternatively, they will be
                                            assigned to ongoing or new projects
                                            within the foundation.
                                        </li>
                                        <li className="mb-2">
                                            6. Internships can be conducted
                                            remotely, in a hybrid format, or
                                            person, depending on project
                                            requirements.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8 flex w-full flex-col">
                                <h3 className="text-2xl text-main font-bold">
                                    What You Gain
                                </h3>
                                <div className="mt-6 flex flex-col gap-2">
                                    <ul className="gap-2 text-secondary text-base">
                                        <li className="mb-2">
                                            1. Real-world experience working on
                                            cutting-edge projects
                                        </li>
                                        <li className="mb-2">
                                            2. Mentorship from top researchers and
                                            practitioners
                                        </li>
                                        <li className="mb-2">
                                            3. Recognition on the CAIES website and
                                            social media
                                        </li>
                                        <li className="mb-2">
                                            4. Access to future opportunities,
                                            workshops, and alums benefits
                                        </li>
                                        <li className="mb-2">
                                            5. A stepping stone toward careers in
                                            AI, sustainability, research, and
                                            innovation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
