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
import "tippy.js/themes/light.css";
import { useGlobalContext } from "@/app/Context/appcontext";
import Window from "@/app/components/Window";
import { useEffect, useState } from "react";
import useWindowSize from "@/app/hooks/useWindowSize";
interface TextStyle {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  align: "left" | "center" | "right";
}
export default function Resume() {
  const { windows } = useGlobalContext();
  const isMobile = useWindowSize();
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
    windowWidth={isMobile ? "100vw" : "70vw"}
      windowHeight="70vh"
      id={windows.resumeWindow.id}
      title="Resume"
      defLeft={isMobile ? "0" : "15vw"}
    >
      <div className="flex justify-left items-center  p-2 gap-3 shadow-md bg-[#00669D] absolute z-10  justify-self-center text-third">
        <Tippy content="Toggle Bold" theme="pink_theme">
          <button onClick={() => toggleStyle("bold")}>
            <FaBold />
          </button>
        </Tippy>

        <Tippy content="Toggle Italic" theme="pink_theme">
          <button onClick={() => toggleStyle("italic")}>
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
            href="https://drive.google.com/file/d/1Mig0j1e-pB-pKTUpdjVDC4DNOUVu7i_n/view?usp=sharing"
            download="CagatayErsoy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdDownload />
          </a>
        </Tippy>
      </div>

      <div
        className={`bg-main text-second_blue lg:p-[5rem] py-10 rounded shadow-md flex items-center justify-center ${
          textStyle.bold ? "font-black" : ""
        } ${textStyle.italic ? "italic" : ""} ${
          textStyle.underline ? "underline" : ""
        } text-${textStyle.align}`}
      >
        <div className="bg-white  w-[793px] h-[1123] p-12 drop-shadow-2xl text-main">
          <h1 className="text-3xl font-bold text-main">- Cagatay Ersoy -</h1>
          <p className="text-sm">Full Stack Developer - San Francisco, CA</p>
          <p className="text-sm">415-494-1235 - cagatay.ersoy1@gmail.com</p>
          <p className="text-sm">
            linkedin.com/in/cagatay-ersoy | github.com/CagatayErsoy
          </p>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-main">
              - Technical Skills -
            </h2>
            <li>
              <span className="text-main">Programming Languages:</span>{" "}
              JavaScript/TypeScript, C++
            </li>
            <li>
              <span className="text-main">Web Technologies: </span> React,
              Angular, Material UI, Angular Material, TailwindCSS, Bootstrap,
              SCSS/SASS, Three.js, Rxjs, Formik, Storybook, Leaflet.js, Node.js,
              Express.js, Nest.js, Airtable
            </li>
            <li>
              {" "}
              <span className="text-main">Development Methodologies:</span>{" "}
              SCRUM, Agile
            </li>
            <li>
              <span className="text-main">Databases:</span> SQL, MongoDB
            </li>
            <li>
              <span className="text-main">Project Management:</span> JIRA
            </li>
            <li>
              <span className="text-main">Version Control:</span> Git, GitHub
            </li>
            <li>
              <span className="text-main">IDE:</span> Visual Studio Code,
              Stackblitz
            </li>
            <li>
              <span className="text-main">Testing:</span> Postman, Jasmine
            </li>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold"> - Professional Experience -</h2>
            <p className="text-lg ">
              Civil Engineer (Turkey) -{" "}
              <span className="text-sm">Sept 2014-Oct 2018</span>
            </p>

            <p className="text-lg">
              Allied Voices – Front End Developer (Remote) -{" "}
              <span className="text-sm">Jan 2021 - May 2022</span>
            </p>

            <p className="text-lg">
              Antra – Full Stack Developer (Remote) -{" "}
              <span className="text-sm">May 2022 - February 2023</span>
            </p>

            <p className="text-lg ">
              Tento (Freelancer) – Front End Developer (Remote) -{" "}
              <span className="text-sm">July 2023 - January 2023</span>
            </p>
            <p className="text-lg ">
              Reqora(Startup) – Front End Developer (Remote) -{" "}
              <span className="text-sm">March 2024- Present</span>
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold">- Education -</h2>
            <p>
              City College of San Francisco, San Francisco, CA - Associate
              Degree in CNIT Front End Web Development -{" "}
              <span className="text-sm">2019 - 2022</span>
            </p>
            <p>
              Ondokuz Mayis University - Bachelor of Science in Civil
              Engineering - September -
              <span className="text-sm">2011 - May 2015</span>
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">- Certification -</h2>
            <p>Advanced Web Development Techniques Certificate (CCSF)</p>
            <p>JavaScript Algorithms and Data Structures (FreeCodeCamp)</p>
          </div>
        </div>
      </div>
    </Window>
  );
}
