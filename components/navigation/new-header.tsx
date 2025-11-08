"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { dropdownItems } from "@/constants"
import MobileHeader from "./mobile-header"
import TopHeader from "./top-header"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FiChevronDown, FiPlus } from "react-icons/fi"

const navItems = [
    { label: "Home", href: "/" },
    {
        label: "About",
        dropdown: "About Us",
    },
    {
        label: "Our Work",
        dropdown: "Our Work",
    },
    {
        label: "Get Involved",
        dropdown: "Get Involved",
        customContent: (
            <DropdownMenuContent
                align="end"
                sideOffset={30}
                className="z-50 mt-2 min-h-50 w-fit rounded border-0 bg-white shadow-md ring-0">
                <div className="grid grid-cols-2 items-start justify-start gap-3 p-1">
                    <div className="col-span-1 mt-2 flex flex-col items-start justify-start">
                        <span className="text-main/40 mb-3 ml-2.5 text-xs font-black tracking-wide uppercase">
                            Work with us
                        </span>
                        {dropdownItems["Work with Us"].map((item, index) => (
                            <DropdownMenuItem
                                key={index}
                                className="group hover:bg-primary/10 hover:text-primary w-full cursor-pointer rounded p-0">
                                <Link
                                    href={item.href}
                                    className="text-main group-hover:text-primary flex h-12 items-center justify-start p-0 px-2.5 text-base font-medium tracking-wide transition-colors duration-150 ease-linear">
                                    {item.text}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </div>
                    <div className="border-main/20 col-span-1 mt-2 flex flex-col items-start justify-start border-l border-dashed px-2.5">
                        <span className="text-main/40 mb-3 ml-2.5 text-xs font-black tracking-wide uppercase">
                            Initiatives
                        </span>
                        {dropdownItems["Initiatives"].map((item, index) => (
                            <DropdownMenuItem
                                key={index}
                                className="group hover:bg-primary/10 hover:text-primary w-full cursor-pointer rounded p-0">
                                <Link
                                    href={item.href}
                                    className="text-main group-hover:text-primary flex h-12 items-center justify-start p-0 px-2.5 text-base font-medium tracking-wide transition-colors duration-150 ease-linear">
                                    {item.text}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </div>
                </div>
            </DropdownMenuContent>
        ),
    },
    { label: "Training & Courses", href: "https://training.caienvsus.org/" },
    { label: "Contact", href: "/contact" },
]

const DesktopHeader = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    return (
        <>
            <header id="header" className="fixed z-50 w-full">
                <TopHeader />
                <div className="border-main/10 w-full border-b bg-white px-48 py-6 max-lg:px-2">
                    <div className="grid grid-cols-2 md:grid-cols-5 items-center justify-between">
                        <Link href="/" className="col-span-1">
                            <Image
                                src="/assets/img/logo.webp"
                                priority
                                width={160}
                                height={50}
                                className="h-auto w-40 object-cover select-none"
                                alt="CAIES Foundation Logo"
                            />
                        </Link>
                        <div className="relative col-span-1 md:col-span-4 flex items-center justify-end gap-2">
                            <div className="hidden gap-6 max-lg:hidden md:flex">
                                {navItems.map((item, idx) =>
                                    item.dropdown ? (
                                        <DropdownMenu
                                            key={item.label}
                                            modal={false}
                                            onOpenChange={(open) =>
                                                setOpenDropdown(
                                                    open ? item.label : null
                                                )
                                            }>
                                            <DropdownMenuTrigger asChild>
                                                <div className="text-main hover:text-primary flex cursor-pointer items-center justify-center gap-1 text-base font-medium">
                                                    {item.label}
                                                    {openDropdown ===
                                                    item.label ? (
                                                        <FiChevronDown />
                                                    ) : (
                                                        <FiPlus />
                                                    )}
                                                </div>
                                            </DropdownMenuTrigger>
                                            {item.customContent ? (
                                                item.customContent
                                            ) : (
                                                <DropdownMenuContent className="z-50 min-w-44 rounded border-0 bg-white shadow-none ring-0">
                                                    <div className="flex flex-col items-start p-1">
                                                        {dropdownItems[
                                                            item.dropdown
                                                        ].map(
                                                            (
                                                                subItem,
                                                                subIdx
                                                            ) => (
                                                                <DropdownMenuItem
                                                                    key={subIdx}
                                                                    className="hover:bg-primary/10 hover:text-primary w-full rounded">
                                                                    <Link
                                                                        href={
                                                                            subItem.href
                                                                        }
                                                                        className="text-main hover:text-primary flex h-10 w-full items-center justify-start text-base font-medium tracking-wide transition-colors duration-150 ease-linear">
                                                                        {
                                                                            subItem.text
                                                                        }
                                                                    </Link>
                                                                </DropdownMenuItem>
                                                            )
                                                        )}
                                                    </div>
                                                </DropdownMenuContent>
                                            )}
                                        </DropdownMenu>
                                    ) : (
                                        <Link
                                            key={item.label}
                                            href={item.href ?? "/"}
                                            className="text-main hover:text-primary text-base font-medium">
                                            {item.label}
                                        </Link>
                                    )
                                )}
                            </div>
                            <div className="flex items-center">
                                <MobileHeader />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-white pt-36 max-lg:pt-28" />
        </>
    )
}

export default DesktopHeader
