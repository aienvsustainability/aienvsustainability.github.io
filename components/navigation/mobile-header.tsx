"use client"
import React, { useState } from "react"
import Link from "next/link"
import { CgMenuRight } from "react-icons/cg";
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { dropdownItems } from "@/constants"
import { MobileDropdownProps } from "@/types"

const MobileDropdown = ({
    label,
    links,
    isOpen,
    onToggle,
}: MobileDropdownProps) => (
    <li className="">
        <div className="flex flex-col items-center">
            <button
                className="hover:bg-primary/15 flex w-full items-center justify-start rounded px-2 text-xl font-semibold ring-0 outline-0"
                onClick={onToggle}>
                {label}{" "}
                {isOpen ? (
                    <GoChevronUp className="ml-1 size-4" />
                ) : (
                    <GoChevronDown className="ml-1 size-4" />
                )}
            </button>
            {isOpen && (
                <ul className="border-main/20 mt-4 flex flex-col items-start border-l pl-1">
                    {links.map(({ text, href }) => (
                        <li key={href} className="">
                            <SheetClose asChild>
                                <Link
                                    href={href}
                                    className="text-main block px-1 text-base leading-11 font-medium transition-colors duration-300">
                                    {text}
                                </Link>
                            </SheetClose>
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
        <section id="MobileNavigation" className="w-full max-w-66 lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <CgMenuRight className="mr-4 size-6 text-main cursor-pointer" />
                </SheetTrigger>
                <SheetContent className="flex flex-col items-start bg-white pt-20">
                    <SheetHeader>
                        <SheetTitle className="sr-only">
                            Mobile Navigation
                        </SheetTitle>
                        <SheetDescription className="sr-only">
                            Close mobile navigation
                        </SheetDescription>
                        <ul className="flex flex-col items-start gap-6 py-8">
                            <SheetClose asChild>
                                <li className="hover:bg-primary/15 flex w-full items-center justify-start rounded px-2 text-xl font-semibold">
                                    <Link href="/">Home</Link>
                                </li>
                            </SheetClose>

                            {Object.entries(dropdownItems).map(
                                ([label, links]) => (
                                    <MobileDropdown
                                        key={label}
                                        label={label}
                                        links={links}
                                        isOpen={openDropdown === label}
                                        onToggle={() =>
                                            setOpenDropdown((prev) =>
                                                prev === label ? null : label
                                            )
                                        }
                                    />
                                )
                            )}
                            <SheetClose asChild>
                                <li className="hover:bg-primary/15 flex w-full items-center justify-start rounded px-2 text-xl font-semibold">
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </SheetClose>
                        </ul>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileHeader
