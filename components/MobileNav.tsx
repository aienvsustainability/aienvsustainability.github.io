import React from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'

const MobileNav = () => {
    return (
        <section id="mobilenav" className="lg:hidden w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild><RxHamburgerMenu className="mr-[1rem] text-[18px] cursor-pointer"/></SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader>
                    <ul className="py-8 gap-6">
                            <li className="text-[28px] font-semibold"><Link href="/">Home</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/about">About Us</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/team">Team</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/awards">Awards</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/publications">Publications</Link></li>
                            <li className="text-[28px] font-semibold"><Link href="/contact">Contact</Link></li>
                        </ul>
                        <button className="bg-[#fe5f00] text-[20px] font-semibold text-white px-4 py-2 rounded">Connect With Us</button>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav