import React from "react"
import { intellectualAdvisors, scholars, collaborators } from "@/constants"
import Image from "next/image"
import Breadcrumb from "../../Breadcrumb"

interface TeamMember {
    name: string
    role: string
    linkedinUrl: string
    imageUrl: string
}

const SkeletonLoader = () => (
    <div className="flex p-1">
        <div className="relative animate-pulse cursor-pointer overflow-hidden">
            <div className="h-60 w-60 bg-gray-200"></div>
            <div className="mt-2 h-4 w-40 bg-gray-200"></div>
            <div className="mt-1 h-4 w-24 bg-gray-200"></div>
        </div>
    </div>
)

const renderTeamMembers = (members: TeamMember[] | undefined) => {
    if (!members) {
        return Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} />
        ))
    }

    return members.map((member, index) => (
        <div key={index} className="flex p-1">
            <a href={member.linkedinUrl}>
                <div
                    id="details"
                    className="relative cursor-pointer overflow-hidden">
                    <Image
                        src={member.imageUrl}
                        width={300}
                        height={300}
                        alt={member.name}
                    />
                    <div className="hover">
                        <h3 className="px-[5px] text-lg font-medium text-main">
                            {member.name}
                        </h3>
                        <span className="text-sm text-white">
                            {member.role}
                        </span>
                    </div>
                </div>
            </a>
        </div>
    ))
}

const TeamSection = () => {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/" },
        { label: "Our Team", active: true },
    ]
    return (
        <>
            <Breadcrumb
                title="Our Team"
                subtitle={`Innovating together, forging pathways, transforming futures\nwith unity and resilience.`}
                imageUrl="/assets/img/team-page-header.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="team-section" className="w-full bg-neutral-50 py-24">
                <div
                    id="heading"
                    className="mb-12 items-center justify-center px-48 text-center max-lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold text-neutral-800">
                        Meet Our Team
                    </h1>
                    <span className="inline-block h-2 w-16 border-t-4 border-main text-center max-lg:mb-8"></span>
                </div>
                <div id="container" className="ax-auto w-full px-4">
                    <h2 className="px-48 text-left text-2xl font-extrabold text-neutral-800 max-lg:px-8">
                        The Advisory Team
                    </h2>
                    <div
                        id="advisory-team"
                        className="grid grid-cols-4 justify-center gap-5 px-48 py-8 max-lg:grid-cols-1 max-lg:px-8">
                        {renderTeamMembers(intellectualAdvisors)}
                    </div>

                    <h2 className="px-48 text-left text-2xl font-extrabold text-neutral-800 max-lg:px-8">
                        Scholars
                    </h2>
                    <div
                        id="advisory-team"
                        className="grid grid-cols-4 justify-center gap-5 px-48 py-8 max-lg:grid-cols-1 max-lg:px-8">
                        {renderTeamMembers(scholars)}
                    </div>

{/*                     <h2 className="px-48 text-left text-2xl font-extrabold text-neutral-800 max-lg:px-8">
                        Collaborators
                    </h2>
                    <div
                        id="advisory-team"
                        className="grid grid-cols-4 justify-center gap-5 px-48 py-8 max-lg:grid-cols-1 max-lg:px-8">
                        {renderTeamMembers(collaborators)}
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default TeamSection
