"use client"
import React, { useEffect, useRef } from "react"
import { SiTwitter, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si"
import { ImFacebook } from "react-icons/im"
import Link from "next/link"

const Footer = () => {
    const hitCounterRef = useRef<HTMLLIElement | null>(null)

    useEffect(() => {
        if (hitCounterRef.current) {
            const script = document.createElement("script")
            script.src = `https://visitorshitcounter.com/js/hitCounter.js?v=${Date.now()}`
            script.async = true
            hitCounterRef.current.appendChild(script)

            // Cleanup the script when component unmounts
            return () => {
                if (hitCounterRef.current) {
                    // Remove the script tag safely
                    hitCounterRef.current.innerHTML = ""  // Clean up by clearing the content
                }
            }
        }
    }, [])

    return (
        <section
            id="footer"
            className="flex w-full flex-col items-center justify-between gap-2 bg-neutral-900 p-8 sm:flex-row sm:px-48">
            <div id="copyright" className="font-normal text-white">
                <h3 className="text-base">&#169; 2025 CAIES Foundation</h3>
            </div>
            <div id="social-links" className="font-normal text-white">
                <ul className="flex items-center">
                    <li>
                        <a href="https://twitter.com/CaiesF" data-text="tw">
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
                    <li ref={hitCounterRef}>
                        <Link
                            className="hitCounter"
                            href="https://visitorshitcounter.com/"
                            target="_blank"
                            title="Hit counter"
                            data-name="9a4cb12dd0b0d75c84d1dd5fb19467e6|5|external|1589|#ffffff|#171717|small|s-hit">
                            Hit Counter
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Footer
