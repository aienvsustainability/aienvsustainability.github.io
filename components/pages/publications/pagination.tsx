import { PaginationProps } from "@/types"
import React from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Pagination = ({
    currentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
}: PaginationProps) => (
    <div className="flex justify-center pb-24">
        <div
            onClick={prevPage}
            className="bg-primary mx-1 flex cursor-pointer items-center justify-center px-4 py-2 text-2xl font-semibold text-white">
            <FiChevronLeft />
        </div>
        {Array.from({ length: totalPages }, (_, i) => (
            <div
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 flex w-14 cursor-pointer items-center justify-center border py-2 ${
                    currentPage === i + 1
                        ? "bg-primary/80 border-none font-semibold text-white"
                        : "border-neutral-900/20 bg-neutral-50"
                }`}>
                {i + 1}
            </div>
        ))}
        <div
            onClick={nextPage}
            className="bg-primary mx-1 flex cursor-pointer items-center justify-center px-4 py-2 text-2xl font-semibold text-white">
            <FiChevronRight />
        </div>
    </div>
)

export default Pagination
