import React from "react"
import { awardCards } from "@/constants"
import Image from "next/image"
import Breadcrumb from "../Breadcrumb"

const SkeletonLoader = () => (
    <div className="relative w-full animate-pulse overflow-hidden p-[2%]">
        <div className="h-80 w-full bg-gray-200"></div>
        <div className="h-auto border border-dashed border-stone-300 bg-white px-8 py-10">
            <div className="h-8 w-2/3 bg-gray-200 text-[24px] font-semibold leading-8"></div>
            <div className="mt-2 h-8 w-4/5 bg-gray-200 text-base"></div>
        </div>
    </div>
)

const AwardSection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Awards", active: true },
    ]
    return (
        <>
            <Breadcrumb
                title="Awards"
                subtitle={`Honoring unsung heroes in education\nscience across India. Nominate now!`}
                imageUrl="/assets/img/page-header-bg.jpg"
                breadcrumb={breadcrumb}
            />
            <section
                id="awards-section"
                className="w-full bg-neutral-50 py-[6rem]">
                <div
                    id="heading"
                    className="mb-12 items-center justify-center px-48 text-center max-lg:px-8">
                    <h1 className="text-center text-[38px] font-extrabold text-neutral-800">
                        Awards
                    </h1>
                    <span className="inline-block h-2 w-[60px] border-t-4 border-main text-center max-lg:mb-8"></span>
                    <p className="mb-4 mt-1 text-lg font-medium max-lg:text-left">
                        The nominations are open on a rolling basis, and the
                        awards will be announced on every Basant Panchami every
                        year
                    </p>
                    <p className="mt-1 text-lg font-normal max-lg:text-left">
                        The CAIES Foundation has launched various awards for
                        unsung teachers and scientists, primarily from
                        government schools, colleges, and universities. The
                        foundation will select the awardee based on their
                        academic, scientific, and social contributions. Although
                        the foundation will perform its assessment for potential
                        awardees, it also encourages individuals to submit their
                        nominations through the foundation&apos;s website. The
                        jurisdiction of the awards will be India. Nominations
                        are open on a rolling basis; however, the application
                        should be submitted by Makar Sankranti (January 15th) of
                        each year. The awards will be announced on Vasant
                        Panchami (February) every year. Applications submitted
                        after Makar Sankranti will be considered for next year’s
                        awards.
                    </p>
                </div>
                <div
                    id="cards"
                    className="grid grid-cols-3 items-center justify-center gap-5 px-48 max-lg:grid-cols-1 max-lg:px-8">
                    {awardCards.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full overflow-hidden p-[2%]">
                            <Image
                                src={item.image}
                                width={500}
                                height={500}
                                alt={`awards${index + 1}`}
                            />
                            <a
                                href={item.href}
                                className="absolute right-4 top-4 flex items-center rounded-sm bg-[#FE5D00A4] px-[10px] py-2 text-[14px] font-medium text-white hover:bg-[#FE5D00] hover:transition-all hover:duration-1000 hover:ease-in-out">
                                Submit Application +
                            </a>
                            <div className="border border-dashed border-stone-300 bg-white px-8 py-10 sm:h-[400px]">
                                <h3 className="text-[24px] font-semibold leading-8">
                                    {item.title}
                                </h3>
                                <p
                                    className="mt-2 text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: item.description,
                                    }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default AwardSection
