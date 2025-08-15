import React from "react";
import Swipe from "./swipe";
import Skill from "./skill/skill";
import { FaX } from "react-icons/fa6";
import { useToggleProfile } from "@/app/store/cartProfile";

const SwipeFolder = () => {
  // control profile opening
  const { toggleProfile } = useToggleProfile();

  return (
    <div
      className="bg-white border  absolute
       border-dotted 
      border-black bottom-5 right-2
        h-[37rem] w-96 md:h-[36rem] px-7 py-2
        lg:w-72 lg:h-[36rem]  lg:p-3"
    >
      <div className=" flex flex-row justify-between w-full">
        <div
          className="h-80 w-[90%]  px-3 py-0 
         lg:w-[85%] lg:h-64"
        >
          <Swipe />
        </div>

        <div>
          <FaX
            onClick={toggleProfile}
            className=" text-2xl hover:cursor-pointer"
          />
        </div>
      </div>

      <text className=" flex flex-col gap-2">
        <p>
          <b className="pr-2">Name: </b> Ayo-oluwole Oluwasolamidotun John
          Oluwadamilare
        </p>

        <p>
          <b className="pr-2">Role: </b>Frontend developer/ fullstack developer
          (in view)
        </p>

        <p>
          <b className="pr-2">Phone number: </b>07080226490/ 08139352548
        </p>

        <p>
          <b className="pr-2">Skill:</b>
          <Skill />
        </p>
      </text>
    </div>
  );
};

export default SwipeFolder;
