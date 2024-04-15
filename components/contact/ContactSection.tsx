"use client"

import React, { useEffect, useState } from 'react';
import { FaMobileRetro } from 'react-icons/fa6';
import { IoIosMailOpen } from 'react-icons/io';
import { useForm } from "@formspree/react";
import { IoReloadCircle } from 'react-icons/io5';

declare global {
    interface Window {
        google: {
            maps: any; // You can replace 'any' with more specific types if available
        };
    }
}

const ContactSection = () => {
    const [state, handleSubmit] = useForm("mqkraboa");
    const [formStatus, setFormStatus] = useState(""); // "success" or "error"
    const [captchaValue, setCaptchaValue] = useState("");
    const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers());

    function generateRandomNumbers() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        return { num1, num2 };
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if the captcha is correct
        const expectedSum = randomNumbers.num1 + randomNumbers.num2;
        if (parseInt(captchaValue, 10) !== expectedSum) {
            alert("Please solve the math problem correctly.");
            return;
        }

        try {
            await handleSubmit(e);
            if (state.succeeded) {
                setFormStatus("success");
            } else {
                setFormStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setFormStatus("error");
        }
    };

    const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaptchaValue(e.target.value);
    };

    const handleRefreshCaptcha = () => {
        setRandomNumbers(generateRandomNumbers());
        setCaptchaValue("");
    };

    useEffect(() => {
        // Load Google Maps script
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAT5eb2FuHM3uY9f2Xsadn0eR3o1zH_xVg";
        script.async = true;

        // Error handling for script loading
        script.onerror = () => {
            console.error("Error loading Google Maps script.");
        };

        script.onload = initMap;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initMap = () => {
        // Google Maps initialization
        if (window.google && window.google.maps) {
            var mapOptions = {
                zoom: 11,
                center: new window.google.maps.LatLng(25.580717086791992, 85.09457397460938),
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                draggable: false,
                styles: [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": "50" }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "lightness": "30" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "lightness": "40" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "lightness": -25 }, { "saturation": -100 }] }]
            };

            var mapElement = document.getElementById('google-map');

            var map = new window.google.maps.Map(mapElement, mapOptions);
            // eslint-disable-next-line
            var marker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(25.580717086791992, 85.09457397460938),
                map: map,
                title: 'Location!'
            });
        } else {
            console.error("Google Maps API not loaded.");
        }
    };

    return (
        <section id="contact-section" className="w-full bg-[#F2F2F2]">
            <div className="relative z-[1]">
                <div id="google-map" className="w-full h-[350px] top-0 left-0 -z-[1]"></div>
                <div className="w-full relative z-[1] max-lg:px-[3rem] px-[12rem] mx-auto">
                    <div id="contact-wrap" className="rounded-[5px] shadow-[0_16px_28px_0_#00000026] mt-[110px] max-lg:px-[2rem] p-[80px_50px] max-lg:flex-col flex flex-row -mx-[15px] bg-[#F2F2F2]">
                        <div className="relative w-full min-h-[1px] px-[15px] max-lg:mb-[2rem] max-lg:pb-[1rem] max-lg:px-1 max-lg:border-b">
                            <div className="contact-info">
                                <h3 className="text-[18px] font-extrabold uppercase mb-[30px]">Office</h3>
                                <p className="text-[17px] mb-[15px]">CAIES Foundation, New Harnichak, Walmichak Road, Near Devisthan, Anisabad, Patna 800002, Bihar, India</p>
                                <ul className="block m-0 p-0">
                                    <li className="text-[17px] font-medium items-center flex leading-[40px] gap-2">
                                        <a href="tel:+917739711077"><FaMobileRetro className="inline-block" /> +91 7739711077</a>
                                    </li>
                                    <li className="text-[17px] font-medium items-center flex leading-[40px] gap-2">
                                        <a href="mailto:contact@caienvsus.org"><IoIosMailOpen className="inline-block" />  contact@caienvsus.org</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative w-full min-h-[1px] max-lg:px-1 px-[15px]">
                            <div className="contact-info">
                                <h3 className="text-[18px] font-extrabold uppercase mb-[30px]">Drop Us A Line</h3>
                                {formStatus === "success" ? (
                                    <p>Thanks for your message!</p>
                                ) : (
                                    <form id="contact-form" className="w-full" onSubmit={handleFormSubmit}>
                                        <div className="mb-[1rem] max-lg:flex-col flex flex-row gap-2">
                                            <div className="w-full">
                                                <input type="text" name="name" id="name" placeholder="Name" className="w-full p-[15px] bg-[#FFFFFF] border-[1px_solid_#E5E5E5] rounded-[5px] mb-[15px] focus:outline-none" />
                                            </div>
                                            <div className="w-full">
                                                <input type="email" name="email" id="email" placeholder="Email" className="w-full p-[15px] bg-[#FFFFFF] border-[1px_solid_#E5E5E5] rounded-[5px] mb-[15px] focus:outline-none" />
                                            </div>
                                        </div>
                                        <div className="mb-[1rem] flex max-lg:flex-col flex-row gap-2">
                                            <div className="w-full">
                                                <input type="text" name="subject" id="subject" placeholder="Subject" className="w-full p-[15px] bg-[#FFFFFF] border-[1px_solid_#E5E5E5] rounded-[5px] mb-[15px] focus:outline-none" />
                                            </div>
                                        </div>
                                        <div className="mb-[1rem] flex max-lg:flex-col flex-row gap-2">
                                            <div className="w-full grid grid-cols-1">
                                                <textarea name="message" id="message" placeholder="Message" className="focus:outline-none w-full h-[250px] p-[15px] bg-[#FFFFFF] border-[1px_solid_#E5E5E5] rounded-[5px] mb-[15px]"></textarea>
                                                <label htmlFor="captcha" className="flex items-center gap-4 my-[1rem]">
                                                    Solve the math problem: {randomNumbers.num1} + {randomNumbers.num2} = ?
                                                    <button type="button" onClick={handleRefreshCaptcha}>
                                                        <IoReloadCircle className="text-[24px] text-[#FE5F00] text-center" />
                                                    </button>
                                                </label>

                                                <input type="number" id="captcha" name="captcha" value={captchaValue} onChange={handleCaptchaChange} className="w-full p-[15px] focus:outline-none bg-[#FFFFFF] border-[1px_solid_#E5E5E5] rounded-[5px] mb-[15px]" placeholder="Your answer" required inputMode="numeric" />
                                                {formStatus === "error" && (
                                                    <p>Oops! Something went wrong. Please try again.</p>
                                                )}
                                            </div>
                                        </div>
                                        <button type="submit" className="bg-[#FE5F00] text-white font-medium p-[15px] rounded-[5px]">Send Message</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[8rem]"></div> {/* Spacer */}
                </div>
            </div>
        </section>
    );
}

export default ContactSection;