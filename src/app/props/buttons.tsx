import React from "react";

type Props = {
  style: string;
  text: string;
};

const Buttons = ({ style, text }: Props) => {
  return (
    <button className={`${style} px-5 py-1 rounded-3xl`} type="button">
      {text}
    </button>
  );
};

export default Buttons;
