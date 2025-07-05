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
    <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-start gap-12 p-10 bg-orange-100 overflow-hidden">
      {/* Subtle Glass Background Shadow */}
      <div className="absolute inset-0 bg-gradient-to-br"></div>

      {/* Heading Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:w-1/3 w-full z-10"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Why Choose <span className="text-[#ff6e0c]">Glowlogics</span>?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At Glowlogics, we’re more than just an edtech company — we’re your partner in growth. Whether you are a student, professional, or institution, our mission is to equip you with real-world skills through industry-relevant programs, expert mentorship, and cutting-edge learning experiences. With a focus on quality, flexibility, and outcomes, we help you unlock your potential and stay ahead in a competitive world.


        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative lg:w-2/3 backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="cursor-pointer group bg-white/30 backdrop-blur-lg rounded-2xl p-8 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex justify-center items-center mb-6">
              <div className={`text-5xl ${item.color} group-hover:drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] transition`}>
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2 text-gray-900">{item.title}</h3>
            <p className="text-gray-700 text-center text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Smooth Magnetic Cursor */}
      <div ref={cursorRef} className="fixed w-4 h-4 rounded-full bg-black opacity-80 pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

const data = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert-Led Courses",
    desc: "Learn directly from industry professionals with hands-on sessions.",
    color: "text-red-500"
  },
  {
    icon: <FaProjectDiagram />,
    title: "Real-World Projects",
    desc: "Build live projects that mirror actual industry challenges.",
    color: "text-yellow-500"
  },
  {
    icon: <FaBriefcase />,
    title: "Placement Assistance",
    desc: "Get career support, mock interviews & placement guidance.",
    color: "text-blue-500"
  },
  {
    icon: <FaBullseye />,
    title: "Goal Defines It All",
    desc: "We customize learning to your goals & deliver impactful results.",
    color: "text-green-500"
  },
  {
    icon: <FaUsers />,
    title: "Audience is the Hero",
    desc: "Tailored experiences by deeply understanding audience needs.",
    color: "text-purple-500"
  },
  {
    icon: <MdCalendarMonth />,
    title: "Context Matters",
    desc: "We structure learning for online, live or self-paced formats.",
    color: "text-pink-500"
  },
  {
    icon: <MdDateRange />,
    title: "Founded In 2021",
    desc: "Started with a vision to be the best and make the best.",
    color: "text-orange-500"
  },
  {
    icon: <MdPeopleAlt />,
    title: "30,000+ Students",
    desc: "Students learning & reaching where they want to go.",
    color: "text-indigo-500"
  }
];
