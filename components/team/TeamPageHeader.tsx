import React from "react"

const TeamPageHeader = () => {
  return (
    <section id="page-header" className="w-full bg-[url('/assets/img/team-page-header.jpg')] min-h-[300px] bg-center bg-no-repeat bg-scroll bg-cover items-center flex">
        <div id="title" className="max-lg:px-[2rem] px-[12rem]">
            <div id="content" className="text-white">
                <h2 className="text-[42px] font-extrabold">Team</h2>
                <p className="text-[17px] mb-[15px]">Innovating together, forging pathways, transforming futures<br className="max-lg:hidden"/>with unity and resilience.</p>
                <ol id="breadcrumb" className="p-0 bg-[initial] flex gap-2 text-[12px] font-medium">
                    <li className="uppercase">Home</li>/
                    <li className="text-[#FE5F00] uppercase">Team</li>
                </ol>
            </div>
        </div>
    </section>
  )
}

export default TeamPageHeader