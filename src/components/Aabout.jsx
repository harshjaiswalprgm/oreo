import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="bg-white text-gray-900 px-6 md:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-6xl md:text-8xl font-extrabold leading-tight mb-10">
  <span className="block">WE ARE</span>
  <div className="flex items-center flex-wrap gap-4">
    <motion.img
      src="/logo.png"
      alt="Ochi Logo"
      className="w-24 md:w-28 h-auto object-contain"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    />
    <span className="text-black break-words">OCHI DESIGN</span>
  </div>
</div>

        <div className="flex flex-col md:flex-row justify-between items-start border-t pt-10 mt-10 gap-10">
          <p className="text-lg font-medium w-full md:w-1/3">About us:</p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-700 leading-relaxed w-full md:w-2/3 space-y-6"
          >
            <p>

              philosophy. Everything worth communicating is better shown than explained.
            </p>
            <p>
              A great presentation captures attention and drives better business outcomes than words alone.
              That’s why we founded Ochi — to help you turn ideas into visuals that influence and inspire.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-full border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold"
            >
              OUR WORKS <ArrowUpRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
