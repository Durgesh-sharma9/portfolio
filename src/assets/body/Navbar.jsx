import imageSrc from "../image/508931394_1947273702793262_4749772249451019248_n-Photoroom.png";
import { TiThMenu } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoSunny, IoMoon } from "react-icons/io5";
import React, { useState } from "react";
 function Navbar() {

    const [menu,setmenu] = useState(false);

return (
    <>
        <div className="bg-[#111111] w-full shadow-[0_2px_12px_#ffffff]">
            <div className="container mx-auto px-4 md:px-10 flex justify-between items-center py-1">
                <div className=" ">
                    <img
                        src={imageSrc}
                        alt="Portfolio Banner"
                        className="h-20"
                    />
                </div>
                {/* <div>
                    <ul className="hidden md:flex items-center justify-between gap-4 text-lg font-semibold">
                        <li>
                            HOME
                        </li>
                        <li>
                            ABOUT
                        </li>
                        <li>
                            TECHNOLOGY
                        </li>
                        <li>
                            PROJECT
                        </li>
                    </ul>
                </div> */}
                <div className="">
                    <ul className="flex items-center justify-between gap-4">
                        <li>
                            <IoSunny className="hidden transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
                        </li>
                        <li>
                            <IoMoon className="transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
                        </li>
                        <li>
                            <FaWhatsapp className="transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
                        </li>
                        <div onClick={
                        () => setmenu(!menu)
                        }>{menu?
                            <ImCross className="md:hidden transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
                            :<TiThMenu className="md:hidden transition-transform duration-400 hover:scale-125 w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-10 invert brightness-0 saturate-100" />
 }</div>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
            {/* mobile navbar */}
            {menu &&
            <div>
                <ul className="md:hidden flex flex-col items-center h-[100vh] justify-center gap-4 text-lg font-semibold bg-[#111111] text-white">
                        <li>
                            HOME
                        </li>
                        <li>
                            ABOUT
                        </li>
                        <li>
                            TECHNOLOGY
                        </li>
                        <li>
                            PROJECT
                        </li>
                    </ul>
            </div>}
        </div>
    </>
)
}
export default Navbar;  
