"use client";

import React, { useState } from "react";
import Image from "next/image";
import icons8 from "../../../../images/icons8.png";
import Link from "next/link";
import Help from "./help";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const DesktopNav = () => {
  // open help
  const [openHelp, setOpenHelp] = useState<boolean>(false);

  return (
    <section className=" w-full flex flex-row justify-between">
      {/* jordon logo */}
      <Link href="/jordanLogo">
        <p>
          <Image
            src={icons8}
            alt="jordan logo"
            width={30}
            height={30}
            priority
          />
        </p>
      </Link>

      <div className="flex flex-row gap-3 pt-2 text-black">
        {/* find a store */}
        <Link className="hover:text-gray-500  text-sm" href="/findStore">
          <p>Find a store</p>
        </Link>

        <p className="text-sm">|</p>

        {/* HELP */}
        <div
          onMouseEnter={() => setOpenHelp(true)}
          onMouseLeave={() => setOpenHelp(false)}
          className="hover:text-gray-500 hover:cursor-pointer relative text-sm"
        >
          <p>Help</p>

          {/* help dropdown */}
          {openHelp && (
            <div>
              <Help />
            </div>
          )}
        </div>

        <p className="text-sm">|</p>

        {/* JOIN US */}
        <Link className="hover:text-gray-500  text-sm" href="/joinUs">
          <p>Join us</p>
        </Link>

        <p className="text-sm">|</p>

        {/*sign in */}
        <SignedOut>
          <div className="hover:text-gray-500  text-sm">
            <SignInButton mode="modal" />
          </div>
        </SignedOut>

        {/*sign out */}
        <SignedIn>
          <div
            className="hover:text-gray-500 flex
           flex-row gap-4 h-1 w-1 text-sm"
          >
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </section>
  );
};

export default DesktopNav;
