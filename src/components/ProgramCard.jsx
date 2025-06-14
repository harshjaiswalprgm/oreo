import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Design", "Tech", "Marketing", "Soft Skills"];

const programData = [
  {
    id: 1,
    title: "UI/UX Masterclass",
    category: "Design",
    author: "Harsh Jaiswal",
    date: "10 Jul 25",
    image: "https://img.freepik.com/premium-vector/modern-3d-illustration-landing-page-ui-design_145666-1960.jpg",
    desc: "Master product design, prototyping & user flows.",
    details: "Learn wireframing, design systems, UX research, usability testing and more to become a complete product designer.",
    popupTitle: "Become a Product Designer"
  },
  {
    id: 2,
    title: "Full-Stack Web Dev Bootcamp",
    category: "Tech",
    author: "Harsh Jaiswal",
    date: "01 Jun 25",
    image: "https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-854.jpg",
    desc: "Learn React, Node, APIs & deployment hands-on.",
    details: "Master full-stack development with React, Node.js, MongoDB, REST API, auth, deployment, projects, & more.",
    popupTitle: "Become a Full-Stack Developer"
  },
  {
    id: 3,
    title: "Digital Marketing Pro",
    category: "Marketing",
    author: "Harsh Jaiswal",
    date: "20 Aug 25",
    image: "https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg",
    desc: "Google Ads, SEO, branding—all in one course.",
    details: "Master Google Ads, SEO, social media marketing, analytics & email campaigns for high-converting funnels.",
    popupTitle: "Become a Digital Marketer"
  },
  {
    id: 4,
    title: "Public Speaking & Influence",
    category: "Soft Skills",
    author: "Harsh Jaiswal",
    date: "15 Jul 25",
    image: "https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg",
    desc: "Build confidence & speak like a pro on stage.",
    details: "Learn storytelling, persuasion, confidence building, stage fear removal & deliver powerful speeches.",
    popupTitle: "Master Public Speaking"
  },
  {
    id: 5,
    title: "Advanced Backend Systems",
    category: "Tech",
    author: "Harsh Jaiswal",
    date: "15 Sep 25",
    image: "https://cdn.pixabay.com/photo/2017/06/09/16/25/red-bull-2387317_1280.jpg",
    desc: "Scalable microservices & system design.",
    details: "Distributed systems, microservices architecture, caching, load balancing, database scaling, real-world case studies.",
    popupTitle: "Master System Design"
  },

];

export default function ProgramShowcase() {
  const [active, setActive] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const [popupDirection, setPopupDirection] = useState("right");
  const containerRef = useRef();

  const filtered = active === "All" ? programData : programData.filter((p) => p.category === active);

  const handleHover = (e, id) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const spaceRight = containerRect.right - cardRect.right;

    if (spaceRight < 320) {
      setPopupDirection("left");
    } else {
      setPopupDirection("right");
    }
    setHoveredId(id);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20 relative" ref={containerRef}>
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-black leading-snug">
          🚀 Transform Your Career with <span className="text-[#8BCA1E]">Top-Tier Programs</span>
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat ? "bg-[#8BCA1E] text-white shadow-md" : "bg-white text-black border border-black hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((prog, idx) => (
            <div
              key={prog.id}
              className="relative group"
              onMouseEnter={(e) => handleHover(e, prog.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 15px 35px rgba(0,0,0,0.2)" }}
                className="bg-white rounded-xl shadow-sm transition-transform duration-200 p-4 cursor-pointer block"
              >
                <img src={prog.image} alt={prog.title} className="rounded-lg mb-4 h-48 w-full object-cover" />
                <h3 className="text-lg font-semibold mb-1">{prog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{prog.desc}</p>
                <div className="text-sm text-gray-700 mt-auto">
                  <span className="font-medium">{prog.author}</span> • {prog.date}
                </div>
              </motion.div>

              <AnimatePresence>
                {hoveredId === prog.id && (
                  <motion.div
                    initial={{ opacity: 0, x: popupDirection === "left" ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: popupDirection === "left" ? -50 : 50 }}
                    className={`absolute top-0 w-72 bg-black shadow-xl rounded-lg p-5 z-50 ${
                      popupDirection === "left" ? "right-full mr-5" : "left-full ml-5"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{prog.popupTitle}</h3>
                    <p className="text-sm text-gray-600 mb-3">{prog.details}</p>
                    <ul className="text-sm text-gray-500 list-disc list-inside space-y-1">
                      <li>Lifetime Access</li>
                      <li>Certificate of Completion</li>
                      <li>Community Support</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
