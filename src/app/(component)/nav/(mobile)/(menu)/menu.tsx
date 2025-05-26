import Image from "next/image";
import React from "react";
import icons8 from "@/app/images/icons8.png";
import { LuChevronRight } from "react-icons/lu";
import Buttons from "@/app/props/buttons";

const Menu = () => {
  return (
    <section
      className="fixed top-0 bottom-0 bg-slate-600 
     w-[80%] right-0 px-5 py-3"
    >
      <div className="pt-10 flex flex-col gap-16">
        {/* nav links */}
        <ul className="flex flex-col gap-5 font-normal">
          <li className="flex flex-row gap-1">
            News & Featured
            <LuChevronRight className=" h-6" />
          </li>
          <li className="flex flex-row gap-1">
            Men
            <LuChevronRight className=" h-6" />
          </li>
          <li className="flex flex-row gap-1">
            Women
            <LuChevronRight className=" h-6" />
          </li>
          <li className="flex flex-row gap-1">
            Kids
            <LuChevronRight className=" h-6" />
          </li>
        </ul>

        {/* jordan */}
        <div className="flex flex-row gap-3">
          <Image
            src={icons8}
            alt=" jordans logo"
            width={30}
            height={20}
            priority
          />

          <p>Jordans</p>
        </div>

        {/* text */}
        <div className="w-[90%] flex flex-col gap-8">
          <p>
            Become a Nike Member for the best products, inspiration and stories
            in sport.<b>Learn more</b>
          </p>

          <div className="flex flex-row gap-7">
            <Buttons style="bg-black text-white" text=" Join Us" />
            <Buttons style="bg-white text-black" text="Sign in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
