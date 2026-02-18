"use client";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FC, useEffect, useState } from "react";

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <>
      <div className="w-full flex flex-col align-middle justify-between items-center px-5 md:px-15 py-5 border-t-2 border-[#b6752f]">
        <h1 className="text-lg font-semibold text-[#183a1d]">
          Where to find me:
        </h1>

        <div className="w-full flex align-middle justify-between px-5 h-5/6 py-5">
          <a
            href="https://www.instagram.com/francescoo.ricciardi"
            className="font-bold text-lg underline h-full w-1/3 flex flex-col align-middle items-center gap-5 text-[#b6752f] hover:text-[#183a1d] transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
            <p className="hidden md:flex">@francescoo.ricciardi</p>
          </a>

          <a
            href="https://www.facebook.com/francescoo.ricciardi"
            className="font-bold text-lg underline h-full w-1/3 flex flex-col align-middle items-center gap-5 text-[#b6752f] hover:text-[#183a1d] transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
            <p className="hidden md:flex">@francescoo.ricciardi</p>
          </a>

          <a
            href="mailto:fricciardi03@gmail.com"
            className="font-bold text-lg underline h-full w-1/3 flex flex-col align-middle items-center gap-5 text-[#b6752f] hover:text-[#183a1d] transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiMail className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
            <p className="hidden md:flex">@fricciardi03@gmail.com</p>
          </a>
        </div>
        <div className="w-full text-center h-1/6 text-[#183a1d]">
          &copy;{new Date().getFullYear()} bonobo rights
        </div>
      </div>
    </>
  );
}
