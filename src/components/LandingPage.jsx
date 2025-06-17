import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  const tutors = [
    {
      name: "Juan Miller",
      role: "Chemistry Teacher",
      university: "University of Oxford, UK",
      img: "https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg",
      bg: "bg-yellow-100",
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

  return (
    <section className="w-full min-h-screen bg-white px-6 md:px-16 lg:px-32 py-20 flex flex-col-reverse lg:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center lg:text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Find The <span className="text-[#8BCA1E]">Best Tutors</span> <br />
          Around The Globe <br />
          For Your Career Success.
        </h1>
        <p className="text-lg text-gray-500 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper
          nulla pellentesque di.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            Join now
          </button>
          <button className="flex items-center gap-2 text-black font-medium hover:underline">
            <FaPlay className="text-orange-500" /> Watch Demo
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
          <img
            src="https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg"
            className="w-8 h-8 rounded-full border"
          />
          <img
            src="https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg"
            className="w-8 h-8 rounded-full border -ml-3"
          />
          <img
            src="https://www.learning.com/wp-content/uploads/2021/02/Children-Learning-Online.jpg"
            className="w-8 h-8 rounded-full border -ml-3"
          />
          <p className="ml-2 text-sm text-gray-600 font-medium">
            More Than 2k+ Tutors
          </p>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mt-10 lg:mt-0 flex gap-6"
      >
        {/* Main Tutor Card */}
        <div className="bg-yellow-100 p-8 rounded-3xl shadow-xl w-[320px] sm:w-[360px] lg:w-[400px] text-center">
          <img
            src={tutors[0].img}
            className="w-28 h-28 rounded-full mx-auto object-cover"
            alt={tutors[0].name}
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            {tutors[0].name}
          </h3>
          <p className="text-gray-600 text-sm">{tutors[0].role}</p>
          <p className="text-gray-500 text-sm">{tutors[0].university}</p>
          <div className="mt-2 text-yellow-500 text-lg">{tutors[0].rating}</div>
        </div>

        {/* Small stacked cards */}
        <div className="hidden sm:flex flex-col gap-6">
          {tutors.slice(1).map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl overflow-hidden shadow-lg w-[180px] h-[130px] ${t.bg}`}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          ))}
        </div>

        {/* Floating Labels */}
        <div className="absolute -left-28 top-10 w-52 bg-white p-3 rounded-xl shadow-xl text-sm text-left">
          <p className="font-semibold text-gray-800">Academic Success</p>
          <p className="text-gray-500 text-xs mt-1">
            Lorem ipsum dolor sit amet...
          </p>
        </div>

        <div className="absolute -left-24 bottom-10 w-52 bg-white p-3 rounded-xl shadow-xl text-sm text-left">
          <p className="font-semibold text-gray-800">Career Guidance</p>
          <p className="text-gray-500 text-xs mt-1">
            Lorem ipsum dolor sit amet...
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
