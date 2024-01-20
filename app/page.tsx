"use client";
import React from "react";
import Files from "./files/page";
import Navbar from "./Navbar/page";
import { useGlobalContext } from "./Context/appcontext";
import CompaqBoot from "./compaqBoot/page";
CompaqBoot
export default function Home() {
  const {isBooting}=useGlobalContext()
  return <>{isBooting?<CompaqBoot/> : <>
   
       
        
       <Files></Files>
  </>
}  
 
      
  </>;
}

