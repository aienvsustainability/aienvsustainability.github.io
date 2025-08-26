"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { footerLinks, socialLinks } from "@/constants"

const Footer = () => {
    return (
        <footer className="border-main/10 border-t bg-white py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
                    <div className="col-span-2">
                        <Link href="/">
                            <Image
                                src="/assets/img/logo.webp"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="pointer-events-none h-auto w-40 object-cover select-none"
                                alt="CAIES Foundation Logo Image"
                            />
                        </Link>
                        <p className="text-secondary/70 mt-4 max-w-xs text-sm font-medium">
                            Registered under 12A, 80G, and CSR (Indian Income
                            Tax Laws) and TM (Trademark Registration).
                        </p>
                        <ul className="text-main mt-6 flex space-x-4">
                            {socialLinks.map(({ href, icon: Icon }, i) => (
                                <li key={i}>
                                    <Link
                                        href={href}
                                        className="hover:text-primary text-xl transition-all duration-500 hover:scale-105 hover:rotate-[360deg]">
                                        <Icon />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {footerLinks.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-main pointer-events-none font-black select-none">
                                {section.title}
                            </h3>
                            <ul className="mt-4 space-y-2">
                                {section.links.map(({ href, text }, i) => (
                                    <li key={i}>
                                        <Link
                                            href={href}
                                            className="text-secondary hover:text-primary font-medium tracking-wide">
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-main/10 mt-10 flex flex-col items-center justify-between border-t pt-6 md:flex-row">
                    <p className="text-secondary/70 mb-4 text-sm font-medium md:mb-0">
                        © {new Date().getFullYear()} CAIES Foundation. All
                        rights reserved.
                    </p>
                    <div className="flex items-center justify-between gap-5">
                        <Link
                            href="#"
                            className="text-secondary/70 mb-4 text-sm font-medium capitalize md:mb-0">
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-secondary/70 mb-4 text-sm font-medium md:mb-0">
                            Terms of Services
                        </Link>
                    </div>
                    <Image
                        src="https://hits.sh/caienvsus.org.svg?style=for-the-badge&label=Visitor%20Count&color=FE5F00&labelColor=000000"
                        alt="Visitor Count"
                        width={0}
                        height={0}
                        sizes="100vw"
                        quality={100}
                        priority
                        className="pointer-events-none h-8 w-44 object-contain select-none"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
