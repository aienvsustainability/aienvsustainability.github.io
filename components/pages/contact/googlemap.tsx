"use client"

import { useEffect } from "react"
import "leaflet/dist/leaflet.css"

const LeafletMap = () => {
    useEffect(() => {
        const loadMap = async () => {
            const L = await import("leaflet")

            // Fix default marker icon issue
            delete (L.Icon.Default.prototype as any)._getIconUrl
            L.Icon.Default.mergeOptions({
                iconRetinaUrl:
                    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
                iconUrl:
                    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
                shadowUrl:
                    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
            })

            const container = document.getElementById("leaflet-map")
            if (container) {
                container.innerHTML = "" // reset for hot reload
            }

            const map = L.map("leaflet-map", {
                center: [25.580717086791992, 85.09457397460938],
                zoom: 12,
                scrollWheelZoom: false,
                dragging: false,
            })

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors",
            }).addTo(map)

            L.marker([25.580717086791992, 85.09457397460938])
                .addTo(map)
                .bindPopup("Location!")
        }

        loadMap()

        // Cleanup
        return () => {
            const container = document.getElementById("leaflet-map")
            if (container) container.innerHTML = ""
        }
    }, [])

    return (
        <div
            id="leaflet-map"
            style={{
                height: "350px",
                width: "100%",
                position: "relative",
                zIndex: 0,
            }}
        />
    )
}

export default LeafletMap
