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
  // Add more unique images if you want
];

export default function About3DMarquee() {
  const [speed, setSpeed] = useState(35);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setSpeed(isMobile ? 50 : 35);
  }, []);

  return (
    <section className="bg-[#fff7f3] w-full text-black">
      {/* === Top Header Section === */}
      <div className="py-24 px-4 text-center overflow-hidden relative">
        <div className="max-w-4xl mx-auto mb-14">
          <p className="text-sm text-orange-600 font-semibold uppercase tracking-widest mb-2">
            Joined over 100,000 happy students
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Where Ambition Meets Opportunity
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
            Join thousands of learners transforming their careers with modern,
            industry-relevant education—accessible anytime, anywhere.
          </p>
        </div>

        {/* === Marquee Track === */}
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
                whileHover={{ scale: 0.95 }}
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
      </div>

      {/* === OUR STORY SECTION === */}
      <div className="bg-white-orange-100 px-4 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Headings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                Our mission is to empower talents to build innovative products
                that positively impact society
              </h2>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Our core strength</h4>
              <p className="text-gray-600">
                Lies in our expertise in identifying and selecting top talents.
              </p>
              <p className="text-gray-600">
                At our company, we possess extensive and varied expertise honed
                through our experience in discovering talents in specific
                niches.
              </p>
            </div>
          </div>

          {/* Video & Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
            <div className="space-y-4">
              <h5 className="font-semibold text-lg text-gray-800">
                Our story ↓
              </h5>
              <p className="text-gray-600">
                Glowlogics started five years ago with a small team of four
                people. Initially, we focused on Full-Stack JavaScript
                development and gradually expanded to full-cycle development
                with diverse expertise.
              </p>
              <button className="text-red-500 font-semibold mt-2 hover:underline">
                Read more →
              </button>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LlkcvvGbs9I?si=DWXLz_MPgRDaBx0P"
                title="Intro Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 py-8 px-4 rounded-xl shadow">
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p className="text-gray-600">Students already enrolled</p>
            </div>
            <div className="bg-gray-50 py-8 px-4 rounded-xl shadow">
              <h3 className="text-4xl font-bold mb-2">20000+</h3>
              <p className="text-gray-600">Delivered projects</p>
            </div>
            <div className="bg-gray-50 py-8 px-4 rounded-xl shadow">
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-600">Customer satisfaction</p>
            </div>
          </div>

          <div className="mt-20">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row items-center">
              {/* Text Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <div className="mb-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Noun_Project_logo.svg/512px-Noun_Project_logo.svg.png" // Replace with your logo if needed
                    alt="Glowlogics"
                    className="w-6 h-6 mb-2"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Want to shape the future of learning?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You’ll collaborate with a passionate, experienced, and
                    globally distributed team dedicated to building a
                    world-class, innovative platform.
                  </p>
                  <button className="px-6 py-3 bg-black text-white rounded-full shadow hover:bg-gray-900 transition">
                    Join us now!
                  </button>
                </div>
              </div>

              {/* Background Image */}
              <div className="w-full md:w-1/2 h-72 md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
