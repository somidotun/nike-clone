import { motion } from "framer-motion";

const Kid = () => {
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
        className="    px-32 py-5 text-sm
            justify-between flex flex-row text-gray-500"
      >
        {/* featured */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Featured</li>
          <li className="hover:text-black cursor-pointer">New Releases</li>
          <li className="hover:text-black cursor-pointer">Best Sellers</li>
          <li className="hover:text-black cursor-pointer">Teens</li>
          <li className="hover:text-black cursor-pointer">EasyOn</li>
        </ul>
        {/* shoes */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Shoes</li>
          <li className="hover:text-black cursor-pointer">All Shoes</li>
          <li className="hover:text-black cursor-pointer">Lifestyle</li>
          <li className="hover:text-black cursor-pointer">Jordan</li>
          <li className="hover:text-black cursor-pointer">Football</li>
          <li className="hover:text-black cursor-pointer">Running</li>
          <li className="hover:text-black cursor-pointer">Basketball</li>
        </ul>
        {/* Clothing*/}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Clothing </li>
          <li className="hover:text-black cursor-pointer">All Clothing</li>
          <li className="hover:text-black cursor-pointer">
            Hoodies and Sweatshirts
          </li>
          <li className="hover:text-black cursor-pointer">Jackets</li>
          <li className="hover:text-black cursor-pointer">
            Trousers and Leggings
          </li>
          <li className="hover:text-black cursor-pointer">Tracksuits</li>
          <li className="hover:text-black cursor-pointer">Sport Clothing</li>
          <li className="hover:text-black cursor-pointer">Tops and T-shirts</li>
          <li className="hover:text-black cursor-pointer">Shorts</li>
          <li className="hover:text-black cursor-pointer">Kits and jerseys</li>
          <li className="hover:text-black cursor-pointer">
            Skirts and Dresses
          </li>
        </ul>
        {/* Kids by age */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Kids by age</li>
          <li className="hover:text-black cursor-pointer">
            Older Kids (7-15years)
          </li>
          <li className="hover:text-black cursor-pointer">
            Younger Kids (3-7years)
          </li>
          <li className="hover:text-black cursor-pointer">
            Baby & Toddler (0-3years)
          </li>
        </ul>

        {/* Accessories and Equipment */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Accessories and Equipment</li>
          <li className="hover:text-black cursor-pointer">
            All Accessories and Equipment
          </li>
          <li className="hover:text-black cursor-pointer">
            Bags and Backpacks
          </li>
          <li className="hover:text-black cursor-pointer">Headwear</li>
          <li className="hover:text-black cursor-pointer">Socks</li>
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default Kid;
