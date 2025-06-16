import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    company: "Karman Ventures",
    name: "William Barnes",
    services: ["INVESTOR DECK", "SALES DECK"],
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "They were transparent about the time and They were transparent about the time and the stages of the project. The end product is high quality.the stages of the project. The end product is high quality...",
  },
  {
    company: "Planety",
    name: "Nina Walloch",
    services: ["BRANDING", "PITCH DECK"],
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Excellent communication and delivery. The design felt fresh and right on brand...",
  },
  {
    company: "Workiz Easy",
    name: "Tomer Levy",
    services: ["MARKETING DECK"],
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "Smooth experience working with the team. They understood the business and gave us a modern deck...",
  },
  {
    company: "Karman Ventures",
    name: "William Barnes",
    services: ["INVESTOR DECK", "SALES DECK"],
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "They were transparent about the time and the stages of the project. The end product is high quality...",
  },
  {
    company: "Planety",
    name: "Nina Walloch",
    services: ["BRANDING", "PITCH DECK"],
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Excellent communication and delivery. The design felt fresh and right on brand...",
  },
  {
    company: "Workiz Easy",
    name: "Tomer Levy",
    services: ["MARKETING DECK"],
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "Smooth experience working with the team. They understood the business and gave us a modern deck...",
  },
  {
    company: "Karman Ventures",
    name: "William Barnes",
    services: ["INVESTOR DECK", "SALES DECK"],
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "They were transparent about the time and the stages of the project. The end product is high quality...",
  },
  {
    company: "Planety",
    name: "Nina Walloch",
    services: ["BRANDING", "PITCH DECK"],
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Excellent communication and delivery. The design felt fresh and right on brand...",
  },
  {
    company: "Workiz Easy",
    name: "Tomer Levy",
    services: ["MARKETING DECK"],
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "Smooth experience working with the team. They understood the business and gave us a modern deck...",
  },
  {
    company: "Karman Ventures",
    name: "William Barnes",
    services: ["INVESTOR DECK", "SALES DECK"],
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "They were transparent about the They were transparent about the time and the stages of the project. The end product is high quality.They were transparent about the time and the stages of the project. The end product is high quality.They were transparent about the time and the stages of the project. The end product is high quality.time and the stages of the project. The end product is high quality...",
  },
  {
    company: "Planety",
    name: "Nina Walloch",
    services: ["BRANDING", "PITCH DECK"],
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Excellent communication and delivery. TThey were transparent about the time and the stages of the project. The end product is high quality.They were transparent about the time and the stages of the project. The end product is high quality.he design felt fresh and right on brand...",
  },
  {
    company: "Workiz Easy",
    name: "Tomer Levy",
    services: ["MARKETING DECK"],
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "Smooth experience working with the team. They understood the business and gave us a modern deck...",
  },
  {
    company: "Karman Ventures",
    name: "William Barnes",
    services: ["INVESTOR DECK", "SALES DECK"],
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "They were transparent about the time and the stages of the project. The end product is high quality...",
  },
  {
    company: "Planety",
    name: "Nina Walloch",
    services: ["BRANDING", "PITCH DECK"],
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Excellent communication and delivery. The design felt fresh and right on brand...",
  },
  {
    company: "Workiz Easy",
    name: "Tomer Levy",
    services: ["MARKETING DECK"],
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "Smooth experience working with the team. They understood the business and gave us a modern deck...",
  },
  // Add more reviews as needed...

];

export default function ClientReviews() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="relative bg-white min-h-screen p-6 md:p-12 overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-left text-gray-900">
        Clients’ Reviews
      </h1>

      <div className="relative">
        <table className="w-full table-auto text-left border-t border-gray-200">
          <thead className="sr-only">
            <tr>
              <th>Company</th>
              <th>Reviewer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 cursor-pointer transition-all"
                onClick={() => setActiveIndex(i)}
              >
                <td className="py-4 underline text-blue-700">{review.company}</td>
                <td>{review.name}</td>
                <td>
                  <button className="text-blue-600 underline hover:text-blue-800 transition">
                    READ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              key="slider"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-full md:w-3/5 h-full bg-white z-50 shadow-2xl p-6 md:p-10 overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6 gap-4 flex-wrap">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {reviews[activeIndex].company}
                  </h2>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {reviews[activeIndex].services.map((s, i) => (
                      <span
                        key={i}
                        className="border px-3 py-1 rounded-full text-sm bg-gray-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <h3 className="text-md font-medium text-gray-700">
                    {reviews[activeIndex].name}
                  </h3>
                  <img
                    src={reviews[activeIndex].photo}
                    alt="reviewer"
                    className="w-16 h-16 rounded-md mt-2 border"
                  />
                </div>
              </div>

              <p className="text-gray-800 text-base leading-relaxed">
                {reviews[activeIndex].content}
              </p>

              <button
                onClick={() => setActiveIndex(null)}
                className="mt-6 text-blue-600 underline hover:text-blue-800 text-sm"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>


  );
}
