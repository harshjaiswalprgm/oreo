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
        src="/src/assets/images/hackathon.jpg"
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
        src="/src/assets/images/workshop.png"
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
      <div className="bg-transparent py-16 overflow-hidden">
          <h2 className="text-4xl font-bold text-center mb-12 leading-snug">
            Admiration expressed by others regarding our presence.
          </h2>

          <div className="relative w-full space-y-10 overflow-x-hidden">
            <div className="flex w-max animate-marquee space-x-8 px-8 items-start">
              {[
                {
                  name: "Vrinda K",
                  title: "Dayalbagh Educational Institute",
                  text: "I had a great learning experience with Glow Logics while pursuing their cloud computing course...",
                  img: "/src/assets/images/vrindaK.png",
                },
                {
                  name: "Smriti Mathuriya",
                  title: "Dayalbagh Educational Institute",
                  text: "Hello! My name is Smriti Mathuriya. I’m pursuing a B.Sc. from Dayalbagh Educational Institute...",
                  img: "/src/assets/images/Smrithi.png",
                },
                {
                  name: "Aan Narai",
                  title: "Alliance University",
                  text: "I'm Aan Narai, a third-year B.Tech student at Alliance University. I recently completed my UI/UX course...",
                  img: "/src/assets/images/Aan.png",
                },
                {
                  name: "Kavya R",
                  title: "Bachelor's in Engineering",
                  text: "Hello everyone, I'm Kavya, currently pursuing my Bachelor's in Engineering with a focus on Computer Technology...",
                  img: "/src/assets/images/Kavya.png",
                },
                {
                  name: "Kulsum Bano",
                  title: "MMICT&MB, 2nd Year",
                  text: "My name is Kulsum Bano, and I recently completed my UI/UX Training and Internship Program...",
                  img: "/src/assets/images/Kulsum.png",
                },
                {
                  name: "Bollepally Jashwanth Varma",
                  title: "Sai Spurthi Institute of Technology, 3rd Year",
                  text: "I recently completed the Cybersecurity Ethical Hacking Internship at GlowLogics Solution...",
                  img: "/src/assets/images/CyberUnknown.png",
                },
                {
                  name: "Tejaswini.K",
                  title: "Jayaraj Annapackiam College",
                  text: "Hello everyone, I am Tejaswini K I study Computer Science at Jayaraj Annapackiam College...",
                  img: "/src/assets/images/TejasvaniK.png",
                },
                {
                  name: "Thotakura Puneeth Sai",
                  title: "Anantha Lakshmi Institute of Technology, 3rd Year",
                  text: "Hi, I'm Thotakura Puneeth Sai, and I’m currently in my 3rd year of B.Tech at Anantha Lakshmi Institute...",
                  img: "/src/assets/images/Thotakura Puneeth Sai .png",
                },
                {
                  name: "Preetham",
                  title: "Navkis College of Engnineering",
                  text: "Hello, I’m Preetham. I recently completed my Bachelor's in Engineering, focusing on practical skill development...",
                  img: "/src/assets/images/pritam.png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl shadow-lg p-8 w-[380px] flex-shrink-0 flex flex-col"
                >
                  <span className="text-blue-500 text-2xl mb-4">❝</span>
                  <p className="text-gray-800 text-base mb-6 leading-relaxed">
                    {item.text}
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default EventHub;
