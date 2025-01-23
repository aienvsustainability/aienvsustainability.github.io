"use client"
import React, { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import Link from "next/link"

const MobileNavigation = () => {
    const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false)
    const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] =
        useState(false)

    // Toggle About Us dropdown
    const toggleAboutUsDropdown = () => {
        setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)
        // Close other dropdown
        setIsInitiativesDropdownOpen(false)
    }

    // Toggle Initiatives dropdown
    const toggleInitiativesDropdown = () => {
        setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen)
        // Close other dropdown
        setIsAboutUsDropdownOpen(false)
    }

    return (
        <section
            id="MobileNavigation"
            className="w-full max-w-[264px] lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <RxHamburgerMenu className="mr-4 size-8 cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader>
                        <ul className="flex flex-col items-center gap-6 py-8">
                            <li className="text-3xl font-semibold">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-3xl font-semibold">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="flex items-center justify-between gap-2 outline-none"
                                        onClick={toggleAboutUsDropdown}>
                                        About Us{" "}
                                        {isAboutUsDropdownOpen ? (
                                            <GoChevronUp />
                                        ) : (
                                            <GoChevronDown />
                                        )}
                                    </button>
                                    {isAboutUsDropdownOpen && (
                                        <ul className="mt-4 flex flex-col items-start pl-4">
                                            <li className="relative block border-b border-gray-200 last:border-0">
                                                <Link
                                                    href="/about/our-vision"
                                                    className="block px-4 text-lg font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear">
                                                    Our Vision
                                                </Link>
                                            </li>
                                            <li className="relative block border-b border-gray-200 last:border-0">
                                                <Link
                                                    href="/about/our-goals"
                                                    className="block px-4 text-lg font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear">
                                                    Our Goals
                                                </Link>
                                            </li>
                                            <li className="relative block border-b border-gray-200 last:border-0">
                                                <Link
                                                    href="/about/core-members"
                                                    className="block px-4 text-lg font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear">
                                                    Core Members
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/about/our-team"
                                                    className="block px-4 text-lg font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear">
                                                    Our Team
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>

                            <li className="text-3xl font-semibold">
                                <Link href="/publications">Publications</Link>
                            </li>

                            <li className="text-3xl font-semibold">
                                <div className="flex flex-col items-center">
                                    <button
                                        className="flex items-center justify-between gap-2 outline-none"
                                        onClick={toggleInitiativesDropdown}>
                                        <span className="relative flex h-2.5 w-2.5 items-center justify-between">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE5D00B3] opacity-75"></span>
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-main"></span>
                                        </span>
                                        Initiatives{" "}
                                        {isInitiativesDropdownOpen ? (
                                            <GoChevronUp />
                                        ) : (
                                            <GoChevronDown />
                                        )}
                                    </button>
                                    {isInitiativesDropdownOpen && (
                                        <ul className="mt-4 flex flex-col items-start pl-4">
                                            <li className="relative block border-b border-gray-200 last:border-0">
                                                <Link
                                                    href="/initiatives/research-academy"
                                                    className="block px-4 text-lg font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear">
                                                    Research Academy
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/initiatives/ai-for-scientist"
                                                    className="block px-4 text-lg font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear">
                                                    AI For Scientists
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            </li>

                            <li className="text-3xl font-semibold">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                        <button className="text-5 mt-4 rounded bg-main px-4 py-2 font-semibold text-white outline-none">
                            Connect With Us
                        </button>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNavigation
