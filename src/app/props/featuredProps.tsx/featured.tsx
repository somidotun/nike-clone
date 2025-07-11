import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  altText: string;
  style?: string;
  imageStyle?: string;
  image: StaticImageData;
};

const Featured = ({ style, imageStyle, image, altText }: Props) => {
  return (
    <div className={` ${style}`}>
      <div>
        <Image
          className={` ${imageStyle} w-full`}
          src={image}
          alt={altText}
          priority
        />
      </div>
    </div>
  );
};

export default Featured;
