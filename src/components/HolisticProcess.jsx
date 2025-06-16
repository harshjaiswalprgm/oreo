import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HolisticProcess() {
  const processData = [
    {
      phase: '01. Phase',
      title: 'Discovery',
      description:
        'We define your goals, get to know your audience, and understand the context.',
      image: '/discovery.png',
    },
    {
      phase: '02. Phase',
      title: 'Storytelling',
      description:
        'We craft a compelling narrative to reflect your brand and connect emotionally.',
      image: '/storytelling.png',
    },
    {
      phase: '03. Phase',
      title: 'Design',
      description:
        'We create pixel-perfect, functional designs that embody your message.',
      image: '/design.png',
    },
    {
      phase: '04. Phase',
      title: 'Feedback',
      description:
        'We work with you to iterate and refine the product based on your feedback.',
      image: '/feedback.png',
    },
    {
      phase: '05. Phase',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '06. Phase',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '07. Phase',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '08. Phase',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '09. Phase',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '10. Phase',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '11. Phase',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '12. Phase',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="bg-gray-100 text-black px-6 md:px-16 py-16">
      <h2 className="text-4xl font-semibold mb-6">Client reveiws</h2>
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
              {activeIndex === index && (
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
