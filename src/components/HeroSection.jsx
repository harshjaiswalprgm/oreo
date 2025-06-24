import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Digital Learning for Smart <br />
        Manufacturing <span className="text-[#FFA500]">and Innovation</span>
      </h1>

      {/* Subheading */}
      <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl mx-auto">
        Expert tech to elevate your manufacturing. Let’s take your business further.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
        <button className="bg-[#FFA500] text-black px-6 py-3 rounded-full hover:bg-[#FFA500] transition w-full sm:w-auto">
          Get Started
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition w-full sm:w-auto">
          Try Demo
        </button>
      </div>

      {/* Rating */}
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-6">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          5.0 from <span className="font-medium text-gray-800">80+ reviews</span>
        </p>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12 w-full max-w-6xl">
        {[
          {
            img: "https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJNH1q1N1NJ6IbQTvftt_k6W1ZKOSp10KCSNHnwiTRc=",
            size: "large",
            direction: "left",
          },
          { img: "https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJNH1q1N1NJ6IbQTvftt_k6W1ZKOSp10KCSNHnwiTRc=", size: "medium", direction: "left" },
          { img: "https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJNH1q1N1NJ6IbQTvftt_k6W1ZKOSp10KCSNHnwiTRc=", size: "small", direction: "center" },
          { img: "https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJNH1q1N1NJ6IbQTvftt_k6W1ZKOSp10KCSNHnwiTRc=", size: "medium", direction: "right" },
          { img: "https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJNH1q1N1NJ6IbQTvftt_k6W1ZKOSp10KCSNHnwiTRc=", size: "large", direction: "right" },
        ].map((card, index) => (
          <motion.div
            key={index}
            custom={card.direction}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className={`rounded-xl overflow-hidden shadow-lg mx-auto w-full ${
              card.size === "large"
                ? "max-w-[200px] h-[240px]"
                : card.size === "medium"
                ? "max-w-[160px] h-[200px]"
                : "max-w-[120px] h-[160px]"
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
    </motion.section>
  );
};

export default HeroSection;
