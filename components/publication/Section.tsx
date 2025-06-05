"use client"

import React, { useState } from "react"
import { FiPlus } from "react-icons/fi"
import { WiTime5 } from "react-icons/wi"
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi"
import { publicationCards } from "@/constants"
import Image from "next/image"
import Breadcrumb from "../Breadcrumb"
import Link from "next/link"

interface PublicationCard {
    image: string
    date: string
    title: string
    link: string
    description: string
}

const SkeletonLoader = () => (
    <div className="relative w-full animate-pulse overflow-hidden p-[2%]">
        <div className="h-80 w-full bg-gray-200"></div>
        <div className="h-auto border border-dashed border-stone-300 bg-white px-8 py-10">
            <div className="mb-4 flex items-center gap-1 text-base font-medium text-neutral-300">
                <WiTime5 /> Date
            </div>
            <div className="text-2xl font-semibold leading-8">Title</div>
            <div className="mt-2 h-8 w-2/3 bg-gray-200 text-base"></div>
        </div>
    </div>
)

const PublicationSection = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = publicationCards.slice(
        indexOfFirstItem,
        indexOfLastItem
    )

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
    const nextPage = () =>
        setCurrentPage((prevPage) =>
            Math.min(
                prevPage + 1,
                Math.ceil(publicationCards.length / itemsPerPage)
            )
        )
    const prevPage = () =>
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))

    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Publications", active: true },
    ]

    return (
        <>
            <Breadcrumb
                title="Publications"
                subtitle={`From curious minds to groundbreaking\ndiscoveries—your gateway to scholarly excellence`}
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="publication-section" className="w-full bg-neutral-50">
                <div
                    id="cards"
                    className="grid grid-cols-3 gap-5 px-48 py-24 max-lg:grid-cols-1 max-lg:px-8">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full overflow-hidden p-[2%] transition-shadow duration-300">
                            <Link href={item.link}>
                                <Image
                                    src={item.image}
                                    width={500}
                                    height={500}
                                    alt={item.title}
                                />
                            </Link>
                            <Link
                                href={item.link}
                                className="absolute right-4 top-4 flex items-center rounded-sm bg-[#FE5D00A4] px-[10px] py-2 text-sm font-medium text-white hover:bg-[#FE5D00] hover:transition-all hover:duration-1000 hover:ease-in-out">
                                Read More{" "}
                                <FiPlus className="ml-[5px] text-xs" />
                            </Link>
                            <div className="h-auto border border-dashed border-stone-300 bg-white px-8 py-10">
                                <h4 className="mb-4 flex items-center gap-1 text-base font-medium text-neutral-300">
                                    <WiTime5 /> {item.date}
                                </h4>
                                <Link href={item.link}>
                                    <h3 className="text-2xl font-semibold leading-8">
                                        {item.title}
                                    </h3>
                                </Link>
                                <p
                                    className="mt-2 text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: item.description,
                                    }}></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center pb-[6rem]">
                    <button
                        onClick={prevPage}
                        className="mx-1 rounded-md border border-neutral-300 bg-neutral-50 px-4 py-2 font-semibold text-neutral-800">
                        <PiArrowLeftThin />
                    </button>
                    {Array.from(
                        {
                            length: Math.ceil(
                                publicationCards.length / itemsPerPage
                            ),
                        },
                        (_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={`mx-1 rounded-md border border-neutral-300 bg-neutral-50 px-4 py-2 ${currentPage === i + 1 ? "border-none bg-main font-semibold text-white" : ""}`}>
                                {i + 1}
                            </button>
                        )
                    )}
                    <button
                        onClick={nextPage}
                        className="mx-1 rounded-md border border-neutral-300 bg-neutral-50 px-4 py-2 font-semibold text-neutral-800">
                        <PiArrowRightThin />
                    </button>
                </div>
            </section>
        </>
    )
}

export default PublicationSection
