import { CardProps } from "@/types"
import React from "react"
import { cn } from "@/lib/utils"

interface VisionCardProps extends CardProps {
    className?: string
    iconClassName?: string
}

export const VisionCard = ({
    icon,
    number,
    title,
    description,
    className,
    iconClassName,
}: VisionCardProps) => (
    <div
        className={cn(
            "flex flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer",
            className
        )}>
        <div className="mb-4 flex items-center justify-between">
            <div
                className={cn(
                    "border-primary bg-background text-primary flex size-28 items-center justify-center rounded-full border border-dashed text-5xl transition-all duration-500 ease-in-out",
                    iconClassName
                )}>
                {React.createElement(icon)}
            </div>
            <span className="text-secondary text-base font-medium">
                {number}
            </span>
        </div>
        <div className="mt-auto">
            <h3 className="text-main mb-2 text-base font-semibold">{title}</h3>
            <p className="text-secondary text-sm font-medium">{description}</p>
        </div>
    </div>
)

export const CardGrid = ({
    title,
    cards,
    className,
}: {
    title?: string
    cards: CardProps[]
    className?: string
}) => (
    <div className="mt-12 w-full max-w-5xl">
        <h2 className="text-main text-left text-lg font-bold sm:text-xl lg:text-3xl">
            {title}
        </h2>
        <div className="my-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
                <VisionCard key={i} {...card} className={className} />
            ))}
        </div>
    </div>
)
