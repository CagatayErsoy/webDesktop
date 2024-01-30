"use client";
import Contact from "./contact/page";
import Cv from "./cv/page";
import About from "./about/page";
import Portfolio from "./portfolio/page";
import Terminal from "./terminal/page";
import Snake from "./snake/page";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../Context/appcontext";
import { motion } from "framer-motion";
import icons from "../utilities/IconsData";


export default function Files() {
  const borderRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { setParentRef, setOpen, windows, addStack, removeStack, stack } =
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
      className="w-screen h-screen text-white p-10 flex flex-col items-end gap-5 2xl:gap-12 justify-center overflow-hidden"
      initial={{ opacity: 0, }}
    animate={{ opacity: 1, }}
    transition={{ duration: 1 }}
    >
      <Portfolio></Portfolio>
      <Terminal></Terminal>
      <About></About>
      <Cv></Cv>
      <Contact></Contact>
      <Snake></Snake>
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
            className="flex flex-col justify-center content-center items-center w-20 h-30 relative gap-1"
          >
            <div
              className="w-[4.5rem] h-[4.5rem] xl:w-[5.3rem] xl:h-[5.3rem]"
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
