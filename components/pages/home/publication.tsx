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
                <h2 className="mb-3 capitalize text-center text-4xl font-black text-main">
                    Our recent publications
                </h2>
                <span className="my-2 inline-block h-2 w-16 border-t-4 border-primary text-center"></span>
                <p className="my-3 max-w-md text-center text-base text-secondary md:text-lg lg:text-xl">
                    From curious minds to groundbreaking discoveries, your
                    gateway to scholarly excellence
                </p>

                <div
                    id="cards"
                    className="grid grid-cols-1 gap-5 w-full mt-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
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
                                    className="aspect-video object-cover w-full"
                                />
                            </Link>
                            <Link
                                href={item.link}
                                className="absolute right-4 top-4 flex items-center rounded-sm bg-primary/60 px-3 py-2 text-sm font-medium text-white hover:bg-primary hover:transition-all hover:duration-1000 hover:ease-in-out">
                                Read More{" "}
                                <FiPlus className="ml-1 text-xs" />
                            </Link>
                            <div className="h-auto border border-dashed border-main/20 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                                <h4 className="mb-4 flex items-center gap-1 text-sm font-medium text-secondary/50 sm:text-base">
                                    <WiTime5 /> {item.date}
                                </h4>
                                <Link href={item.link}>
                                    <h3 className="line-clamp-2 text-xl font-semibold text-main leading-8 sm:text-2xl">
                                        {item.title}
                                    </h3>
                                </Link>
                                <p
                                    className="mt-2 text-secondary text-sm line-clamp-3 sm:text-base"
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
