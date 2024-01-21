"use client";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import 'tippy.js/themes/light.css';
import { useGlobalContext } from "@/app/Context/appcontext";
import Window from "@/app/components/Window";
import { useState } from "react";
interface TextStyle {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  align: "left" | "center" | "right";
}
export default function Cv() {
  const { windows } = useGlobalContext();
  const [textStyle, setTextStyle] = useState<TextStyle>({
    bold: false,
    italic: false,
    underline: false,
    align: "left",
  });

  const toggleStyle = (style: keyof TextStyle) => {
    setTextStyle({ ...textStyle, [style]: !textStyle[style] });
  };

  const setAlignment = (align: "left" | "center" | "right") => {
    setTextStyle({ ...textStyle, align });
  };

  return (
    <Window
      windowWidth="70vw"
      windowHeight="70vh"
      id={windows.cvWindow.id}
      title="CV"
      defLeft="15vw"
    >
      <div className="flex justify-left items-center  p-2 gap-3 shadow-md bg-[#00669D] absolute z-10  justify-self-center text-third">
        <Tippy content="Toggle Bold" theme="pink_theme" >
          <button onClick={() => toggleStyle("bold")}>
            <FaBold />
          </button>
        </Tippy>

        <Tippy content="Toggle Italic" theme="pink_theme">
          <button onClick={() => toggleStyle("italic")} >
            <FaItalic />
          </button>
        </Tippy>
        <Tippy content="Toggle Underline" theme="pink_theme">
          <button onClick={() => toggleStyle("underline")}>
            <FaUnderline />
          </button>
        </Tippy>

        <Tippy content="Toggle Left" theme="pink_theme">
          <button onClick={() => setAlignment("left")}>
            <FaAlignLeft />
          </button>
        </Tippy>

        <Tippy content="Toggle Center" theme="pink_theme">
          <button onClick={() => setAlignment("center")}>
            <FaAlignJustify />
          </button>
        </Tippy>

        <Tippy content="Toggle Right" theme="pink_theme">
          <button onClick={() => setAlignment("right")}>
            <FaAlignRight />
          </button>
        </Tippy>

        <Tippy content="Downland as PDF" theme="pink_theme">
          
            <a
              href="https://drive.google.com/uc?export=download&id=16VxPbdOE5S7HTD7ANACf2mT5RIFhxE2t"
              target="_blank"
            
            >
              <MdDownload />
            </a>
          
        </Tippy>
      </div>

      <div
        className={`bg-main text-main p-[5rem] rounded shadow-md flex items-center justify-center ${
          textStyle.bold ? "font-black" : ""
        } ${textStyle.italic ? "italic" : ""} ${
          textStyle.underline ? "underline" : ""
        } text-${textStyle.align}`}
      >
        <div className="bg-white  w-[793px] h-[1123] p-12 drop-shadow-2xl">
          <h1 className="text-2xl font-bold">Cagatay Ersoy</h1>
          <p className="text-sm">Full Stack Developer - San Francisco, CA</p>
          <p className="text-sm">415-494-1235 - cagatay.ersoy1@gmail.com</p>
          <p className="text-sm">
            linkedin.com/in/cagatay-ersoy | github.com/CagatayErsoy
          </p>

          <div className="mt-4">
            <h2 className="text-xl font-bold">Technical Skills</h2>
            <p>Programming Languages: JavaScript/TypeScript, C++</p>
            <p>
              Web Technologies: React, Angular, Material UI, Angular Material,
              TailwindCSS, Bootstrap, SCSS/SASS, Three.js, Rxjs, Formik,
              Storybook, Leaflet.js, Node.js, Express.js, Nest.js, Airtable
            </p>
            <p>Development Methodologies: SCRUM, Agile</p>
            <p>Databases: SQL, MongoDB</p>
            <p>Project Management: JIRA</p>
            <p>Version Control: Git, GitHub</p>
            <p>IDE: Visual Studio Code, Stackblitz</p>
            <p>Testing: Postman, Jasmine</p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-bold">Professional Experience</h2>
            <h3 className="text-lg font-semibold">
              Civil Engineer (Turkey) - Sept 2014-Oct 2018
            </h3>

            <h3 className="text-lg font-semibold">
              Allied Voices – Front End Developer (Remote) - Jan 2021 - May 2022
            </h3>

            <h3 className="text-lg font-semibold">
              Antra – Full Stack Developer (Remote) - May 2022 - February 2023
            </h3>

            <h3 className="text-lg font-semibold">
              Tento (Freelancer) – Front End Developer (Remote) - July 2023 -
              October 2023
            </h3>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-bold">Education</h2>
            <p>
              City College of San Francisco, San Francisco, CA - Associate
              Degree in CNIT Front End Web Development - August 2019 - May 2022
            </p>
            <p>
              Ondokuz Mayis University - Bachelor of Science in Civil
              Engineering - 2011 - 2015
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Certification</h2>
            <p>Advanced Web Development Techniques Certificate (CCSF)</p>
            <p>JavaScript Algorithms and Data Structures (FreeCodeCamp)</p>
          </div>
        </div>
      </div>
    </Window>
  );
}
