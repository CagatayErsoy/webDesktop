"use client";
// CompaqBoot.tsx
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context/appcontext";
import EnergyStarLogo from "./EnergyStarLogo";

import {
  animate,
  motion,
  spring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Ball from "./Ball";
const CompaqBoot: React.FC = () => {
  const { setIsBooting } = useGlobalContext();
  const [memoryCount, setMemoryCount] = useState<number>(0);
  const [showMemoryTest, setShowMemoryTest] = useState<boolean>(true);
  const [showAwardBios, setShowAwardBios] = useState<boolean>(false);
  const [showIdeInfo, setShowIdeInfo] = useState<boolean>(false);
  const [ideInfo, setIdeInfo] = useState<string[]>([]);
  const [ideInfoIndex, setIdeInfoIndex] = useState<number>(0);
  const [OSScreen, setOSScreen] = useState(false);
  const maxMemory = 102420;
  const ideInfoText = [
    "Detecting IDE Primary Master...None",
    "Detecting IDE Primary Slave ... None,",
    "Detecting IDE Secondary Master ... None",
    "Detecting IDE Secondary Slave ... None",
  ];

  const count = useMotionValue(0);

  const appear = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (memoryCount < maxMemory) {
      interval = setInterval(() => {
        setMemoryCount((prevCount) => {
          const nextCount = prevCount + 1024;
          if (nextCount >= maxMemory) {
            clearInterval(interval);
            setShowAwardBios(true);
            setTimeout(() => {
              setShowIdeInfo(true); // Show IDE info // Set loading to false once done
            }, 1000); // Wait for 1 second before showing IDE info
          }
          return nextCount;
        });
      }, 50);
    }

    return () => {
      clearInterval(interval);
    };
  }, [memoryCount, setIsBooting]);

  const formatMemoryCount = (count: number): string => {
    return count.toString().padStart(6, "0");
  };

  useEffect(() => {
    let bootTime = setTimeout(() => {
      setIsBooting(false);
    }, 16000);
    return () => clearTimeout(bootTime);
  }, []);
  const triangleVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  const orbitVariants = {
    rotate: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 10, ease: "linear" }
    }
  };
  const orbitAnimation = (degreeOffset: number) => ({
    rotate: [degreeOffset, degreeOffset + 360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" }
  });
  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-[#ebde34]"];
  return (
    <motion.div
      className="relative w-full h-screen bg-black text-gray-400 text-[1.4rem] "
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 15 }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 10 }}
      >
        <EnergyStarLogo />
        <motion.div
          className="flex flex-col p-8 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div>
            <p>webDesktop BIOS v4.60PGA, webDesktop-Ersoy Ally</p>
            <p>Copyright (C) 2023, Ersoy Software, LLC.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p>Version 1.03</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p>PENTIUM ODP-MMX CPU at 200MHz</p>
            <p>
              Memory Test: {formatMemoryCount(memoryCount)}{" "}
              {showAwardBios && "OK"}
            </p>
          </motion.div>
          {showAwardBios && (
            <div>
              {" "}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <p>Award Plug and Play BIOS Extension v1.0A</p>
                <p>Copyright (C) 1998, Award Software, Inc.</p>
              </motion.div>
              <div className="mx-8 my-5">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Detecting IDE Primary Master...None
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  Detecting IDE Primary Slave ... None
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 3 }}
                >
                  Detecting IDE Secondary Master ... None
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 4 }}
                >
                  Detecting IDE Secondary Slave ... None
                </motion.p>
              </div>
            </div>
          )}
        </motion.div>
        <div className="absolute bottom-0 w-full text-center">
          <p>Please wait for the screen </p>
        </div>
      </motion.div>
      <motion.div
  className="flex items-center justify-center bg-inherit text-white absolute top-0 left-0 h-screen w-screen"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 10.5 }}
>
  <div className="text-center flex flex-col justify-center items-center">
    <h1 className="text-[10rem] font-bold mb-4 text-red-700">
      WebDesktop
    </h1>
    <div className="text-2xl flex items-center justify-center">
      Loading operating system...
    
     
      
      
      <div className="relative mx-10"> 
        {[0, 90, 180, 270].map((degree, index) => (
          <motion.div
            key={index}
            className={`absolute ${colors[index]} rounded-full w-4 h-4`}
            style={{ 
              top: '50%', 
              left: '50%', 
              x: '-50%', 
              y: '-50%', 
              rotate: degree, 
              transformOrigin: "50% 150%" /* Adjusted for more distance */
            }}
            animate={orbitAnimation(degree)}
          ></motion.div>
        ))}
      
     
      </div>
    </div>
  </div>
</motion.div>

     
    
    </motion.div>
  );
};

export default CompaqBoot;
