import React from "react";
import { intellectualAdvisors, scholars, collaborators } from "@/constants";
import Image from "next/image";

interface TeamMember {
    name: string;
    role: string;
    linkedinUrl: string;
    imageUrl: string;
}

const SkeletonLoader = () => (
    <div className="p-[5px] flex">
        <div className="cursor-pointer overflow-hidden relative animate-pulse">
            <div className="bg-gray-200 w-60 h-60"></div>
            <div className="bg-gray-200 mt-2 w-40 h-4"></div>
            <div className="bg-gray-200 mt-1 w-24 h-4"></div>
        </div>
    </div>
);

const renderTeamMembers = (members: TeamMember[] | undefined) => {
    if (!members) {
        return Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} />
        ));
    }

    return members.map((member, index) => (
        <div key={index} className="p-[5px] flex">
            <a href={member.linkedinUrl}>
                <div id="details" className="cursor-pointer overflow-hidden relative">
                    <Image src={member.imageUrl} width={300} height={300} alt={member.name} />
                    <div className="hover">
                        <h3 className="px-[5px] text-[18px] text-[#FE5F00] font-medium">{member.name}</h3>
                        <span className="text-white text-[14px]">{member.role}</span>
                    </div>
                </div>
            </a>
        </div>
    ));
};

const TeamSection = () => {
    return (
        <section id="team-section" className="w-full bg-[#F2F2F2] py-[6rem]">
            <div id="heading" className="items-center text-center justify-center mb-[3rem] max-lg:px-[2rem] px-[12rem]">
                <h1 className="text-black text-[38px] font-extrabold text-center">Meet Our Team</h1>
                <span className="border-t-4 w-[60px] max-lg:mb-[2rem] h-2 border-[#fe5f00] inline-block text-center"></span>
            </div>
            <div id="container" className="w-full px-[15px] ax-auto">
                <h2 className="text-left max-lg:px-[2rem] px-[12rem] text-[22px] font-extrabold text-black">The Advisory Team</h2>
                <div id="advisory-team" className="grid max-lg:px-[2rem] px-[12rem] py-[2rem] max-lg:grid-cols-1 grid-cols-4 gap-5 justify-center">
                    {renderTeamMembers(intellectualAdvisors)}
                </div>

                <h2 className="text-left px-[12rem] text-[22px] max-lg:px-[2rem] font-extrabold text-black">Scholars</h2>
                <div id="advisory-team" className="grid px-[12rem] max-lg:px-[2rem] py-[2rem] max-lg:grid-cols-1 grid-cols-4 gap-5 justify-center">
                    {renderTeamMembers(scholars)}
                </div>

                <h2 className="text-left px-[12rem] max-lg:px-[2rem] text-[22px] font-extrabold text-black">Collaborators</h2>
                <div id="advisory-team" className="grid px-[12rem] max-lg:px-[2rem] py-[2rem] max-lg:grid-cols-1 grid-cols-4 gap-5 justify-center">
                    {renderTeamMembers(collaborators)}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;