"use client";
import Window from "@/app/components/Window";
import { useGlobalContext } from "@/app/Context/appcontext";
import { useEffect, useState } from "react";

export default function About() {
  const { windows } = useGlobalContext();
  const units = 101; // Total units
  const majorUnit = 5; // Every 10th unit is a major unit
  const [isMobile, setIsMobile] = useState(false);
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
      id={windows.aboutWindow.id}
      title="About"
      defLeft={isMobile?"5vw":"15vw"}
    >
      <section className="py-20  bg-main  flex flex-col justify-center text-main items-center z-[-2]">
      {/* Horizontal Ruler */}
      
      <div className="lg:flex hidden absolute top-10 left-auto bg-second_blue h-6 px-5 z-10 ">
          {[...Array(units)].map((_, index) => (
            <div key={index} className={`w-2 ${index % majorUnit === 0 ? 'border-b-2' : 'border-b'} border-secondary`}>
              {index % majorUnit === 0 && <span className="text-xs text-secondary">{index}</span>}
            </div>
          ))}
        </div>

        {/* Vertical Ruler */}
        <div className=" lg:flex hidden flex-col absolute top-auto left-4 bg-second_blue py-5">
          {[...Array(units)].map((_, index) => (
            <div key={index} className={`h-2 ${index % majorUnit === 0 ? 'border-r-2' : 'border-r'} border-secondary`}>
              {index % majorUnit === 0 && <span className="text-xs text-secondary">{index}</span>}
            </div>
          ))}
        </div>
        <div className="bg-white  lg:w-[793px] h-[1123] md:w-[40rem] w-96 p-12 drop-shadow-2xl page ">
          
          <h2 className="text-xl font-bold">About Me</h2>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; <a className="hover:bg-forth" href="https://www.youtube.com/watch?v=rEq1Z0bjdwc" target="_blank" rel="noopener noreferrer">Hello there!</a> Genearal Kenobi coff coff ... I&apos;m Cagatay Ersoy, a
            fervent web developer with a strong drive to craft engaging,
            user-centric digital experiences. My journey in the realm of web
            development is fueled by a blend of creativity, technical prowess,
            and a relentless pursuit of innovation.
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;At the heart of my expertise lies a robust
            skill set in modern web technologies. I specialize in crafting
            dynamic and responsive websites, sophisticated web applications, and
            immersive web-based games.
          </p>
          <br />

          <h3 className="text-lg font-semibold">More Than Code</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;But my life isn&apos;t all about coding.
            When I&apos;m not in front of a computer screen, I&apos;m probably
            indulging in my love for travel and exploration. Discovering new
            places not only refreshes my mind but also inspires my work,
            bringing in fresh perspectives and ideas. Mobile gaming is another
            passion that keeps me engaged, offering both entertainment and an
            appreciation for game development&apos;s intricacies. And, of
            course, there&apos;s coffee - my constant companion that fuels my
            late-night coding sessions and early morning brainstorming.
          </p>
          <br />
          <h3 className="text-lg font-semibold">Why Work With Me?</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;I believe that the best digital solutions
            come from the intersection of technical skill, creative vision, and
            a deep understanding of user needs. Whether you&apos;re looking to
            build a website from scratch, revamp an existing platform, or bring
            a unique web-based game to life, I&apos;m here to help you navigate
            the journey and achieve outstanding results.
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Let&apos;s brew some digital magic together!
            Reach out to me, and let&apos;s discuss how we can turn your vision
            into a digital reality.
          </p>
        </div>
      </section>
    </Window>
  );
}
