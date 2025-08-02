import { motion } from "framer-motion";

const NewsFeatured = () => {
  // animation variant
  const variant = {
    // initial
    hidden: {
      opacity: 0,
      x: "100vw",
      transition: {
        duration: 0.6,
      },
    },

    // animate
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // animation variant
  const variant1 = {
    // initial
    hidden: {
      opacity: 0,
      x: "100vw",
      transition: {
        duration: 0.6,
      },
    },

    // animate
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.3,
        duration: 1.0,
      },
    },
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className="bg-white absolute z-[150] w-full"
    >
      <motion.section
        variants={variant1}
        initial="hidden"
        animate="visible"
        className="   px-16 lg:px-32 py-5 text-sm
            justify-between flex flex-row text-gray-500"
      >
        {/* featured */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Featured</li>
          <li className="hover:text-black cursor-pointer">
            Shop all new arrival
          </li>
          <li className="hover:text-black cursor-pointer">Best sellers</li>
          <li className="hover:text-black cursor-pointer">
            SNKRS Launch calender
          </li>
        </ul>

        {/* shop icons */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Shop icons</li>
          <li className="hover:text-black cursor-pointer">Air force 1</li>
          <li className="hover:text-black cursor-pointer">Air Jordan 1</li>
          <li className="hover:text-black cursor-pointer">Air Max</li>
          <li className="hover:text-black cursor-pointer">Dunk</li>
          <li className="hover:text-black cursor-pointer">Blazer</li>
          <li className="hover:text-black cursor-pointer">Pegasus</li>
          <li className="hover:text-black cursor-pointer">Mercurial</li>
        </ul>

        {/* Discovered Sport*/}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Discovered Sport </li>
          <li className="hover:text-black cursor-pointer">Football</li>
          <li className="hover:text-black cursor-pointer">Running</li>
          <li className="hover:text-black cursor-pointer">Basketball</li>
          <li className="hover:text-black cursor-pointer">Fitness</li>
          <li className="hover:text-black cursor-pointer">Golf</li>
          <li className="hover:text-black cursor-pointer">Tennis</li>
          <li className="hover:text-black cursor-pointer">Yoga</li>
          <li className="hover:text-black cursor-pointer">Dance</li>
          <li className="hover:text-black cursor-pointer">Skateboarding</li>
        </ul>

        {/* Trending */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Trending</li>
          <li className="hover:text-black cursor-pointer">Nike Sportwears</li>
          <li className="hover:text-black cursor-pointer">Y2K Sneakers</li>
          <li className="hover:text-black cursor-pointer">Nike Style By</li>
          <li className="hover:text-black cursor-pointer">Teens</li>
          <li className="hover:text-black cursor-pointer">Easy</li>
          <li className="hover:text-black cursor-pointer">Nike Gift ideas</li>
          <li className="hover:text-black cursor-pointer">sustainabilty</li>
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default NewsFeatured;
