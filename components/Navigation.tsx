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
            <header id="header" className="fixed z-[10] w-full">
                <div
                    id="top-header"
                    className="bg-main flex w-full flex-row px-48 py-[10px] text-white max-lg:px-2">
                    <div
                        id="contact"
                        className="flex flex-1 items-center gap-6 max-lg:gap-8 max-lg:overflow-x-auto">
                        <a href="mailto:contact@caienvsus.org">
                            <h1 className="flex items-center gap-1 text-[14px]">
                                <IoIosMail className="text-[18px]" />
                                contact@caienvsus.org
                            </h1>
                        </a>
                        <a href="tel:+917739711077">
                            <h1 className="flex items-center gap-1 text-[14px]">
                                <MdOutlinePhoneAndroid className="text-[14px]" />
                                +917739711077
                            </h1>
                        </a>
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
                                    className="hover:text-main text-base font-medium">
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="hover:text-main text-base font-medium">
                                    About Us
                                </Link>
                                <Link
                                    href="/team"
                                    className="hover:text-main text-base font-medium">
                                    Team
                                </Link>
                                {/* <Link href="/awards" className="hover:text-main text-base font-medium">Awards</Link> */}
                                <Link
                                    href="/publications"
                                    className="hover:text-main text-base font-medium">
                                    Publications
                                </Link>
                                <Link
                                    href="/contact"
                                    className="hover:text-main text-base font-medium">
                                    Contact
                                </Link>
                                <div className="group relative">
                                    <div className="flex gap-1">
                                        <li className="hover:text-main cursor-pointer list-none text-base font-medium">
                                            Initiatives
                                        </li>
                                        <span className="relative flex h-2.5 w-2.5 items-center justify-between">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE5D00B3] opacity-75"></span>
                                            <span className="bg-main relative inline-flex h-2.5 w-2.5 rounded-full"></span>
                                        </span>
                                    </div>
                                    <ul className="invisible absolute left-0 top-[300%] z-[999] h-auto w-[200px] bg-white opacity-0 transition-all duration-300 ease-linear group-hover:visible group-hover:top-[200%] group-hover:opacity-100">
                                        <li className="relative block border-b border-gray-200 last:border-0">
                                            <Link
                                                href="/initiatives/research-academy"
                                                className="hover:text-main block px-4 text-base font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear">
                                                Research Academy
                                            </Link>
                                            <Link
                                                href="/initiatives/ai-for-scientist"
                                                className="hover:text-main block px-4 text-base font-medium leading-[45px] text-neutral-800 transition-colors duration-300 ease-linear">
                                                AI For Scientists
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="bg-main rounded px-4 py-3 text-base font-medium text-white max-lg:hidden">
                                Connect With Us
                            </button>
                            <MobileNavigation />
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-slate-50 pt-[8.8rem] max-lg:pt-[7rem]"></div>
        </>
    )
}

export default Navigation
