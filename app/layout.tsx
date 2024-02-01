import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar/page";
import localFont from "next/font/local";
import { AppProvider } from "./Context/appcontext";
const myFont = localFont({ src: "../public/fonts/Px437_Compaq_Port3.ttf" });
export const metadata: Metadata = {
  title: "WebDesktop",
  description: "Created by Cagatay Ersoy,",
  icons:{
    icon:'./computer.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className} style={{}}>
      <AppProvider>
     
        {children}
        <Navbar></Navbar>
       
      </AppProvider>
      
       
      </body>
    </html>
  );
}
