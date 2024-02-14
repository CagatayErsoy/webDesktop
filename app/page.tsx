"use client";
import React, { useEffect, useState } from "react";
import Files from "./files/page";
import Navbar from "./Navbar/page";
import { useGlobalContext } from "./Context/appcontext";
import CompaqBoot from "./compaqBoot/page";
import Virus from "./virus/page";
import useWindowDimensions from "./hooks/useWindowDimensions";

CompaqBoot;
export default function Home() {
  const { isBooting, showVirus } = useGlobalContext();
  const {width,height}=useWindowDimensions()
  const [sizeChanging,setSizeChanging]=useState(false)
useEffect(()=>{
  setSizeChanging(true)
  setTimeout(()=>{
setSizeChanging(false)
  },700)

},[width,height])

  return (
    <>
      {isBooting ? (
        <CompaqBoot />
      ) : (
       !sizeChanging&&<>
          {showVirus && <Virus></Virus>}
         
          <Files></Files>
        </>
      )}
    </>
  );
}
