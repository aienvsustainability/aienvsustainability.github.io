import React from "react"
import Image from "next/image"
import Link from "next/link"
import { VscBookmark } from "react-icons/vsc"
import { AvailableInternshipTrack, scholars } from "@/constants"
import Breadcrumb from "@/components/ui/breadcrumb"
import Marquee from "@/components/ui/marquee"
import { CustomMetadata } from "@/types"
import TestimonialCard from "@/components/ui/testimonials"

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
        <main className="overlow-hidden flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
            <Breadcrumb
                title="Shape the Future with Us"
                subtitle={`Unlock your potential, gain real-world experience, and contribute to meaningful research in Artificial Intelligence, Sustainability, Data Science, and more.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section
                id="main-section"
                className="bg-background w-full max-lg:px-4">
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-2 py-6 sm:px-4 sm:py-8 md:px-8 md:py-10 lg:px-48 lg:py-20">
                    <div className="flex w-full flex-col">
                        <div className="w-full">
                            <Image
                                src="/assets/img/available-internship.webp"
                                width={1920}
                                height={1080}
                                sizes="100vw"
                                alt="thumbnail"
                                className="h-auto w-full rounded-2xl object-cover"
                                priority
                            />
                        </div>
                        <div className="mt-6 flex flex-col items-center justify-center py-4 sm:py-8">
                            <h2 className="text-main text-center text-2xl font-black sm:text-3xl md:text-4xl lg:text-5xl"></h2>
                            <p className="text-secondary mt-4 max-w-xl text-center text-base font-normal sm:mt-8 lg:max-w-4xl">
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
                                            <div className="border-primary bg-background text-primary flex size-14 items-center justify-center rounded-full border border-dashed text-xl transition-all duration-500 ease-in-out group-hover:rotate-180">
                                                <VscBookmark />
                                            </div>
                                            <span className="text-secondary/60 text-sm font-medium">
                                                {String(intership.id).padStart(
                                                    3,
                                                    "0"
                                                )}
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="text-main mb-2 text-base font-semibold">
                                                {intership.title}
                                            </h3>
                                            <p className="text-secondary text-sm font-medium">
                                                {intership.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="my-8 flex h-fit w-full flex-col items-start justify-center">
                                <h3 className="text-main font-condensed mb-8 text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                                    Meet Our Alumni
                                </h3>

                                <div className="relative w-full">
                                    <div className="from-background via-background/80 pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r to-transparent" />
                                    <div className="from-background via-background/80 pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l to-transparent" />

                                    <Marquee
                                        pauseOnHover
                                        className="flex items-center justify-center gap-4 overflow-hidden [--duration:20s] md:gap-5">
                                        {scholars
                                            .filter((scholar) => scholar.status)
                                            .map((scholar, index) => (
                                                <div
                                                    key={index}
                                                    className="flex overflow-hidden p-1">
                                                    <Link
                                                        href={
                                                            scholar.linkedinUrl
                                                        }
                                                        target="_blank">
                                                        <div
                                                            id="details"
                                                            className="relative cursor-pointer overflow-hidden rounded-full">
                                                            <Image
                                                                src={
                                                                    scholar.imageUrl
                                                                }
                                                                width={0}
                                                                height={0}
                                                                sizes="100vw"
                                                                className="aspect-square size-60 object-cover"
                                                                alt={
                                                                    scholar.name
                                                                }
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                    </Marquee>
                                </div>
                            </div>
                            <div className="mt-8 flex h-fit w-full flex-col items-start justify-center">
                                <h3 className="text-main font-condensed mb-8 text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                                    Application and Selection Process
                                </h3>
                                <Image
                                    src="/assets/img/steps.webp"
                                    alt="steps"
                                    height={0}
                                    width={0}
                                    className="h-full w-full object-contain"
                                    sizes="100vw"
                                />
                            </div>
                            <div className="mt-12 w-full overflow-x-auto">
                                <h3 className="text-main font-condensed mb-8 text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                                    Important Notes
                                </h3>
                                <div className="mt-6 flex flex-col gap-2">
                                    <ul className="text-secondary gap-2 text-base">
                                        <li className="mb-2">
                                            1. We do not charge students for
                                            internships, except for a nominal
                                            registration fee, which is only due
                                            after they are selected and have
                                            accepted the offer letter.
                                        </li>
                                        <li className="mb-2">
                                            2. Registration categories and fees:
                                            <table className="border-main/10 text-secondary mt-4 w-full border bg-white text-left text-sm">
                                                <thead className="bg-secondary/40 text-main text-center font-semibold">
                                                    <tr>
                                                        <th
                                                            className="border-main/10 border px-4 py-3"
                                                            rowSpan={2}>
                                                            Academic Category
                                                        </th>
                                                        <th
                                                            className="border-main/10 border px-4 py-3"
                                                            rowSpan={2}>
                                                            Class
                                                        </th>
                                                        <th
                                                            className="border-main/10 border px-4 py-3"
                                                            colSpan={2}>
                                                            Registration Fee
                                                        </th>
                                                        <th
                                                            className="border-main/10 border px-4 py-3"
                                                            rowSpan={2}>
                                                            Fee Waiver
                                                        </th>
                                                    </tr>
                                                    <tr>
                                                        <th className="border-main/10 border px-4 py-3">
                                                            Private Institution
                                                        </th>
                                                        <th className="border-main/10 border px-4 py-3">
                                                            Government
                                                            Institution
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                    <tr>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            School
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            6–8
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 501/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 101/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Only for students
                                                            from Government
                                                            Schools
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            School
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            9 & 10 (Higher
                                                            Secondary)
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 501/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 101/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Only for students
                                                            from Government
                                                            Schools
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            College
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            11 & 12 (Senior
                                                            Secondary)
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 501/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 101/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            No waiver
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            College
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            UG
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 1001/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 201/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            No waiver
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            College
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            PG
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 1501/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
                                                            Rs. 501/-
                                                        </td>
                                                        <td className="border-main/10 border px-4 py-2">
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
                            <div className="mt-8 flex h-fit w-full flex-col items-start justify-center">
                                <h3 className="text-main font-condensed text-3xl font-medium tracking-wide uppercase lg:text-7xl mb-8">
                                    Don&apos;t take our word for it!{" "}
                                    <br className="flex md:hidden" />
                                    Hear it from our Alumni&apos;s
                                </h3>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    {scholars
                                        .filter(
                                            (s) =>
                                                Array.isArray(s.testimonial) &&
                                                s.testimonial.length > 0 &&
                                                ("text" in s.testimonial[0] ||
                                                    "video" in s.testimonial[0])
                                        )
                                        .map((s, idx) => (
                                            <TestimonialCard
                                                key={idx}
                                                name={s.name}
                                                role={s.role}
                                                imageUrl={s.imageUrl}
                                                testimonial={s.testimonial}
                                            />
                                        ))}
                                </div>
                            </div>
                            <div className="mt-8 flex w-full flex-col">
                                <h3 className="text-main font-condensed text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                                    What You Gain
                                </h3>
                                <div className="mt-6 flex flex-col gap-2">
                                    <ul className="text-secondary gap-2 text-base">
                                        <li className="mb-2">
                                            1. Real-world experience working on
                                            cutting-edge projects
                                        </li>
                                        <li className="mb-2">
                                            2. Mentorship from top researchers
                                            and practitioners
                                        </li>
                                        <li className="mb-2">
                                            3. Recognition on the CAIES website
                                            and social media
                                        </li>
                                        <li className="mb-2">
                                            4. Access to future opportunities,
                                            workshops, and alums benefits
                                        </li>
                                        <li className="mb-2">
                                            5. A stepping stone toward careers
                                            in AI, sustainability, research, and
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
