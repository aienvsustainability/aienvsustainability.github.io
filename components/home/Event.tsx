import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { SlCalender } from "react-icons/sl"
import { FiMapPin } from "react-icons/fi"
import Link from "next/link"
import { EventDetails } from "@/constants"

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
                    <span className="inline-block h-2 w-16 border-t-4 border-main text-center"></span>
                    <p className="mx-auto mb-4 mt-1 items-center justify-center text-center text-lg font-normal text-neutral-600 max-lg:max-w-xs">
                        <span className="font-hindi text-base text-neutral-600">
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
                            {EventDetails.map((event) => (
                                <CarouselItem
                                    key={event.id}
                                    className="md:basis-1/1 lg:basis-1/2">
                                    <div className="flex flex-col items-center justify-center sm:flex-row">
                                        <div className="flex size-80 items-center justify-center max-lg:size-56">
                                            <Image
                                                src={event.image}
                                                width={1000}
                                                height={1000}
                                                sizes="100vw"
                                                alt={event.title}
                                                className="size-80 object-cover object-center max-lg:size-60"
                                            />
                                        </div>
                                        <div className="h-[410px] w-80 border border-dashed border-stone-300 bg-white px-8 py-10 max-lg:h-[430px] max-lg:w-56">
                                            <h2 className="text-xl font-extrabold leading-8 text-neutral-800">
                                                {event.title}
                                            </h2>
                                            <div className="my-2 flex gap-4">
                                                <p className="flex items-center gap-1 text-center text-xs font-semibold uppercase text-neutral-500/50">
                                                    <SlCalender className="text-main" />{" "}
                                                    {event.year}
                                                </p>
                                                <p className="flex items-center gap-1 text-center text-xs font-semibold uppercase text-neutral-500/50">
                                                    <FiMapPin className="text-main" />{" "}
                                                    {event.location}
                                                </p>
                                            </div>
                                            <p className="mt-2 line-clamp-6 text-base text-neutral-600">
                                                {event.description}
                                            </p>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <div className="mt-5 inline-block cursor-pointer rounded-sm bg-main px-6 text-base font-medium leading-[45px] text-white">
                                                        Read More
                                                    </div>
                                                </DialogTrigger>
                                                <DialogContent className="border-none bg-white sm:max-w-fit">
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            <h2 className="max-w-2xl text-center text-2xl font-black text-neutral-900">
                                                                {event.title}
                                                            </h2>
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            <div className="mt-5 w-full flex-col items-center justify-center">
                                                                <div className="flex w-full items-center justify-center">
                                                                    <Image
                                                                        src={
                                                                            event.image
                                                                        }
                                                                        width={
                                                                            1280
                                                                        }
                                                                        height={
                                                                            720
                                                                        }
                                                                        sizes="100vw"
                                                                        alt={
                                                                            event.title
                                                                        }
                                                                        className="flex h-56 w-96 items-center justify-center object-fill object-center"
                                                                    />
                                                                </div>
                                                                <p className="mt-6 text-center text-base font-medium text-neutral-600">
                                                                    {
                                                                        event.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogFooter className="my-5 sm:justify-center">
                                                        <DialogClose asChild>
                                                            <div className="flex w-28 cursor-pointer items-center justify-center rounded-md bg-neutral-300/45 px-3 py-2 font-medium text-neutral-500">
                                                                Close
                                                            </div>
                                                        </DialogClose>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
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
