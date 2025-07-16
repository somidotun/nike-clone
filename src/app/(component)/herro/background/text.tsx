import ButtonWhite from "@/app/props/buttons/buttonWhite";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Text = () => {
  //  const handleType = () => {
  //     // access word count number
  //     console.log(count)}
  //   }

  //   const handleDone = () => {
  //     console.log(`Done after 5 loops!`)
  //   }

  return (
    <section
      className="text-white  flex flex-col gap-6 
      h-52 p-2 bg-[#00000051] w-full
      md:w-[80%] md:p-4 md:h-48
      lg:h-48 lg:w-[55%] lg:p-6"
    >
      {/* HEADING */}

      <h1 className="text-3xl md:text-4xl font-bold capitalize">
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={[
            "Just Do It. Faster, Stronger, Bolder.",
            " Turn offseason on.",
            "Made To Move The Way You Do.",
            "Street Tested. Culture Approved.",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
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
