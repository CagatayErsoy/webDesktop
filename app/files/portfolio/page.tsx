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
      title="About Cagatay Ersoy"
    >
      <div className="bg-[#A7AABD] text-[#093973] p-4 rounded shadow-md h-full w-full">
        <h1 className="text-2xl font-bold">
          Some projects that I worked before
        </h1>
        <ul>
          <li>Tento -freelancing</li>
          <li>Allied Voices</li>
        </ul>
      </div>
    </Window>
  );
}
