"use client";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";

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
      <div className="flex justify-left items-center  p-2 gap-3 shadow-md bg-[#00669D] absolute z-1  justify-self-center text-third">
        <button onClick={() => toggleStyle("bold")}>
          <FaBold />
        </button>
        <button onClick={() => toggleStyle("italic")}>
          <FaItalic />
        </button>
        <button onClick={() => toggleStyle("underline")}>
          <FaUnderline />
        </button>
        <button onClick={() => setAlignment("left")}>
          <FaAlignLeft />
        </button>
        <button onClick={() => setAlignment("center")}>
          <FaAlignJustify />
        </button>
        <button onClick={() => setAlignment("right")}>
          <FaAlignRight />
        </button>
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
          <p className="">Full Stack Developer</p>
          <p>React/Angular/Node.js/Express/Firebase/SQL/MongoDb</p>
          <div className="mt-4">
            <h2 className="text-xl font-bold">About</h2>
            <p>
             
              I am a self-motivated Full Stack Developer with a
              unique background in civil engineering, demonstrating a seamless
              transition to technology through a relentless pursuit of knowledge
              in web and software development. My experience encompasses both
              front-end and back-end technologies, fostering a comprehensive
              understanding of the software development lifecycle. Driven by a
              passion for continuous learning and innovation, I adeptly
              integrate diverse skills from engineering to programming, offering
              inventive and efficient solutions in every project.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold"> Past Experiences</h2>
            <h3> Civil Engineering</h3>
            <p>
              Bilgi Construction- Construction Inspector (Jul 2016 - Nov 2018)
            </p>
            <p>
              Metot Construction - Construction Site Manager (Jul 2016 - Nov
              2018)
            </p>
            <p>
              Arda Engineering CO.LTD. - Pipeline Engineer (Jun 2015 - Apr 2016)
            </p>
            <h3> Software Development</h3>
            <p>Allied Voices -Front End Engineer(Open Source) </p>
            <p>Antra -Front End Engineer </p>
            <p>Freelancer </p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Education</h2>
            <p> Ondokuz Mayis University -Civil Engineering</p>
            <p>
              City College of San Francisco - Associate degree, Computer IT -
              Web Development (May 2022)
            </p>
          </div>

          <div className="mt-4 ">
            <h2 className="text-xl font-bold">Skills</h2>
            <ul className="list-disc pl-5 ">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Angular:</li>
              <li>Vue</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Nest.js</li>
              <li>Redux</li>
              <li>Storybook</li>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Sequelize </li>
              <li>Prisma</li>
              <li>Firebase</li>
              <li> Google Cloud Run</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </Window>
  );
}
