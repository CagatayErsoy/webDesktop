
interface IconProps {
  key: string;
  src: string;
  label: string;
  
}
type Icons = Record<string, IconProps>;
const icons:Icons= {
  about: {
    key: "about-icon",
    src: "/icons/txt.png",
    label: "About.txt",
   
  },
  contact: {
    key: "contact-icon",
    src: "/icons/email.png",
    label: "Contact.mail",

  },
  cv: {
    key: "cv-icon",
    src: "/icons/doc.png",
    label: "Cv.doc",
   
  },
  portfolio: {
    key: "portfolio-icon",
    src: "/icons/floppy.png",
    label: "Portfolio.bat",
   
  },
  terminal: {
    key: "terminal-icon",
    src: "/icons/terminal.png",
    label: "Terminal.bat",

  },
};

export default icons;
