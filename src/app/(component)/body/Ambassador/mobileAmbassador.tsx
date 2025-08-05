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
          className=" w-full h-[36rem] "
          src={haaland2}
          alt="haaland"
          priority={true}
        />
        {/* text */}
        <text
          className="absolute bottom-0  text-center
          text-black w-full flex flex-col gap-2 lg:pl-8 "
        >
          <p>Athlete picks</p>
          <p className="text-lg  w-full">Erling Haaland</p>
          <div>
            <ButtonBlack style="w-20" text="Shop" />
          </div>
        </text>
      </div>
    </div>
  );
};

export default MobileAmbassador;
