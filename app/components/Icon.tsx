import React from 'react';
import { useGlobalContext } from "../Context/appcontext";

interface NavbarIconProps {
  iconKey: string;
  src: string;
  label: string;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ iconKey, src, label }) => {
  const { setOpen, windows, addStack, removeStack } = useGlobalContext();

  const handleDoubleClick = (key: string) => {
    console.log(key)
    const cleanId = `${key}Window`;

    // Check if the window exists and is open
    if (windows[cleanId] && !windows[cleanId].isOpen) {
      setOpen(cleanId, true);
      addStack(cleanId);
    } else if (windows[cleanId]) {
      addStack(cleanId);
    }
  };

  return (
    <div
      id={iconKey}
      onDoubleClick={() => handleDoubleClick(iconKey)}
      className="flex justify-start items-center gap-2 p-2 text-main hover:bg-forth hover:text-secondary "
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
