"use client";

import { useGlobalContext } from "@/app/Context/appcontext";
import Window from "@/app/components/Window";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import helpElement from "./helpElement";
import fileListElement from "./fileListElement";
import generate from "./generate";
export default function Terminal() {
  const [output, setOutput] = useState<(string | JSX.Element|null)[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { windows } = useGlobalContext();
  const [command, setCommand] = useState("");
  const [hash, setHash] = useState("#");
  const [isLoading, setIsLoading] = useState(false);
  const baseText =
    "Welcome to smallBash for webDesktop, type help for guidelines..." as string;
  const count = useMotionValue(0);
  const commandsList = {
    "about.txt": "?about",
    "contact.mail": "/?contact",
    "cv.txt": "/?cv",
    "portfolio.bat": "/?portfolio",
    "snake.app": "/?snake",
  };

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if the last child is an HTMLElement and then scroll it into view
    const lastOutput = outputRef.current?.lastChild;
    if (lastOutput instanceof HTMLElement) {
      lastOutput.scrollIntoView({ behavior: "smooth" });
    }
  }, [output]);
  useEffect(() => {
    const focusInput = () => {
      inputRef.current?.focus();
    };

    focusInput();

    const focusInterval = setInterval(focusInput, 500);

    return () => clearInterval(focusInterval);
  }, []);
  const animateDots = () => {
    let dotString = '';
    const maxDots = 5;
    let currentDots = 0;

    const interval = setInterval(() => {
      dotString = '.'.repeat(currentDots);
      setOutput(prev => [...prev.slice(0, -1), `Loading${dotString}`]);
      currentDots = (currentDots + 1) % (maxDots + 1);
    }, 500); // Adjust timing as needed

    return () => clearInterval(interval); // Function to stop the animation
  };
  const handleCommand = () => {
    if (command === "ls") {
      setOutput((prev) => [...prev, `C:/ ${command}`, fileListElement]);
    } else if (Object.keys(commandsList).includes(command.toLowerCase())) {
      setOutput((prev) => [...prev, `${command} Is loading`]);
      router.push(commandsList[command as keyof typeof commandsList]);
    } else if (command === "help") {
      setOutput((prev) => [...prev, `C:/ ${command}`, helpElement]);
    } else if (command === "clear") {
      setOutput([""]);

    } 
    
    else if (command.startsWith("openai.ask:")) {
      const question = command.slice("openai.ask:".length).trim();
      setIsLoading(true)
      const stopAnimation = animateDots();
      if (!question) {
        setOutput(prev => [...prev, "No question provided for OpenAI."]);
        setIsLoading(false);
        stopAnimation();
        return;
      }
      
      generate(question + "answer this question inside <section> html tag with suitable html tags")
        .then(response => {
          setIsLoading(false);
          stopAnimation();
          if(response){
            const formattedResponse = <div dangerouslySetInnerHTML={{ __html: response }} />;
            
          setOutput(prev => [...prev, `C:/ ${command}`,formattedResponse]);
          }
          
        })
        .catch(error => {
          console.error("Error in OpenAI command:", error);
          setIsLoading(false);
          stopAnimation();
          setOutput(prev => [...prev, "Error in processing the request."]);
        });
    }
  
  
    
    else {
      setOutput((prev) => [
        ...prev,
        `C:/ ${command}`,
        `Command not found: ${command}`,
      ]);
    }
    inputRef.current?.focus();
    setCommand("");
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };
 

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween", // Not really needed because adding a duration will force "tween"
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);
  useEffect(() => {
    // ... existing useEffects

    if (isLoading) {
      // Initial output when loading starts
      setOutput(prev => [...prev, 'Loading']);
    }
  }, [isLoading]);
  return (
    <Window
      windowWidth="70vw"
      windowHeight="70vh"
      id={windows.terminalWindow.id}
      title="Terminal"
      defLeft="15vw"
    >
      <div className="bg-[#0e0e1b] p-4 rounded shadow-md text-terminal_text h-full text-lg overflow-auto ">
        <motion.span className="text-terminal_text">{displayText}</motion.span>
        <div ref={outputRef}>
          {output.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyPress={handleInputKeyPress}
            className="w-1 bg-transparent  outline-none text-transparent "
          />
          <span className="text-terminal_text text-lg blink-cursor relative">
            {" "}
            C:/ {command}
          </span>
          
        </div>

        {/*         
        <div>{hash} Loading...</div> */}
      </div>
    </Window>
  );
}