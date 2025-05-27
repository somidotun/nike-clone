"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import one from "../../../images/one.jpg";
import { GrClose } from "react-icons/gr";
import Menu from "./(menu)/menu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  // open menu
  const [open, setOpen] = useState<boolean>(true);

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
    <section className="p-3">
      <nav className="flex flex-row justify-between relative">
        {/* jordon logo */}
        <Link href="/">
          <p>
            <Image
              src={one}
              alt="jordan logo"
              width={70}
              height={30}
              priority
            />
          </p>
        </Link>

        {/* icons */}

        <div className="flex flex-row gap-3">
          <p>
            <FaSearch className="h-10 text-2xl" />
          </p>

          <p>
            <MdOutlinePersonOutline className="h-10 text-2xl" />
          </p>

          <p>
            <FaCartPlus className="h-10 text-2xl" />
          </p>

          <div onClick={handleOpen} className="z-50">
            {open ? (
              <p>
                <GrClose className="h-10 text-2xl" />
              </p>
            ) : (
              <p>
                <RxHamburgerMenu className="h-10 text-2xl" />
              </p>
            )}
          </div>
        </div>
      </nav>

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
    </section>
  );
};

export default MobileNav;
