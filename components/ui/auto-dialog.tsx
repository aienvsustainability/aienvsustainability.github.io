"use client"

import { useEffect, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"

export default function AutoDialog() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const KEY = "caies_modal_seen"
        const ONE_DAY = 6 * 60 * 60 * 1000

        const stored = localStorage.getItem(KEY)

        if (!stored) {
            setOpen(true)
            localStorage.setItem(KEY, Date.now().toString())
            return
        }

        const lastSeen = Number(stored)

        if (Date.now() - lastSeen > ONE_DAY) {
            setOpen(true)
            localStorage.setItem(KEY, Date.now().toString())
        }
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="border-none bg-transparent outline-0">
                <DialogHeader>
                    <DialogTitle className="sr-only">
                        Important Update
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                        Registrations are now open for upcoming CAIES Foundation
                        events.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-center">
                    <Link
                        href="https://forms.gle/8KRQ1Zm7dFbg1aKE8"
                        target="_blank">
                        <Image
                            src="/assets/img/ai_for_scientist.jpg"
                            alt="CAIES Foundation Update"
                            width={600}
                            height={800}
                            className="w-full max-w-md rounded-md object-contain shadow-lg md:max-w-lg"
                        />
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}
