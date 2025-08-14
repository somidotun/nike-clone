"use client";

import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaTiktok } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import Image from "next/image";

import Dotun from "./profile/Dotun.jpg";
import SwipeFolder from "./profile/swipeFolder";
import { useToggleProfile } from "@/app/store/cartProfile";
import Link from "next/link";

const Footer = () => {
  // control profile opening
  const { toggleProfile, isToggledProfile } = useToggleProfile();

  return (
    <div
      className="flex flex-col gap-5 py-2 px-5 relative
       md:flex-row md:justify-between md:py-16 md:px-14 
     border-[#00000084] border-t border-dotted mt-10"
    >
      {/* resources */}
      <text className=" flex flex-col gap-3">
        <h1>Resources</h1>
        <div className=" flex flex-col gap-2">
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Find a store
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Become a member
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Running shoe finder
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Product advice
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Education discount
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Send us feedback
          </p>
        </div>
      </text>

      {/* help */}
      <text className=" flex flex-col gap-3">
        <h1>Help</h1>
        <div className=" flex flex-col gap-2">
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Get help
          </p>

          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Order status
          </p>

          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Delivery
          </p>

          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Returns
          </p>

          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Payment Options
          </p>

          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Contact us
          </p>
        </div>
      </text>

      {/* Company */}
      <text className=" flex flex-col gap-3">
        <h1>Company</h1>
        <div className=" flex flex-col gap-2">
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            About Nike
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            News
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Careers
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Investors
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Sustainability
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Impact
          </p>
          <p
            className="text-[#00000084] lg:hover:text-[#000000] 
          cursor-pointer"
          >
            Report a concern
          </p>
        </div>
      </text>

      <text></text>

      {/* contact the icon */}
      <text className=" flex flex-col gap-3 ">
        <h1>Contact the developer on :</h1>
        <div className=" flex flex-col gap-2">
          {/* contact icons */}
          <div className="flex flex-row justify-between">
            {/* twitter(x) */}
            <p
              className="w-8 h-8  bg-white border-[1px] p-2 rounded-xl
             hover:cursor-pointer hover:bg-black group"
            >
              <Link
                href="https://x.com/ayo_somidotun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX className="group-hover:text-white" />
              </Link>
            </p>

            {/* whatsapp */}
            <p
              className="w-8 h-8  bg-white border-[1px] p-2 rounded-xl
             hover:cursor-pointer hover:bg-black group"
            >
              <Link
                href="https://wa.me/qr/PAH5XQKI5CDSN1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="group-hover:text-white" />
              </Link>
            </p>

            {/* instagram */}
            <p
              className="w-8 h-8  bg-white border-[1px] p-2 rounded-xl
             hover:cursor-pointer group hover:bg-black "
            >
              <Link
                href="https://www.instagram.com/somidotun07/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className="group-hover:text-white" />
              </Link>
            </p>

            {/* tiktok */}
            <p
              className="w-8 h-8  bg-white border-[1px] p-2 rounded-xl
             hover:cursor-pointer hover:bg-black group"
            >
              <Link
                href="https://www.tiktok.com/@somidotunjohn?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="group-hover:text-white" />
              </Link>
            </p>

            {/* Linkedin */}
            <p
              className="w-8 h-8  bg-white border-[1px] p-2 rounded-xl
             hover:cursor-pointer hover:bg-black group"
            >
              <Link
                href="https://www.linkedin.com/in/ayo-oluwole-oluwasomidotun-51a94522a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="group-hover:text-white" />
              </Link>
            </p>

            <p
              className="w-8 h-8 border-[1px] p-1 rounded-xl
             hover:cursor-pointer hover:bg-black"
              onClick={toggleProfile}
            >
              <Image
                src={Dotun}
                alt="My second picture"
                width={300}
                height={400}
                className="object-cover w-full h-full rounded-2xl"
                priority
              />
            </p>
          </div>
        </div>
      </text>

      {isToggledProfile && (
        <div>
          <SwipeFolder />
        </div>
      )}
    </div>
  );
};

export default Footer;
