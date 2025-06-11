import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const processData = [
  {
    phase: '01. Phase',
    title: 'Discovery',
    description:
      'We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions.',
    image: '/discovery.png', // Put your image in public folder or use an online image
  },
  {
    phase: '02. Phase',
    title: 'Storytelling',
  },
  {
    phase: '03. Phase',
    title: 'Design',
  },
  {
    phase: '04. Phase',
    title: 'Feedback',
  },
  {
    phase: '05. Phase',
    title: 'Delivery',
  },
];

export default function HolisticProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="bg-gray-100 text-black px-6 md:px-16 py-16">
      <h2 className="text-4xl font-semibold mb-6">Holistic process</h2>
      <div className="divide-y divide-gray-300">
        {processData.map((step, index) => (
          <div key={index} className="py-4 cursor-pointer" onClick={() => toggle(index)}>
            <div className="flex justify-between items-center">
              <span className="text-md font-medium">{step.phase}</span>
              <span className="text-md font-medium">{step.title}</span>
              <span className="text-sm underline text-gray-400 hover:text-black transition">
                READ
              </span>
            </div>

            <AnimatePresence>
              {activeIndex === index && step.description && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 md:flex items-start gap-6"
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-24 h-24 object-contain mb-4 md:mb-0"
                  />
                  <p className="text-gray-700 max-w-2xl">{step.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
