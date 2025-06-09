import React from "react";
import one from "../../../../images/one.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useToggleStore } from "@/app/store/useToggleStore";
import { useToggleMen } from "@/app/store/useToggleMen";

const SecondNav = () => {
  const { isToggled, setToggled } = useToggleStore();
  const { isToggledMen, setToggledMen } = useToggleMen();

  const handleNews = () => {
    if (isToggled) {
      // If already active, close it
      setToggled(false);
    } else {
      // If not active, open it and close Men
      setToggled(true);
      setToggledMen(false);
    }
  };

  const handleMen = () => {
    if (isToggledMen) {
      // If already active, close it
      setToggledMen(false);
    } else {
      // If not active, open it and close New & Featured
      setToggledMen(true);
      setToggled(false);
    }
  };

  // nav links
  const profie = (
    <div
      className="
     flex flex-row gap-8
    "
    >
      {/* news and featured */}
      <h1
        className={` ${
          isToggled ? "border-b-black border-b-Black pb-3 border-b-2" : ""
        }
           hover:border-b-black
         hover:cursor-pointer pb-3 hover:border-b-2`}
        onClick={handleNews}
      >
        New & Featured
      </h1>

      {/* men */}
      <h1
        className={` ${
          isToggledMen ? "border-b-black border-b-Black pb-3 border-b-2" : ""
        }
           hover:border-b-black
         hover:cursor-pointer pb-3 hover:border-b-2`}
        onClick={handleMen}
      >
        Men
      </h1>

      {/* Women */}
      <h1 className="hover:border-b-black hover:cursor-pointer pb-3 hover:border-b-2">
        Women
      </h1>

      {/* Kids */}
      <h1 className="hover:border-b-black hover:cursor-pointer pb-3 hover:border-b-2">
        Kids
      </h1>
    </div>
  );

  // get the state and action from store
  return (
    <section>
      <div className="flex flex-row justify-between py-1  px-6">
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

        {/* nav link */}
        <div className="flex flex-row gap-8 lg:gap-12">{profie}</div>

        {/* icons */}

        <div className="flex flex-row gap-5">
          <p>
            <FaSearch className="h-10" />
          </p>

          <p>
            <CiHeart className="h-10" />
          </p>

          <p>
            <FaCartPlus className="h-10" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondNav;
