import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DropdownProps } from "@/types";
import { contactLinks, dropdownItems } from "@/constants";
import MobileHeader from "./mobile-header";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const Dropdown = ({ label, items, ping }: DropdownProps) => (
    <div className="group relative">
        <div className="flex gap-1">
            <li className="cursor-pointer list-none text-base text-main font-medium hover:text-primary">
                {label}
            </li>
            {ping && (
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
            )}
        </div>
        <ul className="invisible absolute -left-20 top-[350%] z-50 w-62 bg-white opacity-0 transition-all group-hover:visible group-hover:top-[200%] group-hover:opacity-100">
            {items.map((item: { href: string; text: string }) => (
                <li key={item.href} className="border-b border-main/10 last:border-0">
                    <Link
                        href={item.href}
                        className="block px-4 text-base font-medium leading-[45px] text-main hover:bg-primary hover:text-white"
                    >
                        {item.text}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Header = () => (
    <>
        <header id="header" className="fixed z-50 w-full">
            <div className="flex w-full flex-row bg-primary px-48 py-3 text-white max-lg:px-2">
                <div className="flex flex-1 items-center gap-6 max-lg:gap-8 max-lg:overflow-x-auto">
                    {contactLinks.map(({ href, icon, text }) => (
                        <Link key={href} href={href}>
                            <p className="flex items-center font-bold text-white text-sm">
                                {React.createElement(icon, { className: "text-lg text-white mr-1" })} {text}
                            </p>
                        </Link>
                    ))}
                </div>
                <div id="social-links" className="max-lg:hidden">
                    <div
                        id="social-links"
                        className="font-medium text-white">
                        <ul className="flex items-center">
                            <li>
                                <a
                                    href="https://twitter.com/CaiesF"
                                    data-text="x">
                                    <i>
                                        <SiX />
                                    </i>
                                </a>
                            </li>
                            {/* <li>
                                    <a href="/#" data-text="li">
                                        <i>
                                            <SiLinkedin />
                                        </i>
                                    </a>
                                </li> */}
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
                                        <SiFacebook />
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

            <div className="w-full border-b border-main/10 bg-white px-48 py-6 max-lg:px-2">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/assets/img/logo.webp" priority width={0} sizes="100vw" className="h-auto w-40 object-cover select-none" height={0} quality={100} alt="CAIES Foundation Logo" />
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="hidden gap-6 max-lg:hidden md:flex">
                            <Link href="/" className="text-base font-medium text-main hover:text-primary">Home</Link>
                            {Object.entries(dropdownItems).map(([label, items]) => (
                                <Dropdown key={label} label={label} items={items} ping={label === "Initiatives"} />
                            ))}
                            <Link href="/research-and-development" className="text-base font-medium text-main hover:text-primary">Research & Development</Link>
                            <Link href="/publications" className="text-base font-medium text-main hover:text-primary">Publications</Link>
                            <Link href="/contact" className="text-base font-medium text-main hover:text-primary">Contact</Link>
                        </div>
                        <button className="hidden rounded bg-primary px-4 py-3 text-base font-medium text-white max-lg:hidden">
                            Support Us
                        </button>
                        <MobileHeader />
                    </div>
                </div>
            </div>
        </header>
        <div className="bg-white pt-36 max-lg:pt-28" />
    </>
);

export default Header;
