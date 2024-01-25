"use client";
import React, { useEffect } from "react";
import Files from "./files/page";
import Navbar from "./Navbar/page";
import { useGlobalContext } from "./Context/appcontext";
import CompaqBoot from "./compaqBoot/page";
import Virus from "./virus/page";
CompaqBoot;
export default function Home() {
  const { isBooting, showVirus } = useGlobalContext();


  return (
    <>
      {isBooting ? (
        <CompaqBoot />
      ) : (
        <>
          {showVirus && <Virus></Virus>}
         
          <Files></Files>
        </>
      )}
    </>
  );
}
