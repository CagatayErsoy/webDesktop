interface WindowProps{
  id:string,
  isOpen:boolean,
}
type Windows=Record<string,WindowProps>
const windows:Windows = {
    aboutWindow: {
      id: "aboutWindow",
      isOpen: false,
    },
    contactWindow: {
      id: "contactWindow",
      isOpen: false,
    },
    cvWindow: {
      id: "cvWindow",
      isOpen: false,
    
    },
    portfolioWindow: {
      id: "portfolioWindow",
      isOpen: false,
    
    },
    terminalWindow: {
      id: "terminalWindow",
      isOpen: false,
     
    },
    snakeWindow: {
      id: "snakeWindow",
      isOpen: false,
     
    },
    virusWindow: {
      id: "snakeWindow",
      isOpen: false,
    },
    };
    
  export default windows
    