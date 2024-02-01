"use client";
// CompaqBoot.tsx
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context/appcontext";
import EnergyStarLogo from "./EnergyStarLogo";

import { motion, useMotionValue } from "framer-motion";

const CompaqBoot: React.FC = () => {
  const { setIsBooting } = useGlobalContext();
  const [memoryCount, setMemoryCount] = useState<number>(0);
  const [showAwardBios, setShowAwardBios] = useState<boolean>(false);
  const maxMemory = 102420;
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
    }, 14000);
    return () => clearTimeout(bootTime);
  }, []);
  const orbitAnimation = (degreeOffset: number) => ({
    rotate: [degreeOffset, degreeOffset + 360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  });
  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-[#ebde34]"];
  return (
    <motion.div
      className="relative w-full h-screen bg-black text-gray-400 text-base md:text-xl "
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 13 }}
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
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Detecting IDE Primary Master...None
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Detecting IDE Primary Slave ... None
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  Detecting IDE Secondary Master ... None
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                >
                  Detecting IDE Secondary Slave ... None
                </motion.p>
              </div>
            </div>
          )}
        </motion.div>
        <div className="absolute bottom-0 w-full text-center">
          <p>Please wait for the screen to load</p>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center bg-inherit text-white absolute top-0 left-0 h-screen w-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 8.5 }}
      >
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-6xl md:text-9xl font-bold mb-4 text-red-700">
            WebDesktop
          </h1>
          <div className="text-sm md:text-2xl flex items-center justify-center">
            Loading operating system...
            <div className="relative mx-10">
              {[0, 90, 180, 270].map((degree, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${colors[index]} rounded-full w-4 h-4`}
                  style={{
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    rotate: degree,
                    transformOrigin:
                      "50% 150%" /* Adjusted for more distance */,
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
