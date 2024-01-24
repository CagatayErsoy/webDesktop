"use client";

import { useGlobalContext } from "@/app/Context/appcontext";
import Window from "@/app/components/Window";
import sdk from "@stackblitz/sdk";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

export default function Contact() {
  const { windows } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  const [stackblitzId, setstackblitzId] = useState("");
  const ReactProjects = {
    project1: {
      id: "stackblitz-starters-u4eovs",
      file: "src/App.tsx",
      name:"Sidebar",
      description: "A multifunctional sidebar and a modal example "
    },
    project2: {
      id: "stackblitz-starters-uemze2",
      file: "src/App.tsx",
      name:"Grocery Bud",
      description: "A Grocery List app with adding and removing functionality"
    },
    project3: {
      id: "stackblitz-starters-jkipfs",
      file: "src/App.tsx",
      name:"Color Picker",
      description: "See different color spectrum of your colors with Hex color code"
    },
    project4: {
      id: "stackblitz-starters-hzxfwp",
      file: "src/App.tsx",
      name:"Lorem Ipsum Generator",
      description: "Create different length of Lorem Ipsum text with this app"
    },
    project5: {
      id: "stackblitz-starters-9v5j9s",
      file: "src/App.tsx",
      name:"Tabs for Resume",
      description: "Can be a good addition for your website with changing tab functionality"
    },
    project6: {
      id: "stackblitz-starters-1m8lbk",
      file: "src/App.tsx",
      name:"Menu App",
      description: "A Menu App with delicious food options for different times of the day"
    },
    project7: {
      id: "stackblitz-starters-3jnkxz",
      file: "src/App.tsx",
      name:"Questions",
      description: "Questions app with accordion functionality"
    },
    project8: {
      id: "stackblitz-starters-m3dvfn",
      file: "src/App.tsx",
      name:"Review",
      description: "Review different people with slide functionality"
    },
    project9: {
      id: "stackblitz-starters-rcvyeh",
      file: "src/App.tsx",
      name:"Travel Choices",
      description: "Different travel options with delete, loading and refresh ability"
    },

   
  };
  const AngularProjects = {
    project1: {
      id: "stackblitz-starters-u4eovs",
      file: "src/App.tsx",
      name:"Sidebar",
      description: "A multifunctional sidebar and a modal example "
    },
  }
  function embedProject(id: string, file: string) {
    // Create a new div element
    const embedContainer = document.createElement("div");
    embedContainer.id = "stackblitz-element";
    embedContainer.style.width = "100%";
    embedContainer.style.height = "100%";
    embedContainer.className = "h-full w-full absolute top-0 left-0";

    const parentElement = document.getElementById("parent-container"); // Ensure this element exists in your JSX
    if (parentElement) {
      parentElement.appendChild(embedContainer);

      sdk.embedProjectId("stackblitz-element", stackblitzId, {
        forceEmbedLayout: true,
        openFile: file,
      });
    }
  }

  function cleanupEmbed() {
    const embedContainer = document.getElementById("stackblitz-element");
    if (embedContainer && embedContainer.parentNode) {
      embedContainer.parentNode.removeChild(embedContainer);
    }
  }
  useEffect(() => {
    if (isOpen) {
      // Timeout to ensure the DOM has updated
      setTimeout(() => {
        embedProject(stackblitzId, file);
      }, 0);
      return () => {
        if (isOpen) {
          cleanupEmbed();
        }
      };
    }
  }, [isOpen]);

  return (
    <Window
      windowWidth="70vw"
      windowHeight="70vh"
      id={windows.portfolioWindow.id}
      defLeft="15vw"
      title="Code Samples"
    >
      <div className="bg-terminal_bg text-secondary p-4 rounded shadow-md h-full w-full">
        <h1 className="text-2xl font-bold">Code Samples</h1>
        <ul className="border p-2 list-disc list-inside">
          <h3>React</h3>

          {Object.entries(ReactProjects).map(([key, project]) => (
          <li
            key={key}
            onClick={() => {
              setIsOpen(true);
              setstackblitzId(project.id);
              setFile(project.file);
            }}
            className="hover:text-forth"
          >
           <span>{project.name}:</span> {project.description}
          </li>
        ))}
          

       
        </ul>
        <ul className="border p-2 list-disc list-inside">
          <h3>Angular</h3>

          {Object.entries(AngularProjects).map(([key, project]) => (
          <li
            key={key}
            onClick={() => {
              setIsOpen(true);
              setstackblitzId(project.id);
              setFile(project.file);
            }}
            className="hover:text-forth"
          >
           <span>{project.name}:</span> {project.description}
          </li>
        ))}
          

       
        </ul>

        <h1 className="text-2xl font-bold">Projects</h1>

        <ul>
          <li>
            {" "}
            <a href=""></a>Allied Voices
          </li>
          <li>
            {" "}
            <a href="https://www.tento.co/"> Tento</a>
          </li>
          <li>WebDesktop</li>
        </ul>
         
          <div id="parent-container" className=" ">
          {isOpen && (
            <div className="h-10 w-[10rem] absolute bottom-0 left-1/2 bg-secondary z-10 text-terminal_bg flex justify-center items-center rounded-md">
              
          <button
              onClick={() => {
                cleanupEmbed();
                setIsOpen(false);
              }}
            className="text-red-600 hover:text-red-800"
          >
            {/* <IoMdCloseCircleOutline size="24px" /> */}
            Close Stackblitz
          </button>
            </div>
          
          )}
          {/* Code Snippet parent  */}
          </div>
      </div>
    </Window>
  );
}
