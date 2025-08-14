"use client";

import ButtonWhite from "@/app/props/buttons/buttonWhite";
import { useCartStore } from "@/app/store/cartStore";
import Image, { StaticImageData } from "next/image";

type Props = {
  altText: string;
  style?: string;
  imageStyle?: string;
  image: StaticImageData;
  id?: number;
  name?: string;
  price?: number;
};

const PriceProp = ({ imageStyle, image, altText, id, name, price }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (id && name && price) {
      addToCart({ id, name, price });
    }
  };

  return (
    <div
      className="relative w-full h-[280px] lg:opacity-70 
     lg:hover:cursor-pointer lg:hover:opacity-100"
    >
      {/* background image */}
      <div>
        <Image
          className={` ${imageStyle} 
             hover:blur-none  w-[250px] h-[276px]
             object-cover`}
          src={image}
          alt={altText}
          priority={false}
        />
      </div>

      {/* background text */}
      <text
        className="absolute  flex flex-row justify-between text-white
        bottom-2 w-full "
      >
        <p
          className="text-base text-center
         bg-white text-black ml-1 px-2 rounded-md"
        >
          {name}
        </p>

        <div>
          <ButtonWhite
            onClick={handleAddToCart}
            text={`$${price?.toFixed(2)}`}
          />
        </div>
      </text>
    </div>
  );
};

export default PriceProp;
