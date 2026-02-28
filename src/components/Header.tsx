"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { div } from "framer-motion/client";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
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
      <header className="w-full py-2 md:pt-5 px-5 md:px-15 flex justify-between items-center relative text-verde">
        <h1 className="text-xl lg:text-2xl font-bold text-verde">
          Laboratorio di Patriziza
        </h1>
        <nav>
          <ul className="md:flex gap-6 text-lg font-semibold hidden">
            <li>
              <Link href="/" className="hover:text-arancione transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#biography"
                className="hover:text-arancione transition"
              >
                Chi Sono
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-arancione transition">
                Galleria
              </Link>
            </li>
          </ul>
        </nav>
        <motion.button
          className="text-3xl py-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          initial={false}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <FiX />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <FiMenu />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
        <AnimatePresence mode="popLayout">
          {open && (
            <motion.nav
              key="menu-pop"
              layout
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-full w-full left-0 flex flex-col items-center py-4 z-50 bg-sfondo-card h-fit"
            >
              <ul className="flex w-11/12 mx-auto flex-col gap-6 text-lg font-semibold">
                <li className="border-b w-full px-5 pb-2">
                  <Link href="/#presentation">Home</Link>
                </li>
                <li className="border-b w-full px-5 pb-2">
                  <Link href="/gallery">Galleria</Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      {isDesktop ? "" : ""}
    </>
  );
}
