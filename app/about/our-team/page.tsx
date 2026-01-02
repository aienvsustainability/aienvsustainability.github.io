import Breadcrumb from "@/components/ui/breadcrumb"
import { collaborators, intellectualAdvisors, scholars } from "@/constants"
import { CustomMetadata, TeamMember } from "@/types"
import Image from "next/image"

export const metadata: CustomMetadata = {
    title: "Our Team",
    description:
        "Discover CAIES Foundation's pioneering team leveraging ML to assess arsenicosis resilience, study cellular redox, and innovate in landslide mapping.",
    alternates: {
        canonical: "/about/our-team",
        languages: {
            "en-US": "/about/our-team",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Our Team",
        description:
            "Discover CAIES Foundation's pioneering team leveraging ML to assess arsenicosis resilience, study cellular redox, and innovate in landslide mapping.",
        url: "https://caienvsus.org/about/our-team",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/page-header-bg.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
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

const renderTeamMembers = (members: TeamMember[] | undefined, type?: "scholars") => {
    if (!members) {
        return Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} />
        ))
    }

    const filteredMembers =
        type === "scholars"
            ? members.filter((member) => member.status === false)
            : members


    return filteredMembers.map((member, index) => (
        <div key={index} className="flex p-1">
            <a href={member.linkedinUrl}>
                <div
                    id="details"
                    className="relative cursor-pointer overflow-hidden">
                    <Image
                        src={member.imageUrl}
                        width={0}
                        height={0}
                        alt={member.name}
                        sizes="100vw"
                        className="aspect-square size-75 object-cover"
                    />
                    <div className="hover">
                        <h3 className="px-1.5 text-lg font-medium text-primary">
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

export default function OurTeam() {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "About Us", link: "/" },
        { label: "Our Team", active: true },
    ]
    return (
        <main className="flex h-full w-full flex-col items-center justify-center">
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
                    <h1 className="text-main font-condensed text-3xl font-medium tracking-wide uppercase lg:text-7xl">
                        Meet Our Team
                    </h1>
                    <span className="border-primary inline-block h-2 w-16 border-t-4 text-center max-lg:mb-8"></span>
                </div>
                <div id="container" className="ax-auto w-full px-4">
                    <h2 className="text-main px-48 text-left text-2xl font-extrabold max-lg:px-8">
                        The Advisory Team
                    </h2>
                    <div
                        id="advisory-team"
                        className="grid grid-cols-4 justify-center gap-5 px-48 py-8 max-lg:grid-cols-1 max-lg:px-8">
                        {renderTeamMembers(intellectualAdvisors)}
                    </div>

                    <h2 className="text-main px-48 text-left text-2xl font-extrabold max-lg:px-8">
                        Scholars
                    </h2>
                    <div
                        id="advisory-team"
                        className="grid grid-cols-4 justify-center gap-5 px-48 py-8 max-lg:grid-cols-1 max-lg:px-8">
                        {renderTeamMembers(scholars, "scholars")}
                    </div>

                    {/*                     <h2 className="px-48 text-left text-2xl font-extrabold text-main max-lg:px-8">
                        Collaborators
                    </h2>
                    <div
                        id="advisory-team"
                        className="grid grid-cols-4 justify-center gap-5 px-48 py-8 max-lg:grid-cols-1 max-lg:px-8">
                        {renderTeamMembers(collaborators)}
                    </div> */}
                </div>
            </section>
        </main>
    )
}
