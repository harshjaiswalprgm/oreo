import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "BTech", "Graduates", "Masters", "Crash Course"];

const programData = [
  // Design
  {
    id: 1,
    title: "UI/UX Masterclass",
    category: "Crash Course",
    author: "Harsh Jaiswal",
    date: "10 Jul 25",
    image: "https://img.freepik.com/premium-vector/modern-3d-illustration-landing-page-ui-design_145666-1960.jpg",
    desc: "Master product design, prototyping & user flows.",
    details: "Learn wireframing, design systems, UX research, usability testing and more to become a complete product designer.",
    popupTitle: "Become a Product Designer"
  },

   {
    id: 2,
    title: "Power BI",
    category: "Crash Course",
    author: "Kon hai",
    date: "10 Jul 25",
    image: "https://img.freepik.com/free-photo/busy-woman-working-night-front-computer-taking-notes-writing-notebook-annual-reports-checking-financial-project-focused-employee-using-technology-network-wireless-doing-overtime-job_482257-13382.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master product design, prototyping & user flows.",
    details: "Learn wireframing, design systems, UX research, usability testing and more to become a complete product designer.",
    popupTitle: "Become a Product Designer"
  },

     {
    id: 3,
    title: "Advance Excel",
    category: "Crash Course",
    author: "Kon hai",
    date: "10 Jul 25",
    image: "https://img.freepik.com/premium-photo/spreadsheet-document-information-financial-startup-concept-snugly_31965-600877.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master product design, prototyping & user flows.",
    details: "Learn wireframing, design systems, UX research, usability testing and more to become a complete product designer.",
    popupTitle: "Become a Product Designer"
  },

   {
    id: 4,
    title: "Digital Marketing",
    category: "Crash Course",
    author: "Kon hai",
    date: "10 Jul 25",
    image: "https://img.freepik.com/premium-photo/search-engine-marketing-composition-design_23-2150923510.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master product design, prototyping & user flows.",
    details: "Learn wireframing, design systems, UX research, usability testing and more to become a complete product designer.",
    popupTitle: "Become a Product Designer"
  },
   {
    id: 5,
    title: "Java Fullstack",
    category: "Crash Course",
    author: "Kon hai",
    date: "10 Jul 25",
    image: "https://img.freepik.com/premium-photo/writing-code-creating-website-dashboards-programming-help-technology-website-upkeep_27634-1240.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master product design, prototyping & user flows.",
    details: "Learn wireframing, design systems, UX research, usability testing and more to become a complete product designer.",
    popupTitle: "Become a Product Designer"
  },
   {
    id: 6,
    title: "Data Science",
    category: "Crash Course",
    author: "Kon hai",
    date: "10 Jul 25",
    image: "https://img.freepik.com/premium-photo/businessman-working-with-business-analytics-data-management-system-computer-online-document-management-metrics-connected-database-corporate-strategy-finance-operations-salesx9_661047-4235.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master product design, prototyping & user flows.",
    details: "Learn wireframing, design systems, UX research, usability testing and more to become a complete product designer.",
    popupTitle: "Become a Product Designer"
  },
   {
    id: 7,
    title: "App Development",
    category: "Crash Course",
    author: "Kon hai",
    date: "10 Jul 25",
    image: "https://img.freepik.com/free-photo/man-working-with-computer-side-view_23-2149930994.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Master product design, prototyping & user flows.",
    details: "Learn wireframing, design systems, UX research, usability testing and more to become a complete product designer.",
    popupTitle: "Become a Product Designer"
  },


  // Tech
  {
    id: 2,
    title: "Full-Stack Web Dev Bootcamp",
    category: "BTech",
    author: "Harsh Jaiswal",
    date: "01 Jun 25",
    image: "https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323528.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Learn React, Node, APIs & deployment hands-on.",
    details: "Master full-stack development with React, Node.js, MongoDB, REST API, auth, deployment, projects, & more.",
    popupTitle: "Become a Full-Stack Developer"
  },
  {
    id: 5,
    title: "Advanced Backend Systems",
    category: "BTech",
    author: "Harsh Jaiswal",
    date: "15 Sep 25",
    image: "https://img.freepik.com/free-vector/ai-futuristic-technology-background_53876-97391.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Scalable microservices & system design.",
    details: "Distributed systems, microservices architecture, caching, load balancing, database scaling, real-world case studies.",
    popupTitle: "Master System Design"
  },
  {
    id: 6,
    title: "DevOps Essentials",
    category: "BTech",
    author: "Harsh Jaiswal",
    date: "10 Oct 25",
    image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169861.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "CI/CD, Docker, Kubernetes & Cloud.",
    details: "Learn how to automate deployments, use Docker, Kubernetes, Jenkins & host scalable apps on cloud.",
    popupTitle: "Master DevOps"
  },
  {
    id: 7,
    title: "AI for Developers",
    category: "BTech",
    author: "Harsh Jaiswal",
    date: "05 Nov 25",
    image: "https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637765.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Integrate AI into your apps.",
    details: "Use AI APIs, GPT models, machine learning basics & add AI features to your web apps.",
    popupTitle: "Build AI-Powered Apps"
  },

{
  id: 12,
  title: "Frontend Engineering with React",
  category: "BTech",
  author: "Harsh Jaiswal",
  date: "01 Oct 25",
  image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
  desc: "Deep dive into React and frontend patterns.",
  details: "Learn React patterns, state management, routing, animations, testing, and performance optimization.",
  popupTitle: "Become a Frontend Engineer"
},
{
  id: 13,
  title: "Next.js Fullstack Bootcamp",
  category: "BTech",
  author: "Harsh Jaiswal",
  date: "08 Oct 25",
  image: "https://img.freepik.com/premium-photo/creative-square-circuit-button-hologram-with-cloud-icon-dark-wallpaper-technology-cloud-computing-concept-3d-rendering_670147-96675.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
  desc: "SSR, SSG, API Routes, Auth, and more.",
  details: "Master fullstack development with Next.js including routing, middleware, Prisma, and Vercel deployment.",
  popupTitle: "Master Next.js"
},
{
  id: 14,
  title: "Mobile App Dev with Flutter",
  category: "BTech",
  author: "Harsh Jaiswal",
  date: "12 Oct 25",
  image: "https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlbWljb25kdWN0b3J8ZW58MHx8MHx8fDA%3D",
  desc: "Cross-platform mobile development.",
  details: "Build Android & iOS apps using Flutter, Firebase, animations, REST APIs, and state management.",
  popupTitle: "Build Mobile Apps"
},
{
  id: 15,
  title: "Mastering TypeScript",
  category: "BTech",
  author: "Harsh Jaiswal",
  date: "15 Oct 25",
  image: "https://img.freepik.com/premium-vector/internet-things-iot_35632-74.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
  desc: "Strong typing for scalable apps.",
  details: "Learn interfaces, generics, utility types, declaration merging, and integration with React/Node.",
  popupTitle: "Write Safer Code"
},
{
  id: 16,
  title: "Python for Backend Devs",
  category: "BTech",
  author: "Harsh Jaiswal",
  date: "18 Oct 25",
  image: "https://img.freepik.com/free-photo/tired-woman-architect-working-modern-cad-program-overtime-sitting-desk-start-up-office-industrial-female-engineer-studying-prototype-idea-pc-showing-cad-software-device-display_482257-13399.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
  desc: "APIs, Django, Flask, and databases.",
  details: "Build RESTful APIs, authentication, ORM, SQL & PostgreSQL using Python, Flask, and Django.",
  popupTitle: "Python Backend Bootcamp"
},
{
  id: 17,
  title: "Data Structures & Algorithms",
  category: "BTech",
  author: "Harsh Jaiswal",
  date: "20 Oct 25",
  image: "https://img.freepik.com/premium-photo/business-man-pushing-touch-screen-interface-java-programming-concept-virtual-machine_1085052-2842.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
  desc: "Ace coding interviews.",
  details: "Master recursion, trees, graphs, sorting, dynamic programming with hands-on problems.",
  popupTitle: "Crack DSA Interviews"
},
{
  id: 18,
  title: "AWS Cloud Fundamentals",
  category: "BTech",
  author: "Harsh Jaiswal",
  date: "23 Oct 25",
  image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169839.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
  desc: "Launch apps on AWS.",
  details: "EC2, S3, Lambda, IAM, RDS, networking, security — everything to get started on AWS cloud.",
  popupTitle: "Launch with AWS"
},
// {
//   id: 19,
//   title: "Cybersecurity Essentials",
//   category: "BTech",
//   author: "Harsh Jaiswal",
//   date: "25 Oct 25",
//   image: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg",
//   desc: "Secure apps & networks.",
//   details: "Encryption, firewalls, OWASP, SQL injection, XSS, threat modeling & ethical hacking basics.",
//   popupTitle: "Defend the Web"
// },

  // Marketing
  {
    id: 3,
    title: "Digital Marketing Pro",
    category: "Graduates",
    author: "Harsh Jaiswal",
    date: "20 Aug 25",
    image: "https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg",
    desc: "Google Ads, SEO, branding—all in one course.",
    details: "Master Google Ads, SEO, social media marketing, analytics & email campaigns for high-converting funnels.",
    popupTitle: "Become a Digital Marketer"
  },
  {
    id: 8,
    title: "Content Strategy Lab",
    category: "Graduates",
    author: "Harsh Jaiswal",
    date: "05 Sep 25",
    image: "https://img.freepik.com/free-vector/content-marketing-article-blogging-webinar-seo_107791-2708.jpg",
    desc: "Plan, write & promote content.",
    details: "Master blog strategy, content calendars, SEO copywriting, and social media amplification.",
    popupTitle: "Grow With Content"
  },
  {
    id: 9,
    title: "Instagram Growth Hacks",
    category: "Graduates",
    author: "Harsh Jaiswal",
    date: "28 Aug 25",
    image: "https://img.freepik.com/free-vector/social-media-growth-concept_23-2148651954.jpg",
    desc: "Grow & monetize your IG brand.",
    details: "Learn IG algorithms, reels optimization, audience engagement, and monetization strategies.",
    popupTitle: "Hack Instagram Growth"
  },

  // Soft Skills now i converted to Masters okay
  {
    id: 4,
    title: "Digital Marketing",
    category: "Masters",
    author: "Harsh Jaiswal",
    date: "15 Jul 25",
    image: "https://img.freepik.com/premium-photo/search-engine-marketing-composition-design_23-2150923510.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740",
    desc: "Build confidence & speak like a pro on stage.",
    details: "Learn storytelling, persuasion, confidence building, stage fear removal & deliver powerful speeches.",
    popupTitle: "Master Public Speaking"
  },
  {
    id: 10,
    title: "Emotional Intelligence 101",
    category: "Masters",
    author: "Harsh Jaiswal",
    date: "30 Aug 25",
    image: "https://img.freepik.com/free-photo/emotional-intelligence-eq-concept_53876-120565.jpg",
    desc: "Improve empathy & leadership.",
    details: "Understand emotions, lead teams better, resolve conflicts, and boost workplace harmony.",
    popupTitle: "Boost EQ Skills"
  },
  {
    id: 11,
    title: "Time Management Mastery",
    category: "Masters",
    author: "Harsh Jaiswal",
    date: "20 Sep 25",
    image: "https://img.freepik.com/free-vector/time-management-concept_23-2148483330.jpg",
    desc: "Get more done, stress less.",
    details: "Learn prioritization, planning, Pomodoro, task batching & productivity routines.",
    popupTitle: "Master Time Management"
  },
];

