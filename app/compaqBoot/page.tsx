"use client";
// CompaqBoot.tsx
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context/appcontext";
import EnergyStarLogo from "./EnergyStarLogo";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
const CompaqBoot: React.FC = () => {
  const { setIsBooting } = useGlobalContext();
  const [memoryCount, setMemoryCount] = useState<number>(0);
  const [showMemoryTest, setShowMemoryTest] = useState<boolean>(true);
  const [showAwardBios, setShowAwardBios] = useState<boolean>(false);
  const [showIdeInfo, setShowIdeInfo] = useState<boolean>(false);
  const [ideInfo, setIdeInfo] = useState<string[]>([]);
  const [ideInfoIndex, setIdeInfoIndex] = useState<number>(0);
  const [OSScreen, setOSScreen] = useState(false);
  const maxMemory = 52420;
  const ideInfoText = [
    "Detecting IDE Primary Master...None",
    "Detecting IDE Primary Slave ... None,",
    "Detecting IDE Secondary Master ... None",
    "Detecting IDE Secondary Slave ... None",
  ];
  //typing animation
  const count = useMotionValue(0);
  // const rounded = useTransform(count, (latest) => Math.round(latest));
  // const displayText = useTransform(rounded, (latest) =>
  // // baseText.slice(0, latest))
  useEffect(() => {
    let ideInfoTimeout: ReturnType<typeof setInterval>;
    if (showIdeInfo) {
      ideInfoTimeout = setInterval(() => {
        if (ideInfoIndex < ideInfoText.length) {
          setIdeInfoIndex(ideInfoIndex + 1);
          setIdeInfo((prev) => [...prev, ideInfoText[ideInfoIndex]]);
        } else if (ideInfoIndex === ideInfoText.length) {
          setOSScreen(true);

          setTimeout(() => {
            setIsBooting(false);
          }, 2000);
        }
      }, 1000);
    }

    return () => {
      clearInterval(ideInfoTimeout);
    };
  }, [showIdeInfo, ideInfoIndex]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (showMemoryTest && memoryCount < maxMemory) {
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
    return count.toString().padStart(7, "0");
  };
  // const animateDots = () => {
  //   let dotString = "";
  //   const maxDots = 5;
  //   let currentDots = 0;

  //   const interval = setInterval(() => {
  //     dotString = ".".repeat(currentDots);
  //     setIdeInfo((prev) => [...prev.slice(0, -1), `${dotString}`]);
  //     currentDots = (currentDots + 1) % (maxDots + 1);
  //   }, 500);

  //   return () => clearInterval(interval);
  // };
  if (OSScreen) {
    return (
      <div className="flex w-full h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-red-700">WebDesktop</h1>
          <p className="text-2xl">Loading operating system...</p>
          {/* <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          /> */}
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-screen bg-black text-gray-400 text-[1.4rem]">
      <EnergyStarLogo />
      <div className="flex flex-col p-8 gap-5">
        <div>
          <p>webDesktop BIOS v4.60PGA, webDesktop-Ersoy Ally</p>
          <p>Copyright (C) 2023, Ersoy Software, LLC.</p>
        </div>
        <div>
          <p>Version 1.03</p>
        </div>

        <div>
          <p>PENTIUM ODP-MMX CPU at 200MHz</p>
          <p>
            Memory Test: {formatMemoryCount(memoryCount)}{" "}
            {showAwardBios && "OK"}
          </p>
        </div>
        {showAwardBios && (
          <div>
            <p>Award Plug and Play BIOS Extension v1.0A</p>
            <p>Copyright (C) 1998, Award Software, Inc.</p>
          </div>
        )}
        {showIdeInfo && (
          <div className="mx-8">
            {ideInfo.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 w-full text-center">
        <p>Press DEL to enter SETUP</p>
      </div>
    </div>
  );
};

export default CompaqBoot;
