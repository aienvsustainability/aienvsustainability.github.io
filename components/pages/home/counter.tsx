import { counters } from "@/constants"
import React from "react"

const Counter = () => (
  <section
    id="counter"
    className="w-full bg-cover bg-center bg-no-repeat py-40"
    style={{backgroundImage: "url('/assets/img/counters-bg.jpg')"}}
  >
    <div className="grid grid-cols-1 gap-16 px-8 text-center text-white sm:grid-cols-2 md:grid-cols-4 sm:px-48">
      {counters.map((item, i) => (
        <div key={i} className="flex flex-col items-center justify-center">
          <div className="text-4xl">{React.createElement(item.icon)}</div>
          <h3 className="mt-4 text-5xl font-semibold text-primary">{item.value}</h3>
          <p className="text-lg font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Counter
