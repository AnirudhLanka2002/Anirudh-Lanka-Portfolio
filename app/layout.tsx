import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/main/Navbar";
import VideoBackground from "../app/components/main/background";
import Contact from "../app/components/main/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anirudh Sai Lanka - Portfolio",
  description: "Created with passion By Anirudh Sai Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#000000] overflow-y-scroll overflow-x-hidden'}>
        <VideoBackground/>
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}
