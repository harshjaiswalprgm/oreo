import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TheLearniverseLogo from "../assets/logos/newlogo.svg";
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
        className={`fixed top-0 left-1/2 -translate-x-1/2 mt-2 max-w-[96%] w-full rounded-full px-6 md:px-10 py-2
          backdrop-blur-md border-[0.5px] border-gray-300 shadow-sm transition-all duration-300 z-[999]
          flex justify-between items-center
          ${show ? "top-0" : "-top-28"}
          ${scrolled ? "bg-white/90 dark:bg-gray-900" : "bg-white/40 dark:bg-black/40"}`}
      >
        <div className="flex items-center gap-8">
          <img
            src={TheLearniverseLogo}
            alt="Logo"
            className="h-[50px] md:h-[60px] transition-transform duration-300 hover:scale-105"
          />
          <div className="hidden lg:flex gap-6 items-center">
            {[
              { label: "About", link: "#" },
              { label: "Programs", link: "#" },
              { label: "Career", link: "#" },
              { label: "Blogs", link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="px-4 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {item.label}
              </a>
            ))}
            <span className="text-[10px] font-bold bg-black text-white px-2 py-1 rounded-md uppercase">
              New session started
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
            <i className="fas fa-user" /> Sign Up
          </button>
          <button className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90">
            <i className="fas fa-sign-in-alt" /> Login
          </button>
          <div className="flex flex-col items-center justify-between bg-black text-white dark:bg-white dark:text-black w-8 h-[60px] rounded-full p-1">
            <button onClick={toggleDarkMode}>
              {darkMode ? <BsSun size={16} /> : <BsMoon size={16} />}
            </button>
          </div>
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
