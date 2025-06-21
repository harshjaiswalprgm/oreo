import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import colabImage from "../assets/images/Colab.png";

/* ─────────────────────────────────────
   1. Animation variants (re‑usable)
   ───────────────────────────────────── */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ─────────────────────────────────────
   2. Component
   ───────────────────────────────────── */
const HeroSection = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* Dummy data (kept from your original file) */
  const tutors = [
    {
      name: "Juan Miller",
      role: "Chemistry Teacher",
      university: "University of Oxford, UK",
      img: "https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg",
      rating: "★★★★★",
    },
    {
      name: "Tutor A",
      img: "https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg",
    },
    {
      name: "Tutor B",
      img: "https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg",
    },
    {
      name: "Tutor C",
      img: "https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg",
    },
  ];

  const technicalCourses = [
    "Artificial Intelligence",
    "Data Science with MI",
    "Cyber Security & Ethical Hacking",
    "Web Development full Stack",
    "Full Stack JAVA",
    "Cloud Computing",
    "App Development",
    "UI/UX",
    "VLSI",
    "IOT",
    "AutoCAD with Self‑paced MATLAB",
  ];
  const nonTechnicalCourses = [
    "Digital Marketing",
    "HRM and Finance",
    "Leadership and Management",
    "Advanced Excel with Power BI",
    "Accounting",
  ];
  const otherCourses = ["Placement Training with Certificate"];
  const allCourses = [...technicalCourses, ...nonTechnicalCourses, ...otherCourses];

  /* ───────────────────────── */
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="show"
      className="w-full min-h-screen bg-white px-6 md:px-20 pt-[160px] lg:pt-[200px] pb-20 flex flex-col-reverse lg:flex-row items-start justify-between gap-12 relative overflow-hidden"
    >
      {/* RIGHT  */}
      <motion.div
        variants={childVariants}
        className="relative w-full lg:w-1/2 flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          {/* Tutor Grid */}
          <div className="relative grid grid-cols-2 gap-6 items-center">
            {/* MAIN TUTOR CARD */}
            <motion.div
              className="row-span-2 relative"
              variants={childVariants}
            >
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="rounded-[2rem] shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src={tutors[0].img}
                  className="w-80 h-[26rem] object-cover rounded-[2rem]"
                  alt={tutors[0].name}
                />
                <div className="p-6 text-center bg-white">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {tutors[0].name}
                  </h3>
                  <p className="text-gray-600 text-sm">{tutors[0].role}</p>
                  <p className="text-gray-500 text-sm">{tutors[0].university}</p>
                  <div className="mt-1 text-yellow-500 text-lg">
                    {tutors[0].rating}
                  </div>
                </div>
              </motion.div>

              {/* Floating Boxes */}
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="absolute top-6 -left-32 bg-white p-5 rounded-xl shadow-xl w-56"
              >
                <p className="font-semibold text-gray-800 text-base">
                  Academic Success
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Build a strong foundation.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.07 }}
                className="absolute bottom-6 -left-32 bg-white p-5 rounded-xl shadow-xl w-56"
              >
                <p className="font-semibold text-gray-800 text-base">
                  Career Guidance
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Mentorship for your goals.
                </p>
              </motion.div>
            </motion.div>

            {/* SMALL CARDS */}
            {[1, 2].map((i, ) => (
              <motion.div
                key={i}
                variants={childVariants}
                className="relative rounded-[2rem] overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <img
                  src={tutors[i].img}
                  alt={tutors[i].name}
                  className="w-60 h-48 object-cover rounded-[2rem]"
                />
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute left-[46%] top-[46%] -translate-x-1/2 -translate-y-1/2 bg-purple-500 px-6 py-2 rounded-full text-white font-bold shadow-md z-10">
              ◯◯◯◯
            </div>
            <div className="absolute -top-4 left-1/4 transform -translate-x-1/2 rotate-[175deg] z-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-purple-500"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-[12%] right-[15%] w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
          </div>

          {/* Credential Partner Logos */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-6"
          >
            <img
              src={colabImage}
              alt="Collaboration Logos"
              className="w-[70%] max-w-3xl h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* LEFT  */}
      <motion.div
        variants={childVariants}
        className="w-full lg:w-[45%] text-left space-y-6"
      >
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Find The{" "}
          <span className="text-[#8BCA1E] drop-shadow-sm">Best Tutors</span>{" "}
          <br />
          Around The Globe <br />
          For Your Career Success.
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-base sm:text-lg text-gray-500 max-w-md"
        >
          Learn from world‑class educators across Technical and Non‑Technical
          domains. Certification included.
        </motion.p>

        {/* Course Selector */}
        <motion.div
          variants={childVariants}
          className="bg-white border border-gray-200 text-black p-4 rounded-xl w-full max-w-md shadow-sm"
        >
          <p className="text-base font-semibold mb-2">
            Want to upskill myself on..
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            <select
              className="rounded-full px-4 py-2 text-sm text-black w-full outline-none border border-gray-300"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Select Courses</option>
              {allCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <button className="bg-yellow-400 text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition">
              Start Learning
            </button>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={childVariants}
          className="flex flex-wrap gap-4 items-center mt-6"
        >
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Join now
          </button>
          <button className="flex items-center text-black font-medium">
            <FaPlay className="text-orange-500 mr-2" /> Watch Demo
          </button>
        </motion.div>

        {/* Tutor Avatars */}
        <motion.div
          variants={childVariants}
          className="flex items-center gap-2 mt-6"
        >
          {tutors.slice(0, 4).map((t, index) => (
            <img
              key={index}
              src={t.img}
              className="w-9 h-9 rounded-full border-2 border-white -ml-2 first:ml-0"
              alt="tutor-avatar"
            />
          ))}
          <p className="text-sm text-gray-600 ml-2">More Than 2k+ Tutors</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
