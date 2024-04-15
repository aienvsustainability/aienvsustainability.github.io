"use client"
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

const ImageSlider = () => {

    return (
        <section className="w-full">
            <Swiper navigation={true} effect={'fade'} autoplay={{delay: 5000, disableOnInteraction: false}} loop={true} modules={[EffectFade, Autoplay, Navigation]} className="max-lg:h-[250px] h-[550px] flex text-center justify-center items-center">
                <SwiperSlide>
                    <Image src="/assets/img/slider-1.jpg" style={{ width: '100%', height: '100%' }} sizes="100vw" alt="Slide 1" width={0} height={0} className="object-cover w-full h-full" />
                    <div className="absolute max-lg:px-[2rem] px-[25rem] inset-0 flex flex-col justify-center items-center text-white">
                        <h1 className="max-lg:text-[30px] text-[62px] font-extrabold leading-[1.2] mb-[1rem]">Together we can<br/>make a Difference</h1>
                        <p className="max-lg:hidden text-[16px] text-[#DDDDDD] mb-[2rem]">The CAIES Foundation would extend its education, training, and research activities in other areas required to address the sustainability issues.</p>
                        <button className="bg-[#fe5f00] text-[15px] font-[500] max-lg:hidden text-white px-8 py-3 rounded">Join Us</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/img/slider-2.jpg" style={{ width: '100%', height: '100%' }} sizes="100vw" alt="Slide 2"  width={0} height={0} className="object-cover w-full h-full" />
                    <div className="absolute max-lg:px-[2rem] px-[25rem] inset-0 flex flex-col justify-center items-center text-white">
                        <h1 className="max-lg:text-[30px] text-[62px] font-['Poppins'] font-extrabold leading-[1.2] mb-[1rem]">स्वस्मै स्वल्पं<br/>समाजाय सर्वस्वं</h1>
                        <p className="max-lg:hidden text-[16px] text-[#DDDDDD] mb-[2rem]">CAIES generously promotes and supports research in fundamental and applied science through internships for school students, undergraduate, postgraduate, and PhD students.</p>
                        <button className="bg-[#fe5f00] text-[15px] font-[500] max-lg:hidden text-white px-8 py-3 rounded">Join Us</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/assets/img/slider-3.jpg" style={{ width: '100%', height: '100%' }} sizes="100vw" alt="Slide 3"  width={0} height={0} className="object-cover w-full h-full" />
                    <div className="absolute max-lg:px-[2rem] px-[18rem] inset-0 flex flex-col justify-center items-center text-white">
                        <h1 className="max-lg:text-[30px] text-[50px] font-extrabold leading-[1.2] mb-[1rem]">The Center For Artificial Intelligence & Environmental Sustainability Foundation</h1>
                        <p className="max-lg:px-[1rem] px-[7rem] max-lg:hidden text-[16px] text-[#DDDDDD] mb-[2rem]">The CAIES Foundation would extend its education, training, and research activities in other areas required to address the sustainability issues.</p>
                        <button className="bg-[#fe5f00] text-[15px] font-[500] max-lg:hidden text-white px-8 py-3 rounded">Join Us</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default ImageSlider;
