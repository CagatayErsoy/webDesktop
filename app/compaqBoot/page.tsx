"use client";
// CompaqBoot.tsx
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context/appcontext";
import EnergyStarLogo from "./EnergyStarLogo"; // Make sure the path is correct

const CompaqBoot: React.FC = () => {
  const { setIsLoading } = useGlobalContext();
  const [memoryCount, setMemoryCount] = useState<number>(0);
  const maxMemory = 26210; // The memory number from your image

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (memoryCount < maxMemory) {
      interval = setInterval(() => {
        setMemoryCount((prevCount) => {
          const nextCount = prevCount + 1024; // Increment by 1024 to simulate memory check
          if (nextCount >= maxMemory) {
            clearInterval(interval); // Clear interval if maxMemory reached
            setIsLoading(false); // Set loading to false once done
          }
          return nextCount;
        });
      }, 50); // Adjust time as needed for simulation speed
    }

    return () => {
      clearInterval(interval);
    };
  }, [memoryCount, setIsLoading]);

  const formatMemoryCount = (count: number): string => {
    // Add leading zeros to the memory count and format it
    return count.toString().padStart(7, "0");
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
        <div>
          <p>PENTIUM ODP-MMX CPU at 200MHz</p>
          <p>Memory Test: {formatMemoryCount(memoryCount)} OK</p>
        </div>
        <div>
          {" "}
          <p>Award Plug and Play BIOS Extension v1.0A</p>
          <p>Copyright (C) 1998, Award Software, Inc.</p>
        </div>
        <div className="mx-8">
          {" "}
          <p>Detecting IDE Primary Master ... None</p>
          <p>Detecting IDE Primary Slave ... None</p>
          <p>Detecting IDE Secondary Master ... None</p>
          <p>Detecting IDE Secondary Slave ... [Press F4 to skip]</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-center">
        <p>Press DEL to enter SETUP</p>
      </div>
    </div>
  );
};

export default CompaqBoot;
