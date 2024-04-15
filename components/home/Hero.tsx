import React from "react";
import { aboutCards } from "@/constants";
import Image from "next/image";

// Function to replace \n with <br/> in the description
const formatDescription = (description: string) => {
  return description.replace(/\n/g, '<br/>');
};

const Hero = () => { 
    return (
      <div className="bg-[#F2F2F2] w-full max-lg:py-[6rem] py-[8rem]">
        <div id="heading" className="items-center text-center justify-center">
          <h1 className="text-black text-[38px] font-extrabold text-center">About CAIES</h1>
          <span className="border-t-4 w-[60px] h-2 border-[#fe5f00] inline-block text-center"></span>
          <p className="text-[17px] mb-[15px] mt-1">Solutions are designed based on the &apos;goals&apos; considering its multidimensional aspects which are<br/>grounded in micro and macro scientific and technical rigors.</p>
        </div>
        <div id="section" className="px-[2rem] sm:px-[12rem] pt-12 flex flex-col gap-6 sm:flex-row">
          {/* Render each item from aboutSection array */}
          {aboutCards.map((item, index) => (
            <div key={index} className="p-[2%] relative w-full overflow-hidden sm:w-[500px]">
              <Image src={item.image} width={500} height={500} alt={`causes${index + 1}`} />
              <div className="sm:h-[500px] bg-white border-dashed border border-[#CCCCCC] py-[40px] px-[30px]">
                <h3 className="text-[24px] font-semibold leading-8">{item.title}</h3>
                {/* Replace \n with <br/> in the description */}
                <p className="text-[16px] mt-2" dangerouslySetInnerHTML={{ __html: formatDescription(item.description) }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Hero;