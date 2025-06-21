// import { motion } from "framer-motion";

// // Logo Imports
// import logo1 from "../assets/logos/logo1.png";
// import logo2 from "../assets/logos/logo2.png";
// import logo3 from "../assets/logos/logo3.png";
// import logo4 from "../assets/logos/logo4.png";
// import logo5 from "../assets/logos/logo5.png";
// import logo6 from "../assets/logos/logo6.png";
// import logo7 from "../assets/logos/logo7.png";
// import logo8 from "../assets/logos/logo8.png";
// import logo9 from "../assets/logos/logo9.png";
// import logo10 from "../assets/logos/logo10.png";
// import logo11 from "../assets/logos/logo11.png";
// import logo12 from "../assets/logos/logo12.png";
// import logo13 from "../assets/logos/logo13.png";
// import logo14 from "../assets/logos/logo14.png";
// import logo15 from "../assets/logos/logo15.png";
// import logo16 from "../assets/logos/logo16.png";
// import logo17 from "../assets/logos/logo17.png";
// import logo18 from "../assets/logos/logo18.png";
// import logo19 from "../assets/logos/logo19.png";
// import logo20 from "../assets/logos/logo20.png";
// import logo21 from "../assets/logos/logo21.png";
// import logo22 from "../assets/logos/logo22.png";
// import logo23 from "../assets/logos/logo23.png";
// import logo24 from "../assets/logos/logo24.png";
// import logo25 from "../assets/logos/logo25.png";
// import logo26 from "../assets/logos/logo26.png";
// import logo27 from "../assets/logos/logo27.png";
// import logo28 from "../assets/logos/logo28.png";
// import logo29 from "../assets/logos/logo29.png";
// import logo30 from "../assets/logos/newlogo.svg";

// const logos = [
//   logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
//   logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
//   logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
// ];

// function Marquee() {
//   return (
//     <div className="w-full flex flex-col items-center justify-center py-16 bg-[#f7f7fb] text-center">
//       {/* Heading + Subheading */}
//       <div className="mb-10 px-4">
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
//           Top Companies Where Our Learners Currently Work
//         </h2>
//         <p className="text-sm md:text-base text-gray-600">
//           Making an impact in their fields, our learners work at top companies all around the world.
//         </p>
//       </div>

//       {/* Logo Marquee */}
//       <div className="w-full bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#e6e6e6] p-10 mx-4 overflow-hidden">
//         <motion.div
//           className="flex w-max"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{ ease: "linear", repeat: Infinity, duration: 60 }}
//         >
//           {[...logos, ...logos].map((logo, index) => (
//             <div key={index} className="flex items-center justify-center px-8">
//               <img
//                 src={logo}
//                 alt={`logo-${index}`}
//                 className="h-32 w-auto object-contain"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Marquee;


import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Logo Imports
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import logo12 from "../assets/logos/logo12.png";
import logo13 from "../assets/logos/logo13.png";
import logo14 from "../assets/logos/logo14.png";
import logo15 from "../assets/logos/logo15.png";
import logo16 from "../assets/logos/logo16.png";
import logo17 from "../assets/logos/logo17.png";
import logo18 from "../assets/logos/logo18.png";
import logo19 from "../assets/logos/logo19.png";
import logo20 from "../assets/logos/logo20.png";
import logo21 from "../assets/logos/logo21.png";
import logo22 from "../assets/logos/logo22.png";
import logo23 from "../assets/logos/logo23.png";
import logo24 from "../assets/logos/logo24.png";
import logo25 from "../assets/logos/logo25.png";
import logo26 from "../assets/logos/logo26.png";
import logo27 from "../assets/logos/logo27.png";
import logo28 from "../assets/logos/logo28.png";
import logo29 from "../assets/logos/logo29.png";
import logo30 from "../assets/logos/newlogo.svg";

// Array of logos (no names needed)
const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
];

const MarqueeSlider = () => {
  const [speed, setSpeed] = useState(60); // Default speed

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setSpeed(isMobile ? 90 : 60); // Slower speed on mobile
  }, []);

  return (
    <motion.section
      className="w-full bg-[#f5f5ff] py-16 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
        Top Companies Where Our Learners Currently Work
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-10">
        Making an impact in their fields, our learners work at top companies all around the world.
      </p>

      {/* Marquee Row 1 */}
      <div className="overflow-hidden mb-6">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center justify-center min-w-[100px] px-4"
            >
              <img
                src={logo}
                alt=""
                className="h-20 md:h-24 object-contain rounded-xl transition-transform duration-300 hover:scale-115"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="overflow-hidden">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center justify-center min-w-[100px] px-4"
            >
              <img
                src={logo}
                alt=""
                className="h-20 md:h-24 object-contain rounded-xl transition-transform duration-300 hover:scale-115"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarqueeSlider;
