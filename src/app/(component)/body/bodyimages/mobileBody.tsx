import Featured from "@/app/props/featuredProps.tsx/featured";
import One from "@/app/images/body background/mobile background/one.jpg";
import two from "@/app/images/body background/mobile background/two.jpg";
import three from "@/app/images/body background/mobile background/three.jpg";
import five from "@/app/images/body background/mobile background/five.jpg";
import six from "@/app/images/body background/mobile background/six.jpg";
import seven from "@/app/images/body background/mobile background/seven.jpg";
import eight from "@/app/images/body background/mobile background/eight.jpg";
import ten from "@/app/images/body background/mobile background/ten.jpg";
import "./style.css";
import ButtonWhite from "@/app/props/buttons/buttonWhite";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styless.css";

// import required modules
import { Pagination } from "swiper/modules";

const MobileBody = () => {
  return (
    <div className="md:text-black">
      <>
        <h1 className="px-10 text-xl py-5">Featured</h1>

        <Swiper
          slidesPerView={1}
          loop={false}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="h-[300px]"
        >
          {/* first one */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* background image */}

              <div className="h-[200px]">
                <Featured
                  altText="sport shoe for woman"
                  imageStyle="h-full w-full object-cover"
                  image={One}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[100px]
                 flex flex-col gap-1"
              >
                <p>sport shoe for woman</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order for your sport shoe" />
              </div>
            </div>
          </SwiperSlide>

          {/* second one */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* background image */}

              <div className="h-[200px]">
                <Featured
                  altText="sport woman in the gym"
                  imageStyle="h-full w-full object-cover"
                  image={two}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[100px]
                 flex flex-col gap-1"
              >
                <p> Gym wear for female</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order for your gym wear" />
              </div>
            </div>
          </SwiperSlide>

          {/* third one */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* background image */}

              {/* unhovered */}
              <div className="h-[200px]">
                <Featured
                  altText="Nike air for female"
                  imageStyle="h-full w-full object-cover"
                  image={three}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[100px]
                 flex flex-col gap-1"
              >
                <p>Nike Air</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order for Nike air" />
              </div>
            </div>
          </SwiperSlide>

          {/* fouth one */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* background image */}

              <div className="h-[200px]">
                <Featured
                  altText="a girl in nike gym wear"
                  image={ten}
                  imageStyle="h-full w-full object-cover"
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[100px]
                 flex flex-col gap-1"
              >
                <p>Nike gym wear for Female</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order your gym wear" />
              </div>
            </div>
          </SwiperSlide>

          {/* fifth one */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* unhovered */}
              <div className="h-[200px]">
                <Featured
                  altText="jacket"
                  imageStyle="h-full w-full object-cover"
                  image={five}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[100px]
                 flex flex-col gap-1"
              >
                <p>Jackets for male</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order your jacket" />
              </div>
            </div>
          </SwiperSlide>

          {/* six one */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* hovered */}
              <div className="h-[200px]">
                <Featured
                  altText="shoe"
                  image={six}
                  imageStyle="h-full w-full object-cover"
                />
              </div>
              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[100px]
                 flex flex-col gap-1"
              >
                <p>Nike shoe for male</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order for your shoe" />
              </div>
            </div>
          </SwiperSlide>

          {/* seventh one */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* hovered */}
              <div className="h-[200px]">
                <Featured
                  altText="shoe on bed"
                  image={seven}
                  imageStyle="h-full w-full object-cover"
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784]  h-[100px]
                 flex flex-col gap-1"
              >
                <p>Nike shoe for male</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order for your shoe" />
              </div>
            </div>
          </SwiperSlide>

          {/* eight one */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              {/* unhovered */}
              <div className="h-[200px]">
                <Featured
                  altText=" nike fear of God"
                  imageStyle="h-full w-full object-cover"
                  image={eight}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[100px]
                 flex flex-col gap-1"
              >
                <p>fear of God</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order for your shoe" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default MobileBody;
