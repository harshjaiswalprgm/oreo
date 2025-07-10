import "./EventHub.css";
import { motion } from "framer-motion";

const languageIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
];

const EventHub = () => {
  return (
    <section className="eventhub-container">
      {/* LEFT SECTION */}
      <div className="eventhub-left">
      <motion.h1
        initial={{ opacity: 10, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-extrabold text-gray-100 leading-snug md:leading-tight"
      >
        Join our upcoming <br />
        <strong className="text-blue-800">Hackathons & Workshops</strong> <br />
        to learn, build, compete, and <br />
        <strong className="text-blue-800">grow together.</strong>
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="eventhub-btn mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
      >
        Start Learning
      </motion.button>
    </div>

      {/* RIGHT SECTION */}
      <div className="eventhub-right">
        <div className="orbit-wrapper">
          <div className="central-text">
            <h2>20k+</h2>
            <p>Developers</p>
          </div>

          {/* Small Orbit */}
          <div className="orbit orbit-sm">
            <img src={languageIcons[0]} alt="icon" />
            <img src={languageIcons[1]} alt="icon" />
          </div>

          {/* Medium Orbit */}
          <div className="orbit orbit-md">
            <img src={languageIcons[2]} alt="icon" />
            <img src={languageIcons[3]} alt="icon" />
            <img src={languageIcons[4]} alt="icon" />
          </div>

          {/* Large Orbit */}
          <div className="orbit orbit-lg">
            <img src={languageIcons[5]} alt="icon" />
            <img src={languageIcons[6]} alt="icon" />
            <img src={languageIcons[7]} alt="icon" />
            <img src={languageIcons[8]} alt="icon" />
            <img src={languageIcons[9]} alt="icon" />
          </div>

          {/* Extra-Large Orbit */}
          <div className="orbit orbit-xl">
            <img src={languageIcons[10]} alt="icon" />
            <img src={languageIcons[11]} alt="icon" />
            <img src={languageIcons[12]} alt="icon" />
            <img src={languageIcons[13]} alt="icon" />
          </div>
        </div>
      </div>

     <div className="org-fullwidth-cards">

  <div className="org-card textured red relative">
    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
      Upcoming
    </span>
    <h4>Hackathon</h4>
    <h2>AI Innovation Sprint</h2>
    <p>
      Join our upcoming 48-hour AI Hackathon to build real-world solutions with machine learning and LLMs.
    </p>
    <div className="org-footer">
      <span>⭐ 4.9</span>
      <span>July 25–27</span>
    </div>
  </div>

  <div className="org-card textured green relative">
    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
      Upcoming
    </span>
    <h4>Workshop</h4>
    <h2>Cloud & DevOps Bootcamp</h2>
    <p>
      Hands-on workshop on deploying scalable apps using AWS, Docker, Jenkins & CI/CD.
    </p>
    <div className="org-footer">
      <span>⭐ 4.8</span>
      <span>Aug 10</span>
    </div>
  </div>

  <div className="org-card textured orange relative">
    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
      Upcoming
    </span>
    <h4>Hackathon</h4>
    <h2>Cyber Security Challenge</h2>
    <p>
      Compete in live ethical hacking rounds and solve security vulnerabilities in real-time.
    </p>
    <div className="org-footer">
      <span>⭐ 5.0</span>
      <span>Open for Registration</span>
    </div>
  </div>

  <div className="org-card textured pink relative">
    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
      Upcoming
    </span>
    <h4>Workshop</h4>
    <h2>UI/UX Design Lab</h2>
    <p>
      Explore Figma, wireframes & design systems through hands-on prototyping challenges.
    </p>
    <div className="org-footer">
      <span>⭐ 4.6</span>
      <span>Limited Seats</span>
    </div>
  </div>

  <div className="org-card textured blue relative">
    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
      Upcoming
    </span>
    <h4>Hackathon</h4>
    <h2>Data Science Sprint</h2>
    <p>
      Solve real industry case studies using Python, Pandas, and machine learning models.
    </p>
    <div className="org-footer">
      <span>⭐ 4.7</span>
      <span>Upcoming in August</span>
    </div>
  </div>

  <div className="org-card textured bg-orange-400">
    <h4>Workshop</h4>
    <h2>Git & GitHub Mastery</h2>
    <p>
      Learn version control, branching, and contributing to open-source like a pro.
    </p>
    <div className="org-footer">
      <span>⭐ 4.5</span>
      <span>July 18</span>
    </div>
  </div>

  <div className="org-card textured bg-red-600 relative">
    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full shadow">
      Upcoming
    </span>
    <h4>Hackathon</h4>
    <h2>Startup Builder Hack</h2>
    <p>
      Turn your ideas into MVPs and pitch to a panel of mentors & investors.
    </p>
    <div className="org-footer">
      <span>⭐ 4.8</span>
      <span>Registrations Close July 20</span>
    </div>
  </div>

  <div className="org-card textured bg-pink-950">
    <h4>Workshop</h4>
    <h2>AI Prompt Engineering</h2>
    <p>
      Master the art of crafting effective prompts for ChatGPT, Claude, and LLM tools.
    </p>
    <div className="org-footer">
      <span>⭐ 4.9</span>
      <span>Free - Aug 3</span>
    </div>
  </div>

  <div className="org-card textured bg-purple-600">
    <h4>Workshop</h4>
    <h2>Resume & Portfolio Builder</h2>
    <p>
      Optimize your resume, GitHub, LinkedIn, and get ready for hiring season.
    </p>
    <div className="org-footer">
      <span>⭐ 4.6</span>
      <span>Placement Focused</span>
    </div>
  </div>

</div>

      <div className="w-full flex justify-center">
  <div className="w-full max-w-6xl p-4 border border-gray-300 rounded-xl bg-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-center gap-6">

    {/* Card 1 */}
    <a
      href="https://forms.gle/your-form-link-1"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[90%] md:w-[650px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 border border-gray-200"
    >
      <img
        src="https://media.istockphoto.com/id/1189767041/vector/hackathon-signs-round-design-template-thin-line-icon-concept-vector.jpg?s=612x612&w=0&k=20&c=DW-btIjpNjItFfk35N4KvrMkoGoqd1rEPwb_uV9IZEU="
        alt="Hackathon 1"
        className="w-full h-auto object-cover"
      />
    </a>

    {/* Card 2 */}
    <a
      href="https://forms.gle/your-form-link-2"
      target="_blank"
      rel="noopener noreferrer"
      className="w-[90%] md:w-[650px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 border border-gray-200"
    >
      <img
        src="data:image/png;base64,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"
        alt="Hackathon 2"
        className="w-full h-auto object-cover"
      />
    </a>

  </div>
</div>

      <div className="w-full h-screen overflow-hidden rounded-[40px] shadow-2xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/images/HackathonVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" py-12 overflow-hidden">
  <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
    Admiration expressed by others regarding our presence.
  </h2>

  <div className="relative w-full space-y-8 overflow-x-hidden">
    <div className="flex w-max animate-marquee space-x-6 px-6 items-start">
      {[...Array(2)].flatMap(() =>
        [
          {
            name: "Vrinda K",
            title: "Dayalbagh Educational Institute",
            text: "I had a great learning experience with Glow Logics while pursuing their cloud computing course. The curriculum was hands-on and project-focused, which helped me apply theoretical concepts to real-world scenarios. The projects I worked on not only deepened my understanding but also significantly strengthened my resume. I’m truly grateful for the practical exposure and support provided throughout the course.",
            img: "/vrindaK.png",
          },
          {
            name: "Smriti Mathuriya",
            title: "Dayalbagh Educational Institute",
            text: "Hello! My name is Smriti Mathuriya. I’m pursuing a B.Sc. from Dayalbagh Educational Institute and recently completed my internship at Glowlogics in the Data Science domain.",
            img: "/Smrithi.png",
          },
          {
            name: "Aan Narai",
            title: "Alliance University",
            text: "I'm Aan Narai, a third-year B.Tech student at Alliance University. I recently completed my UI/UX course from Glowlogics Solutions and received my certification. The training quality was excellent, the instructors were very helpful, and the learning environment was extremely user-friendly. Any issues I faced were resolved immediately. Thank you, Glowlogics!",
            img: "/Aan.png",
          },
          {
            name: "Kavya R",
            title: "Bachelor's in Engineering",
            text: "Hello everyone, I'm Kavya, currently pursuing my Bachelor's in Engineering with a focus on Computer Technology. I'm currently enrolled in the internship program at Glowlogics. My experience so far has been great—the projects are well-structured and easy to understand. Submitting projects and receiving certificates is seamless. Many students are also securing internships and getting placed in reputed companies through this program.",
            img: "/Kavya.png",
          },
          {
            name: "Kulsum Bano",
            title: "MMICT&MB, 2nd Year",
            text: "My name is Kulsum Bano, and I recently completed my UI/UX Training and Internship Program with Glowlogics. The sessions were highly interactive, engaging, relevant, and beginner-friendly. The mentors were very supportive, and I would definitely recommend this program to anyone looking to start their tech journey. Thank you, Glowlogics!",
            img: "/Kulsum.png",
          },
          {
            name: "Bollepally Jashwanth Varma",
            title: "Sai Spurthi Institute of Technology, 3rd Year",
            text: "I recently completed the Cybersecurity Ethical Hacking Internship at GlowLogics Solution and had an excellent experience. The course was well-structured, covering essential topics like penetration testing and vulnerability assessment. The instructors were knowledgeable and supportive. The practical projects gave me real-world exposure. I highly recommend it to aspiring ethical hackers!",
            img: "/CyberUnknown.png",
          },
          {
            name: "Tejaswini.K",
            title: "Jayaraj Annapackiam College",
            text: "Hello everyone, I am Tejaswini K. I study Computer Science at Jayaraj Annapackiam College. I recently completed the Artificial Intelligence course from Glowlogics. The course was well-organized and beginner-friendly. The instructors explained everything in a clear manner. I now feel confident working on AI projects, especially using Python. Thank you, Glowlogics!",
            img: "/TejasvaniK.png",
          },
          {
            name: "Thotakura Puneeth Sai",
            title: "Anantha Lakshmi Institute of Technology, 3rd Year",
            text: "Hi, I'm Thotakura Puneeth Sai, a 3rd-year B.Tech student at Anantha Lakshmi Institute of Technology and Sciences. I completed the Cybersecurity & Ethical Hacking course at Glowlogics, and it was an amazing experience. The instructors were supportive, and the hands-on classes were top-notch. I gained real-world skills essential in cybersecurity. Thank you, Glowlogics!",
            img: "/Thotakura Puneeth Sai.png",
          },
          {
            name: "Preetham",
            title: "Navkis College of Engineering",
            text: "Hello, I’m Preetham. I recently completed my Bachelor's in Engineering. In my final semester, I enrolled in a specialized VLSI course at Glowlogics. The course covered Verilog, FPGA, ASIC flow, and low-power techniques. I also did a Verilog design project that strengthened my hardware skills. This training has prepared me well for the semiconductor field.",
            img: "/pritam.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow p-6 w-[320px] flex-shrink-0 flex flex-col"
          >
            <svg
              className="text-blue-500 text-xl mb-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M464 32H320c-26.5 0-48 21.5-48 48v144c0 26.5 21.5 48 48 48h24v32c0 44.2-35.8 80-80 80-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16 88.4 0 160-71.6 160-160v-64c0-26.5-21.5-48-48-48H336V80h128v352h48V80c0-26.5-21.5-48-48-48z" />
            </svg>
            <p className="text-gray-700 text-sm mb-4">{item.text}</p>
            <div className="flex items-center space-x-3 mt-auto">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.title}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

    </section>
  );
};

export default EventHub;
