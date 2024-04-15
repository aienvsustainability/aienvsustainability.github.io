import React from "react"
import { BiDollar } from 'react-icons/bi'
import { BsEmojiSmile } from 'react-icons/bs'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { SlPeople } from 'react-icons/sl'

const Counter = () => {
    return (
        <section id="counter" className="bg-[url('/assets/img/counters-bg.jpg')] bg-no-repeat bg-center bg-scroll bg-cover py-[150px] w-full">
            <div id="content" className="block text-center text-white px-[2rem] sm:px-[12rem]">
                <ul className="p-[0 2rem] sm:p-[0 12rem] w-full flex flex-col sm:flex-row justify-center items-center gap-[4rem]">
                    <li className="w-full sm:w-[25%]">
                        <div className="flex flex-col justify-center items-center">
                            <BiDollar className="text-[36px] text-center" />
                            <h3 className="text-[48px] mt-[10px] text-[#FE5F00] font-semibold">1000</h3>
                            <p className="text-[18px] font-medium text-center">Sponsored</p>
                        </div>
                    </li>
                    <li className="w-full sm:w-[25%]">
                        <div className="flex flex-col justify-center items-center">
                            <BsEmojiSmile className="text-[36px] text-center" />
                            <h3 className="text-[48px] mt-[10px] text-[#FE5F00] font-semibold">10</h3>
                            <p className="text-[18px] font-medium text-center">Scholars Around The World</p>
                        </div>
                    </li>
                    <li className="w-full sm:w-[25%]">
                        <div className="flex flex-col justify-center items-center">
                            <SlPeople className="text-[36px] text-center" />
                            <h3 className="text-[48px] mt-[10px] text-[#FE5F00] font-semibold">250</h3>
                            <p className="text-[18px] font-medium text-center">People Impacted</p>
                        </div>
                    </li>
                    <li className="w-full sm:w-[25%]">
                        <div className="flex flex-col justify-center items-center">
                            <HiOutlineChatBubbleLeftRight className="text-[36px] text-center" />
                            <h3 className="text-[48px] mt-[10px] text-[#FE5F00] font-semibold">10</h3>
                            <p className="text-[18px] font-medium text-center">Intellectual Support</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Counter