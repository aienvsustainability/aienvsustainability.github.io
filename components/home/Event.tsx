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

const Event = () => {
    return (
        <>
            <section className="w-full bg-neutral-50 py-24">
                <div
                    id="heading"
                    className="mb-12 items-center justify-center text-center">
                    <h2 className="text-center text-4xl font-extrabold text-neutral-800">
                        Events
                    </h2>
                    <span className="border-main inline-block h-2 w-[60px] border-t-4 text-center"></span>
                    <p className="mb-4 mt-1 text-lg font-normal text-neutral-600">
                        <span className="hindi-normal text-base text-neutral-600">
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
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex flex-col items-center justify-center sm:flex-row">
                                    <Image
                                        src="/assets/img/events-1.jpg"
                                        width={0}
                                        height={0}
                                        style={{
                                            width: "385.71px",
                                            height: "337.71px",
                                        }}
                                        sizes="100vw"
                                        alt="he"
                                    />
                                    <div className="h-auto border border-dashed border-stone-300 bg-white px-8 py-10">
                                        <h2 className="text-xl font-extrabold leading-8 text-neutral-800">
                                            Deepawali Celebration Among Musahar
                                            Community
                                        </h2>
                                        <div className="my-2 flex gap-4">
                                            <p className="flex items-center gap-1 text-center text-xs font-semibold text-neutral-300">
                                                <SlCalender className="text-main" />{" "}
                                                2022
                                            </p>
                                            <p className="flex items-center gap-1 text-center text-xs font-semibold text-neutral-300">
                                                <FiMapPin className="text-main" />{" "}
                                                BIHAR, INDIA
                                            </p>
                                        </div>
                                        <p className="mt-2 text-base text-neutral-600">
                                            In 2022, Deepawali was celebrated
                                            among the Musahar community in
                                            Bihar, India, marked by cultural
                                            festivities and communal gatherings.
                                        </p>
                                        <a
                                            href="#"
                                            className="bg-main mt-5 inline-block rounded-sm px-6 text-base font-medium leading-[45px] text-white">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex flex-col items-center justify-center sm:flex-row">
                                    <Image
                                        src="/assets/img/events-2.jpg"
                                        width={0}
                                        height={0}
                                        style={{
                                            width: "385.71px",
                                            height: "337.71px",
                                        }}
                                        sizes="100vw"
                                        alt="he"
                                    />
                                    <div className="h-auto border border-dashed border-stone-300 bg-white px-8 py-10">
                                        <h2 className="text-xl font-extrabold leading-8 text-neutral-800">
                                            Deepawali celebration with the
                                            Musahar community
                                        </h2>
                                        <div className="my-2 flex gap-4">
                                            <p className="flex items-center gap-1 text-center text-xs font-semibold text-neutral-300">
                                                <SlCalender className="text-main" />{" "}
                                                2022
                                            </p>
                                            <p className="flex items-center gap-1 text-center text-xs font-semibold text-neutral-300">
                                                <FiMapPin className="text-main" />{" "}
                                                BIHAR, INDIA
                                            </p>
                                        </div>
                                        <p className="mt-2 text-base text-neutral-600">
                                            In 2023, Deepawali was celebrated
                                            among the Musahar community in
                                            Bihar, India, marked by cultural
                                            festivities and communal gatherings.
                                        </p>
                                        <a
                                            href="#"
                                            className="bg-main mt-5 inline-block rounded-sm px-6 text-base font-medium leading-[45px] text-white">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex flex-col items-center justify-center sm:flex-row">
                                    <Image
                                        src="/assets/img/events-3.jpg"
                                        width={0}
                                        height={0}
                                        style={{
                                            width: "385.71px",
                                            height: "337.71px",
                                        }}
                                        sizes="100vw"
                                        alt="he"
                                    />
                                    <div className="h-[410px] border border-dashed border-stone-300 bg-white px-8 py-10 max-lg:h-[430px]">
                                        <h2 className="text-xl font-extrabold leading-8 text-neutral-800">
                                            Aaranyakam - KDU
                                        </h2>
                                        <div className="my-2 flex gap-4">
                                            <p className="flex items-center gap-1 text-center text-xs font-semibold text-neutral-300">
                                                <SlCalender className="text-main" />{" "}
                                                2023
                                            </p>
                                            <p className="flex items-center gap-1 text-center text-xs font-semibold text-neutral-300">
                                                <FiMapPin className="text-main" />{" "}
                                                KERELA, INDIA
                                            </p>
                                        </div>
                                        <p className="mt-2 text-base text-neutral-600">
                                            In 2023, Kerala University of
                                            Digital Sciences Student Council,
                                            with School of Informatics,
                                            celebrated Wildlife Week with events
                                            promoting conservation.
                                        </p>
                                        <a
                                            href="#"
                                            className="bg-main mt-5 inline-block rounded-sm px-6 text-base font-medium leading-[45px] text-white">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </CarouselItem>

                            {/* {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/1 lg:md:basis-1/1 lg:basis-1/2">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))} */}
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
