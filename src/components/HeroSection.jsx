import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import colabImage from "../assets/images/Colab.png"; // Make sure it's transparent!

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageCards = [
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500",
    size: "large",
    direction: "left",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500",
    size: "medium",
    direction: "left",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500",
    size: "small",
    direction: "center",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500",
    size: "medium",
    direction: "right",
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500",
    size: "large",
    direction: "right",
  },
];

const tutorImages = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/48.jpg",
  "https://randomuser.me/api/portraits/men/49.jpg",
];

const HeroSection = () => {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4 pt-36 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Digital Learning for Smart <br />
          Manufacturing <span className="text-[#FFA500]">and Innovation</span>
        </h1>
      </motion.div>

      {/* Animated Subheading */}
      <motion.p
        className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Expert tech to elevate your manufacturing. Let’s take your business further.
      </motion.p>

      {/* Select Courses + CTA */}
      <motion.div
        className="mt-6 w-full max-w-md bg-white border border-gray-200 rounded-full flex items-center justify-between px-3 py-1 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <select className="bg-transparent text-sm text-gray-700 outline-none w-full h-8">
          <option>Select Courses</option>
          <option>AI in Manufacturing</option>
          <option>Smart Automation</option>
          <option>Industry 4.0</option>
        </select>
        <button className="bg-[#FFC107] text-black text-xs font-semibold px-4 py-1 rounded-full ml-2 hover:bg-[#e8b200] transition h-8">
          Start
        </button>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-900 transition">
          Join now
        </button>
        <button className="flex items-center gap-2 text-black hover:text-[#FFA500] font-medium transition text-sm">
          <FaPlay className="text-[#FFA500]" />
          Watch Demo
        </button>
      </motion.div>

      {/* Tutor Avatars */}
      <motion.div
        className="flex items-center gap-3 mt-6 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="flex -space-x-3">
          {tutorImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Tutor"
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <p className="text-sm text-gray-700 font-medium">More Than 2k+ Tutors</p>
      </motion.div>

      {/* Image Grid with Hover Effect */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12 w-full max-w-6xl px-4">
        {imageCards.map((card, index) => (
          <motion.div
            key={index}
            custom={card.direction}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={`rounded-xl overflow-hidden shadow-md mx-auto hover:scale-105 hover:shadow-xl transition-transform duration-300 ${
              card.size === "large"
                ? "w-[180px] h-[220px]"
                : card.size === "medium"
                ? "w-[150px] h-[190px]"
                : "w-[120px] h-[160px]"
            }`}
          >
            <img
              src={card.img}
              alt="Project visual"
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Centered Colab Image */}
      <motion.div
        className="w-full flex justify-center mt-12 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={colabImage}
          alt="Collaboration Logos"
          className="w-full max-w-4xl h-auto rounded-lg shadow-md"
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
