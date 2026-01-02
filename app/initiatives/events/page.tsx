import { eventdetails } from "@/constants"
import Image from "next/image"
import React from "react"
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
import { CustomMetadata } from "@/types"

export const metadata: CustomMetadata = {
    title: "Events",
    description:
        "Discover CAIES Foundation events including workshops, training programs, seminars, and industry-focused learning initiatives",
    alternates: {
        canonical: "/initiatives/events",
        languages: {
            "en-US": "/initiatives/events",
        },
    },
    openGraph: {
        title: "CAIES Fondation - Events",
        description:
            "Discover CAIES Foundation events including workshops, training programs, seminars, and industry-focused learning initiatives",
        url: "https://caienvsus.org/initiatives/events",
        siteName: "CAIES Fondation",
        images: [
            {
                url: "/assets/img/page-header-bg.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

const eventsPage = () => {
    // const sortedEvents = [...eventdetails].sort(
    //         (a, b) => Number(b.year) - Number(a.year)
    //     )
    const sortedEvents = [...eventdetails].reverse()
    return (
        <section className="flex min-h-screen flex-col items-center">
            <div className="relative flex h-70 w-full flex-col items-center justify-center overflow-hidden md:h-102">
                <Image
                    src="/assets/img/events-background.webp"
                    alt="Events Background"
                    fill
                    priority
                    className="pointer-events-none object-cover object-bottom"
                />
                <h2 className="font-condensed relative z-10 text-5xl font-medium text-white uppercase mix-blend-difference sm:text-6xl lg:text-9xl">
                    Events
                </h2>
                <p className="pointer-events-none z-10 max-w-xs text-center text-sm font-medium tracking-wide text-neutral-900 opacity-95 md:max-w-lg md:text-base">
                    Discover CAIES Foundation events including workshops,
                    training programs, seminars, and industry-focused learning
                    initiatives.
                </p>
            </div>
            <div className="flex w-full flex-col items-center justify-between px-4 py-6 md:max-w-6xl">
                <div className="hidden w-full flex-col md:flex">
                    <div className="grid w-full grid-cols-10 items-center justify-between border-b border-neutral-300 px-4 py-2">
                        <div className="col-span-4 flex items-start justify-start px-2.5">
                            <h3 className="text-main text-left text-sm font-semibold tracking-wider capitalize">
                                Title
                            </h3>
                        </div>
                        <div className="col-span-1 flex items-start justify-start px-2.5">
                            <h3 className="text-main text-left text-sm font-semibold tracking-wider capitalize">
                                Date
                            </h3>
                        </div>
                        <div className="col-span-3 flex items-start justify-start px-2.5">
                            <h3 className="text-main text-left text-sm font-semibold tracking-wider capitalize">
                                Description
                            </h3>
                        </div>
                        <div className="col-span-2 flex items-start justify-start px-2.5">
                            <h3 className="text-main text-left text-sm font-semibold tracking-wider capitalize">
                                Image
                            </h3>
                        </div>
                    </div>
                    {sortedEvents.map((event, index) => {
                        const isLast = index === sortedEvents.length - 1
                        return (
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div
                                        key={event.id}
                                        className={`cursor-pointer grid w-full grid-cols-10 items-center justify-between px-4 py-2 ${
                                            !isLast
                                                ? "border-b border-neutral-300"
                                                : ""
                                        }`}>
                                        <div className="col-span-4 flex h-32 items-center justify-start px-2.5 py-2">
                                            <h3 className="text-main font-condensed text-left text-4xl font-medium tracking-wider uppercase">
                                                {event.title}
                                            </h3>
                                        </div>
                                        <div className="col-span-1 flex h-32 items-center justify-start px-2.5 py-2">
                                            <h3 className="text-main text-left text-sm font-semibold tracking-wider capitalize">
                                                {event.year}
                                            </h3>
                                        </div>
                                        <div className="col-span-3 flex h-32 items-center justify-start px-2.5 py-2">
                                            <h3 className="line-clamp-2 text-left text-sm leading-snug font-medium tracking-wider text-neutral-500">
                                                {event.description}
                                            </h3>
                                        </div>
                                        <div className="col-span-2 flex h-32 items-center justify-start overflow-hidden px-2.5 py-2">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                className="size-40 object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="border-none bg-white sm:max-w-fit">
                                    <DialogHeader>
                                        <DialogTitle>
                                            <p className="text-main max-w-2xl text-center text-2xl font-black">
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
                                                <p className="text-secondary mt-6 text-center text-base font-medium">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter className="my-5 sm:justify-center">
                                        <DialogClose asChild>
                                            <div className="bg-main flex h-14 w-36 cursor-pointer items-center justify-center rounded-sm px-3 py-2 font-medium text-neutral-200">
                                                Close
                                            </div>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        )
                    })}
                </div>

                <div className="flex w-full flex-col gap-4 md:hidden">
                    {sortedEvents.map((event) => (
                        <Dialog>
                            <DialogTrigger asChild>
                                <div
                                    key={event.id}
                                    className="flex flex-col gap-3 rounded-lg border border-neutral-300 p-4">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-main font-condensed text-2xl font-medium uppercase">
                                            {event.title}
                                        </h3>
                                        <span className="text-main text-sm font-semibold whitespace-nowrap">
                                            {event.year}
                                        </span>
                                    </div>
                                    <p className="text-left text-sm leading-snug font-medium text-neutral-500">
                                        {event.description}
                                    </p>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="h-48 w-full rounded object-cover object-top"
                                    />
                                </div>
                            </DialogTrigger>
                            <DialogContent className="border-none bg-white sm:max-w-fit">
                                <DialogHeader>
                                    <DialogTitle>
                                        <p className="text-main max-w-2xl text-center text-2xl font-black">
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
                                            <p className="text-secondary mt-6 text-center text-base font-medium">
                                                {event.description}
                                            </p>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="my-5 sm:justify-center">
                                    <DialogClose asChild>
                                        <div className="bg-main flex h-14 w-36 cursor-pointer items-center justify-center rounded-sm px-3 py-2 font-medium text-neutral-200">
                                            Close
                                        </div>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default eventsPage
