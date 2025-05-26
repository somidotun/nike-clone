import Image from "next/image";
import React, { useState } from "react";
import icons8 from "@/app/images/icons8.png";
import { LuChevronRight } from "react-icons/lu";
import Buttons from "@/app/props/buttonWhite";
import ButtonBlack from "@/app/props/buttonBlack";
import { motion, AnimatePresence } from "motion/react";
import NewsMain from "./newsFeatured/newsMain";

const Menu = () => {
  // openNews
  const [openNews, setOpenNews] = useState<boolean>(false);

  const handleOpenNews = () => {
    setOpenNews((prev) => !prev);
  };

  // animation variant
  const variant = {
    // initial
    hidden: {
      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
      x: "100vw",
      transition: {
        duration: 1,
      },
    },

    // animate
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },

    // exit
    leave: {
      opacity: [1, 0.8, 0.6, 0.4, 0.2, 0],
      x: "100vw",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section
      className="fixed top-0 bottom-0  
     w-[100%] right-0 flex flex-row"
    >
      <div className="bg-[#0000002a] w-[25%]"></div>
      <div
        className="pt-16 flex flex-col px-3 py-3
      bg-white gap-16 w-[75%]"
      >
        {/* nav links */}
        <ul className="flex flex-col gap-5 font-normal text-xl">
          {/* news and featured */}
          <li
            onClick={handleOpenNews}
            className="flex flex-row gap-1
           hover:text-gray-500"
          >
            News & Featured
            <LuChevronRight className=" h-7" />
          </li>

          {/* men */}
          <li className="flex flex-row gap-1 hover:text-gray-500">
            Men
            <LuChevronRight className=" h-7" />
          </li>

          {/* women */}
          <li className="flex flex-row gap-1 hover:text-gray-500">
            Women
            <LuChevronRight className=" h-7" />
          </li>

          {/* kids */}
          <li className="flex flex-row gap-1 hover:text-gray-500">
            Kids
            <LuChevronRight className=" h-7" />
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
        <div className="w-[90%] flex flex-col gap-10">
          <p>
            Become a Nike Member for the best products, inspiration and stories
            in sport.<b>Learn more</b>
          </p>

          <div className="flex flex-row gap-7">
            <ButtonBlack text=" Join Us" />
            <Buttons style="" text="Sign in" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openNews && (
          <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="leave"
          >
            <NewsMain />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;
