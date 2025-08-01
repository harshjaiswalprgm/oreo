import { useState } from "react";
import { FaCheckCircle, FaStar, FaUserFriends } from "react-icons/fa";
import RoadmapFlow from "/RoadmapFlow.png";
// import { FaQuoteLeft } from "react-icons/fa";

const FullStackCourse = () => {
  const [openSection, setOpenSection] = useState(null);

  const roleLogos = {
    "Machine Learning Engineer - Starting Salary (India): ₹6 – ₹10 LPA": [
      "data:image/png;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mfxOyRFkqOsS2bqbAv6Jme5aZst5647elBXv3sNokwJNbq3Wohed1XLWWg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjl7XELiAxlFFuJltyWm6Th6inOxlVzxc7MMrSSbAJyYiszxgXSb41DDrv8Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPR10Fz15vjWryAGF7LWpwGCBpDyAiBOpgW5o3r--4GHkybcmtt0q5FI7cavs&s",
    ],
    "Data Scientis - Starting Salary (India): ₹6 – ₹12 LPA ": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSdO7qhiIhfW64Jzgkz4Cj7q0QULsDwlU1aoDKHgzoOwE7zTdiQXABFQI2Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUnTw99fm9fVevBAnkSKTEI5XV_T9LbhKusHHYOdxLt2w6vvDTX-15ZO6uw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWpsGe5iEJob0dcSB5w9P5aWFjriI1hp0gyk5BlsAn303UpqPqoxUUqNhUuZ0&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJWrxnzTPiaRgGMzwh2fyV6kD15A-ihppe3wEcKFGD8pj1znEEBk1RytrrA&s",
    ],
    " AI/Deep Learning Engineer - Starting Salary (India): ₹7 – ₹12 LPA": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K8eaqkEKLNFWf7fzbQAca3McYHsdkvpKMtXwLKgEB_hDmtMn61N2v0DEgA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKP2CNJ_0aX4DAuhMIOmzxvMXUE8adsc5v8z44BExycJHV6oFEDsB1a1HmNA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXESL8W6aoDD3CHdJhAz5rmb-MbmKKvvuatyvydeY-fxSHcDheXyKvmYG2W0A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD75Ew8D4llFJk_ZTfQVFS8PwxlhVYwES4SOUQqTcmZtHPw5Pz42sC1coMWQ&s",
    ],
    "AI Product Analyst / AI Solutions Associate - Starting Salary (India): ₹4 – ₹8 LPA":
      [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_P85o6q5b2clTlqYUhvgVMIdgUu6MqvzfBISHBirSsS0R7uJwK3u1Fd1bB-U&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQ2ed2DEYUtBqM5QFnRlUDyMc6naNQ7ZqTLQ3pdl1WOk8NHom7ffKz3ub-g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ywGfT6BXzPfdxnmFPHu9WagIC7E_Dz9XlHiCyKOO0jjcX-iktawn2T41-4Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSze0EO7gJyuZJ7-LbrCiBH60WrvWTeLenF82OZdK0kaNvhnmmReIiMQFZvRg&s",
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
            VLSI
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Step Into VLSI Engineering with ISO-Certified Training
          </p>

          {/* Benefits */}
          <ul className="space-y-3 text-gray-800 mb-6">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              ISO-Certified VLSI Course Completion Certificate
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Flexible Learning Format: Live Classes with Doubt Clarification
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Real-World VLSI Projects for Portfolio Building
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Hands-On Practice with RTL Coding, Simulation, Synthesis, and FPGA
              Flow
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-2" />
              Resume Building and LinkedIn Profile Guidance
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://rzp.io/rzp/GL6k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#ff6e0c] border-black text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                Enroll now
              </button>
            </a>
            <a href="/ProgramsPDF/VLSISyllubusGlowlogics.pdf" download>
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
            src="https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlbWljb25kdWN0b3J8ZW58MHx8MHx8fDA%3D"
            alt="Full Stack Web Dev"
            className="rounded-2xl shadow-xl max-w-xl w-full"
          />
        </div>
      </div>

      {/*VLSI Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-gray-800">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          VLSI Certification Program{" "}
          <span className="font-bold text-black">Overview</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Glowlogics VLSI Design Training Program is designed to help students
          and professionals become industry-ready VLSI engineers. The program
          covers key skills required to design and develop complex integrated
          circuits used in today’s electronic devices. You’ll learn digital
          design fundamentals, Verilog HDL, RTL coding, synthesis, timing
          analysis, and FPGA/ASIC implementation. Along with theory, you’ll gain
          practical experience using industry-standard tools like Synopsys,
          Cadence, and Xilinx by working on real-world projects that reflect
          actual semiconductor workflows. This program is ideal for electronics,
          electrical, and computer engineering students looking to build a
          career in VLSI design.
        </p>

        {/* Key Features */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-2xl font-semibold">
              VLSI Program Key Features
            </h3>
            <span className="text-green-700 text-sm bg-green-100 border border-green-400 rounded-full px-4 py-1 flex items-center gap-2">
              ✅ 100% ISO Verified Internship
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-700">
            {[
              "ISO-Certified Program with Industry Recognition",
              "Training on Industry-Standard Tools: Synopsys, Cadence, Xilinx",
              "Hands-On Projects: RTL Design, Simulation, ASIC/FPGA Flow",
              "Master Verilog HDL, RTL Coding, Synthesis, and Timing Analysis",
              "Mentorship from Semiconductor Industry Professionals",
              "Portfolio Development with Real-World VLSI Projects",
              "Resume Building, LinkedIn Profile Optimization",
              "Flexible Online Learning with Live Sessions and Doubt Clearing",
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
              "VLSI Design Flow Understanding",
              "MOSFET Theory and Device Scaling",
              "CMOS Logic Design and Optimization",
              "Combinational and Sequential Logic Circuit Design",
              "Verilog HDL Programming for Digital Circuits",
              "Static Timing Analysis and Power Optimization",
              "FPGA Programming and Implementation Using Verilog",
              "Clock Skew, Setup/Hold Time, and Power Reduction Methods",
              "Knowledge of Advanced VLSI Technologies (FinFETs, 3D ICs)",
              "Awareness of Industry Trends and Career Paths in VLSI",
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
          The VLSI® Certification opens doors to a strong career in
          semiconductor and electronics industries, where demand is growing
          across IT, consumer tech, automotive, healthcare, and telecom sectors.
          Certified VLSI professionals gain practical skills in digital design,
          RTL coding, simulation, and hardware implementation—making them key
          contributors in chip design and development teams. As technologies
          like AI, IoT, and 5G continue to expand, skilled VLSI engineers are
          highly sought after, offering access to competitive salaries, global
          job opportunities, and faster career growth in leading companies
          around the world.
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
            VLSI Certification Program{" "}
            <span className="font-bold">Curriculum</span>
          </h2>

          {/* Course Content */}
          <div className="mt-8 space-y-3">
            <h3 className="text-xl font-semibold mb-4">Program Content</h3>

            {[
              {
                title: "Module 1: Introduction to VLSI",
                lessons: [
                  {
                    name: "Overview of VLSI technology",
                  },
                ],
              },
              {
                title: "Module 2: MOS Transistor Theory",
                lessons: [{ name: "MOSFET basics: Structure and operation" }],
              },
              {
                title: "Module 3: CMOS Technology and Design",
                lessons: [
                  { name: "CMOS Inverter: Operation and characteristics" },
                ],
              },
              {
                title: "Module 4: Combinational Logic Design",
                lessons: [
                  { name: "Design and analysis of combinational circuits" },
                ],
              },
              {
                title: "Module 5: Sequential Logic Design",
                lessons: [{ name: "Latches, flip-flops, and registers" }],
              },
              {
                title: "Module 6: Physical Design and Layout",
                lessons: [
                  {
                    name: "Layout design using EDA tools (e.g., Cadence, Synopsys)",
                  },
                ],
              },
              {
                title: "Module 7: Timing and Power Analysis",
                lessons: [
                  {
                    name: "Techniques to reduce power consumption: Clock gating, voltage scaling",
                  },
                ],
              },
              {
                title: "Module 8: Design for Testability (DFT)",
                lessons: [
                  {
                    name: "Fault models and automatic test pattern generation (ATPG)",
                  },
                ],
              },
              {
                title: "Module 9: FPGA Basics and Programming",
                lessons: [{ name: "FPGA vs ASIC" }],
              },
              {
                title: "Module 10: Industry Trends and Future Scope",
                lessons: [
                  {
                    name: "Recent advancements in VLSI (FinFETs, 3D ICs, Quantum Computing)",
                  },
                ],
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
         <div>
                  <br></br>
                </div>
                <div className="overflow-hidden w-full max-w-5xl mx-auto rounded-lg shadow-md">
                  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
                    Your 5-Step Career Roadmap with Glowlogics
                  </h2>

                  <img
                    src={RoadmapFlow}
                    alt="World map with student locations"
                    className="transition-transform duration-500 ease-in-out transform hover:scale-105 w-full h-auto"
                  />
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
                  q: "Who can join this VLSI Certification Program?",
                  a: "Engineering and degree students from ECE, EEE, CSE, or related backgrounds can join. No prior VLSI experience is required.",
                },
                {
                  q: "Do I need to know programming before enrolling?",
                  a: "No. This course focuses on hardware design using Verilog and RTL coding, not general programming. We cover everything from basics to advanced VLSI concepts.",
                },
                {
                  q: "How long is the VLSI certification valid for?",
                  a: "The VLSI Certification from Glowlogics is valid for a lifetime and is ISO- and MSME-recognized.",
                },
                {
                  q: "What skills will I learn in this course?",
                  a: "You’ll learn Digital Logic Design, Verilog HDL, RTL Coding, ASIC Design Flow, FPGA Implementation, Static Timing Analysis, and working with industry tools like Synopsys and Cadence.",
                },
                {
                  q: "How long is the course, and what is the learning mode?",
                  a: "The course typically runs for 2–3 months with 90+ hours of live or guided learning sessions, including project work. Sessions are conducted online with mentor support.",
                },
                {
                  q: "Will I get a certificate after completing the course?",
                  a: "Yes. You’ll receive an ISO- and MSME-recognized VLSI Certification upon successfully completing training and submitting your project work.",
                },
                {
                  q: "Is there any placement guarantee?",
                  a: "We provide placement assistance for VLSI-related roles. Actual job offers depend on your performance, skills, and interview results.",
                },
                {
                  q: "How do I register and pay the course fee?",
                  a: "You can register through our official form link or Company QR Code. Payment details will be shared after your registration is confirmed.",
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
        <div className="w-full lg:w-1/2 mx-auto relative flex flex-col items-center">
  <div className="bg-[#f9fbff] rounded-xl shadow-md p-8 max-w-md mx-auto text-center border border-orange-600 mb-6">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
      Next cohort starts on <span className="text-black font-bold">3 Aug 2025</span>
    </h3>
  </div>

  {/* Certificate Image with Hover Zoom */}
  <div
    id="cert-container"
    className="border rounded-lg shadow-md overflow-hidden w-full"
    onMouseMove={(e) => {
      const img = document.getElementById("cert-img");
      if (img) {
        const rect = img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
      }
    }}
    onMouseLeave={() => {
      const img = document.getElementById("cert-img");
      if (img) {
        img.style.transformOrigin = "center center";
      }
    }}
  >
    <img
      id="cert-img"
      src="/CourseCompletionGlowlogics.png"
      alt="Certificate 1"
      data-index="0"
      className="w-full h-auto object-contain p-2 transition-transform duration-300 ease-in-out scale-100 hover:scale-[2.5] cursor-zoom-in"
      onClick={() => {
        const modal = document.getElementById("cert-modal");
        modal.style.display = "flex";
      }}
    />
  </div>

  {/* Certificate Navigation Buttons */}
  <div className="flex gap-6 mt-4">
    <button
      onClick={() => {
        const certificates = [
          "/CourseCompletionGlowlogics.png",
          "/InternshipGlowlogics.png",
          "/PlacementGlowlogics.png",
        ];
        let currentIndex =
          parseInt(document.getElementById("cert-img").getAttribute("data-index")) || 0;
        currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
        const img = document.getElementById("cert-img");
        img.src = certificates[currentIndex];
        img.setAttribute("alt", `Certificate ${currentIndex + 1}`);
        img.setAttribute("data-index", currentIndex);
        document.getElementById("modal-img").src = certificates[currentIndex];
      }}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
    >
      ◀
    </button>

    <button
      onClick={() => {
        const certificates = [
          "/CourseCompletionGlowlogics.png",
          "/InternshipGlowlogics.png",
          "/PlacementGlowlogics.png",
        ];
        let currentIndex =
          parseInt(document.getElementById("cert-img").getAttribute("data-index")) || 0;
        currentIndex = (currentIndex + 1) % certificates.length;
        const img = document.getElementById("cert-img");
        img.src = certificates[currentIndex];
        img.setAttribute("alt", `Certificate ${currentIndex + 1}`);
        img.setAttribute("data-index", currentIndex);
        document.getElementById("modal-img").src = certificates[currentIndex];
      }}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700"
    >
      ▶
    </button>
  </div>

  {/* Fullscreen Popup Modal */}
  <div
    id="cert-modal"
    className="fixed inset-0 bg-black bg-opacity-80 z-50 hidden items-center justify-center p-4"
    style={{ display: "none" }}
  >
    <div className="relative max-w-4xl w-full">
      <button
        onClick={() => {
          document.getElementById("cert-modal").style.display = "none";
        }}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full px-3 py-1 text-sm font-semibold"
      >
        ✕ Close
      </button>
      <img
        id="modal-img"
        src="/CourseCompletionGlowlogics.png"
        alt="Full Certificate"
        className="w-full h-auto object-contain rounded-lg"
      />
    </div>
  </div>
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
