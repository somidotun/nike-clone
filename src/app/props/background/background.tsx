import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const BgImage = ({ src, alt, width, height }: Props) => {
  return (
    <section>
      <Image src={src} alt={alt} width={width} height={height} priority />
    </section>
  );
};

export default BgImage;
