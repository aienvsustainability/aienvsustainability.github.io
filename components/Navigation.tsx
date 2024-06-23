import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { IoIosMail } from 'react-icons/io';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { SiTwitter, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
    return (
        <>
            <header id="header" className="w-full fixed z-[10]">
                <div id="top-header" className="w-full max-lg:px-2 px-[12rem] text-white py-[10px] bg-[#fe5f00] flex flex-row">
                    <div id="contact" className="flex max-lg:overflow-x-auto flex-1 gap-6 max-lg:gap-8 items-center">
                        <a href="mailto:contact@caienvsus.org">
                            <h1 className="text-[14px] flex gap-1 items-center"><IoIosMail className="text-[18px]" />contact@caienvsus.org</h1>
                        </a>
                        <a href="tel:+917739711077">
                            <h1 className="text-[14px] flex gap-1 items-center"><MdOutlinePhoneAndroid className="text-[14px]" />+917739711077</h1>
                        </a>
                    </div>
                    <div id="social-links" className="max-lg:hidden">
                        <div id="social-links" className="text-white font-medium">
                            <ul className="flex items-center">
                                <li><a href="https://twitter.com/CaiesF" data-text="tw"><i><SiTwitter /></i></a></li>
                                <li><a href="/#" data-text="li"><i><SiLinkedin /></i></a></li>
                                <li><a href="https://www.instagram.com/caiesfoundation/" data-text="in"><i><SiInstagram /></i></a></li>
                                <li><a href="https://www.facebook.com/caiesfoundation/" data-text="fb"><i><ImFacebook /></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UClV_dab_loUKR15sqD1EYeA" data-text="yt"><i><SiYoutube /></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="bottom-header" className="bg-white w-full py-6 max-lg:px-2 px-[12rem] border-b">
                    <div id="header-content" className="flex justify-between items-center flex-row">
                        <div id="logo">
                            <Link href="/">
                                <Image src="/assets/img/logo.svg" width={150} height={0} alt="logo" />
                            </Link>
                        </div>
                        <div id="menu" className="flex items-center justify-between gap-6">
                            <div className="max-lg:hidden flex gap-6 relative">
                                <Link href="/" className="hover:text-[#FE5F00] text-[15px] font-[500]">Home</Link>
                                <Link href="/about" className="hover:text-[#FE5F00] text-[15px] font-[500]">About Us</Link>
                                <Link href="/team" className="hover:text-[#FE5F00] text-[15px] font-[500]">Team</Link>
                                <Link href="/awards" className="hover:text-[#FE5F00] text-[15px] font-[500]">Awards</Link>
                                <Link href="/publications" className="hover:text-[#FE5F00] text-[15px] font-[500]">Publications</Link>
                                <Link href="/contact" className="hover:text-[#FE5F00] text-[15px] font-[500]">Contact</Link>
                                {/* <div className="relative group">
                                    <div className="flex gap-1">
                                        <li className="hover:text-[#FE5F00] text-[15px] font-[500] cursor-pointer list-none">Initiatives</li>
                                        <span className="relative flex h-2.5 w-2.5 items-center justify-between">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FE5D00B3] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FE5F00]"></span>
                                        </span>
                                    </div>
                                    <ul className="absolute left-0 top-[300%] bg-white w-[200px] h-auto invisible opacity-0 transition-all duration-300 ease-linear z-[999] group-hover:visible group-hover:opacity-100 group-hover:top-[200%]">
                                        <li className="border-b border-gray-200 last:border-0 block relative">
                                            <Link href="/phdacademy" className="block leading-[45px] px-4 text-[15px] font-medium text-[#322F20] transition-colors duration-300 ease-linear hover:text-[#FE5F00]">PhD Academy</Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                            <button className="bg-[#fe5f00] text-[15px] font-[500] max-lg:hidden text-white px-4 py-3 rounded">Connect With Us</button>
                            <MobileNavigation />
                        </div>
                    </div>
                </div>
            </header>
            <div className="pt-[8.8rem] max-lg:pt-[7rem]"></div>
        </>
    );
}

export default Navigation;