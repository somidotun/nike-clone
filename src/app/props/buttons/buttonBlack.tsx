import React from "react";
import "./style.css";

type Props = {
  style?: string;
  text?: string;
};

const ButtonBlack = ({ style, text }: Props) => {
  return (
    <button
      className={`${style} hover:bg-[#CACACB] hover:text-black px-5
         py-1 rounded-3xl bg-black border-black buttonEffect
          text-white border-[1px]`}
      type="button"
    >
      {text}
    </button>
  );
};

export default ButtonBlack;
