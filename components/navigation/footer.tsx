"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { footerLinks, socialLinks } from "@/constants"

const Footer = () => {
    return (
        <footer className="border-t border-main/10 bg-white py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
                    <div className="col-span-2">
                        <Link href="/">
                            <Image src="/assets/img/logo.webp" width={0} height={0} sizes="100vw" className="w-40 h-auto object-cover" alt="CAIES Foundation Logo Image" />
                        </Link>
                        <p className="mt-4 max-w-xs text-sm font-medium text-secondary/70">
                            Registered under 12A, 80G, and CSR (Indian Income Tax Laws) and TM (Trademark Registration).
                        </p>
                        <ul className="mt-6 flex space-x-4 text-main">
                            {socialLinks.map(({ href, icon: Icon }, i) => (
                                <li key={i}>
                                    <Link
                                        href={href}
                                        className="text-xl transition-all duration-500 hover:rotate-[360deg] hover:scale-105 hover:text-primary"
                                    >
                                        <Icon />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {footerLinks.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="font-bold text-main">{section.title}</h3>
                            <ul className="mt-4 space-y-2">
                                {section.links.map(({ href, text }, i) => (
                                    <li key={i}>
                                        <Link
                                            href={href}
                                            className="text-secondary hover:text-primary font-normal"
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex flex-col items-center justify-between border-t border-main/10 pt-6 md:flex-row">
                    <p className="mb-4 text-sm font-medium text-secondary/70 md:mb-0">
                        © {new Date().getFullYear()} CAIES Foundation. All rights reserved.
                    </p>
                    <div className="justify-between items-center flex gap-5">
                        <Link href="#" className="mb-4 text-sm font-medium text-secondary/70 md:mb-0 capitalize">Privacy Policy</Link>
                        <Link href="#" className="mb-4 text-sm font-medium text-secondary/70 md:mb-0 capitalize">Terms of Services</Link>
                    </div>
                    <Image
                        src="https://hits.sh/caienvsus.org.svg?style=for-the-badge&label=Visitor%20Count&color=FE5F00&labelColor=000000"
                        alt="Visitor Count"
                        width={0}
                        height={0}
                        sizes="100vw"
                        quality={100}
                        priority
                        className="w-44 h-8 object-contain"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer
