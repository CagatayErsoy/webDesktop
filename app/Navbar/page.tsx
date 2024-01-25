"use client";
import React, { useEffect, useState } from "react";

import NavbarIcon from "../components/Icon"; // Make sure to adjust this import to the correct path of your Icon component
import Clock from "../components/Clock";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useGlobalContext } from "../Context/appcontext";
import icons from "../utilities/IconsData";
import { FaFolder } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const {setIsBooting,isBooting,windows,setWindows,closeAllWindows}=useGlobalContext()


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsSubMenuOpen(false);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const handleRestart=()=>{
    setIsBooting(true)
    setIsMenuOpen(false)
    setIsSubMenuOpen(false)
    closeAllWindows()
    
  }
  useEffect(()=>{
    if(!isBooting){
      setIsMenuOpen(false)
      setIsSubMenuOpen(false)
    }
  },[isBooting])
  
  return (
    !isBooting ?
    <motion.nav className="bg-third w-full fixed bottom-0 h-12 flex items-center z-[1000]"
    exit={{ opacity:0 }}
  initial={{ opacity:0 }}
  animate={{ opacity:1 }}
  transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-between h-16  w-full ">
        <button
          onClick={toggleMenu}
          className=" text-[#093973] w-20  flex items-center justify-center font-bold text-xl h-12 rounded-e-md hover:bg-forth hover:text-third"
        >
          Start
        </button>
        <div className="flex gap-3 p-5 text-terminal_bg">
          <a
            href="https://www.linkedin.com/in/cagatay-ersoy/"
            className="text-xl"
            target="_blank"
          >
            {" "}
            <FaLinkedin />
          </a>
          
          

          <Clock/>
          <div className="flex items-center text-terminal_bg"><FaLocationDot/> SF</div>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            className="absolute bg-third shadow-md rounded-md  left-0 bottom-12  text-main w-48 md:w-80 z-[1000]"
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div className="flex flex-col gap-3 text-center  divide-y divide-blue-200 z-[100]">
              <div className=" flex flex-col gap-2">
                {Object.keys(icons).map((key) => {
                  const { label, src } = icons[key];
                  return (
                  <NavbarIcon key={key} iconKey={key} src={src} label={label}/>
                  );
                })}
              </div >
              {/* Submenu Trigger */}
              <button onClick={toggleSubMenu}   className="px-3 py-2 flex justify-start gap-2 items-center hover:bg-forth group">
              <span className="text-forth group-hover:text-main text-3xl"><FaFolder /></span>
              <div className="px-2 text-main group-hover:text-secondary" >Others</div>
              </button>

              {/* Submenu */}
              {isSubMenuOpen && (
                <div className="absolute left-full bottom-14 bg-third flex flex-col gap-3 w-48 md:w-80" onMouseLeave={toggleSubMenu}>
                <NavbarIcon key="snake" iconKey="snake" src="/icons/snake.png" label="snake.exe"/>
                <NavbarIcon key="virus" iconKey="virus" src="/icons/alert.png" label="virus.exe"/>
                </div>
              )}
                <button onClick={handleRestart}>
                <NavbarIcon key="Restart" iconKey="restart" src="/icons/restart.png" label="restart"/>
                </button>
               
            </div>
          </div>
        )}
      </div>
    </motion.nav> :null
  );
}
