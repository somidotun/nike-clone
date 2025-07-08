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
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const MobileNav = () => {
  // open menu
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  // animation variant
  const variant = {
    // initial
    hidden: {
      opacity: 0,
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
  };
  return (
    <section className="p-3">
      <nav className="flex flex-row justify-between ">
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

        <div className="flex w-[33%] flex-row justify-between">
          {/* icons */}
          <div className="flex flex-row gap-3">
            {/*sign in */}
            <SignedOut>
              <div className="hover:text-gray-500 h-10 text-sm">
                <SignInButton mode="modal">
                  <MdOutlinePersonOutline className="h-10 font-bold text-2xl" />
                </SignInButton>
              </div>
            </SignedOut>

            {/*sign out */}
            <SignedIn>
              <div
                className="hover:text-gray-500 flex
           flex-row gap-4  w-1 text-sm h-10"
              >
                <UserButton />
              </div>
            </SignedIn>
          </div>

          <div className="flex flex-row gap-4">
            <p>
              <FaSearch className="h-10 text-2xl" />
            </p>

            <p>
              <FaCartPlus className="h-10 text-2xl" />
            </p>

            <div onClick={handleOpen} className="z-[150]">
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
        </div>
      </nav>

      <div>
        {open && (
          <motion.div variants={variant} initial="hidden" animate="visible">
            <Menu />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MobileNav;
