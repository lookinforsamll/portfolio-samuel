"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setShowTransition(true);
    setTimeout(() => {
      setIsDarkMode((prev) => !prev);
    }, 150);
    setTimeout(() => {
      setShowTransition(false);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {showTransition && (
          <motion.div
            key="theme-transition"
            className="fixed inset-0 z-[30] bg-gradient-to-br from-white/80 to-gray-200/60 dark:from-[#0a0014]/70 dark:to-purple-900/60 backdrop-blur-[8px] pointer-events-none"
            initial={{ opacity: 0, y: 40, scale: 1.04 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
        )}
      </AnimatePresence>

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={handleToggleTheme} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
