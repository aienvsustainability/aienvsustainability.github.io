"use client"

import React, { useState } from "react"
import { publications } from "@/constants"
import PublicationCard from "./publication-card"
import Pagination from "./pagination"
import Breadcrumb from "@/components/ui/breadcrumb"

const itemsPerPage = 6

const PublicationSection = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(publications.length / itemsPerPage)
    const currentItems = publications.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const paginate = (page: number) => setCurrentPage(page)
    const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages))
    const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1))

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
                <div className="grid grid-cols-3 gap-5 px-48 py-24 max-lg:grid-cols-1 max-lg:px-8">
                    {currentItems.map((item, i) => (
                        <PublicationCard key={i} {...item} />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                />
            </section>
        </>
    )
}

export default PublicationSection
