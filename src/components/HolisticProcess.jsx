import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HolisticProcess() {
  const processData = [
    {
      phase: '01. Aditi',
      title: 'Discovery',
      description:
        'We define your goals, get toprepare assets for launch, making sure everything is polishprepare assets for launch, making sure everything is polishprepare assets for launch, making sure everything is polish know your audience, and understand the context.',
      image: 'https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159',
    },
    {
      phase: '02. Harsh',
      title: 'Storytelling',
      description:
        'We craft a compelling narrative to reflect your brand and connect emotionally.',
      image: '/storytelling.png',
    },
    {
      phase: '03. Name',
      title: 'Design',
      description:
        'We create pixel-perfect, functional designs that embody your message.',
      image: '/design.png',
    },
    {
      phase: '04. Name',
      title: 'Feedback',
      description:
        'We work with you to iterate and refine the product based on your feedback.',
      image: '/feedback.png',
    },
    {
      phase: '05. Name',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '06. Name',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '07. Name',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '08. Name',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '09. Name',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '10. Name',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '11. Name',
      title: 'Delivery',
      description:
        'We prepare assets for launch, making sure everything is polished and ready.',
      image: '/delivery.png',
    },
     {
      phase: '12. Name',
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
      <h2 className="text-4xl font-semibold mb-6">Frequently Asked Questions</h2>
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
