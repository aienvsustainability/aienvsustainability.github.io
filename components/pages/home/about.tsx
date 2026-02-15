import React from "react"
import Image from "next/image"
import { aboutcards } from "@/constants"

const formatDescription = (description: string) => {
    return description.replace(/\n/g, "<br/>")
}

const About = () => {
    return (
        <div className="w-full bg-neutral-50 py-32 max-lg:py-24">
            <div
                id="heading"
                className="flex flex-col items-center justify-center px-4 text-center">
                <h2 className="font-condensed mb-2 text-center text-7xl text-neutral-900 uppercase">
                    About CAIES
                </h2>
                <span className="border-primary inline-block h-1 w-16 border-t-4 text-center"></span>
                <p className="max-w-2xl py-4 text-base tracking-tight text-neutral-500">
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
                        <div className="h-110 border border-dashed border-neutral-900/20 bg-white px-8 py-10">
                            <h3 className="text-2xl leading-8 font-bold tracking-tight text-neutral-900">
                                {item.title}
                            </h3>
                            <p
                                className="mt-2 text-base text-neutral-500"
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
