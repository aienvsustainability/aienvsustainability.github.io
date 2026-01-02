"use client"
import React, { useRef, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Navigation } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
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
        <section className="w-full relative">
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
                className="flex h-screen items-center justify-center text-center"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <Image
                            src={slide.img}
                            alt={`Slide ${i + 1}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            quality={100}
                            priority
                            className="h-full w-full object-cover"
                            style={{ width: "100%", height: "100%" }}
                        />
                        <div
                            className={`absolute inset-0 flex flex-col items-center justify-center text-white max-lg:px-8 ${slide.paddingX}`}
                        >
                            <h2
                                className={`mb-4 animate-slidein leading-[1.2] max-lg:text-4xl ${slide.titleSize} ${slide.titleClass ?? ""
                                    }`}
                            >
                                {slide.titleLines ? (
                                    <>
                                        {slide.titleLines[0]} <br /> {slide.titleLines[1]}
                                    </>
                                ) : (
                                    slide.title
                                )}
                            </h2>
                            <p
                                className={`animate-slidein text-base text-white ${slide.descPadding ?? ""
                                    }`}
                            >
                                {slide.desc}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                ref={prevRef}
                className="absolute cursor-pointer left-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-main/50 p-3 text-white hover:bg-main outline-none"
                aria-label="Previous slide"
            >
                <FiArrowLeft size={24} />
            </button>
            <button
                ref={nextRef}
                className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded-full bg-main/50 p-3 text-white hover:bg-main cursor-pointer outline-none"
                aria-label="Next slide"
            >
                <FiArrowRight size={24} />
            </button>
        </section>
    )
}

export default ImageSlider
