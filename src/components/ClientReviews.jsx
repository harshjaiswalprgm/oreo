import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const reviews = [
  {
    company: 'Karman Ventures',
    name: 'William Barnes',
    services: ['INVESTOR DECK', 'SALES DECK'],
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    review:
      'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
  },
  {
    company: 'Premium Blend',
    name: 'Ellen Kim',
  },
  {
    company: 'Orderlion',
    name: 'Stefan Strohmer',
  },
  {
    company: 'Medallia',
    name: 'Becky Chastain',
  },
];

export default function ClientReviews() {
  const [selected, setSelected] = useState(0);
  const detailRef = useRef(null);

  useEffect(() => {
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selected]);

  return (
    <div className="w-full bg-white text-gray-900 px-6 md:px-16 py-20 font-sans">
      <motion.h2
        className="text-5xl font-extrabold tracking-tight mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Clients’ reviews
      </motion.h2>

      <div className="border-t border-gray-200 text-sm w-full">
        {reviews.map((item, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelected(idx)}
            className={`grid grid-cols-12 items-start py-6 px-2 md:px-4 border-b border-gray-100 cursor-pointer transition-all duration-300 ${
              selected === idx ? 'bg-gray-100 shadow-sm rounded-lg' : 'hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.01 }}
          >
            <div className="col-span-12 md:col-span-3 font-medium text-blue-600 underline">{item.company}</div>
            <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
              <p className="text-gray-600 mb-2">Services:</p>
              <div className="flex flex-wrap gap-2">
                {item.services?.map((srv, i) => (
                  <span
                    key={i}
                    className="border px-3 py-1 rounded-full border-gray-400 text-xs font-semibold text-gray-800 bg-white hover:bg-gray-100 transition"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 font-semibold text-gray-800 mt-2 md:mt-0">{item.name}</div>
            <div className="col-span-12 md:col-span-2 text-right text-gray-400 uppercase tracking-wider text-sm font-semibold mt-2 md:mt-0">
              Read
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Section */}
      <motion.div
        className="mt-16 w-full max-w-5xl"
        ref={detailRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-6 mb-6">
          <img
            src={reviews[selected].image}
            alt={reviews[selected].name}
            className="w-16 h-16 object-cover rounded-full border-2 border-gray-300 shadow"
          />
          <div>
            <h4 className="font-semibold text-xl">{reviews[selected].name}</h4>
            <p className="text-sm text-gray-500">{reviews[selected].company}</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed text-gray-700">
          {reviews[selected].review}
        </p>
      </motion.div>
    </div>
  );
}
