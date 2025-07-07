import React from "react";
import one from "../../../../images/one.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useToggleStore } from "@/app/store/useToggleStore";
import { useToggleMen } from "@/app/store/useToggleMen";
import { useToggleWomen } from "@/app/store/useToggleWomen";
import { useToggleKids } from "@/app/store/usetoggleKids";

const SecondNav = () => {
  const { isToggled, setToggled } = useToggleStore();
  const { isToggledMen, setToggledMen } = useToggleMen();
  const { isToggledWomen, setToggledWomen } = useToggleWomen();
  const { isToggledKids, setToggledKids } = useToggleKids();

  const handleNews = () => {
    if (isToggled) {
      // If already active, close it
      setToggled(false);
    } else {
      // If not active, open it and close Men
      setToggled(true);
      setToggledMen(false);
      setToggledWomen(false);
      setToggledKids(false);
    }
  };

  const handleMen = () => {
    if (isToggledMen) {
      // If already active, close it
      setToggledMen(false);
    } else {
      // If not active, open it and close New & Featured
      setToggledMen(true);
      setToggledWomen(false);
      setToggled(false);
      setToggledKids(false);
    }
  };

  const handleWomen = () => {
    if (isToggledWomen) {
      // If already active, close it
      setToggledWomen(false);
    } else {
      // If not active, open it and close New & Featured
      setToggledWomen(true);
      setToggledMen(false);
      setToggled(false);

      setToggledKids(false);
    }
  };

  const handleKid = () => {
    if (isToggledKids) {
      // If already active, close it
      setToggledKids(false);
    } else {
      // If not active, open it and close New & Featured
      setToggledKids(true);
      setToggledWomen(false);
      setToggledMen(false);
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
           hover:border-b-gray-400
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
           hover:border-b-gray-400
         hover:cursor-pointer pb-3 hover:border-b-2`}
        onClick={handleMen}
      >
        Men
      </h1>

      {/* Women */}
      <h1
        className={` ${
          isToggledWomen ? "border-b-black border-b-Black pb-3 border-b-2" : ""
        }
           hover:border-b-gray-400
         hover:cursor-pointer pb-3 hover:border-b-2`}
        onClick={handleWomen}
      >
        Women
      </h1>

      {/* Kids */}
      <h1
        className={` ${
          isToggledKids ? "border-b-black border-b-Black pb-3 border-b-2" : ""
        }
           hover:border-b-gray-400
         hover:cursor-pointer pb-3 hover:border-b-2`}
        onClick={handleKid}
      >
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
