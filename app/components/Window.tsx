import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion, useDragControls } from "framer-motion";
import { useGlobalContext } from "../Context/appcontext";
interface WindowProps {
  id: string;
  windowWidth: string;
  windowHeight: string;
  children: React.ReactNode;
  title: string;
  defLeft: string;
}

const Window: FC<WindowProps> = ({
  id,
  windowWidth,
  windowHeight,
  children,
  title,
  defLeft,
}) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [helperCount, setHelperCount] = useState(0);
  const [blackBg, setBlackBg] = useState(false);
  const [zIndex, setZIndex]=useState("")
  const windowRef = useRef<HTMLDivElement>(null);
  const controls = useDragControls();
  const { refElement, addStack, stack, removeStack, windows ,setOpen} =
    useGlobalContext();

  useEffect(() => {
    
  
      if (windows[id].isOpen) {
        setIsOpen(true)
        setZIndex(`${
          10-stack.indexOf(id) 
        }0`)
        
      }


    
  }, [windows]);

  const handleFullScreenToggle = useCallback(() => {
    setIsFullScreen(!isFullScreen);
  }, [isFullScreen]);

  const handleClose = useCallback(() => {
    setOpen(id,false);
    setIsOpen(false)
    removeStack(id);
    setZIndex("")
  }, [windows]);
  const handleBackgroundCover = () => {
  addStack(id)
    
  };
  useEffect(() => {
    setHelperCount((prev) => prev + 1);
  }, [isFullScreen]);
  useEffect(() => {
    

    stack.indexOf(id) !== 0 ? setBlackBg(true) : setBlackBg(false);
    setZIndex(`${
      10-stack.indexOf(id)
    }0`)

  }, [stack]);
  useEffect(()=>{
    console.log(id,zIndex,stack.indexOf(id))
  },[stack])

  return isOpen ? (
    <motion.section
      key={helperCount}
      className={`absolute overflow-hidden flex flex-col border border-main  ${isFullScreen ? "w-full h-screen" : " border-gray-200 shadow-lg "}`}
      drag
      dragElastic={0}
      dragMomentum={false}
      dragSnapToOrigin={isFullScreen ? true : false}
      dragConstraints={refElement || undefined}
      dragListener={false}
      dragControls={controls}
      style={{
        left: isFullScreen ? 0 : defLeft,
        top: isFullScreen ? 0 : "15vh",
        width: isFullScreen ? "100vw" : windowWidth,
        height: isFullScreen ? "100vh" : windowHeight,
        zIndex:zIndex
      }}
    >
      {blackBg && (
        <div
          className={`absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 `}
          style={{ zIndex: 1 }}
          onClick={handleBackgroundCover}
        >
          {" "}
        </div>
      )}
      <header
        className="flex items-center bg-third p-2 cursor-move h-10"
        onPointerDown={(e) => controls.start(e)}
      >
        <h1 className="text-lg text-center grow text-[#093973]">{title}</h1>
        <nav>
          <button
            onClick={handleFullScreenToggle}
            className="text-gray-600 hover:text-black mr-2"
          >
            {isFullScreen ? (
              <MdOutlineFullscreenExit size="24px" />
            ) : (
              <MdOutlineFullscreen size="24px" />
            )}
          </button>
          <button
            onClick={handleClose}
            className="text-red-600 hover:text-red-800"
          >
            <IoMdCloseCircleOutline size="24px" />
          </button>
        </nav>
      </header>
      <main className="overflow-auto scroll-smooth h-full">{children}</main>
    </motion.section>
  ) : null;
};

export default Window;
