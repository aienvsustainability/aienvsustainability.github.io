import React from "react";
import { awardCards } from "@/constants";
import Image from "next/image";
import Breadcrumb from "../Breadcrumb";

const SkeletonLoader = () => (
  <div className="p-[2%] relative w-full overflow-hidden animate-pulse">
    <div className="bg-gray-200 h-80 w-full"></div>
    <div className="h-auto bg-white border-dashed border border-[#CCCCCC] py-[40px] px-[30px]">
      <div className="text-[24px] font-semibold leading-8 bg-gray-200 h-8 w-2/3"></div>
      <div className="text-[16px] mt-2 bg-gray-200 h-8 w-4/5"></div>
    </div>
  </div>
);

const AwardSection = () => {
  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Awards", active: true },
  ];
  return (
    <>
      <Breadcrumb
        title="Awards"
        subtitle={`Honoring unsung heroes in education\nscience across India. Nominate now!`}
        imageUrl="/assets/img/page-header-bg.jpg"
        breadcrumb={breadcrumb}
      />
      <section id="awards-section" className="w-full bg-[#F2F2F2] py-[6rem]">
        <div id="heading" className="items-center text-center justify-center mb-[3rem] max-lg:px-[2rem] px-[12rem]">
          <h1 className="text-black text-[38px] font-extrabold text-center">Awards</h1>
          <span className="border-t-4 w-[60px] max-lg:mb-[2rem] h-2 border-[#fe5f00] inline-block text-center"></span>
          <p className="text-[17px] font-medium mb-[15px] max-lg:text-left mt-1">The nominations are open on a rolling basis, and the awards will be announced on every Basant Panchami every year</p>
          <p className="text-[17px] font-normal max-lg:text-left mt-1">The CAIES Foundation has launched various awards for unsung teachers and scientists, primarily from government schools, colleges, and universities. The foundation will select the awardee based on their academic, scientific, and social contributions. Although the foundation will perform its assessment for potential awardees, it also encourages individuals to submit their nominations through the foundation&apos;s website. The jurisdiction of the awards will be India. Nominations are open on a rolling basis; however, the application should be submitted by Makar Sankranti (January 15th) of each year. The awards will be announced on Vasant Panchami (February) every year. Applications submitted after Makar Sankranti will be considered for next year’s awards.</p>
        </div>
        <div id="cards" className="items-center max-lg:grid-cols-1 grid grid-cols-3 gap-5 justify-center max-lg:px-[2rem] px-[12rem]">
          {awardCards.map((item, index) => (
            <div key={index} className="p-[2%] relative w-full overflow-hidden">
              <Image src={item.image} width={500} height={500} alt={`awards${index + 1}`} />
              <a href={item.href} className="absolute top-[15px] right-[15px] hover:transition-all hover:ease-in-out hover:duration-1000 bg-[#FE5D00A4] hover:bg-[#FE5D00] text-white text-[14px] font-medium py-[8px] px-[10px] rounded-[3px] flex items-center">Submit Application +</a>
              <div className="sm:h-[400px] bg-white border-dashed border border-[#CCCCCC] py-[40px] px-[30px]">
                <h3 className="text-[24px] font-semibold leading-8">{item.title}</h3>
                <p className="text-[16px] mt-2" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AwardSection;
