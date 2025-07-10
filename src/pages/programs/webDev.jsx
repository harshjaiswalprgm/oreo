import { useState } from "react";
import { FaCheckCircle, FaStar, FaUserFriends } from "react-icons/fa";
// import { FaQuoteLeft } from "react-icons/fa";

const FullStackCourse = () => {
  const [openSection, setOpenSection] = useState(null);

  const roleLogos = {
    "Project Director": [
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    ],
    "Senior Project Manager": [
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Accenture.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Infosys_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Wipro_Logo_2020.svg",
    ],
    "Team Leads/Team Managers": [
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/TCS_New_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/96/HCL_Technologies_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/ZOHO_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Salesforce.com_logo.svg",
    ],
    "Project Management Officer (PMO)": [
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Deloitte.svg",
      "https://upload.wikimedia.org/wikipedia/commons/8/82/KPMG_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/EY_logo_2019.svg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/PwC_logo.svg",
    ],
  };

  const [activeRole, setActiveRole] = useState("Project Director");

  return (
    <>
      {/* Full-Stack Web Dev Section */}
      <div className="bg-white text-black px-6 pt-20 pb-0 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Full-Stack Web Development
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Become a job-ready full-stack developer | Master React, Node.js,
            MongoDB & APIs
          </p>

          {/* Benefits */}
          <ul className="space-y-3 text-gray-800 mb-6">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Build real-world projects from scratch
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Master Frontend, Backend, APIs, Deployment
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Career Mentorship + GitHub Portfolio
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Includes resume review, mock interviews, and LinkedIn guidance
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Guaranteed Live Cohorts in the Next 90 Days
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-4">
            <a href="https://rzp.io/rzp/GL6k" target="_blank" rel="noopener noreferrer">
  <button className="bg-[#ff6e0c] border-black text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
    Enroll now
  </button>
</a>
            <a
              href="/public/ProgramsPDF/WEB Syllubus-GLOWLOGICS .pdf"
              download
            >
              <button className="border border-black text-black px-6 py-2 rounded-lg hover:bg-white transition">
                Download brochure
              </button>
            </a>
          </div>

          {/* Rating & Learners */}
          <div className="flex items-center gap-6 mt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">4.7</span>
              <span>(42,500 Ratings)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUserFriends />
              <span>132.8K Learners</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center max-w-2xl">
          <img
            src="https://img.freepik.com/premium-photo/html-system-websites-concept_23-2150323528.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740"
            alt="Full Stack Web Dev"
            className="rounded-2xl shadow-xl max-w-xl w-full"
          />
        </div>
      </div>

      {/* WebDev Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-gray-800">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          WebDev Certification Course{" "}
          <span className="font-bold text-black">Overview</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-5xl">
          Step into the world of web development with GlowLogics, where we
          transform aspiring developers into industry-ready professionals. Our
          comprehensive curriculum is designed to take you from beginner to
          expert, equipping you with everything you need to build modern,
          dynamic websites and web applications. Whether you’re starting from
          scratch or looking to sharpen your skills, our course covers all the
          essentials — from HTML, CSS, and JavaScript basics to advanced topics
          like front-end frameworks (React, Angular) and back-end development
          (Node.js, Express). Through hands-on projects and real-world
          applications, you’ll gain the practical experience needed to thrive in
          today’s tech-driven world. Learn from expert instructors with years of
          industry experience, offering personalized guidance to help you master
          web development at your own pace. Join GlowLogics today — and turn
          your passion for coding into a career you’ll love!
        </p>

        {/* Key Features */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-semibold">
              WebDev Course Key Features
            </h3>
            <span className="text-green-700 text-sm bg-green-100 border border-green-400 rounded-full px-4 py-1 flex items-center gap-2">
              ✅ 100% ISO Verified Internship
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-700">
            {[
              "Get Ahead and Stay Ahead With 50+ Hours of Dynamic, Live Virtual Learning",
              "3 Portfolio-Driven Capstone Projects for Real-World Readiness",
              "Flexible Course Access for Working Professionals and Students",
              "Get Certified with a Course Completion Certificate, Internship Certificate, and Placement Training Certificate – All Included!",
              "Live Mentorship by Seasoned Industry Professionals",
              "Assigned Learning Manager for Personalized Support",
              "Unlimited Lifetime Access to Course Materials",
              "Globally Validated Certification – Backed by ISO & MSME",
              "Access All Course Content for an Entire Year",
              "Comprehensive Career Guidance & Assistance",
              "Career Prospects Across Industries and Roles",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 text-xl">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Covered */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Skills Covered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-gray-700">
            {[
              "HTML5 & CSS3 Fundamentals",
              "JavaScript (ES6+) Programming",
              "Responsive Web Design with Flexbox & Grid",
              "Version Control using Git & GitHub",
              "Frontend Frameworks (React.js)",
              "Backend Development with Node.js & Express.js",
              "Database Integration with MongoDB",
              "RESTful API Design & Integration",
              "Authentication & Authorization (JWT/OAuth)",
              "Deployment & Hosting (Netlify, Vercel, Render)",
              "Debugging & Browser Dev Tools",
              "Basic DevOps & CI/CD Concepts",
              "State Management (Redux or Context API)",
              "Project Planning & Agile Workflow",
              "Portfolio Development & GitHub Project Showcase",
            ].map((skill, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-[#ff6e0c] text-xl">✔</span>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white text-gray-800">
        <h2 className="text-3xl font-semibold mb-2">Benefits</h2>
        <p className="mb-8 text-gray-600 max-w-4xl">
          The WebDev® Certification Program empowers you with the skills and
          hands-on experience needed to thrive in today’s digital economy. From
          mastering frontend and backend technologies to building real-world
          projects, you will gain job-ready expertise backed by ISO and
          MSME-recognized certification. With personalized mentorship, lifetime
          access to learning resources, and dedicated career support, this
          program opens doors to exciting roles across tech, finance,
          healthcare, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
          {/* Designation Column */}
          <div className="flex flex-col divide-y border-r">
            {Object.keys(roleLogos).map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`text-left px-6 py-4 hover:bg-blue-50 transition-all ${
                  activeRole === role
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-800"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Hiring Companies */}
          <div className="flex flex-col justify-center items-center px-6 py-4 gap-4">
            <div className="grid grid-cols-2 gap-4">
              {(roleLogos[activeRole] || []).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Company Logo"
                  className="h-10 object-contain max-w-[100px]"
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Source: Glowlogics Solutions
            </p>
          </div>
        </div>

        <div className="bg-white text-gray-800 p-6 space-y-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold">
            WebDevelopment Certification Course{" "}
            <span className="font-bold">Curriculum</span>
          </h2>

          {/* Defeniation */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Definition</h3>
            <p>
              The WebDevelopment<sup>®</sup> certification is a valuable
              credential for professionals seeking to build a successful career
              in web and software development across various industries. This
              program is ideal for: Aspiring Web Developers, Frontend/Backend
              Developers, Full Stack Developers, Software Engineers, UI/UX
              Enthusiasts, Tech Entrepreneurs, and any professional aiming to
              gain hands-on experience in modern web technologies and
              frameworks.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
            <p>
              The WebDevelopment® Certification is open to graduates, final-year
              students, software developers, team leads, and professionals from
              any background looking to build or transition into a career in web
              development. Whether you are a fresher or an experienced
              professional, this program is designed to equip you with job-ready
              skills in modern web technologies.
            </p>
          </div>

          {/* Pre-requisites */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Pre-requisites</h3>
            <p>
              No prior coding experience is required to join the WebDevelopment®
              Certification Program. Basic computer literacy and a willingness
              to learn are all you need. However, familiarity with fundamental
              programming concepts or HTML/CSS can be helpful but is not
              mandatory.
            </p>
          </div>

          {/* Course Content */}
          <div className="mt-8 space-y-3">
            <h3 className="text-xl font-semibold mb-4">Course Content</h3>

            {[
              {
                title: "Module 1: Introduction to Web Development",
                lessons: [
                  { name: "Basics of HTML, CSS, JavaScript", preview: "#" },
                ],
              },
              {
                title: "Module 2: Advanced Front-End Technologies",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Module 3: Back-End Development",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Module 4: Full Stack Development Integration",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
              {
                title: "Module 5: Capstone Project",
                lessons: [{ name: "Preview coming soon", preview: "#" }],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenSection(openSection === index ? null : index)
                  }
                  className="w-full px-4 py-3 font-medium flex justify-between items-center border-b hover:bg-blue-100 transition"
                >
                  <span>{section.title}</span>
                  <span className="text-xl">
                    {openSection === index ? "−" : "+"}
                  </span>
                </button>
                {openSection === index && (
                  <div className="px-6 py-3">
                    {section.lessons.map((lesson, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center text-sm py-1"
                      >
                        <span>{lesson.name}</span>
                        <div className="flex items-center gap-4">
                          <a
                            href={lesson.preview}
                            className="text-blue-600 font-medium"
                          >
                            Preview
                          </a>
                          {lesson.time && (
                            <span className="text-gray-500">{lesson.time}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10 items-start">
          {/* Left: FAQ Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-semibold mb-6">
              FAQ <span className="text-black">related to </span>
            </h2>
            <div className="bg-white border rounded-lg shadow-md divide-y">
              {[
                {
                  q: "How to get a WebDevelopment® certification?",
                  a: (
                    <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700">
                      <li>Meet the eligibility requirements</li>
                      <li>
                        Enroll in an accredited WebDevelopment certification
                        training course
                      </li>
                      <li>Meet the exam eligibility requirements</li>
                      <li>Apply for the WebDevelopment exam with PMI</li>
                      <li>Pass your exam to earn certification</li>
                    </ul>
                  ),
                },
                {
                  q: "What are the WebDevelopment certification requirements?",
                  a: "Eligibility criteria vary, usually requiring education and project experience.",
                },
                {
                  q: "How long is the WebDevelopment certification valid for?",
                  a: "WebDevelopment certification is valid for 3 years and requires renewal.",
                },
                {
                  q: "How do I schedule my WebDevelopment® certification exam?",
                  a: "Once you complete the course, log in to your student portal, select an available exam date or center, and follow the scheduling instructions.",
                },
                {
                  q: "Do you provide any practice tests as part of the course?",
                  a: "Yes, the course includes full-length mock tests, topic-wise quizzes, and practice questions to help you prepare thoroughly.",
                },
                {
                  q: "Is prior coding experience required for this course?",
                  a: "No, the course starts with beginner-friendly content. We guide you step by step through the learning path, even if you’ve never coded before.",
                },
                {
                  q: "What technologies will I learn in this course?",
                  a: "You'll learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and other essential tools to become a full-stack web developer.",
                },
                {
                  q: "Do you offer job placement support?",
                  a: "Yes, we offer resume assistance, portfolio reviews, mock interviews, and placement support through our hiring partners.",
                },
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <button
                    className="w-full text-left px-6 py-4 font-medium flex justify-between items-center hover:bg-blue-50 transition"
                    onClick={() =>
                      setOpenSection(openSection === idx ? null : idx)
                    }
                  >
                    {item.q}
                    <span className="text-xl">
                      {openSection === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openSection === idx && (
                    <div className="px-6 pb-4 text-sm text-gray-700">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certificates */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {[
              "/public/Sample Course Completion Certificate- Glowlogics.pdf.png",
              "/public/Sample Internship Certificate- Glowlogics.pdf.png",
              "/public/Placement Training Certificate - Glowlogics.pdf.png",
            ].map((src, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md overflow-hidden"
                onMouseMove={(e) => {
                  const img = document.getElementById(`cert-img-${index}`);
                  if (img) {
                    const rect = img.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    img.style.transformOrigin = `${x}% ${y}%`;
                  }
                }}
                onMouseLeave={() => {
                  const img = document.getElementById(`cert-img-${index}`);
                  if (img) {
                    img.style.transformOrigin = "center center";
                  }
                }}
              >
                <img
                  id={`cert-img-${index}`}
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-auto object-contain p-2 transition-transform duration-300 ease-in-out scale-100 hover:scale-[2.5] cursor-zoom-in"
                />
              </div>
            ))}
          </div>
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

      </div>
    </>
  );
};

export default FullStackCourse;
