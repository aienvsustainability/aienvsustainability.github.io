import Image from "next/image"
import VideoPlayer from "./video-player"

type TestimonialProps = {
    name: string
    role: string
    imageUrl: string
    testimonial?: {
        text?: string
        video?: string
        poster?: string
    }[]
}

export default function TestimonialCard({
    name,
    role,
    imageUrl,
    testimonial = [],
}: TestimonialProps) {
    const content = testimonial.length > 0 ? testimonial[0] : null

    return (
        <div className="shadow-main/5 relative flex min-h-110 w-full flex-col overflow-hidden rounded-md bg-white p-0 shadow-xl items-center justify-center">
            <div className="absolute top-4 left-4 z-10">
                <Image
                    src={imageUrl}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={name}
                    className="size-12 saturate-150 contrast-125 brigtness-90 rounded-full object-center"
                />
            </div>

            <div className="">
                {content ? (
                    content.video ? (
                        <VideoPlayer
                            src={content.video}
                            poster="/assets/img/thumbnail.webp"
                        />
                    ) : (
                        <p className="px-6 justify-center text-secondary text-sm font-medium whitespace-pre-line">
                            {content.text}
                        </p>
                    )
                ) : (
                    <p className="text-gray-500 text-sm italic">No testimonial available.</p>
                )}
            </div>

            <div className="absolute bg-white/40 backdrop-blur-sm pl-2 pr-8 py-2 rounded bottom-4 left-4">
                <h3 className="text-primary font-hindi uppercase text-sm font-semibold">{name}</h3>
                <p className="text-main text-xs mix-blend-darken">{role}</p>
            </div>
        </div>
    )
}
