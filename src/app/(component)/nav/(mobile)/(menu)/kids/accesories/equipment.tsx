"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import KidsMains from "../kidsMain";

const Equip = () => {
  // open news & featured
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  // animation variant

  const variant = {
    // initial
    hidden: {
      opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
      x: "100vw",
      transition: {
        duration: 0.6,
      },
    },

    // animate
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },

    // exit
    leave: {
      opacity: [1, 0.8, 0.6, 0.4, 0.2, 0],
      x: "100vw",
      transition: {
        duration: 0.6,
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
        className="pt-6 flex flex-col px-3 py-3
      bg-white w-[75%] gap-11"
      >
        <div className="flex flex-row  text-xl" onClick={handleOpen}>
          <LuChevronLeft className=" h-6" />
          <p>Kids</p>
        </div>

        <h1 className=" mt-5 text-2xl font-semibold">
          Accessories and Equipment
        </h1>

        <ul className="flex flex-col pl-6 gap-5">
          {/* All Accessories and Equipment */}
          <li className="flex flex-row justify-between text-gray-500 ">
            All Accessories and Equipment
          </li>

          {/* Bags and Backpacks */}
          <li className="flex flex-row justify-between text-gray-500 ">
            Bags and Backpacks
          </li>

          {/*Headwear */}
          <li className="flex flex-row justify-between text-gray-500 ">
            Headwear
          </li>

          {/* Socks */}
          <li className="flex flex-row justify-between text-gray-500 ">
            Socks
          </li>
        </ul>
      </div>

      <div>
        {/* open menu  */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <KidsMains />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Equip;
