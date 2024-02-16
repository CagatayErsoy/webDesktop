import React, { useEffect } from 'react';
import { useGlobalContext } from "../Context/appcontext";

interface NavbarIconProps {
  iconKey: string;
  src: string;
  label: string;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ iconKey, src, label }) => {
  const { setOpen, windows, addStack,showVirus,handleVirus} = useGlobalContext();

  const handleClick = (key: string) => {
    const cleanId = `${key}Window`;
    console.log(cleanId)
    if(key==="virus"){
     
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
    
  },[showVirus])

  return (
    <div
      id={iconKey}
      onClick={() => handleClick(iconKey)}
      className="flex justify-start items-center gap-2 p-2 text-main hover:bg-forth hover:text-secondary cursor-pointer"
    >
      <div
        className="w-10 h-10 2xl:h-13 2xl:w-13"
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
