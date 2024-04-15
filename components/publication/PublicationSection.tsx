"use client";

import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { WiTime5 } from 'react-icons/wi';
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import { publicationCards } from "@/constants";
import Image from 'next/image';

interface PublicationCard {
  image: string;
  date: string;
  title: string;
  link: string;
  description: string;
}

const SkeletonLoader = () => (
  <div className="p-[2%] relative w-full overflow-hidden animate-pulse">
    <div className="bg-gray-200 h-80 w-full"></div>
    <div className="h-auto bg-white border-dashed border border-[#CCCCCC] py-[40px] px-[30px]">
      <div className="text-[#999999] text-[16px] font-medium flex items-center gap-1 mb-[1rem]">
        <WiTime5 /> Date
      </div>
      <div className="text-[24px] font-semibold leading-8">Title</div>
      <div className="text-[16px] mt-2 bg-gray-200 h-8 w-2/3"></div>
    </div>
  </div>
);

const PublicationSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = publicationCards.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(publicationCards.length / itemsPerPage)));
  const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <section id="publication-section" className="w-full bg-[#F2F2F2]">
      <div id="cards" className="py-[6rem] px-[12rem] gap-5 max-lg:px-[2rem] grid grid-cols-3 max-lg:grid-cols-1">
        {currentItems.map((item, index) => (
          <div key={index} className="p-[2%] relative w-full overflow-hidden transition-shadow duration-300">
            <a href={item.link}><Image src={item.image} width={500} height={500} alt="award" /></a>
            <a
              href={item.link}
              className="absolute top-[15px] right-[15px] hover:transition-all hover:ease-in-out hover:duration-1000 bg-[#FE5D00A4] hover:bg-[#FE5D00] text-white text-[14px] font-medium py-[8px] px-[10px] rounded-[3px] flex items-center"
            >
              Read More <FiPlus className="ml-[5px] text-[12px]" />
            </a>
            <div className="h-auto bg-white border-dashed border border-[#CCCCCC] py-[40px] px-[30px]">
              <h4 className="text-[#999999] text-[16px] font-medium flex items-center gap-1 mb-[1rem]">
                <WiTime5 /> {item.date}
              </h4>
              <a href={item.link}><h3 className="text-[24px] font-semibold leading-8">{item.title}</h3></a>
              <p className="text-[16px] mt-2" dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pb-[6rem]">
        <button onClick={prevPage} className="px-4 py-2 mx-1 border border-[#D2D2D2] bg-[#F2F2F2] rounded-md font-semibold text-black">
          <PiArrowLeftThin />
        </button>
        {Array.from({ length: Math.ceil(publicationCards.length / itemsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className={`px-4 py-2 mx-1 bg-[#F2F2F2] border border-[#D2D2D2] rounded-md ${currentPage === i + 1 ? 'bg-[#FE5F00] border-none font-semibold text-white' : ''}`}>
            {i + 1}
          </button>
        ))}
        <button onClick={nextPage} className="px-4 border border-[#D2D2D2] py-2 mx-1 bg-[#F2F2F2] rounded-md font-semibold text-black">
          <PiArrowRightThin />
        </button>
      </div>
    </section>
  );
};

export default PublicationSection;