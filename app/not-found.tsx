import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"
import React from "react"

const NotFound = () => {
    return (
        <>
            <Navigation />
            <section className="flex h-[35rem] flex-col items-center justify-center">
                <h1 className="mb-[5rem] text-center text-[62px] font-extrabold">
                    404
                    <br />
                    Page Not Found
                </h1>
                <a href="/">
                    <button className="bg-main rounded px-4 py-3 text-base font-medium text-white max-lg:hidden">
                        Back To Home
                    </button>
                </a>
            </section>
            <Footer />
        </>
    )
}

export default NotFound
