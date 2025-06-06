import { CardProps } from "@/types"
import React from "react"
import { cn } from "@/lib/utils" // or wherever your `cn` utility is located

interface VisionCardProps extends CardProps {
    className?: string
}

export const VisionCard = ({ icon, number, title, description, className }: VisionCardProps) => (
    <div
        className={cn(
            "flex flex-col justify-between rounded-3xl bg-white p-6 shadow-[50px_44px_194px_#0000000f] transition-transform duration-500 ease-in-out hover:scale-105 hover:cursor-pointer",
            className
        )}
    >
        <div className="mb-4 flex items-center justify-between">
            <div className="flex size-28 items-center justify-center rounded-full border border-dashed border-primary bg-background text-5xl text-primary transition-all duration-500 ease-in-out">
                {React.createElement(icon)}
            </div>
            <span className="text-base font-medium text-secondary">{number}</span>
        </div>
        <div className="mt-auto">
            <h3 className="mb-2 text-base font-semibold text-main">{title}</h3>
            <p className="text-sm font-medium text-secondary">{description}</p>
        </div>
    </div>
)

export const CardGrid = ({
    title,
    cards,
    className
}: {
    title?: string
    cards: CardProps[]
    className?: string
}) => (
    <div className="mt-12 w-full max-w-5xl">
        <h2 className="text-left text-lg font-bold text-main sm:text-xl lg:text-3xl">
            {title}
        </h2>
        <div className="my-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
                <VisionCard key={i} {...card} className={className}/>
            ))}
        </div>
    </div>
)
