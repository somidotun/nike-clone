import React from "react";

type Props = {
  style: string;
  text: string;
};

const ButtonWhite = ({ style, text }: Props) => {
  return (
    <button
      className={`${style} hover:bg-[#CACACB] hover:text-black px-5
         py-1 rounded-3xl bg-white text-black
          border-black border-[1px]`}
      type="button"
    >
      {text}
    </button>
  );
};

export default ButtonWhite;
