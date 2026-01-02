import Image from "next/image"
import Link from "next/link"
import React from "react"
import { WiTime5 } from "react-icons/wi"
import { publications } from "@/constants" // Import publications data
import { FiPlus } from "react-icons/fi"

const Publication = () => {
    const currentItems = publications.slice(0, 3)

    return (
        <section className="flex w-full items-center justify-center bg-white py-24">
            <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
                <h2 className="font-condensed text-main mb-3 text-center text-7xl font-medium uppercase">
                    Our recent publications
                </h2>
                <span className="border-primary my-2 inline-block h-2 w-16 border-t-4 text-center"></span>
                <p className="text-secondary font-medium my-3 max-w-md text-center text-base md:text-lg lg:text-xl">
                    From curious minds to groundbreaking discoveries, your
                    gateway to scholarly excellence
                </p>

                <div
                    id="cards"
                    className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full overflow-hidden p-2 transition-shadow duration-300">
                            <Link href={item.link}>
                                <Image
                                    src={item.image}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt={item.title}
                                    className="aspect-video w-full object-cover"
                                />
                            </Link>
                            <Link
                                href={item.link}
                                className="bg-primary/60 hover:bg-primary absolute top-4 right-4 flex items-center rounded-sm px-3 py-2 text-sm font-medium text-white hover:transition-all hover:duration-1000 hover:ease-in-out">
                                Read More <FiPlus className="ml-1 text-xs" />
                            </Link>
                            <div className="border-main/20 h-auto border border-dashed px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                                <h4 className="text-secondary/50 mb-4 flex items-center gap-1 text-sm font-medium sm:text-base">
                                    <WiTime5 /> {item.date}
                                </h4>
                                <Link href={item.link}>
                                    <h3 className="text-main line-clamp-2 text-xl leading-8 font-semibold sm:text-2xl">
                                        {item.title}
                                    </h3>
                                </Link>
                                <p
                                    className="text-secondary mt-2 line-clamp-3 text-sm sm:text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: item.description,
                                    }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Publication
