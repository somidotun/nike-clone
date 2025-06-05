import React from "react";
import one from "../../../../images/one.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { usePathname } from "next/navigation";
type Props = {
  title: string;
  link: string;
  id: number;
};

const SecondNav = () => {
  // nav links
  const navigations: Props[] = [
    {
      title: "New & Featured",
      link: "/newsFeatured",
      id: 0,
    },

    {
      title: "Men",
      link: "/men",
      id: 1,
    },

    {
      title: "Women",
      link: "/women",
      id: 2,
    },
    {
      title: "Kids",
      link: "/kids",
      id: 0,
    },
  ];
  const pathname = usePathname();
  const profie = navigations.map((navigation) => (
    <div key={navigation.id}>
      <Link
        className={` ${
          pathname === navigation.link
            ? "text-red-500"
            : "hover:border-b-black pb-3 hover:border-b-2"
        }`}
        href={navigation.link}
      >
        {navigation.title}
      </Link>
    </div>
  ));

  return (
    <section className="flex flex-row justify-between">
      {/* jordon logo */}
      <Link href="/">
        <p>
          <Image src={one} alt="jordan logo" width={70} height={30} priority />
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
    </section>
  );
};

export default SecondNav;
