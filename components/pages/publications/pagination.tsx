import { PaginationProps } from "@/types"
import React from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Pagination = ({ currentPage, totalPages, paginate, nextPage, prevPage }: PaginationProps) => (
    <div className="flex justify-center pb-24">
        <div onClick={prevPage} className="mx-1 bg-primary px-4 py-2 text-2xl font-semibold items-center justify-center flex text-white cursor-pointer">
            <FiChevronLeft />
        </div>
        {Array.from({ length: totalPages }, (_, i) => (
            <div
                key={i}
                onClick={() => paginate(i + 1)}
                className={`cursor-pointer flex items-center justify-center mx-1 border w-14 py-2 ${currentPage === i + 1 ? "bg-primary/80 text-white font-semibold border-none" : "bg-background border-main/20"
                    }`}
            >
                {i + 1}
            </div>
        ))}
        <div onClick={nextPage} className="mx-1 bg-primary px-4 py-2 text-2xl font-semibold items-center justify-center flex text-white cursor-pointer">
            <FiChevronRight />
        </div>
    </div>
)

export default Pagination
