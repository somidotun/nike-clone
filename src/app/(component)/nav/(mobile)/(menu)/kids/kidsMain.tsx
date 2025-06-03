"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Menu from "../menu";
import Feats from "./featured/feat";
import Shoes from "./shoes/shoe";
import Cloth from "./chlothing/cloth";
import Kidsbyage from "./kidsbyage/kidsbyage";
import Equip from "./accesories/equipment";

const KidsMains = () => {
  // open menu
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  // open featured
  const [openFeat, setOpenFeat] = useState<boolean>(false);

  const handleOpenFeat = () => {
    setOpenFeat((prev) => !prev);
  };

  // open shoes
  const [openShoes, setOpenShoes] = useState<boolean>(false);

  const handleOpenShoes = () => {
    setOpenShoes((prev) => !prev);
  };

  // open Cloth
  const [openCloth, setOpenCloth] = useState<boolean>(false);

  const handleOpenCloth = () => {
    setOpenCloth((prev) => !prev);
  };

  // open Kid
  const [openKid, setOpenKid] = useState<boolean>(false);

  const handleOpenKid = () => {
    setOpenKid((prev) => !prev);
  };

  // open Equip
  const [openEquip, setOpenEquip] = useState<boolean>(false);

  const handleOpenEquip = () => {
    setOpenEquip((prev) => !prev);
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
          <p>All</p>
        </div>
        <h1 className=" mt-2 text-2xl font-semibold">Kids</h1>

        <ul className="flex flex-col gap-5">
          {/* featured */}
          <li
            onClick={handleOpenFeat}
            className="flex flex-row justify-between
           text-gray-500 "
          >
            Featured
            <LuChevronRight className="h-6" />
          </li>

          {/* Shoes */}
          <li
            onClick={handleOpenShoes}
            className="flex flex-row justify-between text-gray-500 "
          >
            Shoes
            <LuChevronRight className="h-6" />
          </li>

          {/* Clothing */}
          <li
            onClick={handleOpenCloth}
            className="flex flex-row justify-between text-gray-500 "
          >
            Clothing
            <LuChevronRight className="h-6" />
          </li>

          {/* Kids by age */}
          <li
            onClick={handleOpenKid}
            className="flex flex-row justify-between text-gray-500 "
          >
            Kids by age
            <LuChevronRight className="h-6" />
          </li>

          {/* Accessories and Equipment */}
          <li
            onClick={handleOpenEquip}
            className="flex flex-row justify-between text-gray-500 "
          >
            Accessories and Equipment
            <LuChevronRight className="h-6" />
          </li>
        </ul>
      </div>

      <div>
        {/* open menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>

        {/* open Feat */}
        <AnimatePresence>
          {openFeat && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Feats />
            </motion.div>
          )}
        </AnimatePresence>

        {/* open shoe */}
        <AnimatePresence>
          {openShoes && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Shoes />
            </motion.div>
          )}
        </AnimatePresence>

        {/* open Cloth */}
        <AnimatePresence>
          {openCloth && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Cloth />
            </motion.div>
          )}
        </AnimatePresence>

        {/* open Kid */}
        <AnimatePresence>
          {openKid && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Kidsbyage />
            </motion.div>
          )}
        </AnimatePresence>

        {/* open Equip */}
        <AnimatePresence>
          {openEquip && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Equip />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default KidsMains;
