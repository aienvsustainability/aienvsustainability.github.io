"use client"
import { VideoPlayerProps } from "@/types"
import { useRef, useState } from "react"
import { PiPauseLight, PiPlayLight } from "react-icons/pi"

export default function VideoPlayer({
    src,
    poster,
    iconSize = 32,
    className = "",
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlayback = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className={`h-110 relative overflow-hidden ${className}`}>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="h-auto w-full"
                controls={false}
                preload="none"
            />

            <button
                onClick={togglePlayback}
                className="absolute bottom-4 right-4 cursor-pointer z-10 bg-primary/50 hover:bg-primary/70 backdrop-blur rounded-full p-3 transition text-white"
            >
                {isPlaying ? <PiPauseLight size={iconSize} /> : <PiPlayLight size={iconSize} />}
            </button>
        </div>
    )
}
