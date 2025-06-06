import React from "react"
import Image from "next/image"
import { aboutcards } from "@/constants"

// Function to replace \n with <br/> in the description
const formatDescription = (description: string) => {
    return description.replace(/\n/g, "<br/>")
}

const About = () => {
    return (
        <div className="w-full py-32 max-lg:py-24">
            <div
                id="heading"
                className="flex flex-col items-center justify-center px-4 text-center">
                <h2 className="mb-2 text-center text-4xl font-extrabold text-main">
                    About CAIES
                </h2>
                <span className="inline-block h-2 w-16 border-t-4 border-primary text-center"></span>
                <p className="mb-4 mt-4 max-w-2xl text-lg text-secondary max-lg:text-base">
                    Solutions are designed based on the &apos;goals&apos;
                    considering its multidimensional aspects which are grounded
                    in micro and macro scientific and technical rigors.
                </p>
            </div>
            <div
                id="section"
                className="grid grid-cols-1 gap-6 px-4 pt-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-48">
                {aboutcards.map((item, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden p-[2%]">
                        <Image
                            src={item.image}
                            width={500}
                            height={500}
                            alt={`causes${index + 1}`}
                            className="h-auto w-full"
                        />
                        <div className="border border-dashed border-main/20 bg-white px-8 py-10 h-110">
                            <h3 className="text-2xl font-semibold leading-8 text-main">
                                {item.title}
                            </h3>
                            {/* Replace \n with <br/> in the description */}
                            <p
                                className="mt-2 text-base text-secondary"
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

export default About
