import React from "react"
import {
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiX,
    SiYoutube,
} from "react-icons/si"
import { contactLinks } from "@/constants"
import Link from "next/link"

const TopHeader = () => {
    return (
        <div className="bg-primary w-full h-10 md:h-12 mx-auto flex items-center border-0 justify-center md:justify-between py-3">
            <div className="mx-auto flex max-w-6xl w-full items-center justify-between max-lg:px-2">
                <div className="flex items-center justify-between px-2 md:px-0 max-md:w-full gap-8 lg:gap-6">
                    {contactLinks.map(({ href, icon, text }) => (
                        <Link key={href} href={href}>
                            <p className="flex items-center text-sm text-neutral-50">
                                {React.createElement(icon, {
                                    className: "text-base text-neutral-50 mr-1",
                                })}
                                {text}
                            </p>
                        </Link>
                    ))}
                </div>

                <div id="social-links" className="hidden text-xs text-neutral-50 md:flex">
                    <ul className="flex items-center gap-1">
                        <li>
                            <a
                                href="https://twitter.com/CaiesF"
                                data-text="x"
                                target="_blank">
                                <i>
                                    <SiX />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/caies-foundation"
                                data-text="li"
                                target="_blank">
                                <i>
                                    <SiLinkedin />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/caiesfoundation/"
                                data-text="in"
                                target="_blank">
                                <i>
                                    <SiInstagram />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/caiesfoundation/"
                                data-text="fb"
                                target="_blank">
                                <i>
                                    <SiFacebook />
                                </i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UClV_dab_loUKR15sqD1EYeA"
                                data-text="yt"
                                target="_blank">
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
