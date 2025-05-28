"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Menu from "../menu";
import Featured from "./featured/Featured";
import ShopIcons from "./shopIcons/shopIcon";
import Sport from "./discoverSport/sport";
import Trending from "./trending/trending";

// type Props = {};

const NewsMain = () => {
  // open menu
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  // open featured
  const [featured, setFeatured] = useState<boolean>(false);

  const handleFeatured = () => {
    setFeatured((prev) => !prev);
  };

  // open  shopIcons
  const [shopIcons, setShopIcons] = useState<boolean>(false);

  const handleShopIcons = () => {
    setShopIcons((prev) => !prev);
  };

  // open  DiscoverSport
  const [discoverSport, setDiscoverSport] = useState<boolean>(false);

  const handleDiscoverSport = () => {
    setDiscoverSport((prev) => !prev);
  };

  // open  Trending
  const [trending, setTrending] = useState<boolean>(false);

  const handleTrending = () => {
    setTrending((prev) => !prev);
  };

  // animation variant
  const variant = {
    // initial
    hidden: {
      // opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
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
        <h1 className=" mt-2 text-2xl font-semibold">New & Featured</h1>

        <ul className="flex flex-col gap-5">
          {/* featured */}
          <li
            className="flex flex-row justify-between text-gray-500 "
            onClick={handleFeatured}
          >
            Featured
            <LuChevronRight className="h-6" />
          </li>

          {/* shop icons */}
          <li
            className="flex flex-row justify-between text-gray-500 "
            onClick={handleShopIcons}
          >
            Shop Icons
            <LuChevronRight className="h-6" />
          </li>

          {/* discover sport */}
          <li
            className="flex flex-row justify-between text-gray-500 "
            onClick={handleDiscoverSport}
          >
            Discover Sport
            <LuChevronRight className="h-6" />
          </li>

          {/* trending */}
          <li
            onClick={handleTrending}
            className="flex flex-row justify-between text-gray-500 "
          >
            Trending
            <LuChevronRight className="h-6" />
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
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>

        {/*featured */}
        <AnimatePresence>
          {featured && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Featured />
            </motion.div>
          )}
        </AnimatePresence>

        {/*shopIcon */}
        <AnimatePresence>
          {shopIcons && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <ShopIcons />
            </motion.div>
          )}
        </AnimatePresence>

        {/*shopIcon */}
        <AnimatePresence>
          {discoverSport && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Sport />
            </motion.div>
          )}
        </AnimatePresence>

        {/*Trending */}
        <AnimatePresence>
          {trending && (
            <motion.div
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="leave"
            >
              <Trending />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsMain;
