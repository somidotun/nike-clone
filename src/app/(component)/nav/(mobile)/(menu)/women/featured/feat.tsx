"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import WomenMain from "../womenMain";

const Feats = () => {
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
          <p>Women</p>
        </div>

        <h1 className=" mt-5 text-2xl font-semibold">Featured</h1>

        <ul className="flex flex-col pl-6 gap-5">
          {/* New Releases */}
          <li className="flex flex-row justify-between text-gray-500 ">
            New Releases
          </li>

          {/* Best Sellers */}
          <li className="flex flex-row justify-between text-gray-500 ">
            Best Sellers
          </li>

          {/* Nike Style By */}
          <li className="flex flex-row justify-between text-gray-500 ">
            Nike Style By
          </li>

          {/* Air Max Home*/}
          <li className="flex flex-row justify-between text-gray-500 ">
            Air Max Home
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
              <WomenMain />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Feats;
