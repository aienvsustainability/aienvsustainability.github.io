import Image from "next/image"
import Link from "next/link"
import React from "react"
import { WiTime5 } from "react-icons/wi"
import { publicationCards } from "@/constants/index" // Import publications data
import { FiPlus } from "react-icons/fi"

const PublicationSubSection = () => {
    const currentItems = publicationCards.slice(0, 3)

    return (
        <section className="flex w-full items-center justify-center bg-white py-24">
            <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
                <h2 className="mb-3 capitalize text-center text-4xl font-black text-neutral-800">
                    Our recent publications
                </h2>
                <span className="my-2 inline-block h-2 w-16 border-t-4 border-main text-center"></span>
                <p className="my-3 max-w-sm text-center text-base text-neutral-600 md:text-lg lg:text-xl">
                    From curious minds to groundbreaking discoveries, your
                    gateway to scholarly excellence
                </p>

                <div
                    id="cards"
                    className="grid grid-cols-1 gap-5 w-full mt-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full overflow-hidden p-[2%] transition-shadow duration-300">
                            <Link href={item.link}>
                                <Image
                                    src={item.image}
                                    width={500}
                                    height={500}
                                    sizes="100vw"
                                    alt={item.title}
                                    className="object-fill w-full h-64 sm:h-80 lg:h-96"
                                />
                            </Link>
                            <Link
                                href={item.link}
                                className="absolute right-4 top-4 flex items-center rounded-sm bg-[#FE5D00A4] px-3 py-2 text-sm font-medium text-white hover:bg-[#FE5D00] hover:transition-all hover:duration-1000 hover:ease-in-out">
                                Read More{" "}
                                <FiPlus className="ml-1 text-xs" />
                            </Link>
                            <div className="h-auto border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                                <h4 className="mb-4 flex items-center gap-1 text-sm font-medium text-neutral-400/50 sm:text-base">
                                    <WiTime5 /> {item.date}
                                </h4>
                                <Link href={item.link}>
                                    <h3 className="line-clamp-2 text-xl font-semibold leading-8 sm:text-2xl">
                                        {item.title}
                                    </h3>
                                </Link>
                                <p
                                    className="mt-2 text-sm line-clamp-3 sm:text-base"
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

export default PublicationSubSection
