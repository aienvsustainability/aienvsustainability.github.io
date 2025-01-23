"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
    FaFacebook,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="border border-t border-neutral-100 bg-white py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2">
                            <div id="logo">
                                <Link href="/">
                                    <Image
                                        src="/assets/img/logo.svg"
                                        width={150}
                                        height={0}
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <p className="mt-4 max-w-xs text-sm font-medium text-neutral-600/55">
                            Registered under 12A, 80G, and CSR (Indian Income
                            Tax Laws) and TM (Trademark Registration).
                        </p>
                        <div className="mt-6 flex items-center justify-start">
                            <ul className="flex items-center space-x-4 text-neutral-800">
                                <li>
                                    <Link
                                        className="cursor-pointer text-xl transition-all duration-500 ease-in-out hover:rotate-[360deg] hover:scale-105 hover:text-main"
                                        href="https://www.facebook.com/caiesfoundation/">
                                        <FaFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="cursor-pointer text-xl transition-all duration-500 ease-in-out hover:rotate-[360deg] hover:scale-105 hover:text-main"
                                        href="https://www.instagram.com/caiesfoundation/">
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="cursor-pointer text-xl transition-all duration-500 ease-in-out hover:rotate-[360deg] hover:scale-105 hover:text-main"
                                        href="https://twitter.com/CaiesF">
                                        <FaXTwitter />
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link className="text-xl hover:scale-105 hover:text-main hover:rotate-[360deg] transition-all ease-in-out duration-500 cursor-pointer" href="#"><FaLinkedin /></Link>
                                    </li> */}
                                <li>
                                    <Link
                                        className="cursor-pointer text-xl transition-all duration-500 ease-in-out hover:rotate-[360deg] hover:scale-105 hover:text-main"
                                        href="https://www.youtube.com/channel/UClV_dab_loUKR15sqD1EYeA">
                                        <FaYoutube />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="cursor-default font-bold text-neutral-800">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about/core-members"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/publications"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Publications
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="cursor-default font-bold text-neutral-800">
                            About Us
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/about/our-vision"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Our Vision
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about/our-goals"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Our Goals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about/core-members"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Core Members
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about/our-team"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Our Teams
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="cursor-default font-bold text-neutral-800">
                            Initiatives
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/initiatives/ai-for-scientist"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    AI For Scientists
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/initiatives/research-academy"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Research Academy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="cursor-default font-bold text-neutral-800">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Terms of service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="font-normal text-neutral-600 hover:text-main">
                                    Privacy policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 flex flex-col items-center justify-between border-t border-neutral-200 pt-6 md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <p className="text-center text-sm font-medium text-neutral-600/55">
                            © 2025 CAIES Foundation. All rights reserved.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcaienvsus.org&count_bg=%23FE5F00&title_bg=%23171717&icon=&icon_color=%23E7E7E7&title=Visitors+Count&edge_flat=true"
                            alt="visitor counter"
                            width={200}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
