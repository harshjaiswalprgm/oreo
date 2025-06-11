import { motion } from 'framer-motion';

// Import all logos
import logo1 from '../assets/logos/logo1.png';
import logo2 from '../assets/logos/logo2.png';
import logo3 from '../assets/logos/logo3.png';
// keep importing up to 30+
import logo30 from '../assets/logos/logo30.png';

// Create an array of all logos for easy looping
const logos = [logo1, logo2, logo3, /* keep adding... */ logo30];

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">

      {/* Heading Section (Keep your existing framer motion if you want) */}
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[10vw] leading-none font-['Founders_Grotesk X-Condensed'] uppercase pt-5 mb-[6vw] font-semibold"
        >
          We are TheLearniverse
        </motion.h1>
      </div>

      {/* Logos Marquee */}
      <div className="mt-10 space-y-10">
        {/* First Row */}
        <motion.div
          className="flex gap-16 overflow-hidden whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
        >
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} className="h-20 w-auto object-contain" />
          ))}
        </motion.div>

        {/* Second Row (Reverse direction for cool effect) */}
        <motion.div
          className="flex gap-16 overflow-hidden whitespace-nowrap"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
        >
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} className="h-20 w-auto object-contain" />
          ))}
        </motion.div>
      </div>

    </div>
  );
}

export default Marquee;
