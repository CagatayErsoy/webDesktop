"use client";
import { Variants, motion } from "framer-motion";
import { MdRestartAlt } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { useGlobalContext } from "@/app/Context/appcontext";
import Window from "@/app/components/Window";
import { useEffect, useState } from "react";
import useWindowSize from "@/app/hooks/useWindowSize";
export default function Help() {
  const { windows } = useGlobalContext();
  const isMobile = useWindowSize();
 
  const marqueeVariant: Variants = {
    animate: {
      x: ["100vw", "-100vw"], // Adjust to move from off-screen right to left
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Adjust duration for speed
      },
    },
  };

  const blinkVariant: Variants = {
    animate: {
      opacity: [0, 1],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },
    },
  };
  return (
    <Window
      windowWidth="70vw"
      windowHeight="70vh"
      id={windows.helpWindow.id}
      defLeft={isMobile ? "5vw" : "15vw"}
      title="Help"
    >
      <div className="bg-gray-400 text-main  flex items-center ">
        <div className="bg-gray-400 p-2 h-full text-xl flex gap-2">
          {" "}
        
          <button>
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button>
            <FaArrowRight></FaArrowRight>
          </button>
          <button>
            <MdRestartAlt></MdRestartAlt>
          </button>
        </div >
        <div className=" rounded-lg flex-grow px-5 bg-gray-300 h-full mx-2">
        https://cagatayersoy.com/help
        
        </div>
        
      </div>
      <div className="font-mono bg-blue-900 text-white p-8">
        <h1 className="text-yellow-300 underline text-3xl">
          Welcome to My Digital Playground!
        </h1>

        <div className="overflow-hidden font-mono text-yellow-300	" style={{ width: '100%' }}>
         
          <motion.div
            className="whitespace-nowrap"
            variants={marqueeVariant}
            animate="animate"
          >
             <p>
            Hey there! Welcome to a corner of the internet where creativity and
            code collide. This isn&apos;t just a website; it&apos;s an
            experience. So, let&apos;s get you acquainted!
          </p>
        </motion.div>
    </div>
        <h2 className="text-pink-400 text-2xl mt-4">🎨 My Portfolio</h2>
        <p>
          Curious about what I&apos;ve cooked up? Check out my portfolio!
          It&apos;s a digital treasure trove of my projects, code snippets, and
          all things ingenious. It&apos;s like a museum, but cooler, because you
          can touch stuff (well, click stuff).
        </p>

        <h2 className="text-green-300 text-2xl mt-4">📄 Grab My Resume</h2>
        <p>
          Need a quick rundown of my professional awesomeness? Hit the
          &apos;Download Resume&apos; button at the top. It&apos;s like
          capturing my career essence in a PDF format.
        </p>

        <h2 className="text-orange-400 text-2xl mt-4">📧 Contact Me</h2>
        <p>
          Want to chat? Drop me an email through contact.email. I&apos;m pretty
          good at responding unless I&apos;m lost in code or coffee... or both.
        </p>

        <h2 className="text-lime-200 text-2xl mt-4">
          💻 Terminal with a Twist
        </h2>
        <p>
          Ever wanted to chat with an AI in a retro-style terminal? Now&apos;s
          your chance! Connect with ChatGPT and ask it anything from coding tips
          to the meaning of life (results may vary).
        </p>

        <h2 className="text-light-blue-200 text-2xl mt-4">👤 A Bit About Me</h2>
        <p>
          Who&apos;s behind all this? Well, that&apos;s me! Dive into a brief
          intro about who I am, what I do, and why I love doing it. Spoiler: It
          involves a lot of coding and creativity.
        </p>

        <h2 className="text-purple-400 text-2xl mt-4">
          🖱️ Drag, Drop, and Explore
        </h2>
        <p>
          Feel like rearranging? Go ahead! Move windows and icons around.
          It&apos;s like digital Feng Shui.
        </p>

        <h2 className="text-pink-200 text-2xl mt-4">🎮 Start Navbar Goodies</h2>
        <p>
          Need a break? Hit the start navbar. Play a classic Snake game, revisit
          this guide, or... dare to open the &apos;Virus&apos; app. But beware,
          there&apos;s no ctrl+z on that one!
        </p>

        <h2 className="text-yellow-500 text-2xl mt-4">
          🚨 The Virus App: Enter at Your Own Risk
        </h2>
        <p>
          Feeling adventurous? Click on the Virus app. But remember, once you go
          down that road, there&apos;s no turning back. It&apos;s like opening
          Pandora&apos;s box, but more digital and less mythological.
        </p>

        <motion.p
          className="text-lime-400"
          variants={blinkVariant}
          animate="animate"
        >
          Enjoy exploring my digital realm! Remember, it&apos;s more than a
          website; it&apos;s an adventure. 😎
        </motion.p>
      </div>
    </Window>
  );
}
