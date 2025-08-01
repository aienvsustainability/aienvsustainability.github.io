import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    className?: string
    reverse?: boolean
    pauseOnHover?: boolean
    children?: React.ReactNode
    vertical?: boolean
    repeat?: number
}

export default function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:30s] [--gap:1rem]",
                vertical ? "flex-col" : "flex-row",
                className
            )}>
            {Array.from({ length: repeat }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "flex shrink-0 justify-around [gap:var(--gap)]",
                        vertical
                            ? "animate-marquee-vertical flex-col"
                            : "animate-marquee flex-row",
                        pauseOnHover &&
                        "group-hover:[animation-play-state:paused]",
                        reverse && "[animation-direction:reverse]"
                    )}>
                    {children}
                </div>
            ))}
        </div>
    )
}
