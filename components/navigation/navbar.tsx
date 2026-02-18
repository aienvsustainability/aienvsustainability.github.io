"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon, XIcon, ChevronDown } from "lucide-react"
import { dropdownItems } from "@/constants"
import TopHeader from "@/components/navigation/top-header"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface NavItem {
    label: string
    href?: string
    dropdown?: string
}

const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", dropdown: "About Us" },
    { label: "Gallery", href: "/gallery" },
    { label: "Our Work", dropdown: "Our Work" },
    { label: "Get Involved", dropdown: "Get Involved" },
    { label: "Training & Courses", href: "https://training.caienvsus.org/" },
    { label: "Contact", href: "/contact" },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    return (
        <header className="sticky top-0 z-50 w-full bg-white">
            <TopHeader />
            <nav className="relative w-full border-b border-neutral-200 bg-white px-4 py-4">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/assets/img/logo.webp"
                            alt="CAIES Foundation Logo"
                            width={140}
                            height={40}
                        />
                    </Link>
                    <div className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navItems.map((item) =>
                                    item.dropdown ? (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuTrigger className="cursor-pointer bg-transparent text-sm font-medium text-neutral-900 uppercase hover:text-orange-500 data-[state=open]:bg-transparent">
                                                {item.label}
                                            </NavigationMenuTrigger>

                                            {item.label === "Get Involved" ? (
                                                <NavigationMenuContent className="shadow-0 min-w-125 rounded-xl border border-neutral-200 bg-white p-6">
                                                    <div className="grid grid-cols-2 gap-8">
                                                        <div>
                                                            <p className="mb-3 px-2 text-xs font-bold text-neutral-400 uppercase">
                                                                Work with Us
                                                            </p>
                                                            {dropdownItems[
                                                                "Work with Us"
                                                            ].map((sub, i) => (
                                                                <NavigationMenuLink
                                                                    key={i}
                                                                    asChild>
                                                                    <Link
                                                                        href={
                                                                            sub.href
                                                                        }
                                                                        className="block rounded-md px-2 py-2 text-sm hover:bg-neutral-100">
                                                                        {
                                                                            sub.text
                                                                        }
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>

                                                        <div>
                                                            <p className="mb-3 px-2 text-xs font-bold text-neutral-400 uppercase">
                                                                Initiatives
                                                            </p>
                                                            {dropdownItems[
                                                                "Initiatives"
                                                            ].map((sub, i) => (
                                                                <NavigationMenuLink
                                                                    key={i}
                                                                    asChild>
                                                                    <Link
                                                                        href={
                                                                            sub.href
                                                                        }
                                                                        className="block rounded-md px-2 py-2 text-sm hover:bg-neutral-100">
                                                                        {
                                                                            sub.text
                                                                        }
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </NavigationMenuContent>
                                            ) : (
                                                <NavigationMenuContent className="shadow-0 rounded-xl border border-neutral-200 bg-white p-4">
                                                    <div
                                                        className={`grid gap-2 ${
                                                            dropdownItems[
                                                                item.dropdown
                                                            ].length > 2
                                                                ? "grid-cols-2"
                                                                : "grid-cols-1"
                                                        }`}>
                                                        {dropdownItems[
                                                            item.dropdown
                                                        ].map((sub, i) => (
                                                            <NavigationMenuLink
                                                                key={i}
                                                                asChild>
                                                                <Link
                                                                    href={
                                                                        sub.href
                                                                    }
                                                                    className="block rounded-md px-2 py-2 text-sm hover:bg-neutral-100">
                                                                    {sub.text}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </NavigationMenuContent>
                                            )}
                                        </NavigationMenuItem>
                                    ) : (
                                        <NavigationMenuItem key={item.label}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={item.href ?? "/"}
                                                    className="font-medium text-sm text-neutral-900 uppercase hover:text-orange-500">
                                                    {item.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="relative flex h-8 w-8 flex-col items-center justify-center md:hidden">
                        <span
                            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                                isMenuOpen ? "rotate-45" : "-translate-y-2"
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                                isMenuOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                                isMenuOpen ? "-rotate-45" : "translate-y-2"
                            }`}
                        />
                    </button>
                </div>

                <div
                    className={`shadow-0 absolute top-full left-0 max-h-120 min-h-90 w-full overflow-y-auto border-b border-neutral-200 bg-white/95 shadow-none backdrop-blur transition-all duration-300 ease-linear md:hidden ${
                        isMenuOpen
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                    }`}>
                    <div className="flex flex-col gap-4 p-6">
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <div key={item.label}>
                                    <button
                                        className="flex w-full items-center justify-between py-2 text-base font-medium tracking-tight text-neutral-900 uppercase"
                                        onClick={() =>
                                            setOpenDropdown(
                                                openDropdown === item.label
                                                    ? null
                                                    : item.label
                                            )
                                        }>
                                        {item.label}
                                        <ChevronDown
                                            className={`h-4 w-4 text-neutral-500 transition-transform ${
                                                openDropdown === item.label
                                                    ? "rotate-360"
                                                    : "-rotate-90"
                                            }`}
                                        />
                                    </button>

                                    {openDropdown === item.label && (
                                        <div className="mt-2 flex flex-col gap-2">
                                            {item.label === "Get Involved" ? (
                                                <>
                                                    {dropdownItems[
                                                        "Work with Us"
                                                    ].map((sub, i) => (
                                                        <Link
                                                            key={i}
                                                            href={sub.href}
                                                            onClick={() =>
                                                                setIsMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                            className="flex w-full items-center justify-between border-b border-neutral-100 py-2 text-base font-medium tracking-tight text-neutral-600 uppercase">
                                                            {sub.text}
                                                        </Link>
                                                    ))}
                                                    {dropdownItems[
                                                        "Initiatives"
                                                    ].map((sub, i) => (
                                                        <Link
                                                            key={i}
                                                            href={sub.href}
                                                            onClick={() =>
                                                                setIsMenuOpen(
                                                                    false
                                                                )
                                                            }
                                                            className="flex w-full items-center justify-between border-b border-neutral-100 py-2 text-base font-medium tracking-tight text-neutral-600 uppercase">
                                                            {sub.text}
                                                        </Link>
                                                    ))}
                                                </>
                                            ) : (
                                                dropdownItems[
                                                    item.dropdown
                                                ].map((sub, i) => (
                                                    <Link
                                                        key={i}
                                                        href={sub.href}
                                                        onClick={() =>
                                                            setIsMenuOpen(false)
                                                        }
                                                        className="flex w-full items-center justify-between border-b border-neutral-100 py-2 text-base font-medium tracking-tight text-neutral-600 uppercase">
                                                        {sub.text}
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.label}
                                    href={item.href ?? "/"}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex w-full items-center justify-between py-2 text-base font-medium tracking-tight text-neutral-900 uppercase">
                                    {item.label}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}
