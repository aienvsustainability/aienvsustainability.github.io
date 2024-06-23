import React from "react"
import Image from "next/image"
import Breadcrumb from "../Breadcrumb"

const AboutSection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", active: true },
    ];
    return (
        <>
            <Breadcrumb
                title="About Us"
                subtitle={`Working together, growing together!`}
                imageUrl="/assets/img/page-header-bg.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="about-section" className="relative bg-[#F2F2F2] p-[80px 0]">
                <div id="container" className="circle shape border-b border-[#EAEAEA] max-lg:px-[2rem] max-lg:py-[6rem] p-[12rem]">
                    <div id="about-wrap" className="flex items-center max-lg:flex-col flex-row -mx-[15px]">
                        <div id="image" className="relative w-full min-h-[1px] px-[15px]">
                            <div id="about-image" className="max-lg:w-full max-lg:mb-[2rem] w-[80%]">
                                <Image src="/assets/img/about.jpg" width={500} height={500} style={{ borderRadius: '5px' }} alt="about" />
                            </div>
                        </div>
                        <div id="about-content" className="relative w-full min-h-[1px] px-[15px]">
                            <h2 className="text-[38px] font-extrabold mb-[20px] max-lg:text-center">About the CAIES Foundation</h2>
                            <p className="text-[17px] font-normal pr-[20px]">The Center for Artificial Intelligence and Environmental Sustainability (CAIES) Foundation, is a niche Section (8) non-profit organization that focuses on trans-disciplinary challenges, which require sustainable outcomes that are implementable and operational in the areas of environment, economics, and society through extensive research and development using cutting edge data science, machine learning, artificial intelligence, and geospatial tools and technologies. Solutions are designed based on the &apos;goals&apos; considering its multidimensional aspects which are grounded in micro and macro scientific and technical rigors.</p>
                        </div>
                    </div>
                </div>
                <div id="directors" className="max-lg:px-[2rem] max-lg:border-t max-lg:border-b px-[12rem] py-[5rem]">
                    <div id="heading" className="items-center text-center justify-center mb-[3rem]">
                        <h1 className="text-black text-[38px] font-extrabold text-center">The Directors</h1>
                        <span className="border-t-4 w-[60px] h-2 border-[#fe5f00] inline-block text-center"></span>
                    </div>
                    <div id="content">
                        <p className="text-[17px] mb-[15px] leading-8 text-left"><b>Dr. Sushant Singh</b>, a founding Director of the CAIES Foundation, boasts over 18 years of experience in environmental science, data science, and management. He holds Ph.D. degrees in Environmental Science and Environmental Management, both earned with full scholarships. Sushant is a prolific author, having published articles in top journals and initiated the world&apos;s first scholarship for arsenic research. His work, including a highly downloaded paper in &quot;Frontiers in Ecology and the Environment,&quot; has been recognized globally. Sushant is dedicated to supporting young researchers, designing educational programs, and contributing to environmental solutions. Besides his professional endeavors, he engages in creative activities like writing stories, poems, and plays addressing social and environmental issues.</p>
                        <p className="text-[17px] mb-[15px] leading-8 text-left"><b>Mrs. Rashmi Singh</b>, a founding Director of the CAIES Foundation, possesses over 15 years of professional experience in development sectors, focusing on human health, drug abuse, and social issues. Holding a Master&apos;s degree in Social Work from Patna University, she has worked with prominent non-profit organizations and contributed as a teacher and journalist. Rashmi has delivered talks on All India Radio, Bihar, addressing topics such as women&apos;s role in child development and solutions to societal challenges. In addition to her professional pursuits, she engages in social activities to empower women and is also an author of several poems.</p>
                    </div>
                    <div id="image" className="mt-12 flex max-lg:flex-col flex-row items-center">
                        <div className="w-full relative min-h-[1px] px-[15px]">
                            <div className="flex max-lg:flex-col flex-row items-center -mx-[15px] justify-center gap-4">
                                <div className="p-[5px] flex">
                                    <div id="details" className="cursor-pointer overflow-hidden relative">
                                        <Image src="/assets/img/profile.jpg" width={300} height={300} alt="sushant" />
                                        <div className="hover">
                                            <h3 className="text-[20px] text-[#FE5F00] font-semibold">Dr. Sushant Singh</h3><span className="text-white text-[14px]">Director</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-[5px] flex">
                                    <div id="details" className="cursor-pointer overflow-hidden relative">
                                        <Image src="/assets/img/rashmi.jpg" width={300} height={300} alt="rashmi" />
                                        <div className="hover">
                                            <h3 className="text-[20px] text-[#FE5F00] font-semibold">Rashmi Singh</h3><span className="text-white text-[14px]">Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="directors" className="max-lg:px-[2rem] px-[12rem] pt-[2rem] pb-[5rem]">
                    <div id="heading" className="items-center text-center justify-center mb-[3rem]">
                        <h1 className="text-black text-[38px] font-extrabold text-center">HRM and Legal</h1>
                        <span className="border-t-4 w-[60px] h-2 border-[#fe5f00] inline-block text-center"></span>
                    </div>
                    <div id="content">
                        <p className="text-[17px] mb-[15px] leading-8 text-left"><b>Mr. Chandan Kumar Sinha</b> has recently joined the CAIES Foundation as a Coordinator: HRM and Legal. He has earned a law degree from Choudary Charan Singh University, Meerut. Earlier in 2012, he completed his specialisation in human resources management at Symbiosis Distance Learning, Pune. Mr. Sinha has over 20 years of working experience working with various organisations, such as Singhal & Bajaj Pvt. Ltd., Patna, Unibeton Ready Mix (Dubai) under the Al Fara Group of Companies U.A.E., PCI Geomatics India, and Octro in Noida. Mr. Sinha has wide experience in public dealing, legal compliance, human resource management, and maintenance. He believes in learning for inner growth and the expansion of the CAIES Foundation.</p>
                    </div>
                    <div id="image" className="mt-12 flex sm:flex-row items-center">
                        <div className="w-full relative min-h-[1px] px-[15px]">
                            <div className="flex sm:flex-row items-center -mx-[15px] justify-center gap-4">
                                <div className="p-[5px] flex">
                                    <div id="details" className="cursor-pointer overflow-hidden relative">
                                        <Image src="/assets/img/chandan.jpg" width={300} height={300} alt="sushant" />
                                        <div className="hover">
                                            <h3 className="text-[20px] text-[#FE5F00] font-semibold">Chandan Kumar Sinha</h3><span className="text-white text-[14px]">HRM and Legal</span>
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