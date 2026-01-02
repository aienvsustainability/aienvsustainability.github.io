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
    // const sortedEvents = [...eventdetails].sort(
    //         (a, b) => Number(b.year) - Number(a.year)
    //     )
    const sortedEvents = [...eventdetails].reverse()
    return (
        <>
            <section className="bg-background w-full py-24">
                <div
                    id="heading"
                    className="mb-12 items-center justify-center text-center">
                    <h2 className="font-condensed text-main text-center text-7xl font-medium uppercase">
                        Events
                    </h2>
                    <span className="border-primary inline-block h-2 w-16 border-t-4 text-center"></span>
                    <p className="text-secondary mx-auto mt-1 mb-4 items-center justify-center text-center text-lg font-medium max-lg:max-w-xs">
                        <span className="font-hindi text-secondary text-base">
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
                                        <div className="border-main/20 h-105 w-80 border border-dashed bg-white px-8 py-10 max-lg:h-110 max-lg:w-56">
                                            <h2 className="text-main text-xl leading-8 line-clamp-5 font-extrabold">
                                                {event.title}
                                            </h2>
                                            <div className="my-2 flex gap-4">
                                                <p className="text-secondary/50 flex items-center gap-1 text-center text-xs font-semibold uppercase">
                                                    <SlCalender className="text-primary" />{" "}
                                                    {event.year}
                                                </p>
                                                <p className="text-secondary/50 flex items-center gap-1 text-center text-xs font-semibold uppercase">
                                                    <FiMapPin className="text-primary" />{" "}
                                                    {event.location}
                                                </p>
                                            </div>
                                            <p className="text-secondary mt-2 line-clamp-6 text-base">
                                                {event.description}
                                            </p>
                                            <Link
                                                href="/initiatives/events"
                                                className="bg-primary mt-5 inline-block cursor-pointer rounded-sm px-6 text-base leading-[45px] font-medium text-white">
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
