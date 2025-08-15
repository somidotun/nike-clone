"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper/modules";
import Image from "next/image";
import dotun2 from "./dotun2.jpg";
import Dotun from "./Dotun.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

const Swipe = () => {
  return (
    <div className="">
      {/* Swiper Container */}
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper
         max-h-[38vh]  w-full
         md:max-h-[25vh]
         lg:max-h-[35vh]  "
        modules={[EffectFlip, Pagination]}
      >
        <SwiperSlide
          className="max-h-[38vh] 
           md:max-h-[25vh]
           lg:max-h-[35vh] 
         rounded-lg   w-full"
        >
          <Image
            src={Dotun}
            alt="My second picture"
            width={300}
            height={400}
            className="w-full object-cover
               max-h-[38vh]
               md:max-h-[25vh]
               lg:max-h-[35vh]
               rounded-2xl"
            priority
          />
        </SwiperSlide>

        <SwiperSlide
          className="max-h-[38vh] md:max-h-[25vh]
          lg:max-h-[35vh]  rounded-lg  w-full"
        >
          <Image
            src={dotun2}
            alt="My second picture"
            width={300}
            height={400}
            className="w-full object-cover
              max-h-[38vh]
               md:max-h-[25vh]
               lg:max-h-[35vh]
               rounded-2xl"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipe;
