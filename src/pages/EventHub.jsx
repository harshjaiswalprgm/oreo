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
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Unlock Top <br />
          <span>Tech Talent</span> <br />
          From the Best in Programming – <br />
          <strong>One Click Away!</strong>
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="eventhub-btn"
        >
          Start Project
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
        <div className="org-card textured red">
          <h4>Organizational</h4>
          <h2>Resilience</h2>
          <p>
            Learn how to tackle adversity, challenges and professional
            setbacks...
          </p>
          <div className="org-footer">
            <span>⭐ 4.1</span>
            <span>12%</span>
          </div>
        </div>

        <div className="org-card textured green">
          <h4>Organizational</h4>
          <h2>Growth</h2>
          <p>Create a development plan that fits your goals and purpose.</p>
          <div className="org-footer">
            <span>⭐ 4.5</span>
            <span>32%</span>
          </div>
        </div>

        <div className="org-card textured orange">
          <h4>Organizational</h4>
          <h2>Engagement</h2>
          <p>Build a sense of belonging and meaning in your work life.</p>
          <div className="org-footer">
            <span>⭐ 5</span>
            <span>80%</span>
          </div>
        </div>

        <div className="org-card textured pink">
          <h4>Organizational</h4>
          <h2>Visioning</h2>
          <p>Strategize and formulate your long-term professional goals.</p>
          <div className="org-footer">
            <span>⭐ 4.6</span>
            <span>100%</span>
          </div>
        </div>

        <div className="org-card textured blue">
          <h4>Organizational</h4>
          <h2>Goal Orientation</h2>
          <p>
            Maximize your personal and professional success through strategy.
          </p>
          <div className="org-footer">
            <span>⭐ 4.2</span>
            <span>46%</span>
          </div>
        </div>

        <div className="org-card textured bg-orange-400">
          <h4>Organizational</h4>
          <h2>Self-belief</h2>
          <p>Boost confidence and empower your mindset toward growth.</p>
          <div className="org-footer">
            <span>⭐ 3.9</span>
            <span>60%</span>
          </div>
        </div>
        <div className="org-card textured bg-red-600">
          <h4>Organizational</h4>
          <h2>Self-belief</h2>
          <p>Boost confidence and empower your mindset toward growth.</p>
          <div className="org-footer">
            <span>⭐ 3.9</span>
            <span>60%</span>
          </div>
        </div>
        <div className="org-card textured bg-pink-950">
          <h4>Organizational</h4>
          <h2>Self-belief</h2>
          <p>Boost confidence and empower your mindset toward growth.</p>
          <div className="org-footer">
            <span>⭐ 3.9</span>
            <span>60%</span>
          </div>
        </div>
        <div className="org-card texture bg-purple-600">
          <h4>Organizational</h4>
          <h2>Self-belief</h2>
          <p>Boost confidence and empower your mindset toward growth.</p>
          <div className="org-footer">
            <span>⭐ 3.9</span>
            <span>60%</span>
          </div>
        </div>
        <div className="org-card textured green">
          <h4>Organizational</h4>
          <h2>Self-belief</h2>
          <p>Boost confidence and empower your mindset toward growth.</p>
          <div className="org-footer">
            <span>⭐ 3.9</span>
            <span>60%</span>
          </div>
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
    </section>
  );
};

export default EventHub;
