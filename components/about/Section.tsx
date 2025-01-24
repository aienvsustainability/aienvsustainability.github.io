import React from "react"
import Image from "next/image"
import Breadcrumb from "../Breadcrumb"

const AboutSection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", active: true },
    ]
    return (
        <>
            <Breadcrumb
                title="About Us"
                subtitle={`Working together, growing together!`}
                imageUrl="/assets/img/page-header-bg.jpg"
                breadcrumb={breadcrumb}
            />
            <section
                id="about-section"
                className="relative bg-neutral-50">
                <div
                    id="container"
                    className="circle shape border-b border-[#EAEAEA] p-48 max-lg:px-8 max-lg:py-24">
                    <div
                        id="about-wrap"
                        className="-mx-4 flex flex-row items-center max-lg:flex-col">
                        <div
                            id="image"
                            className="relative min-h-[1px] w-full px-4">
                            <div
                                id="about-image"
                                className="w-[80%] max-lg:mb-8 max-lg:w-full">
                                <Image
                                    src="/assets/img/about.jpg"
                                    width={500}
                                    height={500}
                                    style={{ borderRadius: "5px" }}
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div
                            id="about-content"
                            className="relative min-h-[1px] w-full px-4">
                            <h2 className="mb-5 text-3xl font-extrabold max-lg:text-center">
                                About the CAIES Foundation
                            </h2>
                            <p className="pr-5 text-lg font-normal">
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
                    className="px-48 py-20 max-lg:border-b max-lg:border-t max-lg:px-8">
                    <div
                        id="heading"
                        className="mb-12 items-center justify-center text-center">
                        <h1 className="text-center text-4xl font-extrabold text-neutral-800">
                            The Directors
                        </h1>
                        <span className="inline-block h-2 w-[60px] border-t-4 border-main text-center"></span>
                    </div>
                    <div id="content">
                        <p className="mb-4 text-left text-lg leading-8 text-neutral-600">
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
                        <p className="mb-4 text-left text-lg leading-8 text-neutral-600">
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
                        <div className="relative min-h-[1px] w-full px-4">
                            <div className="-mx-4 flex flex-row items-center justify-center gap-4 max-lg:flex-col">
                                <div className="flex p-1">
                                    <div
                                        id="details"
                                        className="relative cursor-pointer overflow-hidden">
                                        <Image
                                            src="/assets/img/profile.jpg"
                                            width={300}
                                            height={300}
                                            alt="sushant"
                                        />
                                        <div className="hover">
                                            <h3 className="text-5 font-semibold text-main">
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
                                            width={300}
                                            height={300}
                                            alt="rashmi"
                                        />
                                        <div className="hover">
                                            <h3 className="text-5 font-semibold text-main">
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
                <div
                    id="directors"
                    className="px-48 pb-20 pt-8 max-lg:px-8">
                    <div
                        id="heading"
                        className="mb-12 items-center justify-center text-center">
                        <h1 className="text-center text-4xl font-extrabold text-neutral-800">
                            HRM and Legal
                        </h1>
                        <span className="inline-block h-2 w-[60px] border-t-4 border-main text-center"></span>
                    </div>
                    <div id="content">
                        <p className="mb-4 text-left text-lg leading-8 text-neutral-600">
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
                        <div className="relative min-h-[1px] w-full px-4">
                            <div className="-mx-4 flex items-center justify-center gap-4 sm:flex-row">
                                <div className="flex p-1">
                                    <div
                                        id="details"
                                        className="relative cursor-pointer overflow-hidden">
                                        <Image
                                            src="/assets/img/chandan.jpg"
                                            width={300}
                                            height={300}
                                            alt="sushant"
                                        />
                                        <div className="hover">
                                            <h3 className="text-5 font-semibold text-main">
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
        </>
    )
}

export default AboutSection