export default function ProgramShowcase() {
  const [active, setActive] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const [popupDirection, setPopupDirection] = useState("right");
  const containerRef = useRef();

  const filtered = active === "All" ? programData : programData.filter((p) => p.category === active);

  const handleHover = (e, id) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const spaceRight = containerRect.right - cardRect.right;

    if (spaceRight < 320) {
      setPopupDirection("left");
    } else {
      setPopupDirection("right");
    }
    setHoveredId(id);
  };

  return (
    <div className="bg-orange-100 py-16 px-6 md:px-20 relative" ref={containerRef}>
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-black leading-snug">
          🚀 Transform Your Career with <span className="text-[#FFA500]">Top-Tier Programs</span>
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-[#FFA500] text-white shadow-md"
                  : "bg-white text-black border border-black hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((prog, idx) => (
            <div
              key={prog.id}
              className="relative group"
              onMouseEnter={(e) => handleHover(e, prog.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.35 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 15px 35px rgba(0,0,0,0.2)" }}
                className="bg-white rounded-xl shadow-sm transition-transform duration-200 p-4 cursor-pointer block"
              >
                <div className="relative mb-4 h-48 w-full">
  <img src={prog.image} alt={prog.title} className="rounded-lg h-full w-full object-cover" />
  {["BTech", "Masters", "Graduates"].includes(prog.category) && (
    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
      LIVE
    </span>
  )}
</div>
                <h3 className="text-lg font-semibold mb-1">{prog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{prog.desc}</p>
                <div className="text-sm text-gray-700 mt-auto">
                  <span className="font-medium">{prog.author}</span> • {prog.date}
                </div>
              </motion.div>

              <AnimatePresence>
                {hoveredId === prog.id && (
                  <motion.div
                    initial={{ opacity: 0, x: popupDirection === "left" ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: popupDirection === "left" ? -50 : 50 }}
                    className={`absolute top-0 w-72 bg-white text-black shadow-xl rounded-lg p-5 z-50 ${
                      popupDirection === "left" ? "right-full mr-5" : "left-full ml-5"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-black">{prog.popupTitle}</h3>
                    <p className="text-sm text-gray-700 mb-3">{prog.details}</p>
                    <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                      <li>Lifetime Access</li>
                      <li>Certificate of Completion</li>
                      <li>Community Support</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
