import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { IoIosMail } from 'react-icons/io';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { SiTwitter, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import MobileNav from './MobileNav';


const HeaderBar = () => {

    return (
        <>
            <header id="header" className="w-full fixed z-[10]">
                <div id="top-header" className="w-full max-lg:px-2 px-[12rem] text-white py-[10px] bg-[#fe5f00] flex flex-row">
                    <div id="contact" className="flex max-lg:overflow-x-auto flex-1 gap-6 max-lg:gap-8 items-center">
                        <a href="mailto:contact@caienvsus.org"><h3 className="text-[14px] flex gap-1 items-center"><IoIosMail className="text-[18px]" />contact@caienvsus.org</h3></a>
                        <a href="tel:+917739711077"><h3 className="text-[14px] flex gap-1 items-center"><MdOutlinePhoneAndroid className="text-[14px]" />+917739711077</h3></a>
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
                            <Image src="/assets/img/logo.svg" width={150} height={0} alt="logo" />
                        </div>
                        <div id="menu" className="flex items-center justify-between gap-6">
                            <div className="max-lg:hidden flex gap-6">
                                <Link href="/" className="hover:text-[#FE5F00] text-[15px] font-[500]">Home</Link>
                                <Link href="/about" className="hover:text-[#FE5F00] text-[15px] font-[500]">About Us</Link>
                                <Link href="/team" className="hover:text-[#FE5F00] text-[15px] font-[500]">Team</Link>
                                <Link href="/awards" className="hover:text-[#FE5F00] text-[15px] font-[500]">Awards</Link>
                                <Link href="/publications" className="hover:text-[#FE5F00] text-[15px] font-[500]">Publications</Link>
                                <Link href="/contact" className="hover:text-[#FE5F00] text-[15px] font-[500]">Contact</Link>
                            </div>
                            <button className="bg-[#fe5f00] text-[15px] font-[500] max-lg:hidden text-white px-4 py-3 rounded">Connect With Us</button>
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </header>
            <div className="pt-[8.8rem] max-lg:pt-[7rem]"></div>
        </>
    );
}

export default HeaderBar;