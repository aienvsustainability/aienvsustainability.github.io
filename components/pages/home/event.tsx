import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { SlCalender } from "react-icons/sl"
import { FiMapPin } from "react-icons/fi"
import { eventdetails } from "@/constants"
import Link from "next/link"

const Event = () => {
    const sortedEvents = [...eventdetails].reverse()
    return (
        <>
            <section className="w-full bg-neutral-50 py-24">
                <div
                    id="heading"
                    className="mb-12 items-center justify-center text-center">
                    <h2 className="font-condensed text-center text-7xl text-neutral-900 uppercase">
                        Events
                    </h2>
                    <span className="border-primary inline-block h-2 w-16 border-t-4 text-center"></span>
                    <p className="mx-auto items-center justify-center py-4 text-center text-base text-neutral-500 max-lg:max-w-xs">
                        <span className="font-hindi text-base text-neutral-500">
                            स्वस्मै स्वल्पं समाजाय सर्वस्वं
                        </span>{" "}
                        - A little for self and everything for others
                    </p>
                </div>
                <div className="flex items-center justify-center px-16 sm:px-48">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full">
                        <CarouselContent>
                            {sortedEvents.map((event) => (
                                <CarouselItem
                                    key={event.id}
                                    className="md:basis-1/1 lg:basis-1/2">
                                    <div className="flex flex-col items-center justify-center sm:flex-row">
                                        <div className="flex size-80 items-center justify-center max-lg:size-56">
                                            <Image
                                                src={event.image}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                alt={event.title}
                                                className="aspect-square size-80 object-cover object-center max-lg:size-60"
                                            />
                                        </div>
                                        <div className="flex h-110 w-56 flex-col justify-between border border-neutral-200 bg-white px-8 py-10 lg:h-105 lg:w-80">
                                            <div className="flex flex-col">
                                                <h2 className="line-clamp-5 text-lg leading-snug font-black text-neutral-900">
                                                    {event.title}
                                                </h2>
                                                <div className="my-2 flex gap-4">
                                                    <p className="flex items-center gap-1 text-center text-xs text-neutral-500/50 uppercase">
                                                        <SlCalender className="text-primary" />{" "}
                                                        {event.year}
                                                    </p>
                                                    <p className="flex items-center gap-1 text-center text-xs text-neutral-500/50 uppercase">
                                                        <FiMapPin className="text-primary" />{" "}
                                                        {event.location}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="mt-2 line-clamp-4 text-base tracking-tight text-neutral-500">
                                                {event.description}
                                            </p>
                                            <Link
                                                href="/initiatives/events"
                                                className="bg-primary flex h-12 cursor-pointer items-center justify-center rounded-sm px-6 text-base text-neutral-50">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Event
