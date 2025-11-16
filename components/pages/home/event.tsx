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
import { eventdetails } from "@/constants"

const Event = () => {
    return (
        <>
            <section className="w-full bg-background py-24">
                <div
                    id="heading"
                    className="mb-12 items-center justify-center text-center">
                    <h2 className="text-center text-4xl font-extrabold text-main">
                        Events
                    </h2>
                    <span className="inline-block h-2 w-16 border-t-4 border-primary text-center"></span>
                    <p className="mx-auto mb-4 mt-1 items-center justify-center text-center text-lg font-normal text-secondary max-lg:max-w-xs">
                        <span className="font-hindi text-base text-secondary">
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
                            {eventdetails.map((event) => (
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
                                                className="size-80 aspect-square object-cover object-center max-lg:size-60"
                                            />
                                        </div>
                                        <div className="h-105 w-80 border border-dashed border-main/20 bg-white px-8 py-10 max-lg:h-110 max-lg:w-56">
                                            <h2 className="text-xl font-extrabold leading-8 text-main">
                                                {event.title}
                                            </h2>
                                            <div className="my-2 flex gap-4">
                                                <p className="flex items-center gap-1 text-center text-xs font-semibold uppercase text-secondary/50">
                                                    <SlCalender className="text-primary" />{" "}
                                                    {event.year}
                                                </p>
                                                <p className="flex items-center gap-1 text-center text-xs font-semibold uppercase text-secondary/50">
                                                    <FiMapPin className="text-primary" />{" "}
                                                    {event.location}
                                                </p>
                                            </div>
                                            <p className="mt-2 line-clamp-6 text-base text-secondary">
                                                {event.description}
                                            </p>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <div className="mt-5 inline-block cursor-pointer rounded-sm bg-primary px-6 text-base font-medium leading-[45px] text-white">
                                                        Read More
                                                    </div>
                                                </DialogTrigger>
                                                <DialogContent className="border-none bg-white sm:max-w-fit">
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            <p className="max-w-2xl text-center text-2xl font-black text-main">
                                                                {event.title}
                                                            </p>
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            <div className="mt-5 w-full flex-col items-center justify-center">
                                                                <div className="flex w-full items-center justify-center">
                                                                    <Image
                                                                        src={event.image}
                                                                        width={0}
                                                                        height={0}
                                                                        sizes="100vw"
                                                                        alt={event.title}
                                                                        className="flex aspect-video h-56 w-96 items-center justify-center object-contain object-center"
                                                                    />
                                                                </div>
                                                                <p className="mt-6 text-center text-base font-medium text-secondary">
                                                                    {
                                                                        event.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <DialogFooter className="my-5 sm:justify-center">
                                                        <DialogClose asChild>
                                                            <div className="flex w-28 cursor-pointer items-center justify-center rounded-md bg-main/45 px-3 py-2 font-medium text-secondary">
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
