import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="w-full bg-white"
    >
      {/* Wrapper for all content */}
      <div className="rounded-t-3xl overflow-hidden">
        {/* First Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="w-full p-10 md:p-20 bg-[#8BCA1E] text-black space-y-16"
        >
          <h1 className="font-['Neue_Montreal'] text-xl md:text-2xl leading-relaxed tracking-tight text-center max-w-6xl mx-auto">
            TheLearniverse is a dynamic e-learning hub designed for students and
            working professionals seeking practical skills and career growth. Dive
            into expert courses that help you grasp challenging concepts, boost
            your professional value, prepare for competitive roles, and
            continuously upskill for an evolving job market.
          </h1>

          <div className="flex flex-col md:flex-row gap-10 border-t-[1px] pt-10 border-[#a1b562]">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold">Our Approach:</h2>

              <p className="text-lg leading-relaxed max-w-xl">
                At TheLearniverse, our approach is simple: we empower your growth.
                We believe in making complex topics clear and practical, ensuring
                every course equips you with the skills you need to succeed in
                your studies and accelerate your career. But we don’t stop there —
                with real-world projects, personalized mentorship,
                industry-relevant curriculum, and a community of driven learners,
                we help you build confidence, stay ahead of trends, and transform
                your potential into tangible success. Whether you are starting
                fresh or leveling up, TheLearniverse is your partner in every step
                of your learning journey.
              </p>

              <button className="flex uppercase gap-4 items-center px-8 py-4 bg-zinc-900 rounded-full text-white shadow-lg hover:bg-[#6b9e17] transition-all duration-300 group">
                Read More
                <span className="w-2 h-2 bg-zinc-100 rounded-full group-hover:scale-125 transition-transform"></span>
              </button>
            </div>

            <div className="w-full md:w-1/2 h-[60vh] rounded-3xl overflow-hidden shadow-xl relative">
              <img
                src="https://template.canva.com/EAGPNjUdCvw/2/0/1600w-qZ5RRcAUMtE.jpg"
                alt="Approach"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-white text-black text-sm px-3 py-1 rounded-full shadow-md">
                Real-World Learning
              </div>
            </div>
          </div>
        </motion.section>

        {/* Second Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="bg-[#8BCA1E] text-black py-20"
        >
          <div className="border-t border-black mx-6 md:mx-20 mb-12"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_3fr_2fr] gap-16 px-6 md:px-12 text-base md:text-lg items-start">
            <div className="font-semibold text-xl md:text-2xl">
              What you can expect:
            </div>

            <div className="space-y-6 leading-relaxed text-justify">
              <p>
                At TheLearniverse, we collaborate with passionate learners, working
                professionals, and organizations determined to thrive in the evolving digital world. Our platform bridges the gap between theoretical knowledge and real-world application.
              </p>
              <p>
                Through curated expert-led courses, hands-on projects, career-focused mentorship, and industry-driven content, we ensure you do not just learn — you master the skills that drive results. Whether you are aiming to break into tech, upgrade your expertise, or future-proof your career, we’re here to guide you at every milestone.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col gap-4">
                <p className="text-xl font-semibold">Our Blogs:</p>
                <ul className="space-y-2 underline text-base md:text-lg text-zinc-800">
                  <li><a href="#" className="hover:text-zinc-950 transition-colors">Latest Trends</a></li>
                  <li><a href="#" className="hover:text-zinc-950 transition-colors">Career Tips</a></li>
                  <li><a href="#" className="hover:text-zinc-950 transition-colors">Industry Insights</a></li>
                  <li><a href="#" className="hover:text-zinc-950 transition-colors">Learning Resources</a></li>
                </ul>
              </div>

              <div className="w-full md:w-40 h-auto rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://media.istockphoto.com/id/1063652372/photo/education-concept.jpg?s=1024x1024&w=is&k=20&c=E-j5AoCgUQwBhusyKZhdY6TLeEyDoruzrMqq39o1YoE="
                  alt="Blog Preview"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}

export default About;
