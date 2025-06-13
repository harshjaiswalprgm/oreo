import { motion } from 'framer-motion';

// Import all logos
import logo1 from '../assets/logos/newlogo.svg';
import logo2 from '../assets/logos/newlogo.svg';
import logo3 from '../assets/logos/newlogo.svg';
// Keep importing...
import logo30 from '../assets/logos/newlogo.svg';

// Array of logos
const logos = [logo1, logo2, logo3, /* keep adding */ logo30];

function Marquee() {
  return (
    <div className="w-full py-6 relative overflow-hidden">

      {/* Very subtle glass effect */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white"></div>

      {/* Marquee Content */}
      <div className="space-y-6 relative z-10">

        {/* First Row */}
        <motion.div
          className="flex gap-20 overflow-hidden whitespace-nowrap items-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-12 w-auto object-contain" // smaller height for cleaner look
            />
          ))}
        </motion.div>

        {/* Second Row (reverse direction) */}
        <motion.div
          className="flex gap-20 overflow-hidden whitespace-nowrap items-center"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-12 w-auto object-contain"
            />
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default Marquee;
