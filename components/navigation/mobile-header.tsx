"use client"
import React, { useState } from "react"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { dropdownItems } from "@/constants"
import { MobileDropdownProps } from "@/types"

const MobileDropdown = ({ label, links, isOpen, onToggle }: MobileDropdownProps) => (
    <li className="text-3xl font-semibold">
        <div className="flex flex-col items-center">
            <button className="flex items-center gap-2 outline-none" onClick={onToggle}>
                {label} {isOpen ? <GoChevronUp /> : <GoChevronDown />}
            </button>
            {isOpen && (
                <ul className="mt-4 flex flex-col items-start pl-4">
                    {links.map(({ text, href }) => (
                        <li key={href} className="border-b border-main/20 last:border-0">
                            <Link
                                href={href}
                                className="block px-4 text-lg font-medium leading-[45px] text-main transition-colors duration-300"
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </li>
)

const MobileHeader = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    return (
        <section id="MobileNavigation" className="w-full max-w-[264px] lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <RxHamburgerMenu className="mr-4 size-8 cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader>
                        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                        <ul className="flex flex-col items-center gap-6 py-8">
                            <li className="text-3xl font-semibold">
                                <Link href="/">Home</Link>
                            </li>

                            {Object.entries(dropdownItems).map(([label, links]) => (
                                <MobileDropdown
                                    key={label}
                                    label={label}
                                    links={links}
                                    isOpen={openDropdown === label}
                                    onToggle={() =>
                                        setOpenDropdown((prev) => (prev === label ? null : label))
                                    }
                                />
                            ))}

                            <li className="text-3xl font-semibold">
                                <Link href="/publications">Publications</Link>
                            </li>
                            <li className="text-3xl font-semibold">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>

                        <button className="mt-4 rounded bg-primary px-4 py-2 text-[1.25rem] font-semibold text-white">
                            Connect With Us
                        </button>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileHeader
