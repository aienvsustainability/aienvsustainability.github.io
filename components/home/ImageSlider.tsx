"use client"
import React, { useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import { EffectFade, Autoplay, Navigation } from "swiper/modules"
import Image from "next/image"

const ImageSlider = () => {
    return (
        <section className="w-full">
            <Swiper
                navigation={true}
                effect={"fade"}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                modules={[EffectFade, Autoplay, Navigation]}
                className="flex h-[590px] items-center justify-center text-center max-lg:h-[570px]">
                <SwiperSlide>
                    <Image
                        src="/assets/img/slider-1.jpg"
                        style={{ width: "100%", height: "100%" }}
                        sizes="100vw"
                        alt="Slide 1"
                        width={0}
                        height={0}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-96 text-white max-lg:px-8">
                        <h2 className="max-lg:text-4xl mb-4 animate-slidein text-6xl font-extrabold leading-[1.2]">
                            Together we can
                            <br />
                            make a Difference
                        </h2>
                        <p className="animate-slidein text-base text-neutral-200">
                            The CAIES Foundation would extend its education,
                            training, and research activities in other areas
                            required to address the sustainability issues.
                        </p>
                        {/* <button className="animate-slidein rounded bg-main px-8 py-3 text-base font-medium text-white">
                            Join Us
                        </button> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/assets/img/slider-2.jpg"
                        style={{ width: "100%", height: "100%" }}
                        sizes="100vw"
                        alt="Slide 2"
                        width={0}
                        height={0}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-96 text-white max-lg:px-8">
                        <h1 className="hindi-bold max-lg:text-4xl mb-4 animate-slidein text-6xl font-extrabold leading-[1.2]">
                            स्वस्मै स्वल्पं
                            <br />
                            समाजाय सर्वस्वं
                        </h1>
                        <p className="animate-slidein text-base text-neutral-200">
                            CAIES generously promotes and supports research in
                            fundamental and applied science through internships
                            for school students, undergraduate, postgraduate,
                            and PhD students.
                        </p>
                        {/* <button className="animate-slidein rounded bg-main px-8 py-3 text-base font-medium text-white">
                            Join Us
                        </button> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/assets/img/slider-3.jpg"
                        style={{ width: "100%", height: "100%" }}
                        sizes="100vw"
                        alt="Slide 3"
                        width={0}
                        height={0}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-72 text-white max-lg:px-8">
                        <h2 className="max-lg:text-4xl mb-4 animate-slidein text-5xl font-extrabold leading-[1.2]">
                            The Center For Artificial Intelligence &
                            Environmental Sustainability Foundation
                        </h2>
                        <p className="animate-slidein px-28 text-base text-neutral-200 max-lg:px-4">
                            The CAIES Foundation would extend its education,
                            training, and research activities in other areas
                            required to address the sustainability issues.
                        </p>
                        {/* <button className="animate-slidein rounded bg-main px-8 py-3 text-base font-medium text-white">
                            Join Us
                        </button> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default ImageSlider
