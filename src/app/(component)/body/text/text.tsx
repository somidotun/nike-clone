"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const Text = () => {
  const [open, setOpen] = useState<boolean>(false);

  // animation variant
  const variant = {
    // initial
    hidden: {
      opacity: 0,
      y: "0vw",
    },

    // animate
    visible: {
      opacity: 1,
      y: "0.2rem",
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
  return (
    <div
      className="flex  flex-col gap-5 md:flex-row lg:justify-between
       md:mx-10
       lg:mx-40 pt-7  pb-4 lg:px-8 pl-4 md:pl-0
       lg:hover:border lg:hover:border-[#00000084] lg:hover:border-dotted"
      onMouseEnter={() => setOpen((prev) => !prev)}
      onMouseLeave={() => setOpen((prev) => !prev)}
    >
      {/* shoe */}
      <text className="flex flex-col gap-2 md:w-[24%]">
        <h1 className="font-bold text-lg ">Shoes</h1>
        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Black running shoes
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          White running shoes
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Nike P-6000
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Nike Initiator1
        </p>

        {open && (
          <motion.div
            variants={variant}
            initial="hidden"
            className="flex flex-col gap-2"
            animate="visible"
          >
            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              V2k Run Trainers
            </p>

            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Nike Shox
            </p>

            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Nike Waffle Trainer
            </p>

            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Nike Cortez
            </p>

            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Nike Vomero
            </p>

            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Black Trainers
            </p>

            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Nike Motiva Shoes
            </p>
          </motion.div>
        )}
      </text>

      {/* clothing */}
      <text className="flex flex-col gap-2 md:w-[24%]">
        <h1 className="font-bold text-lg ">Clothing</h1>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Yoga Trousers
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Tech Fleece Joggers
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Tech Fleece
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          School Shoes
        </p>

        {open && (
          <motion.div
            variants={variant}
            initial="hidden"
            className="flex flex-col gap-2"
            animate="visible"
          >
            {" "}
            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              School Bags & Backpacks
            </p>
          </motion.div>
        )}
      </text>

      {/* Kids */}
      <text className="flex flex-col gap-2 md:w-[24%]">
        <h1 className="font-bold text-lg ">Kids</h1>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Girls Black Shoes
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Kids Black Shoes
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Kids School Clothing
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Boys School shoes
        </p>

        {open && (
          <motion.div
            variants={variant}
            initial="hidden"
            className="flex flex-col gap-2"
            animate="visible"
          >
            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Girls School shoes
            </p>

            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Kids School shoes
            </p>
          </motion.div>
        )}
      </text>

      {/* shoe */}
      <text className="flex flex-col gap-2 md:w-[24%]">
        <h1 className="font-bold text-lg ">Featured</h1>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Football Club Teams
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Football
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Nike England
        </p>

        <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
          Nike Run club
        </p>

        {open && (
          <motion.div
            variants={variant}
            initial="hidden"
            className="flex flex-col gap-2"
            animate="visible"
          >
            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Nike Training club
            </p>

            <p className="text-[#00000084] lg:hover:text-[#000000] cursor-pointer pl-8 md:pl-0">
              Gift ideas
            </p>
          </motion.div>
        )}
      </text>
    </div>
  );
};

export default Text;
