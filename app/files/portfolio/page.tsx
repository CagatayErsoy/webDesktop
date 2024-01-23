"use client";

import { useGlobalContext } from "@/app/Context/appcontext";
import Window from "@/app/components/Window";
export default function Contact() {
  const { windows } = useGlobalContext();

  return (
    <Window
      windowWidth="70vw"
      windowHeight="70vh"
      id={windows.portfolioWindow.id}
      defLeft="15vw"
      title="Code Samples"
    >
      <div className="bg-terminal_bg text-secondary p-4 rounded shadow-md h-full w-full">
      <h1 className="text-2xl font-bold">
          Code Samples
        </h1>
        <ul>
          <li>  </li>
        </ul>
        <h1 className="text-2xl font-bold">
          Projects
        </h1>
        
        <ul>
        <li> <a href=""></a>Allied Voices</li> 
          <li> <a href="https://www.tento.co/"> Tento</a>
            </li>
          <li>WebDesktop</li>
          
        </ul>
      </div>
    </Window>
  );
}
