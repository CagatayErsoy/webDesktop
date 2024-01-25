"use client";

import { useGlobalContext } from "@/app/Context/appcontext";
import Window from "@/app/components/Window";
import sdk from "@stackblitz/sdk";
import { useEffect, useState } from "react";
import ReactProjects from "@/app/utilities/ReactProjects";
import AngularProjects from "@/app/utilities/AngularProjects";

export default function Contact() {
  const { windows } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  const [stackblitzId, setstackblitzId] = useState("");
  const [isMobile, setIsMobile] = useState(false);

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
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Window
      windowWidth="70vw"
      windowHeight="70vh"
      id={windows.portfolioWindow.id}
      defLeft={isMobile?"5vw":"15vw"}
      title="Portfolio"
    >
      <div className="bg-terminal_bg text-green-400 lg:p-10 px-2 py-5 rounded shadow-md h-full w-full overflow-auto flex flex-col gap-8">
        <section>
          <h1 className="text-2xl  text-green-400">Projects</h1>
          <ul className="border border-main p-2 list-inside">
            <li className="w-full cursor-pointer">
              <a
                href="https://www.alliedvoices.org/"
                target="blank"
                className="mr-2 flex hover:text-second_blue"
              >
               <strong className=" lg:w-56 w-40"> - Allied Voices </strong>
                <span className="lg:w-fit w-full ">
                React, Javascript, Netlify, Figma, Leaflet.js, Airtable,
              </span>
              </a>
           
            </li>
            <li className=" w-full cursor-pointer ">
              <a href="https://www.tento.co/" target="blank" className="mr-2 flex hover:text-second_blue">
               <strong className=" lg:w-56 w-40"> - Tento </strong>
                <span className="lg:w-fit w-full ">
                Next.js, React, Typescript, SCSS, Formik, Storybook, Express.js,
                Node.js, SQL, AWS
              </span>
              </a>
           
            </li>
            <li className="w-full cursor-pointer">
              <a href="/" className="mr-2 flex hover:text-second_blue" >
              <strong className=" lg:w-56 w-40">- WebDesktop</strong>
              <span className="lg:w-fit w-full ">
                Next.js, React, Typescript, Tailwindcss, Framer Motion, Resend,
              </span>
              </a>
              
            </li>
          </ul>
        </section>

       
        <section>
        <h1 className="text-2xl  text-green-400">Code Samples</h1>
          <ul className="border border-main p-4 list-disc list-inside ">
            <h3 className="">React</h3>

            {Object.entries(ReactProjects).map(([key, project]) => (
              <li
                key={key}
                onClick={() => {
                  setIsOpen(true);
                  setstackblitzId(project.id);
                  setFile(project.file);
                }}
                className="hover:text-second_blue flex relative cursor-pointer"
              >
                <span className="lg:w-56 w-40 pl-4 before:content-['\2022'] before:absolute before:left-0">{project.name}:</span> <span className="lg:w-fit ">{project.description}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <ul className="border border-main p-2 list-disc list-inside">
            <h3>Angular</h3>

            {Object.entries(AngularProjects).map(([key, project]) => (
              <li
                key={key}
                onClick={() => {
                  setIsOpen(true);
                  setstackblitzId(project.id);
                  setFile(project.file);
                }}
                className="hover:text-second_blue flex relative cursor-pointer"
              >
                 <span className="w-56 pl-4 before:content-['\2022'] before:absolute before:left-0">{project.name}:</span> <span className="lg:w-fit ">{project.description}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h1 className="text-2xl ">Some Other Github Repos </h1>

          <ul className="border border-main p-2 list-inside">
            <li className="w-full cursor-pointer">
              
              <a
                href="https://github.com/CagatayErsoy/Full-Stack-Exercise-Todo"
                target="blank"
                className="hover:text-second_blue flex  cursor-pointer"
              >
               
               <strong className=" lg:w-56 w-40"> - Full Stack Todo{" "}</strong> 
                <span className="lg:w-fit w-full "> React, Typescript, Express.js, SQL </span>
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/CagatayErsoy/Movie-App-Angular"
                target="blank"
                className="hover:text-second_blue flex relative cursor-pointer"
              >
                {" "}
               <strong className=" lg:w-56 w-40"> - MovieApp</strong> 
                <span className="lg:w-fit w-full "> Angular , Typescript, Rxjs, Jwt, JsonWebToken </span>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/CagatayErsoy/NewsApp" target="blank" className="hover:text-second_blue flex relative cursor-pointer">
               <strong className=" lg:w-56 w-40"> - NewsApp</strong> 
               <span className="lg:w-fit w-full ">
                {" "}
                Angular , Typescript, Rxjs, Jwt, JsonWebToken Ngrx,
                Angular-Material{" "}
              </span>
              </a>{" "}
            
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/CagatayErsoy/Codewars-Solutions"
                target="blank"
                className="hover:text-second_blue flex relative cursor-pointer"
              >
                {" "}
               <strong className=" lg:w-56 w-40"> - CodeWar Solutions</strong> 
               <span className="lg:w-fit w-full ">My solutions for Codewars Javascript-Typescript questions </span> 
              </a>{" "}
            
            </li>
          </ul>
        </section>

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
