import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import logo from "../assets/BlackGL.png";

const navLinks = ["Home", "Services", "Programs", "Career", "About"];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } backdrop-blur-md bg-white/40 border-b border-white/30 shadow-md`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-auto"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-6 sm:h-7 md:h-7 object-contain"
              />
            </motion.div>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex gap-6 lg:gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="group relative font-semibold uppercase text-sm text-gray-800 hover:text-black transition duration-300"
              >
                <span className="block transition-transform duration-500 group-hover:-translate-y-1">
                  {link}
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 border border-black text-sm rounded-full font-semibold hover:bg-black hover:text-white transition"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium text-gray-800 hover:text-black transition"
            >
              Sign In
            </motion.button>
          </div>

          {/* Hamburger - Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-xl text-black focus:outline-none"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-md z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 p-6 flex flex-col gap-6 shadow-xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <img src={logo} alt="Logo" className="h-8 object-contain" />
                <button
                  className="text-2xl text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Mobile Links */}
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-lg font-semibold text-gray-800 hover:text-black transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}

              <hr />

              {/* Buttons */}
              <button className="w-full px-5 py-3 border border-black text-sm rounded-full font-semibold hover:bg-black hover:text-white transition">
                Get Started
              </button>
              <button className="w-full mt-2 text-sm font-medium text-gray-800 hover:text-black transition">
                Sign In
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
