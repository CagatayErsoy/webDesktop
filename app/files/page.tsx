"use client";
import Contact from "./contact/page";
import Resume from "./resume/page";
import About from "./about/page";
import Portfolio from "./portfolio/page";
import Terminal from "./terminal/page";
import Snake from "./snake/page";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../Context/appcontext";
import { motion } from "framer-motion";
import icons from "../utilities/IconsData";
import Help from "./help/page";


export default function Files() {
  const borderRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { setParentRef, setOpen, windows, addStack, stack } =
    useGlobalContext();

  const handleDoubleClick = (key: string) => {
    const cleanId = `${key}Window`;
    console.log("double")
    // Check if the window is already open
    if (!windows[cleanId].isOpen) {
      // Open the window and add it to the stack
      
      setOpen(cleanId, true);
      addStack(cleanId);
    } else {
      // The window is already open, so just bring it to the front of the stack
      addStack(cleanId);
    }
  };
  useEffect(() => {
    setParentRef(borderRef);

    // Clean up
    return () => {
      setParentRef(null);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <motion.main
      ref={borderRef}
      className="w-screen h-screen text-white p-10 flex flex-col content-start gap-5 2xl:gap-12  overflow-hidden overscroll-none flex-wrap-reverse py-20"
      initial={{ opacity: 0, }}
    animate={{ opacity: 1, }}
    transition={{ duration: 1 }}
    >
   
      <Portfolio></Portfolio>
      <Terminal></Terminal>
      <About></About>
      <Resume></Resume>
      <Contact></Contact>
      <Snake></Snake>
      <Help></Help>
     
      {Object.keys(icons).map((key) => {
        const { label, src } = icons[key];
        return (
          <motion.div
            key={key}
            id={key}
            drag
            dragConstraints={borderRef}
            dragElastic={0}
            dragMomentum={false}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={isMobile?()=>handleDoubleClick(key):undefined}
            onDoubleClick={() => handleDoubleClick(key)}
            className="flex flex-col justify-center content-center items-center w-20 h-30  gap-1"
          >
            <div
              className="w-[3rem] h-[3rem] md:w-[4.5rem] md:h-[4.5rem] 2xl:w-[5rem] 2xl:h-[5rem]"
              style={{
                backgroundImage: `url(${src}) `,
                backgroundSize: "cover",
              }}
            ></div>

            <span className="text-secondary">{label}</span>
          </motion.div>
        );
      })}
    </motion.main>
  );
}
