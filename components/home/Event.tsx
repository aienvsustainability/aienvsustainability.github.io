import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { SlCalender } from 'react-icons/sl'
import { FiMapPin } from 'react-icons/fi'


const Event = () => {
    return (
        <>
            <section className="w-full bg-[#F2F2F2] py-[6rem]">
                <div id="heading" className="items-center text-center justify-center mb-[3rem]">
                    <h2 className="text-black text-[38px] font-extrabold text-center">Events</h2>
                    <span className="border-t-4 w-[60px] h-2 border-[#fe5f00] inline-block text-center"></span>
                    <p className="text-[17px] font-normal mb-[15px] mt-1"><span className="font-['Poppins'] text-[15px]">स्वस्मै स्वल्पं समाजाय सर्वस्वं</span> - A little for self and everything for others</p>
                </div>
                <div className="px-[4rem] sm:px-[12rem] flex items-center justify-center">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>

                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex flex-col sm:flex-row items-center justify-center">
                                    <Image src="/assets/img/events-1.jpg" width={0} height={0} style={{ width: '385.71px', height: '337.71px' }} sizes="100vw" alt='he' />
                                    <div className="h-auto bg-white border-dashed border border-[#CCCCCC] py-[40px] px-[30px]">
                                        <h2 className="text-[20px] font-extrabold leading-8">Deepawali Celebration Among Musahar Community</h2>
                                        <div className="flex gap-4 my-[8px]">
                                            <p className="flex text-[12px] gap-1 items-center text-center text-[#999999] font-semibold"><SlCalender className="text-[#FE5F00]" /> 2022</p>
                                            <p className="flex text-[12px] gap-1 items-center text-center text-[#999999] font-semibold"><FiMapPin className="text-[#FE5F00]" /> BIHAR, INDIA</p>
                                        </div>
                                        <p className="text-[16px] mt-2">In 2022, Deepawali was celebrated among the Musahar community in Bihar, India, marked by cultural festivities and communal gatherings.</p>
                                        <a href="#" className="rounded-[3px] px-[25px] mt-[20px] leading-[45px] bg-[#FE5F00] inline-block font-medium text-[15px] text-white">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex flex-col sm:flex-row items-center justify-center">
                                    <Image src="/assets/img/events-2.jpg" width={0} height={0} style={{ width: '385.71px', height: '337.71px' }} sizes="100vw" alt='he' />
                                    <div className="h-auto bg-white border-dashed border border-[#CCCCCC] py-[40px] px-[30px]">
                                        <h2 className="text-[20px] font-extrabold leading-8">Deepawali celebration with the Musahar community</h2>
                                        <div className="flex gap-4 my-[8px]">
                                            <p className="flex text-[12px] gap-1 items-center text-center text-[#999999] font-semibold"><SlCalender className="text-[#FE5F00]" /> 2022</p>
                                            <p className="flex text-[12px] gap-1 items-center text-center text-[#999999] font-semibold"><FiMapPin className="text-[#FE5F00]" /> BIHAR, INDIA</p>
                                        </div>
                                        <p className="text-[16px] mt-2">In 2023, Deepawali was celebrated among the Musahar community in Bihar, India, marked by cultural festivities and communal gatherings.</p>
                                        <a href="#" className="rounded-[3px] px-[25px] mt-[20px] leading-[45px] bg-[#FE5F00] inline-block font-medium text-[15px] text-white">Read More</a>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/1 lg:basis-1/2">
                                <div className="flex flex-col sm:flex-row items-center justify-center">
                                    <Image src="/assets/img/events-3.jpg" width={0} height={0} style={{ width: '385.71px', height: '337.71px' }} sizes="100vw" alt='he' />
                                    <div className="h-[410px] max-lg:h-[430px] bg-white border-dashed border border-[#CCCCCC] py-[40px] px-[30px]">
                                        <h2 className="text-[20px] font-extrabold leading-8">Aaranyakam - KDU</h2>
                                        <div className="flex gap-4 my-[8px]">
                                            <p className="flex text-[12px] gap-1 items-center text-center text-[#999999] font-semibold"><SlCalender className="text-[#FE5F00]" /> 2023</p>
                                            <p className="flex text-[12px] gap-1 items-center text-center text-[#999999] font-semibold"><FiMapPin className="text-[#FE5F00]" /> KERELA, INDIA</p>
                                        </div>
                                        <p className="text-[16px] mt-2">In 2023, Kerala University of Digital Sciences Student Council, with School of Informatics, celebrated Wildlife Week with events promoting conservation.</p>
                                        <a href="#" className="rounded-[3px] px-[25px] mt-[20px] leading-[45px] bg-[#FE5F00] inline-block font-medium text-[15px] text-white">Read More</a>
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