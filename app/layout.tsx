
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Files from "./files/page";
import localFont from "next/font/local";
import { AppProvider } from "./Context/appcontext";
import Virus from "./virus/page";
const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../public/fonts/Px437_Compaq_Port3.ttf" });
export const metadata: Metadata = {
  title: "WebDesktop",
  description: "Created by Cagatay Ersoy",
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
