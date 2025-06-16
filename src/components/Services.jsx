import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaProjectDiagram, FaBriefcase, FaBullseye, FaUsers } from "react-icons/fa";
import { MdDateRange, MdPeopleAlt, MdCalendarMonth } from "react-icons/md";

export default function GlowlogicsUltimate() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      cursor.animate(
        {
          transform: `translate(${e.clientX}px, ${e.clientY}px)`
        },
        { duration: 300, fill: "forwards" }
      );
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative min-h-screen flex justify-center items-center p-10 bg-black overflow-hidden">

      {/* Optional floating blurred elements for premium touch */}
      <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl opacity-10 top-[-10%] left-[10%] animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl opacity-10 bottom-[-15%] right-[5%] animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        className="relative backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer group bg-white/20 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-lg transition-all duration-500"
          >
            <div className="flex justify-center items-center mb-6">
              <div className={`text-6xl ${item.color} group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition`}>
                {item.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-white">{item.title}</h3>
            <p className="text-gray-200 text-center">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Smooth Magnetic Cursor */}
      <div ref={cursorRef} className="fixed w-5 h-5 rounded-full bg-white opacity-90 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

const data = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert-Led Courses",
    desc: "Learn directly from industry professionals with hands-on sessions.",
    color: "text-green-300"
  },
  {
    icon: <FaProjectDiagram />,
    title: "Real-World Projects",
    desc: "Build live projects that mirror actual industry challenges.",
    color: "text-green-300"
  },
  {
    icon: <FaBriefcase />,
    title: "Placement Assistance",
    desc: "Get career support, mock interviews & placement guidance.",
    color: "text-green-300"
  },
  {
    icon: <FaBullseye />,
    title: "Goal Defines It All",
    desc: "We customize learning to your goals & deliver impactful results.",
    color: "text-pink-300"
  },
  {
    icon: <FaUsers />,
    title: "Audience is the Hero",
    desc: "Tailored experiences by deeply understanding audience needs.",
    color: "text-pink-300"
  },
  {
    icon: <MdCalendarMonth />,
    title: "Context Matters",
    desc: "We structure learning for online, live or self-paced formats.",
    color: "text-pink-300"
  },
  {
    icon: <MdDateRange />,
    title: "Founded In 2021",
    desc: "Started with a vision to be the best and make the best.",
    color: "text-blue-300"
  },
  {
    icon: <MdPeopleAlt />,
    title: "30,000+ Students",
    desc: "Students learning & reaching where they want to go.",
    color: "text-green-300"
  }
];
