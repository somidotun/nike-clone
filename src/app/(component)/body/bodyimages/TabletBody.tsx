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

const TabletBody = () => {
  return (
    <div className="md:text-black">
      <>
        <h1 className="px-10 text-xl py-5">Featured</h1>

        <Swiper
          slidesPerView={2}
          loop={true}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className=" h-[6.35rem]"
        >
          {/* first one */}
          <SwiperSlide>
            <div className="relative  w-full">
              {/* background image */}

              <div>
                <Featured
                  altText="sport shoe for woman"
                  imageStyle="h-[10.35rem] w-full"
                  image={One}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[6.5rem]
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
            <div className="relative  w-full">
              {/* background image */}

              <div>
                <Featured
                  altText="sport woman in the gym"
                  imageStyle="h-[26.35rem] w-[100%]"
                  image={two}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[6.5rem]
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
            <div className=" relative">
              {/* background image */}

              {/* unhovered */}
              <div className=" w-full">
                <Featured
                  altText="Nike air for female"
                  imageStyle="w-[50%] h-[26.35rem]"
                  image={three}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[6.5rem]
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
            <div className="relative">
              {/* background image */}

              <div className="w-full">
                <Featured
                  altText="a girl in nike gym wear"
                  image={ten}
                  imageStyle="w-[50%] h-[26.35rem]"
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[6.5rem]
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
            <div className="relative">
              {/* unhovered */}
              <div className="div1 w-full">
                <Featured
                  altText="jacket"
                  imageStyle="w-[50%]
                 h-[26.35rem]"
                  image={five}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[6.5rem]
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
            <div className="relative">
              {/* hovered */}
              <div className="w-full">
                <Featured
                  altText="shoe"
                  image={six}
                  imageStyle="w-[50%]  
                 h-[26.35rem]"
                />
              </div>
              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[6.5rem]
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
            <div className="relative ">
              {/* hovered */}
              <div>
                <Featured
                  altText="shoe on bed"
                  image={seven}
                  imageStyle="w-[50%] 
                 h-[26.35rem]"
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[6.5rem]
                 flex flex-col gap-1"
              >
                <p>Nike shoe for male</p>
                <h1>Make an Impression</h1>
                <ButtonWhite text="Order for your shoe" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              {/* unhovered */}
              <div>
                <Featured
                  altText=" nike fear of God"
                  imageStyle="w-[50%] 
                 h-[26.35rem]"
                  image={eight}
                />
              </div>

              {/* text */}
              <div
                className="absolute bottom-2 py-4  text-white
                 w-full bg-[#07070784] h-[6.5rem]
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
      <div>{/* fourth one */}</div>
    </div>
  );
};

export default TabletBody;
