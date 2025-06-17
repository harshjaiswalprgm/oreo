import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TheLearniverseLogo from "../assets/NewwLogo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [scrolled, setScrolled] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      setScrolled(scrollY > window.innerHeight * 0.8);
      if (scrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      <div
        className={`transition-all duration-300 z-[999] w-full fixed top-0 px-6 md:px-10 py-3 flex justify-between items-center backdrop-blur-md border border-white/30 shadow-md ${
          show ? "top-0" : "-top-28"
        } ${
          scrolled
            ? "bg-white/70 dark:bg-gray-900/90"
            : "bg-white/30 dark:bg-black/30"
        } rounded-3xl mx-auto max-w-[96%] mt-2`}
      >
        <div className="flex items-center gap-10">
          <img
            src={TheLearniverseLogo}
            alt="The Learniverse Logo"
            className="h-[60px] md:h-[80px] transition-transform duration-300 hover:scale-105"
          />

          <div className="hidden lg:flex gap-10 items-center">
            {["About", "Programs", "Career", "Blogs"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-base font-bold text-black dark:text-white hover:text-black dark:hover:text-white transition duration-300"
              >
                {item}
              </a>
            ))}
            <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded-md">
              We are hiring
            </span>
          </div>
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <button className="px-5 py-2 text-sm font-semibold text-white bg-slate-800 dark:bg-slate-200 dark:text-black rounded-full hover:bg-slate-900 dark:hover:bg-slate-100 transition">
            <i className="fas fa-user mr-2" /> Sign Up
          </button>
          <button className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition">
            <i className="fas fa-sign-in-alt mr-2" /> Login
          </button>
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center transition-transform hover:scale-110"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>

        <div
          className="lg:hidden text-3xl text-black dark:text-white z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-screen bg-white/70 dark:bg-black/80 backdrop-blur-xl z-[1000] flex flex-col items-center justify-center gap-6 text-lg"
            >
              {["About", "Programs", "Career", "Blogs"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-black dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="text-sm font-semibold px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">
                Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
