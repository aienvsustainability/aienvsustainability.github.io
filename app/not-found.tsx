import Link from "next/link"
import React from "react"

const NotFound = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full h-full">
            <section className="flex h-screen flex-col items-center justify-center">
                <h1 className="mb-20 text-main text-center text-6xl font-extrabold">
                    404
                    <br />
                    Page Not Found
                </h1>
                <Link href="/">
                    <button className="bg-primary rounded px-4 py-3 text-base font-medium text-white max-lg:hidden">
                        Back To Home
                    </button>
                </Link>
            </section>
        </main>
    )
}

export default NotFound
