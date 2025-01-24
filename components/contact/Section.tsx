"use client"

import React, { useEffect, useState } from "react"
import { FaMobileRetro } from "react-icons/fa6"
import { IoIosMailOpen } from "react-icons/io"
import { useForm } from "@formspree/react"
import { IoReloadCircle } from "react-icons/io5"
import Breadcrumb from "../Breadcrumb"

declare global {
    interface Window {
        google: {
            maps: any // You can replace 'any' with more specific types if available
        }
    }
}

const ContactSection = () => {
    const [state, handleSubmit] = useForm("mqkraboa")
    const [formStatus, setFormStatus] = useState("") // "success" or "error"
    const [captchaValue, setCaptchaValue] = useState("")
    const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers())

    function generateRandomNumbers() {
        const num1 = Math.floor(Math.random() * 10)
        const num2 = Math.floor(Math.random() * 10)
        return { num1, num2 }
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Check if the captcha is correct
        const expectedSum = randomNumbers.num1 + randomNumbers.num2
        if (parseInt(captchaValue, 10) !== expectedSum) {
            alert("Please solve the math problem correctly.")
            return
        }

        try {
            await handleSubmit(e)
            if (state.succeeded) {
                setFormStatus("success")
            } else {
                setFormStatus("error")
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            setFormStatus("error")
        }
    }

    const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaptchaValue(e.target.value)
    }

    const handleRefreshCaptcha = () => {
        setRandomNumbers(generateRandomNumbers())
        setCaptchaValue("")
    }

    useEffect(() => {
        // Load Google Maps script
        const script = document.createElement("script")
        script.src =
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAT5eb2FuHM3uY9f2Xsadn0eR3o1zH_xVg"
        script.async = true

        // Error handling for script loading
        script.onerror = () => {
            console.error("Error loading Google Maps script.")
        }

        script.onload = initMap
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const initMap = () => {
        // Google Maps initialization
        if (window.google && window.google.maps) {
            var mapOptions = {
                zoom: 11,
                center: new window.google.maps.LatLng(
                    25.580717086791992,
                    85.09457397460938
                ),
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                draggable: false,
                styles: [
                    {
                        featureType: "administrative",
                        elementType: "all",
                        stylers: [{ saturation: "-100" }],
                    },
                    {
                        featureType: "administrative.province",
                        elementType: "all",
                        stylers: [{ visibility: "off" }],
                    },
                    {
                        featureType: "landscape",
                        elementType: "all",
                        stylers: [
                            { saturation: -100 },
                            { lightness: 65 },
                            { visibility: "on" },
                        ],
                    },
                    {
                        featureType: "poi",
                        elementType: "all",
                        stylers: [
                            { saturation: -100 },
                            { lightness: "50" },
                            { visibility: "simplified" },
                        ],
                    },
                    {
                        featureType: "road",
                        elementType: "all",
                        stylers: [{ saturation: "-100" }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "all",
                        stylers: [{ visibility: "simplified" }],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "all",
                        stylers: [{ lightness: "30" }],
                    },
                    {
                        featureType: "road.local",
                        elementType: "all",
                        stylers: [{ lightness: "40" }],
                    },
                    {
                        featureType: "transit",
                        elementType: "all",
                        stylers: [
                            { saturation: -100 },
                            { visibility: "simplified" },
                        ],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [
                            { hue: "#ffff00" },
                            { lightness: -25 },
                            { saturation: -97 },
                        ],
                    },
                    {
                        featureType: "water",
                        elementType: "labels",
                        stylers: [{ lightness: -25 }, { saturation: -100 }],
                    },
                ],
            }

            var mapElement = document.getElementById("google-map")

            var map = new window.google.maps.Map(mapElement, mapOptions)
            // eslint-disable-next-line
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(
                    25.580717086791992,
                    85.09457397460938
                ),
                map: map,
                title: "Location!",
            })
        } else {
            console.error("Google Maps API not loaded.")
        }
    }
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Contact", active: true },
    ]

    return (
        <>
            <Breadcrumb
                title="Contact"
                subtitle={`Contact CAIES Foundation for collaboration,inquiries, and support.\nConnect with us today`}
                imageUrl="/assets/img/page-header-bg.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="contact-section" className="w-full bg-neutral-50">
                <div className="relative z-[1]">
                    <div
                        id="google-map"
                        className="left-0 top-0 -z-[1] h-[350px] w-full"></div>
                    <div className="relative z-[1] mx-auto w-full px-48 max-lg:px-12">
                        <div
                            id="contact-wrap"
                            className="-mx-4 mt-28 flex flex-row rounded-md bg-neutral-50 p-[80px_50px] shadow-[0_16px_28px_0_#00000026] max-lg:flex-col max-lg:px-8">
                            <div className="relative min-h-[1px] w-full px-4 max-lg:mb-8 max-lg:border-b max-lg:px-1 max-lg:pb-4">
                                <div className="contact-info">
                                    <h3 className="mb-8 text-[18px] font-extrabold uppercase">
                                        Office
                                    </h3>
                                    <p className="mb-4 text-lg">
                                        CAIES Foundation, New Harnichak,
                                        Walmichak Road, Near Devisthan,
                                        Anisabad, Patna 800002, Bihar, India
                                    </p>
                                    <ul className="m-0 block p-0">
                                        <li className="flex items-center gap-2 text-lg font-medium leading-10">
                                            <a href="tel:+917739711077">
                                                <FaMobileRetro className="inline-block" />{" "}
                                                +91 7739711077
                                            </a>
                                        </li>
                                        <li className="flex items-center gap-2 text-lg font-medium leading-10">
                                            <a href="mailto:contact@caienvsus.org">
                                                <IoIosMailOpen className="inline-block" />{" "}
                                                contact@caienvsus.org
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative min-h-[1px] w-full px-4 max-lg:px-1">
                                <div className="contact-info">
                                    <h3 className="mb-8 text-lg font-extrabold uppercase">
                                        Drop Us A Line
                                    </h3>
                                    {formStatus === "success" ? (
                                        <p>Thanks for your message!</p>
                                    ) : (
                                        <form
                                            id="contact-form"
                                            className="w-full"
                                            onSubmit={handleFormSubmit}>
                                            <div className="mb-4 flex flex-row gap-2 max-lg:flex-col">
                                                <div className="w-full">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        placeholder="Name"
                                                        className="mb-4 w-full rounded-md border-[1px_solid_#E5E5E5] bg-white p-4 focus:outline-none"
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        placeholder="Email"
                                                        className="mb-4 w-full rounded-md border-[1px_solid_#E5E5E5] bg-white p-4 focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 flex flex-row gap-2 max-lg:flex-col">
                                                <div className="w-full">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        id="subject"
                                                        placeholder="Subject"
                                                        className="mb-4 w-full rounded-md border-[1px_solid_#E5E5E5] bg-white p-4 focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 flex flex-row gap-2 max-lg:flex-col">
                                                <div className="grid w-full grid-cols-1">
                                                    <textarea
                                                        name="message"
                                                        id="message"
                                                        placeholder="Message"
                                                        className="mb-4 h-[250px] w-full rounded-md border-[1px_solid_#E5E5E5] bg-white p-4 focus:outline-none"></textarea>
                                                    <label
                                                        htmlFor="captcha"
                                                        className="my-4 flex items-center gap-4">
                                                        Solve the math problem:{" "}
                                                        {randomNumbers.num1} +{" "}
                                                        {randomNumbers.num2} = ?
                                                        <button
                                                            type="button"
                                                            onClick={
                                                                handleRefreshCaptcha
                                                            }>
                                                            <IoReloadCircle className="text-center text-[24px] text-main" />
                                                        </button>
                                                    </label>

                                                    <input
                                                        type="number"
                                                        id="captcha"
                                                        name="captcha"
                                                        value={captchaValue}
                                                        onChange={
                                                            handleCaptchaChange
                                                        }
                                                        className="mb-4 w-full rounded-md border-[1px_solid_#E5E5E5] bg-white p-4 focus:outline-none"
                                                        placeholder="Your answer"
                                                        required
                                                        inputMode="numeric"
                                                    />
                                                    {formStatus === "error" && (
                                                        <p>
                                                            Oops! Something went
                                                            wrong. Please try
                                                            again.
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="rounded-md bg-main p-4 font-medium text-white">
                                                Send Message
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="min-h-32"></div> {/* Spacer */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
