import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",

];

export default function About3DMarquee() {
  const [speed, setSpeed] = useState(35);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setSpeed(isMobile ? 50 : 35);
  }, []);

  return (
    <section className="bg-[#fff7f3] w-full py-24 px-4 text-center overflow-hidden relative">
      <div className="max-w-4xl mx-auto mb-14">
        <p className="text-sm text-orange-600 font-semibold uppercase tracking-widest mb-2">
          Join over 100,000 happy students
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Where Ambition <br /> Meets Opportunity
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
        Join thousands of learners transforming their careers with modern, industry-relevant education—accessible anytime, anywhere.
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        >
          {[...images, ...images].map((img, idx) => (
            <motion.div
              key={idx}
              className="w-[230px] h-[320px] rounded-2xl shadow-xl overflow-hidden bg-white"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={img}
                alt="card"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <button className="px-6 py-3 bg-red-400 text-white text-sm rounded-full shadow-lg hover:bg-red-500 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
