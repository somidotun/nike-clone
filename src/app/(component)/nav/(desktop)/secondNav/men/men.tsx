import { motion } from "framer-motion";

const OpenMen = () => {
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
          <li className="hover:text-black cursor-pointer">Best sellers</li>
          <li className="hover:text-black cursor-pointer">Y2K Sneaker</li>
        </ul>

        {/* shoes */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Shoes</li>
          <li className="hover:text-black cursor-pointer">All shoes</li>
          <li className="hover:text-black cursor-pointer">Lifestyle</li>
          <li className="hover:text-black cursor-pointer">Jordan</li>
          <li className="hover:text-black cursor-pointer">Running</li>
          <li className="hover:text-black cursor-pointer">Football</li>
          <li className="hover:text-black cursor-pointer">Basketball</li>
          <li className="hover:text-black cursor-pointer">Training and Gym</li>
          <li className="hover:text-black cursor-pointer">Skateboarding</li>
          <li className="hover:text-black cursor-pointer">Nike By You</li>
        </ul>

        {/* Clothing*/}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Clothing </li>
          <li className="hover:text-black cursor-pointer">All clothing</li>
          <li className="hover:text-black cursor-pointer">
            Hoodies and Sweatshirts
          </li>
          <li className="hover:text-black cursor-pointer">Jackets</li>
          <li className="hover:text-black cursor-pointer">
            Trousers and Tights
          </li>
          <li className="hover:text-black cursor-pointer">Tracksuits</li>
          <li className="hover:text-black cursor-pointer">Tops and T-shirts</li>
          <li className="hover:text-black cursor-pointer">Shorts</li>
          <li className="hover:text-black cursor-pointer">Kits and jerseys</li>
        </ul>

        {/* Discover Sport */}
        <ul className="flex flex-col gap-2">
          <li className="text-black">Discover Sport</li>
          <li className="hover:text-black cursor-pointer">Running</li>
          <li className="hover:text-black cursor-pointer">Football</li>
          <li className="hover:text-black cursor-pointer">Basketball </li>
          <li className="hover:text-black cursor-pointer">Training & Gym</li>
          <li className="hover:text-black cursor-pointer">Tennis</li>
          <li className="hover:text-black cursor-pointer">Golf</li>
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

export default OpenMen;
