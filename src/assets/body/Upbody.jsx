import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { IoSunny, IoMoon } from "react-icons/io5";
import imageSrc from "../image/508931394_1947273702793262_4749772249451019248_n-Photoroom.png";

function Upbody() {
 
  const[menu,setmenu]=useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111] w-full">
      <div className="text-white flex items-center justify-between mx-4 pt-4">
        {/* Left: Logo */}
        <div className="items-center">
          <img
            src={imageSrc}
            alt="Portfolio Banner"
            className="h-20 transition-transform duration-400 hover:scale-125"
          />
        </div>

        {/* Right: Icons */}
        <div className="flex gap-4 mr-4">
          <IoSunny className="hidden transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
          <IoMoon className="transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
          <FaWhatsapp className="transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
          <TiThMenu className="hidden transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
          <ImCross className="hidden transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
          </div>
      </div>
    </nav>
  );
}

export default Upbody;



