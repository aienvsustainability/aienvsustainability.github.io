"use client";
import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from 'react-icons/rx';
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Link from 'next/link';

const MobileNavigation = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <section id="MobileNavigation" className="lg:hidden w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild><RxHamburgerMenu className="mr-[1rem] text-[18px] cursor-pointer" /></SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader>
                        <ul className="py-8 flex flex-col items-center gap-6">
                            <li className="text-[28px] font-semibold"><Link href="/">Home</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/about">About</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/team">Team</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/awards">Awards</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/publications">Publications</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/contact">Contact</Link></li>
                            {/* <li className="text-[28px] font-semibold">
                                <div className="flex flex-col items-center">
                                    <button className="flex items-center justify-between outline-none gap-2" onClick={toggleDropdown}>
                                        <span className="relative flex h-2.5 w-2.5 items-center justify-between">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE5D00B3] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FE5F00]"></span>
                                        </span> 
                                        Initiatives {isDropdownOpen ? <GoChevronUp /> : <GoChevronDown />}
                                    </button>
                                    {isDropdownOpen && (
                                        <ul className="pl-4 mt-2 flex flex-col items-start">
                                            <li className="text-[22px] text-[#444] font-bold"><Link href="/phdacademy">PhD Academy</Link></li>
                                        </ul>
                                    )}
                                </div>
                            </li> */}
                        </ul>
                        <button className="bg-[#fe5f00] outline-none text-[20px] font-semibold text-white px-4 py-2 rounded mt-4">Connect With Us</button>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    );
}

export default MobileNavigation;
