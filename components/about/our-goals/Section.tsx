import React from "react"
import Breadcrumb from "../../Breadcrumb"
import Image from "next/image"
// import Link from "next/link"
import {
    GiGiftOfKnowledge,
    GiReceiveMoney,
    GiStumpRegrowth,
    GiTeacher,
} from "react-icons/gi"
import {
    FaMagnifyingGlassChart,
    FaPeopleCarryBox,
    FaPeopleGroup,
    FaPeoplePulling,
    FaPeopleRobbery,
} from "react-icons/fa6"
import { GrTechnology } from "react-icons/gr"
import { PiGraph } from "react-icons/pi"

const OurGoalsSection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/" },
        { label: "Our Goals", active: true },
    ]
    return (
        <>
            <Breadcrumb
                title="Our Goals"
                subtitle={`Learn how CAIES Foundation drives impactful change through research, innovation, and education with sustainable, scalable solutions.`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="main-section" className="w-full bg-neutral-50">
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-4 py-10 sm:px-8 lg:px-48 lg:py-20">
                    <div className="flex flex-col items-center justify-center overflow-hidden">
                        <Image
                            src="/assets/img/our-goals.jpg"
                            width={1920}
                            height={1080}
                            sizes="100vw"
                            alt="thumbnail"
                            className="rounded-2xl"
                        />
                        <div className="mt-8 flex flex-col items-center justify-center py-8">
                            <h2 className="text-2xl font-black text-neutral-800 sm:text-3xl lg:text-5xl">
                                Our Goals
                            </h2>
                            <p className="mt-8 max-w-5xl text-center text-sm font-normal text-neutral-600 sm:text-base">
                                At the CAIES Foundation, our goals reflect our
                                commitment to driving impactful change through
                                research, innovation, and education. These goals
                                guide our mission to create solutions that are
                                actionable, scalable, and sustainable
                            </p>
                            <div className="mt-12 w-full max-w-5xl">
                                <div className="my-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="flex h-[550px] flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <PiGraph />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                001
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Drive Sustainable Development
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Although we align our
                                                initiatives with the United
                                                Nations' Sustainable Development
                                                Goals (SDGs) and the six
                                                priority areas of environmental
                                                sustainability identified by the
                                                World Economic Forum, we also
                                                explore how the synchronization
                                                among the four{" "}
                                                <b>
                                                    "<i>Purusharthas</i>"
                                                </b>
                                                defined in Sanatan Culture will
                                                help achieve sustainability at
                                                an individual level. The four
                                                Purusharthas include{" "}
                                                <b>
                                                    <i>Dharma </i>
                                                </b>
                                                (Righteousness Duty),{" "}
                                                <b>
                                                    <i>Artha </i>
                                                </b>
                                                (Wealth),{" "}
                                                <b>
                                                    <i>Kama</i>
                                                </b>{" "}
                                                (Desire), and
                                                <b>
                                                    <i> Moksha</i>
                                                </b>{" "}
                                                (Liberation). We aim to craft
                                                practical and sustainable
                                                solutions that address pressing
                                                global challenges while
                                                promoting environmental
                                                stewardship and social equity.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-[550px] flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <FaMagnifyingGlassChart />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                002
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Advance Research and Innovation
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                We aim to lead cutting-edge
                                                research that bridges the gap
                                                between theoretical knowledge
                                                and real-world applications by
                                                harnessing the power of
                                                artificial intelligence, data
                                                science, and geospatial
                                                technologies. We aim to provide
                                                implementable solutions that
                                                address complex,
                                                transdisciplinary challenges
                                                across environmental, economic,
                                                and social dimensions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-[550px] flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <GiTeacher />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                003
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Empower Through Education and
                                                Training
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Education and capacity building
                                                are at the heart of our mission.
                                                We offer specialized training
                                                programs, workshops, and
                                                research opportunities to
                                                students, researchers, and
                                                professionals across all levels
                                                of education. Equipping
                                                individuals with the skills and
                                                knowledge they need ensures they
                                                are empowered to contribute
                                                meaningfully to global
                                                sustainability efforts.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-[450px] flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <FaPeopleCarryBox />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                004
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Foster Collaborative
                                                Partnerships
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                Recognizing the importance of
                                                collective action, we actively
                                                seek collaborations with
                                                researchers, policymakers,
                                                academic institutions, and
                                                organizations committed to
                                                sustainability. Together, we can
                                                amplify the impact of our
                                                efforts and create solutions
                                                that transcend boundaries.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-[450px] flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <FaPeoplePulling />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                005
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Support the Next Generation of
                                                Innovators
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                At CAIES, we believe in
                                                nurturing future leaders and
                                                change makers. Through
                                                internships, mentorship, and
                                                hands-on research opportunities,
                                                we encourage individuals with
                                                passion and dedication to turn
                                                their ideas into actionable
                                                solutions. Our goal is to
                                                cultivate a global community of
                                                visionaries committed to
                                                science, society, and humanity.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex h-[450px] flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-main bg-neutral-50 text-5xl text-main transition-all duration-500 ease-in-out">
                                                <GiGiftOfKnowledge />
                                            </div>
                                            <span className="text-base font-medium text-neutral-400">
                                                006
                                            </span>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="mb-2 text-base font-semibold text-neutral-800">
                                                Bridge the Gap Between Knowledge
                                                and Action
                                            </h3>
                                            <p className="text-sm font-medium text-neutral-500">
                                                We strive to translate advanced
                                                research into practical,
                                                operational solutions that can
                                                be implemented effectively in
                                                real-world scenarios. This
                                                ensures that our efforts
                                                contribute to knowledge creation
                                                and have a tangible and lasting
                                                impact.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-col items-center justify-center py-8">
                                <p className="max-w-5xl text-left text-sm font-normal text-neutral-600 sm:text-base">
                                    The CAIES Foundation reaffirms its
                                    commitment to driving positive change and
                                    fostering a sustainable future for future
                                    generations through these goals. Every step
                                    we take is guided by a deep sense of
                                    responsibility to science, society, and
                                    humanity, ensuring our initiatives align
                                    with our vision of a better, more
                                    sustainable world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurGoalsSection
