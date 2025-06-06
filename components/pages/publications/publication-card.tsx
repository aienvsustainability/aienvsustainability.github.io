import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FiPlus } from "react-icons/fi"
import { WiTime5 } from "react-icons/wi"

interface Props {
    image: string
    date: string
    title: string
    link: string
    description: string
}

const PublicationCard = ({ image, date, title, link, description }: Props) => (
    <div className="relative w-full overflow-hidden p-[2%] transition-shadow duration-300">
        <Link href={link}>
            <Image src={image} width={500} height={500} alt={title} />
        </Link>
        <Link
            href={link}
            className="absolute right-4 top-4 flex items-center rounded-sm bg-primary/60 px-2.5 py-2 text-sm font-medium text-white hover:bg-primary transition-all duration-300"
        >
            Read More <FiPlus className="ml-1 text-xs" />
        </Link>
        <div className="border border-dashed border-stone-300 bg-white px-8 py-10">
            <h4 className="mb-4 flex items-center gap-1 text-base font-medium text-neutral-300">
                <WiTime5 /> {date}
            </h4>
            <Link href={link}>
                <h3 className="text-2xl font-semibold leading-8">{title}</h3>
            </Link>
            <p className="mt-2 text-base" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    </div>
)

export default PublicationCard
