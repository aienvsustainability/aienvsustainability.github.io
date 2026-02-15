import Link from "next/link"
import React from "react"

const NotFound = () => {
    return (
        <main className="flex h-full w-full flex-col items-center justify-center">
            <section className="flex h-screen flex-col items-center justify-center">
                <h1 className="mb-20 text-center text-6xl font-extrabold text-neutral-900">
                    404
                    <br />
                    Page Not Found
                </h1>
                <Link href="/">
                    <button className="bg-primary rounded px-4 py-3 text-base text-white max-lg:hidden">
                        Back To Home
                    </button>
                </Link>
            </section>
        </main>
    )
}

export default NotFound
