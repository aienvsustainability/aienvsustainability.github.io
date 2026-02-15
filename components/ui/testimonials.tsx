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
        <div className="relative flex min-h-110 w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white p-0 shadow-xl shadow-neutral-900/5">
            <div className="absolute top-4 left-4 z-10">
                <Image
                    src={imageUrl}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={name}
                    className="brigtness-90 size-12 rounded-full object-center contrast-125 saturate-150"
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
                        <p className="justify-center px-6 text-sm whitespace-pre-line text-neutral-500">
                            {content.text}
                        </p>
                    )
                ) : (
                    <p className="text-sm text-gray-500 italic">
                        No testimonial available.
                    </p>
                )}
            </div>

            <div className="absolute bottom-4 left-4 rounded bg-white/40 py-2 pr-8 pl-2 backdrop-blur-sm">
                <h3 className="text-primary font-hindi text-sm font-semibold uppercase">
                    {name}
                </h3>
                <p className="text-xs text-neutral-900 mix-blend-darken">
                    {role}
                </p>
            </div>
        </div>
    )
}
