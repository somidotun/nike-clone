import ButtonBlack from "@/app/props/buttons/buttonBlack";
import Image from "next/image";
import haaland2 from "./haaland2.jpg";
import React from "react";

const MobileAmbassador = () => {
  return (
    <div>
      {/* haaland */}
      <div className=" relative h-[38rem] pt-2 ">
        {/* background image */}

        <Image
          className=" w-full h-[37.4rem] "
          src={haaland2}
          alt="haaland"
          priority={true}
        />
        {/* text */}
        <text
          className="absolute bottom-0  text-center  bg-[#0000005e]
          text-white w-full flex flex-col gap-2 p-4  "
        >
          <p className="text-xl">Athlete picks</p>
          <p className="text-2xl  w-full">Erling Haaland</p>
          <div>
            <ButtonBlack style="w-40 p-4" text="Shop" />
          </div>
        </text>
      </div>
    </div>
  );
};

export default MobileAmbassador;
