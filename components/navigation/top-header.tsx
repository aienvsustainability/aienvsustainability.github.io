import React from "react"
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si"
import { contactLinks } from "@/constants"
import Link from "next/link"

const TopHeader = () => {
    return (
        <div className="bg-primary flex w-full flex-row px-48 py-3 text-white max-lg:px-2">
            <div className="flex flex-1 items-center gap-6 max-lg:gap-8 max-lg:overflow-x-auto">
                {contactLinks.map(({ href, icon, text }) => (
                    <Link key={href} href={href}>
                        <p className="flex items-center text-sm font-bold text-white">
                            {React.createElement(icon, {
                                className: "text-lg text-white mr-1",
                            })}{" "}
                            {text}
                        </p>
                    </Link>
                ))}
            </div>
            <div id="social-links" className="max-lg:hidden">
                <div id="social-links" className="font-medium text-white">
                    <ul className="flex items-center">
                        <li>
                            <a href="https://twitter.com/CaiesF" data-text="x">
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
    )
}

export default TopHeader
