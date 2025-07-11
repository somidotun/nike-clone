import React from "react";
import ButtonWhite from "../buttons/buttonWhite";
import Image, { StaticImageData } from "next/image";

type Props = {
  textOne: string;
  textTwo: string;
  buttonText: string;
  altText: string;
  style?: string;
  imageStyle?: string;
  image: StaticImageData;
};

const Featured = ({
  style,
  imageStyle,
  image,
  textOne,
  textTwo,
  buttonText,
  altText,
}: Props) => {
  return (
    <div className={` ${style} relative`}>
      <div>
        <Image
          className={` ${imageStyle} w-full`}
          src={image}
          alt={altText}
          priority
        />
      </div>

      {/* text */}
      <div
        className="absolute bottom-5 left-5 text-white
       flex flex-col gap-1"
      >
        <p>{textOne}</p>
        <h1>{textTwo}</h1>
        <ButtonWhite text={buttonText} />
      </div>
    </div>
  );
};

export default Featured;
