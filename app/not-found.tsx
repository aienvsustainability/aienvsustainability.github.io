import Footer from '@/components/Footer'
import HeaderBar from '@/components/HeaderBar'
import React from 'react'

const NotFound = () => {
  return (
    <>
    <HeaderBar />
    <section className="flex flex-col items-center justify-center h-[35rem]">
        <h1 className="text-[62px] text-center font-extrabold mb-[5rem]">404<br/>Page Not Found</h1>
        <a href="/"><button className="bg-[#fe5f00] text-[15px] font-[500] max-lg:hidden text-white px-4 py-3 rounded">Back To Home</button></a>
    </section>
    <Footer />
    </>
  )
}

export default NotFound