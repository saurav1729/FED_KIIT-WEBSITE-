import React, { useState } from "react";
import { images } from "../utils/images";

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useEffect } from "react";


const Carousel = () => {
  const [currentIndex, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((currentIndex + 1) % images.length);
  };

  const handleBack = () => {
    setIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setIndex(index);
  };

  

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((currentIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <>
      <div className="relative overflow-hidden w-[45rem] h-[64rem] m-[0]">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} className="w-[45rem] h-[64rem]"  />
          ))}
        </div>
      </div>

      <div className="absolute w-[45rem] h-[64rem] flex items-center justify-between text-[20px]">
        <div className="m-[1rem] text-[4rem] text-[#ffffff50] cursor-pointer hover:text-[#fff] " onClick={handleBack}>
           <IoIosArrowDropleft />
        </div>
        <div className="m-[1rem] text-[4rem] text-[#ffffff50] cursor-pointer hover:text-[#fff]" onClick={handleNext}>
          <IoIosArrowDropright />
        </div>
      </div>
      
      <div className="absolute top-[59rem] left-[5rem]  gap-[1rem] flex">
        {images.map((para, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-[1rem] w-[1rem]  rounded-[1rem] cursor-pointer ${index === currentIndex ? 'bg-[#F45725] ' : 'bg-[#ffffff50]'}`}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
