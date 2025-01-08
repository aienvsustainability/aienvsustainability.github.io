import React from "react"
import { aboutCards } from "@/constants"
import Image from "next/image"

// Function to replace \n with <br/> in the description
const formatDescription = (description: string) => {
    return description.replace(/\n/g, "<br/>")
}

const Hero = () => {
    return (
        <div className="w-full bg-neutral-50 py-[8rem] max-lg:py-[6rem]">
            <div
                id="heading"
                className="items-center justify-center text-center">
                <h2 className="text-center text-[38px] font-extrabold text-neutral-800">
                    About CAIES
                </h2>
                <span className="border-main inline-block h-2 w-[60px] border-t-4 text-center"></span>
                <p className="mb-4 mt-1 text-lg text-neutral-600">
                    Solutions are designed based on the &apos;goals&apos;
                    considering its multidimensional aspects which are
                    <br />
                    grounded in micro and macro scientific and technical rigors.
                </p>
            </div>
            <div
                id="section"
                className="flex flex-col gap-6 px-8 pt-12 sm:flex-row sm:px-48">
                {/* Render each item from aboutSection array */}
                {aboutCards.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full overflow-hidden p-[2%] sm:w-[500px]">
                        <Image
                            src={item.image}
                            width={500}
                            height={500}
                            alt={`causes${index + 1}`}
                        />
                        <div className="border border-dashed border-stone-300 bg-white px-8 py-10 sm:h-[500px]">
                            <h3 className="text-2xl font-semibold leading-8 text-neutral-800">
                                {item.title}
                            </h3>
                            {/* Replace \n with <br/> in the description */}
                            <p
                                className="mt-2 text-base text-neutral-600"
                                dangerouslySetInnerHTML={{
                                    __html: formatDescription(item.description),
                                }}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero
