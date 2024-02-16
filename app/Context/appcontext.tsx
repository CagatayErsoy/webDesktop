"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  RefObject,
} from "react";
import WindowData from "../utilities/WindowData";

interface WindowProps {
  id: string;
  isOpen: boolean;
  // Add any other properties that WindowData might have
}

interface AppContextValue {
  windows: { [key: string]: WindowProps };
  setWindows: Dispatch<SetStateAction<{ [key: string]: WindowProps }>>;
  setOpen: (id: string, isOpen: boolean) => void;
  refElement: RefObject<Element> | null;
  setParentRef: (node: RefObject<Element> | null) => void;
  addStack: (window: string) => void;
  removeStack: (window: string) => void;
  stack: string[];
  isBooting: boolean;
  setIsBooting: React.Dispatch<React.SetStateAction<boolean>>;
  closeAllWindows: () => void;
  showVirus: boolean;
  setShowVirus: React.Dispatch<React.SetStateAction<boolean>>;
  handleVirus:()=>void
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [windows, setWindows] = useState<{ [key: string]: WindowProps }>(
    WindowData
  );
  const [stack, setStack] = useState<string[]>(['helpWindow']);
  const [isBooting, setIsBooting] = useState(true);
  const [showVirus, setShowVirus] = useState(false);

  const [refElement, setRefElement] = useState<RefObject<Element> | null>(null);

  const setParentRef = (node: RefObject<Element> | null) => {
    setRefElement(node);
  };

  const setOpen = (id: string, isOpen: boolean) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [id]: {
        ...prevWindows[id],
        isOpen,
      },
    }));
  };
  const closeAllWindows = () => {
    setWindows(prevWindows => {
      const newWindows = {...prevWindows};
      for (const key in newWindows) {
        if (newWindows.hasOwnProperty(key)) {
          newWindows[key] = {...newWindows[key], isOpen: false};
        }
      }
      return newWindows;
    });
  };
  const handleVirus=()=>{
   console.log("here")
    setShowVirus(true)
    closeAllWindows()
  }
  

  const addStack = (window: string) => {
    setStack((currentStack) => {
      // Check if the window is already at the front of the stack
      if (currentStack[0] === window) {
        return currentStack; // No change needed
      }

      // Remove the window from its current position in the stack
      const newStack = currentStack.filter((w) => w !== window);

      // Add the window to the front of the stack
      newStack.unshift(window);

      // Optional: Limit the stack size
      if (newStack.length > 6) {
        newStack.pop();
      }
      console.log(newStack,windows.helpWindow)
      return newStack;
    });
  };

  const removeStack = (window: string) => {
    setStack((currentStack) => {
      const newStack = currentStack.filter((w) => w !== window);

      return newStack;
    });
  };

  return (
    <AppContext.Provider
      value={{
        windows,
        setWindows,
        setOpen,
        refElement,
        setParentRef,
        addStack,
        removeStack,
        stack,
        setIsBooting,
        isBooting,
        closeAllWindows,
        showVirus,
        setShowVirus,
        handleVirus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider };
