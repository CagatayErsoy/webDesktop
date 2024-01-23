import React, { useEffect } from 'react';
import { useGlobalContext } from "../Context/appcontext";

interface NavbarIconProps {
  iconKey: string;
  src: string;
  label: string;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ iconKey, src, label }) => {
  const { setOpen, windows, addStack,setShowVirus ,closeAllWindows,showVirus,handleVirus} = useGlobalContext();

  const handleClick = (key: string) => {
    const cleanId = `${key}Window`;
    if(key==="virus"){
      console.log("virus")
      handleVirus()
    }
    if (windows[cleanId] && !windows[cleanId].isOpen) {
      setOpen(cleanId, true);
      addStack(cleanId);
    } else if (windows[cleanId]) {
      addStack(cleanId);
    }
  };
  useEffect(()=>{
    console.log("show virus changed", showVirus)
  },[showVirus])

  return (
    <div
      id={iconKey}
      onClick={() => handleClick(iconKey)}
      className="flex justify-start items-center gap-2 p-2 text-main hover:bg-forth hover:text-secondary cursor-pointer"
    >
      <div
        className="w-[2.5rem] h-[2.5rem]"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
        }}
      ></div>
      <span className="">{label}</span>
    </div>
  );
}

export default NavbarIcon;
