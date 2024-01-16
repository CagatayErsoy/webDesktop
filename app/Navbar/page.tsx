"use client";
import React, { useState, useRef, useEffect, MutableRefObject } from "react";
import Link from "next/link";
import Icon from "../components/Icon"; // Make sure to adjust this import to the correct path of your Icon component
import Clock from "../components/Clock";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Corrected the import for useRouter
import icons from "../utilities/IconsData";
import { FaFolder } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsSubMenuOpen(false);
  };
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const handleDoubleClick = (url: string) => {
    router.push(url);
  };
  // #c0cade
  return (
    <nav className="bg-third w-full fixed bottom-0 h-12 flex items-center  ">
      <div className="flex items-center justify-between h-16  w-full ">
        <button
          onClick={toggleMenu}
          className=" text-[#093973] w-20  flex items-center justify-center font-bold text-xl h-full rounded-md hover:bg-forth hover:text-third"
        >
          Start
        </button>
        <div className="flex gap-3 p-5">
          <a
            href="https://www.linkedin.com/in/cagatay-ersoy/"
            className="text-xl"
          >
            {" "}
            <FaLinkedin />
          </a>

          <Clock/>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div
            className="absolute bg-third shadow-md rounded-md  left-0 bottom-12 z-10 text-main w-1/6"
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div className="flex flex-col gap-3 text-center  divide-y divide-blue-200 ">
              <div className=" flex flex-col gap-2">
                {Object.keys(icons).map((key) => {
                  const { label, src } = icons[key];
                  return (
                    <div
                      key={key}
                      id={key}
                      onDoubleClick={() => handleDoubleClick(`/?${key}`)}
                      className="flex  justify-start items-center gap-2 p-2"
                    >
                      <div
                        className="w-[2.5rem] h-[2.5rem]"
                        style={{
                          backgroundImage: `url(${src}) `,
                          backgroundSize: "cover",
                        }}
                      ></div>

                      <span className="text-main">{label}</span>
                    </div>
                  );
                })}
              </div >
              {/* Submenu Trigger */}
              <button onClick={toggleSubMenu} className="p-2  flex justify-start gap-2 ">
              <span className="text-forth text-3xl"><FaFolder /></span>
              <div>Others</div>
              </button>

              {/* Submenu */}
              {isSubMenuOpen && (
                <div className="absolute left-full bottom-12 bg-third flex flex-col gap-3 w-full">
                  <Link href="/?snake">
                    <div className="flex items-center gap-2 p-2 hover:bg-forth">
                      <Icon src="/icons/snake.png" alt="snake" size={30} />
                      snake.bat
                    </div>
                  </Link>
                  <Link href="/?virus">
                    <div className="flex items-center gap-2 p-2">
                      <Icon src="/icons/alert1.png" alt="virus" size={30} />
                      Virus.exe
                    </div>
                  </Link>
                </div>
              )}

              <Link href="/?terminal">
                <div className="flex items-center gap-5 p-2 hover:bg-forth">
                  <Icon src="/images/restart.png" alt="restart" size={30} />{" "}
                  Restart
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
