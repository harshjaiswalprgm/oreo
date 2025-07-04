import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center bg-orange-100" // Outer white background
    >
      {/* 🔶 Inner Glassy Orange Container */}
      <div className="rounded-3xl overflow-hidden m-4 md:m-10 bg-[#ff6e0c] backdrop-blur-md border border-white/30 shadow-xl max-w-[90rem] w-full">

        {/* First Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="w-full px-6 md:px-12 py-12 md:py-20 text-black space-y-16 rounded-t-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold border-t-[1px] pt-10 border-[#a1b562]">
            Learn from Experts at Top MNCs:
          </h2>

          {/* Approach, Vision, Mission Cards */}
          <div className="space-y-12">
            {[
              {
                title: "Our Approach",
                text:
                  "At TheLearniverse, our approach is simple: we empower your growth. We believe in making complex topics clear and practical, ensuring every course equips you with the skills you need to succeed. With real-world projects, personalized mentorship, and a driven community — you build confidence and transform your potential into success.",
                img: "https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.webp?a=1&b=1&s=612x612&w=0&k=20&c=fJNH1q1N1NJ6IbQTvftt_k6W1ZKOSp10KCSNHnwiTRc=",
              },
              {
                title: "Our Vision",
                text:
                  "To become the world’s most trusted learning ecosystem where individuals from all backgrounds can access quality, future-focused education and transform their potential into excellence.",
                img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eSUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
              },
              {
                title: "Our Mission",
                text:
                  "We aim to empower learners and professionals through affordable, innovative, and real-world aligned education experiences — helping them thrive in an ever-evolving global job market.",
                img: "https://images.unsplash.com/photo-1627556704243-5f0771d90783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNpdHklMjBzdHVkZW50fGVufDB8fDB8fHww",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Text Left */}
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-base leading-relaxed">{item.text}</p>
                </div>

                {/* Image Right */}
                <div className="md:w-1/2 h-48 md:h-56 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="flex uppercase gap-4 items-center px-8 py-4 bg-zinc-900 rounded-full text-white shadow-lg hover:bg-[#6b9e17] transition-all duration-300 group mt-10">
            Read More
            <span className="w-2 h-2 bg-orange-100 rounded-full group-hover:scale-125 transition-transform"></span>
          </button>
        </motion.section>

        {/* Second Section */}
        <motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1 }}
  className="bg-[#ff6e0c] text-black py-16 px-6 md:px-12 rounded-b-3xl"
>
  <div className="border-t border-black mb-12"></div>

  <div className="grid md:grid-cols-[1fr_3fr_2fr] gap-10 md:gap-16 text-base md:text-lg items-start">
    <div className="font-semibold text-xl md:text-2xl">
      What you can expect:
    </div>

    {/* POINTS AS BOLD LIST ITEMS */}
    <div className="space-y-6 text-justify">
      {[
        {
          heading: "🤝 Passionate Collaboration",
          desc:
            "We work with learners, professionals, and organizations determined to grow in a digital world.",
        },
        {
          heading: "🎯 Real-World Application",
          desc:
            "Our content bridges the gap between theory and hands-on skills you'll actually use.",
        },
        {
          heading: "📚 Expert-Led Learning",
          desc:
            "Courses are guided by industry leaders and seasoned mentors for top-tier quality.",
        },
        {
          heading: "💼 Career-Focused Growth",
          desc:
            "Every lesson, project, and experience is built to boost your employability and results.",
        },
      ].map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="space-y-1"
        >
          <p className="font-semibold">{point.heading}</p>
          <p className="leading-relaxed">{point.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* Blog List and Image */}
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
          src="https://images.unsplash.com/photo-1627556704243-5f0771d90783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNpdHklMjBzdHVkZW50fGVufDB8fDB8fHww"
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
