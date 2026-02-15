"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { dropdownItems } from "@/constants"
import MobileHeader from "./mobile-header"
import TopHeader from "./top-header"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", dropdown: "About Us" },
    { label: "Our Work", dropdown: "Our Work" },
    { label: "Get Involved", dropdown: "Get Involved" },
    { label: "Training & Courses", href: "https://training.caienvsus.org/" },
    { label: "Contact", href: "/contact" },
]

const DesktopHeader = () => {
    return (
        <header id="header" className="sticky top-0 z-50 w-full">
            <TopHeader />

            <div className="flex h-20 w-full items-center justify-between border-b border-neutral-900/10 bg-neutral-50 px-48 py-6 max-lg:px-2">
                <div className="grid w-full grid-cols-2 items-center md:grid-cols-5">
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

                    <div className="relative col-span-1 flex items-center justify-end md:col-span-4">
                        <div className="hidden md:flex">
                            <NavigationMenu>
                                <NavigationMenuList className="">
                                    {navItems.map((item) =>
                                        item.dropdown ? (
                                            <NavigationMenuItem
                                                key={item.label}>
                                                <NavigationMenuTrigger className="hover:text-primary cursor-pointer bg-transparent text-sm text-neutral-900 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                                                    {item.label}
                                                </NavigationMenuTrigger>
                                                {item.label ===
                                                "Get Involved" ? (
                                                    <NavigationMenuContent className="shadow-0 min-w-120 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                                                        <div className="grid grid-cols-2 gap-6">
                                                            <div>
                                                                <span className="mb-4 block px-2 text-xs font-black tracking-wide text-neutral-900/40 uppercase">
                                                                    Work with us
                                                                </span>

                                                                {dropdownItems[
                                                                    "Work with Us"
                                                                ].map(
                                                                    (
                                                                        subItem,
                                                                        index
                                                                    ) => (
                                                                        <NavigationMenuLink
                                                                            key={
                                                                                index
                                                                            }
                                                                            asChild>
                                                                            <Link
                                                                                href={
                                                                                    subItem.href
                                                                                }
                                                                                className="block rounded-md p-2 text-base text-neutral-700 hover:bg-neutral-400/10">
                                                                                {
                                                                                    subItem.text
                                                                                }
                                                                            </Link>
                                                                        </NavigationMenuLink>
                                                                    )
                                                                )}
                                                            </div>

                                                            <div>
                                                                <span className="mb-4 block px-2 text-xs font-black tracking-wide text-neutral-900/40 uppercase">
                                                                    Initiatives
                                                                </span>

                                                                {dropdownItems[
                                                                    "Initiatives"
                                                                ].map(
                                                                    (
                                                                        subItem,
                                                                        index
                                                                    ) => (
                                                                        <NavigationMenuLink
                                                                            key={
                                                                                index
                                                                            }
                                                                            asChild>
                                                                            <Link
                                                                                href={
                                                                                    subItem.href
                                                                                }
                                                                                className="block rounded-md p-2 text-base text-neutral-700 hover:bg-neutral-400/10">
                                                                                {
                                                                                    subItem.text
                                                                                }
                                                                            </Link>
                                                                        </NavigationMenuLink>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </NavigationMenuContent>
                                                ) : (
                                                    <NavigationMenuContent>
                                                        <ul
                                                            className={`grid min-w-60 gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 ${
                                                                dropdownItems[
                                                                    item
                                                                        .dropdown
                                                                ].length > 2
                                                                    ? "grid-cols-2"
                                                                    : "grid-cols-1"
                                                            }`}>
                                                            {dropdownItems[
                                                                item.dropdown
                                                            ].map(
                                                                (
                                                                    subItem,
                                                                    index
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }>
                                                                        <NavigationMenuLink
                                                                            asChild>
                                                                            <Link
                                                                                href={
                                                                                    subItem.href
                                                                                }
                                                                                className="block rounded-md p-2 text-base text-neutral-700 hover:bg-neutral-400/10">
                                                                                {
                                                                                    subItem.text
                                                                                }
                                                                            </Link>
                                                                        </NavigationMenuLink>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </NavigationMenuContent>
                                                )}
                                            </NavigationMenuItem>
                                        ) : (
                                            <NavigationMenuItem
                                                key={item.label}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={item.href ?? "/"}
                                                        className="hover:text-primary text-sm text-neutral-900">
                                                        {item.label}
                                                    </Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        )
                                    )}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        <div className="flex items-center md:hidden">
                            <MobileHeader />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DesktopHeader
