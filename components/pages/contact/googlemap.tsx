"use client"

import { useEffect } from "react"

// Extend the Window interface to include google
/* eslint-disable */
declare global {
    interface Window {
        google: any
    }
}
/* eslint-enable */

const GoogleMap = () => {
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
            const mapOptions = {
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

            const mapElement = document.getElementById("google-map")

            const map = new window.google.maps.Map(mapElement, mapOptions)
            // eslint-disable-next-line
            const marker = new window.google.maps.Marker({
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

    return (
        <div id="google-map" className="left-0 top-0 -z-1 h-87 w-full" />
    )
}

export default GoogleMap
