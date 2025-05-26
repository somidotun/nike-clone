import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import one from "../../../images/one.jpg";
import { IoIosMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import Menu from "./(menu)/menu";

const MobileNav = () => {
  // open nav
  const [open, setOpen] = useState<boolean>(true);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section className="flex flex-row justify-between px-3">
      {/* jordon logo */}
      <Link href="/" className="relative">
        <p>
          <Image src={one} alt="jordan logo" width={70} height={30} priority />
        </p>
      </Link>

      {/* icons */}

      <div className="flex flex-row gap-5">
        <p>
          <FaSearch className="h-10 text-2xl" />
        </p>

        <p>
          <CiHeart className="h-10 text-2xl" />
        </p>

        <p>
          <FaCartPlus className="h-10 text-2xl" />
        </p>

        <div onClick={handleOpen} className="z-50">
          {!open ? (
            <p>
              <GrClose className="h-10 text-2xl" />
            </p>
          ) : (
            <p>
              <IoIosMenu className="h-10 text-2xl" />
            </p>
          )}
        </div>

        {!open && <Menu />}
      </div>
    </section>
  );
};

export default MobileNav;
