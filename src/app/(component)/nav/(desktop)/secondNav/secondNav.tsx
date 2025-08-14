import React from "react";
import one from "../../../../images/one.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { useToggleStore } from "@/app/store/useToggleStore";
import { useToggleMen } from "@/app/store/useToggleMen";
import { useToggleWomen } from "@/app/store/useToggleWomen";
import { useToggleKids } from "@/app/store/usetoggleKids";
import Cart from "@/app/(component)/body/price/priceProp.tsx/cart";
import { useCartStore } from "@/app/store/cartStore";
import { useToggleCart } from "@/app/store/cartOpen";

const SecondNav = () => {
  const { isToggled, setToggled } = useToggleStore();
  const { isToggledMen, setToggledMen } = useToggleMen();
  const { isToggledWomen, setToggledWomen } = useToggleWomen();
  const { isToggledKids, setToggledKids } = useToggleKids();

  const { getTotalItems } = useCartStore();

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
      setToggledCart(false);
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
      setToggledCart(false);
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

      setToggledCart(false);
      setToggledKids(false);
    }
  };

  const handleKid = () => {
    if (isToggledKids) {
      // If already active, close it
      setToggledKids(false);
    } else {
      // If not active, open it and close kid
      setToggledKids(true);
      setToggledWomen(false);
      setToggledMen(false);
      setToggled(false);
      setToggledCart(false);
    }
  };

  const { setToggledCart, isToggledCart } = useToggleCart();

  const handleCart = () => {
    if (isToggledCart) {
      // If already active, close it
      setToggledCart(false);
    } else {
      // If not active, open it and close CART
      setToggledCart(true);
      setToggledKids(false);
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

  // open cart
  // get the state and action from store
  return (
    <section>
      <div className="flex flex-row justify-between py-1  px-6 relative">
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
          <p
            className={`relative w-6 hover:cursor-pointer ${
              getTotalItems() !== 0 && !isToggledCart && "animate-bounce"
            } `}
            onClick={handleCart}
          >
            <FaCartPlus className="h-10" />

            {getTotalItems() !== 0 && (
              <p
                className="h-5 w-5 bg-orange-400 absolute bottom-0
             rounded-full right-0 text-sm pl-1"
              >
                {getTotalItems()}
              </p>
            )}
          </p>
        </div>
      </div>

      {/* cart */}
      {isToggledCart && (
        <div>
          <Cart />
        </div>
      )}
    </section>
  );
};

export default SecondNav;
