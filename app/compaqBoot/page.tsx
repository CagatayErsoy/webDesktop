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
  const [ideInfo,setIdeInfo]=useState<string[]>([])
  const maxMemory = 26210; 
  //typing animation
  const count = useMotionValue(0);
  // const rounded = useTransform(count, (latest) => Math.round(latest));
  // const displayText = useTransform(rounded, (latest) =>
  // // baseText.slice(0, latest))

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (showMemoryTest && memoryCount < maxMemory) {
      interval = setInterval(() => {
        setMemoryCount((prevCount) => {
          const nextCount = prevCount + 1024; // Increment by 1024 to simulate memory check
          if (nextCount >= maxMemory) {
            clearInterval(interval);
             // Hide memory test
            setShowAwardBios(true); // Show Award BIOS Extension info
            setTimeout(() => {
              setShowAwardBios(false); // Hide Award BIOS Extension info
              setShowIdeInfo(true); // Show IDE info
              setIsBooting(false); // Set loading to false once done
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
  const animateDots = () => {
    let dotString = '';
    const maxDots = 5;
    let currentDots = 0;

    const interval = setInterval(() => {
      dotString = '.'.repeat(currentDots);
      setIdeInfo(prev => [...prev.slice(0, -1), `${dotString}`]);
      currentDots = (currentDots + 1) % (maxDots + 1);
    }, 500); // Adjust timing as needed

    return () => clearInterval(interval); // Function to stop the animation
  };
  return (
    <div className="relative w-full h-screen bg-black text-gray-400 text-2xl">
      <EnergyStarLogo />
      <div className="flex flex-col p-8 gap-5">
        <div>
          <p>webDesktop BIOS v4.60PGA, Energy-Ersoy Ally</p>
          <p>Copyright (C) 2023, Ersoy Software, LLC.</p>
        </div>
        <div>
          <p>Version 1.03</p>
        </div>
        (
          <div>
            <p>PENTIUM ODP-MMX CPU at 200MHz</p>
            <p>Memory Test: {formatMemoryCount(memoryCount)} OK</p>
          </div>
        )
        {showAwardBios && (
          <div>
            <p>Award Plug and Play BIOS Extension v1.0A</p>
            <p>Copyright (C) 1998, Award Software, Inc.</p>
          </div>
        )}
        {showIdeInfo && (
          <div className="mx-8">
            <p>Detecting IDE Primary Master  None</p>
            <p>Detecting IDE Primary Slave ... None</p>
            <p>Detecting IDE Secondary Master ... None</p>
            <p>Detecting IDE Secondary Slave ... [Press F4 to skip]</p>
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
