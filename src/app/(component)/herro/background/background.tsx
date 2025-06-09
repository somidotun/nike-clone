"use client";

import one from "@/app/images/background/one.jpg";
import two from "@/app/images/background/two.jpg";
import three from "@/app/images/background/three.jpg";
import four from "@/app/images/background/four.jpg";
import five from "@/app/images/background/five.jpg";
import six from "@/app/images/background/six.jpg";
import seven from "@/app/images/background/seven.jpg";
import eight from "@/app/images/background/eight.jpg";
import nine from "@/app/images/background/nine.jpg";
import ten from "@/app/images/background/ten.jpg";
import eleven from "@/app/images/background/eleven.jpg";
import twelve from "@/app/images/background/twelve.jpg";
import thirteen from "@/app/images/background/thirteen.jpg";
import fourteen from "@/app/images/background/fourteen.jpg";
import fiftheen from "@/app/images/background/fiftheen.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { Suspense } from "react";
import Image from "next/image";
import "./style.css";
import Text from "./text";

const Background = () => {
  return (
    <section className="w-full relative">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
      >
        {/* first slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image src={one} alt="nike on the ground" priority />
          </Suspense>
        </SwiperSlide>

        {/* 2nd slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image src={two} alt="nike on the roof top" priority />
          </Suspense>
        </SwiperSlide>

        {/* 3rd slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image src={three} alt="nikes and basketall " priority />
          </Suspense>
        </SwiperSlide>

        {/*4th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image src={four} alt="nike on a youth" priority />
          </Suspense>
        </SwiperSlide>

        {/* 5th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image src={five} alt="illumateted nike logo" priority />
          </Suspense>
        </SwiperSlide>

        {/* 6th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image src={six} alt="nike at the basketball court" priority />
          </Suspense>
        </SwiperSlide>

        {/* 7th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image
              src={seven}
              alt="nike at a professional basketball game"
              priority
            />
          </Suspense>
        </SwiperSlide>

        {/* 8th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image
              src={eight}
              alt="nike at a professional basketball game"
              priority
            />
          </Suspense>
        </SwiperSlide>

        {/* 9th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image
              src={nine}
              alt="nike at a professional basketball game"
              priority
            />
          </Suspense>
        </SwiperSlide>

        {/* 10th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image
              src={ten}
              alt="nike at a professional basketball game"
              priority
            />
          </Suspense>
        </SwiperSlide>

        {/* 11th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image
              src={eleven}
              alt="nike at a professional basketball game"
              priority
            />
          </Suspense>
        </SwiperSlide>

        {/* 12th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image
              src={twelve}
              alt="nike at a professional basketball game"
              priority
            />
          </Suspense>
        </SwiperSlide>

        {/* 13th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image
              src={thirteen}
              alt="nike at a professional basketball game"
              priority
            />
          </Suspense>
        </SwiperSlide>

        {/* 14th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image
              src={fourteen}
              alt="nike at a professional basketball game"
              priority
            />
          </Suspense>
        </SwiperSlide>

        {/* 15th slide */}
        <SwiperSlide>
          <Suspense fallback={<p>Loading...</p>}>
            <Image src={fiftheen} alt="nike on the ground" priority />
          </Suspense>
        </SwiperSlide>
      </Swiper>

      <div
        className="absolute bottom-0 
      w-full z-50 left-0 "
      >
        <Text />
      </div>
    </section>
  );
};

export default Background;
