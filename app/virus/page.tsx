"use client";
import React, { useState, useEffect ,useRef} from "react";
import { BsVirus } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useGlobalContext } from "../Context/appcontext";
interface Position {
  top: number;
  left: number;
}

export default function Virus() {
  const [position, setPosition] = useState<Position>({ top: 300, left: 300 });
 const {width,height}=useWindowDimensions()
 const {showVirus}=useGlobalContext()
  const ref=useRef(null)
  useEffect(() => {
    
    positionVirus();
    
  }, []);

  const positionVirus = () => {
    if (typeof width !== "undefined" && typeof height !=="undefined") {
     
      const x = Math.random() * width- 300
      const y = Math.random() * height-200

      setPosition({ top: y<144?144:y, left: x<288?288:x });
    }
  };

  const handleClose = () => {
  
    positionVirus();
  };

  return (
    showVirus&&
    <div className="h-screen w-screen absolute top-0 left-0 z-[1000]" ref={ref}>
    <div
      className="h-[9rem] w-[18rem] absolute z-[1010]"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      onClick={handleClose}
    >
      <header className="flex items-center bg-third p-2 cursor-move h-10 py-1">
        <h1 className="text-lg  grow text-[#093973]">Error</h1>
        <nav>
          <button className="text-red-600 hover:text-red-800">
            <IoMdCloseCircleOutline size="24px" />
          </button>
        </nav>
      </header>
      <div className="h-full bg-secondary flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <BsVirus className="text-red-600 text-2xl"></BsVirus>
          <span className="text-main">THIS COMPUTER HAS VIRUS</span>{" "}
        </div>
        <button className="h-10 w-20 border border-main text-main hover:bg-red-600 hover:text-secondary shadow-lg">
          OK
        </button>
      </div>
    </div>
    </div>
  );
}
