import { useEffect, useRef, useState } from "react";
import TheLearniverseLogo from "../assets/logos/newlogo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [scrolled, setScrolled] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      setScrolled(scrollY > window.innerHeight * 0.8);
      setShow(scrollY < lastScrollY.current || scrollY < 10);
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
    <div className="relative z-[999]">
      {/* Navbar container */}
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 mt-4 px-4 md:px-6 py-2 rounded-full
          border-[0.5px] border-gray-300 backdrop-blur-md shadow-md z-[999]
          flex items-center gap-8 justify-between transition-all duration-300
          ${show ? "opacity-100" : "opacity-0 pointer-events-none"}
          ${scrolled ? "bg-white/90" : "bg-white/40"}`}
        style={{ width: "fit-content", maxWidth: "90%" }}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={TheLearniverseLogo}
            alt="Logo"
            className="h-[70px] md:h-[80px] w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Navigation links */}
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
              className="px-4 py-1 text-sm font-medium text-gray-700 rounded-full transition-all duration-200 hover:bg-gray-200 hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <span className="text-[10px] font-bold bg-black text-white px-2 py-1 rounded-md uppercase">
            New session started
          </span>
        </div>

        {/* Right-side Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium bg-gray-200 text-black rounded-full hover:bg-gray-300">
            <i className="fas fa-user" /> Sign Up
          </button>
          <button className="flex items-center gap-1 px-4 py-1.5 text-sm font-medium bg-black text-white rounded-full hover:opacity-90">
            <i className="fas fa-sign-in-alt" /> Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-3xl text-black z-[1001] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-screen bg-white/70 backdrop-blur-xl z-[1000] flex flex-col items-center justify-center gap-6 text-lg"
            >
              {["About", "Programs", "Career", "Blogs"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="text-black font-medium hover:text-blue-600 transition duration-300"
                >
                  {item}
                </a>
              ))}
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
