import React from "react"

const PublicationPageHeader = () => {
    return (
        <section id="page-header" className="w-full bg-[url('/assets/img/publication-page-header.jpg')] min-h-[300px] bg-center bg-no-repeat bg-scroll bg-cover items-center flex">
            <div id="title" className="max-lg:px-[2rem] px-[12rem]">
                <div id="content" className="text-white">
                    <h2 className="text-[42px] font-extrabold">Publications</h2>
                    <p className="text-[17px] mb-[15px]">From curious minds to groundbreaking<br className="max-lg:hidden" />discoveries—your gateway to scholarly excellence</p>
                    <ol id="breadcrumb" className="p-0 bg-[initial] flex gap-2 text-[12px] font-medium">
                        <li className="uppercase">Home</li>/
                        <li className="text-[#FE5F00] uppercase">Publications</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default PublicationPageHeader