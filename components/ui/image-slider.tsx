"use client"
import React, { useRef, useEffect, useState } from "react"
// import Swiper from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Navigation } from "swiper/modules"
import Image from "next/image"
import { slides } from "@/constants"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

const ImageSlider = () => {
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [swiperInstance, setSwiperInstance] = useState<any>(null)

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current
            swiperInstance.params.navigation.nextEl = nextRef.current
            swiperInstance.navigation.destroy()
            swiperInstance.navigation.init()
            swiperInstance.navigation.update()
        }
    }, [swiperInstance])

    return (
        <section className="relative w-full">
            <Swiper
                onSwiper={setSwiperInstance}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                modules={[EffectFade, Autoplay, Navigation]}
                className="flex h-screen items-center justify-center text-center">
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <Image
                            src={slide.img}
                            alt={`Slide ${i + 1}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority
                            className="h-full w-full object-cover"
                            style={{ width: "100%", height: "100%" }}
                        />
                        <div
                            className={`absolute inset-0 flex flex-col items-center justify-center text-neutral-50 max-lg:px-8 ${slide.paddingX}`}>
                            <h2
                                className={`animate-slidein mb-4 leading-[1.2] max-lg:text-4xl ${slide.titleSize} ${
                                    slide.titleClass ?? ""
                                }`}>
                                {slide.titleLines ? (
                                    <>
                                        {slide.titleLines[0]} <br />{" "}
                                        {slide.titleLines[1]}
                                    </>
                                ) : (
                                    slide.title
                                )}
                            </h2>
                            <p
                                className={`animate-slidein text-base text-neutral-50/80 ${
                                    slide.descPadding ?? ""
                                }`}>
                                {slide.desc}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                ref={prevRef}
                className="text-neutral-50 absolute top-1/2 left-5 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-neutral-900/50 p-3 outline-none hover:bg-neutral-900"
                aria-label="Previous slide">
                <FiArrowLeft size={24} />
            </button>
            <button
                ref={nextRef}
                className="text-neutral-50 absolute top-1/2 right-5 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-neutral-900/50 p-3 outline-none hover:bg-neutral-900"
                aria-label="Next slide">
                <FiArrowRight size={24} />
            </button>
        </section>
    )
}

export default ImageSlider
