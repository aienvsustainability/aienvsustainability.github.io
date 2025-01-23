import React from "react"
import { BiDollar } from "react-icons/bi"
import { BsEmojiSmile } from "react-icons/bs"
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"
import { SlPeople } from "react-icons/sl"

const Counter = () => {
    return (
        <section
            id="counter"
            className="w-full bg-[url('/assets/img/counters-bg.jpg')] bg-cover bg-scroll bg-center bg-no-repeat py-[150px]">
            <div
                id="content"
                className="block px-8 text-center text-white sm:px-48">
                <ul className="p-[0 2rem] sm:p-[0 12rem] flex w-full flex-col items-center justify-center gap-[4rem] sm:flex-row">
                    <li className="w-full sm:w-[25%]">
                        <div className="flex flex-col items-center justify-center">
                            <BiDollar className="text-center text-[36px]" />
                            <h3 className="mt-[10px] text-[48px] font-semibold text-main">
                                1000
                            </h3>
                            <p className="text-center text-lg font-medium">
                                Sponsored
                            </p>
                        </div>
                    </li>
                    <li className="w-full sm:w-[25%]">
                        <div className="flex flex-col items-center justify-center">
                            <BsEmojiSmile className="text-center text-[36px]" />
                            <h3 className="mt-[10px] text-[48px] font-semibold text-main">
                                10
                            </h3>
                            <p className="text-center text-lg font-medium">
                                Scholars Around The World
                            </p>
                        </div>
                    </li>
                    <li className="w-full sm:w-[25%]">
                        <div className="flex flex-col items-center justify-center">
                            <SlPeople className="text-center text-[36px]" />
                            <h3 className="mt-[10px] text-[48px] font-semibold text-main">
                                250
                            </h3>
                            <p className="text-center text-lg font-medium">
                                People Impacted
                            </p>
                        </div>
                    </li>
                    <li className="w-full sm:w-[25%]">
                        <div className="flex flex-col items-center justify-center">
                            <HiOutlineChatBubbleLeftRight className="text-center text-[36px]" />
                            <h3 className="mt-[10px] text-[48px] font-semibold text-main">
                                10
                            </h3>
                            <p className="text-center text-lg font-medium">
                                Intellectual Support
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Counter
