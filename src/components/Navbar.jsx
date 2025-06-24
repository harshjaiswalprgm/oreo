import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";

const navLinks = ["Home", "Services", "Programs", "Pricing", "About"];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }} // Fade + Slide from top
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 bg-gray-100 shadow-sm transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Left - Logo and Language */}
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl font-bold"
          >
            <span className="text-black">Glowlogics</span>
          </motion.div>
          <div className="text-sm font-medium text-gray-700 flex items-center gap-1 cursor-pointer hover:text-black transition">
            EN <FaChevronDown size={12} />
          </div>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href="#"
              className="group relative font-semibold uppercase text-sm text-gray-700 transition duration-300"
            >
              <span className="block transition-transform duration-500 group-hover:rotate-x-180 origin-center">
                {link}
              </span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 border border-black text-sm rounded-full font-semibold hover:bg-black hover:text-white transition"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-sm font-medium text-gray-700 hover:text-black transition"
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
