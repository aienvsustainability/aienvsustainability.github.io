"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface PreloaderProps {
    duration?: number
}

export default function Preloader({ duration = 2500 }: PreloaderProps) {
    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        let start: number | null = null
        let animationFrame: number

        // Ease-in-out cubic
        const easeInOutCubic = (t: number) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

        const animate = (timestamp: number) => {
            if (!start) start = timestamp
            const elapsed = timestamp - start
            const rawProgress = Math.min(elapsed / duration, 1)

            const easedProgress = easeInOutCubic(rawProgress)
            const percent = Math.floor(easedProgress * 100)

            setProgress(percent)

            if (rawProgress < 1) {
                animationFrame = requestAnimationFrame(animate)
            } else {
                setTimeout(() => {
                    setVisible(false)
                }, 500)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [duration])

    if (!visible) return null

    return (
        <div
            className={`fixed inset-0 z-999 flex items-center justify-center bg-neutral-50 transition-opacity duration-500 ${
                progress === 100 ? "opacity-0" : "opacity-100"
            }`}>
            <div className="flex flex-col items-center gap-8">
                <Image
                    src="/assets/img/logo.webp"
                    alt="Logo"
                    width={170}
                    height={60}
                    priority
                    className="select-none"
                />

                <div className="h-0.5 w-70 overflow-hidden rounded-full bg-neutral-200">
                    <div
                        className="h-full bg-linear-to-r from-orange-300 rounded-full to-primary transition-all duration-150 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <span className="text-xs tracking-widest text-neutral-500">
                    {progress}%
                </span>
            </div>
        </div>
    )
}
