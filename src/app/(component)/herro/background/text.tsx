import ButtonWhite from "@/app/props/buttons/buttonWhite";
import Link from "next/link";
import React from "react";

const Text = () => {
  return (
    <section
      className="text-white  flex flex-col gap-6 
      h-44 p-2 bg-[#00000051] w-full
      md:w-[55%] md:p-4 md:h-48
     lg:h-64 lg:w-[45%] lg:p-6"
    >
      {/* HEADING */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        TURN OFFSEASON ON
      </h1>
      {/* TEXT */}

      <p>Get set for summer with gear that can take the heat</p>

      {/* buttons */}
      <div className="flex flex-row justify-left gap-2">
        {/* shop */}
        <ButtonWhite style="border-white" text="Shop" />

        {/* shop for kids */}
        <Link href="/kids">
          <ButtonWhite style="border-white" text="Shop Kids" />
        </Link>
      </div>
    </section>
  );
};

export default Text;
