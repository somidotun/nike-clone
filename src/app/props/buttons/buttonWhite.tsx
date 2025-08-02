import "./style.css";

type Props = {
  style?: string;
  text: string | undefined;
  onClick?: () => void;
};

const ButtonWhite = ({ style, text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${style} hover:bg-[#CACACB]  px-5
         py-1 rounded-3xl bg-white text-black
          border-black hover:border-white border-[1px] buttonEffect cub`}
      type="button"
    >
      {text}
    </button>
  );
};

export default ButtonWhite;
