import React from "react"
import Image from "next/image"
import Link from "next/link"
import { IoIosMail } from "react-icons/io"
import { MdOutlinePhoneAndroid } from "react-icons/md"
import { SiTwitter, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si"
import { ImFacebook } from "react-icons/im"
import MobileNavigation from "./MobileNavigation"

const Navigation = () => {
    return (
        <>
            <header id="header" className="fixed z-10 w-full">
                <div
                    id="top-header"
                    className="flex w-full flex-row bg-main px-48 py-3 text-white max-lg:px-2">
                    <div
                        id="contact"
                        className="flex flex-1 items-center gap-6 max-lg:gap-8 max-lg:overflow-x-auto">
                        <Link href="mailto:contact@caienvsus.org">
                            <p className="flex items-center gap-1 text-sm">
                                <IoIosMail className="text-lg" />
                                contact@caienvsus.org
                            </p>
                        </Link>
                        <Link href="tel:+917739711077">
                            <p className="flex items-center gap-1 text-sm">
                                <MdOutlinePhoneAndroid className="text-sm" />
                                +917739711077
                            </p>
                        </Link>
                    </div>
                    <div id="social-links" className="max-lg:hidden">
                        <div
                            id="social-links"
                            className="font-medium text-white">
                            <ul className="flex items-center">
                                <li>
                                    <a
                                        href="https://twitter.com/CaiesF"
                                        data-text="tw">
                                        <i>
                                            <SiTwitter />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" data-text="li">
                                        <i>
                                            <SiLinkedin />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/caiesfoundation/"
                                        data-text="in">
                                        <i>
                                            <SiInstagram />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/caiesfoundation/"
                                        data-text="fb">
                                        <i>
                                            <ImFacebook />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/channel/UClV_dab_loUKR15sqD1EYeA"
                                        data-text="yt">
                                        <i>
                                            <SiYoutube />
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    id="bottom-header"
                    className="w-full border-b bg-white px-48 py-6 max-lg:px-2">
                    <div
                        id="header-content"
                        className="flex flex-row items-center justify-between">
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
                        <div
                            id="menu"
                            className="flex items-center justify-between gap-6">
                            <div className="relative flex gap-6 max-lg:hidden">
                                <Link
                                    href="/"
                                    className="text-base font-medium text-neutral-800 hover:text-main">
                                    Home
                                </Link>
                                <div className="group relative">
                                    <div className="flex gap-1">
                                        <li className="cursor-pointer list-none text-base font-medium hover:text-main">
                                            About Us
                                        </li>
                                    </div>
                                    <ul className="invisible absolute -left-20 top-[300%] z-[999] h-auto w-[250px] bg-white opacity-0 transition-all duration-300 ease-linear group-hover:visible group-hover:top-[200%] group-hover:opacity-100">
                                        <li className="relative block border-b border-gray-200 last:border-0">
                                            <Link
                                                href="/about/our-vision"
                                                className="block px-4 text-base font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear hover:bg-main hover:text-white">
                                                Our Vision
                                            </Link>
                                        </li>
                                        <li className="relative block border-b border-gray-200 last:border-0">
                                            <Link
                                                href="/about/our-goals"
                                                className="block px-4 text-base font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear hover:bg-main hover:text-white">
                                                Our Goals
                                            </Link>
                                        </li>
                                        <li className="relative block border-b border-gray-200 last:border-0">
                                            <Link
                                                href="/about/core-members"
                                                className="block px-4 text-base font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear hover:bg-main hover:text-white">
                                                Core Members
                                            </Link>
                                        </li>
                                        <li className="relative block border-b border-gray-200 last:border-0">
                                            <Link
                                                href="/about/our-team"
                                                className="block px-4 text-base font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear hover:bg-main hover:text-white">
                                                Our Team
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* <Link href="/awards" className="hover:text-main text-base font-medium text-neutral-800">Awards</Link> */}
                                <Link
                                    href="/publications"
                                    className="text-base font-medium text-neutral-800 hover:text-main">
                                    Publications
                                </Link>
                                <div className="group relative">
                                    <div className="flex gap-1">
                                        <li className="cursor-pointer list-none text-base font-medium hover:text-main">
                                            Initiatives
                                        </li>
                                        <span className="relative flex h-2.5 w-2.5 items-center justify-between">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE5D00B3] opacity-75"></span>
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-main"></span>
                                        </span>
                                    </div>
                                    <ul className="invisible absolute -left-20 top-[300%] z-[999] h-auto w-[250px] bg-white opacity-0 transition-all duration-300 ease-linear group-hover:visible group-hover:top-[200%] group-hover:opacity-100">
                                        <li className="relative block border-b border-gray-200 last:border-0">
                                            <Link
                                                href="/initiatives/research-academy"
                                                className="block px-4 text-base font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear hover:bg-main hover:text-white">
                                                Research Academy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/initiatives/ai-for-scientist"
                                                className="block px-4 text-base font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear hover:bg-main hover:text-white">
                                                AI For Scientists
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <Link
                                    href="/contact"
                                    className="text-base font-medium text-neutral-800 hover:text-main">
                                    Contact
                                </Link>
                            </div>
                            <button className="rounded bg-main px-4 py-3 text-base font-medium text-white max-lg:hidden">
                                Connect With Us
                            </button>
                            <MobileNavigation />
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-slate-50 pt-36 max-lg:pt-28"></div>
        </>
    )
}

export default Navigation
