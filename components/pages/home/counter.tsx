import { counters } from "@/constants"
import React from "react"

const Counter = () => (
    <section
        id="counter"
        className="w-full bg-cover bg-center bg-no-repeat py-40"
        style={{ backgroundImage: "url('/assets/img/counters-bg.jpg')" }}>
        <div className="grid grid-cols-1 gap-16 px-8 text-center text-white sm:grid-cols-2 sm:px-48 md:grid-cols-4">
            {counters.map((item, i) => (
                <div
                    key={i}
                    className="flex flex-col items-center justify-center">
                    <div className="text-4xl">
                        {React.createElement(item.icon)}
                    </div>
                    <h3 className="text-primary font-condensed mt-4 text-7xl font-normal">
                        {item.value}
                    </h3>
                    <p className="text-lg">{item.label}</p>
                </div>
            ))}
        </div>
    </section>
)

export default Counter
