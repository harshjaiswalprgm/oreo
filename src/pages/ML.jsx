import { useState } from "react";
import { FaStar, FaChevronDown, FaChevronUp, FaBolt, FaUserGraduate, FaMoneyBillWave, FaRocket } from "react-icons/fa";

export default function ProgramDetails() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeModule, setActiveModule] = useState(0);

  const courseTopics = [
    {
      title: "Intro to AI and Tools",
      details: [
        "Overview of Artificial Intelligence",
        "Installing Python and Jupyter",
        "AI use-cases and industries"
      ]
    },
    {
      title: "Python for AI",
      details: ["Data types & structures", "Control flows & functions", "Numpy & Pandas"]
    },
    {
      title: "Machine Learning Basics",
      details: ["Supervised & Unsupervised Learning", "Regression vs Classification", "Evaluation Metrics"]
    },
    {
      title: "Deep Learning & CNNs",
      details: ["Neural networks explained", "Using TensorFlow", "Building CNNs"]
    },
    {
      title: "Capstone Project",
      details: ["Data gathering", "Model building", "Presentation"]
    }
  ];

  const modules = [
    {
      title: "Module 1 - Introduction to Machine Learning",
      content:
        "In the past decade, we have seen a dramatic increase in the use of machine learning... including its definition, history, and applications."
    },
    {
      title: "Module 2 - Supervised Learning and Linear Regression",
      content: "Understand regression models, least squares, and real-world prediction tasks."
    },
    {
      title: "Module 3 - Classification and Logistic Regression",
      content: "Binary classification, sigmoid function, and accuracy vs precision explained."
    },
    {
      title: "Module 4 - Decision Tree and Random Forest",
      content: "Tree-based models and how to boost accuracy with ensemble methods."
    },
    {
      title: "Module 5 - Naive Bayes and Support Vector Machine",
      content: "Probabilistic classifiers and margin-based SVMs."
    }
  ];

  const mlReasons = [
    {
      icon: <FaBolt className="text-purple-500 text-xl" />,
      title: "Jobs on the Rise.",
      desc: "According to a recent survey, jobs in machine learning are rising."
    },
    {
      icon: <FaUserGraduate className="text-purple-500 text-xl" />,
      title: "Lucrative Career.",
      desc: "Machine learning is a constantly evolving and lucrative career."
    },
    {
      icon: <FaMoneyBillWave className="text-purple-500 text-xl" />,
      title: "High Paying Jobs.",
      desc: "This is a growing sector with many high-paying jobs."
    },
    {
      icon: <FaRocket className="text-purple-500 text-xl" />,
      title: "Fast Growing Field.",
      desc: "The field is growing quickly, making it an exciting and rewarding career path."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-green-100 via-white to-white min-h-screen">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The Complete <span className="text-orange-500">AI Program</span> 2025: <br /> From Zero To Expert!
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Master AI by building real-world projects in 100 Days. Learn Data Science, Machine Learning, Neural Networks, and More.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-500">Get Started</button>
            <span className="flex items-center text-yellow-500 font-medium">
              <FaStar /> 4.8 (65,000+ Students)
            </span>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="https://img.freepik.com/premium-photo/close-up-backlit-hand-using-tablet-with-abstract-glowing-ai-head-interface-blurry-background-artificial-intelligence-cyberspace-concept-double-exposure_670147-104071.jpg"
            alt="AI Course"
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Course Info Card */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 mt-10">
        {/* Course Content */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You will Learn</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Learn the foundations of AI and machine learning.</li>
            <li>Work on real-world datasets using Python.</li>
            <li>Master neural networks, CNNs, and deep learning models.</li>
            <li>Use TensorFlow, Scikit-learn, and Jupyter Notebook.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Course Content</h2>
          <div className="space-y-4">
            {courseTopics.map((topic, i) => (
              <div key={i} className="border rounded">
                <button
                  onClick={() => setExpandedIndex(i === expandedIndex ? null : i)}
                  className="w-full flex justify-between items-center px-4 py-3 font-medium text-left text-gray-900 bg-gray-100 hover:bg-gray-200"
                >
                  {topic.title}
                  {expandedIndex === i ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {expandedIndex === i && (
                  <ul className="px-6 py-3 text-sm text-gray-700 list-disc">
                    {topic.details.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Machine Learning Course Syllabus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Modules */}
            <div className="space-y-4">
              {modules.map((mod, i) => (
                <div key={i} className="border rounded">
                  <button
                    onClick={() => setActiveModule(i === activeModule ? null : i)}
                    className="w-full flex justify-between items-center px-4 py-3 font-medium text-left text-purple-700 bg-purple-100 hover:bg-purple-200"
                  >
                    {mod.title}
                    {activeModule === i ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {activeModule === i && (
                    <p className="px-6 py-3 text-sm text-gray-700 bg-white">{mod.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar Why ML */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Why Study Machine Learning?</h3>
              {mlReasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div>{reason.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{reason.title}</h4>
                    <p className="text-sm text-gray-600">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <h4 className="font-semibold text-lg text-gray-700 mb-2">Looking for the complete module?</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <input type="email" placeholder="Email" className="px-4 py-2 border rounded-md w-full sm:w-auto" />
              <input type="tel" placeholder="Mobile" className="px-4 py-2 border rounded-md w-full sm:w-auto" />
              <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800">
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="text-3xl font-bold text-gray-900 mb-4">$99</div>
          <button className="w-full bg-orange-500 text-white py-2 rounded mb-2 hover:bg-orange-900">
            Add to Cart
          </button>
          <button className="w-full border border-orange-500 text-black-600 py-2 rounded hover:bg-green-50">
            Buy Now
          </button>

          <div className="mt-6 space-y-2 text-gray-700 text-sm">
            <p><strong>Duration:</strong> 3 Months</p>
            <p><strong>Level:</strong> Beginner to Advanced</p>
            <p><strong>Certificate:</strong> Yes</p>
            <p><strong>Access:</strong> Lifetime</p>
            <p><strong>Language:</strong> English</p>
          </div>

          <div className="mt-6">
            <button className="w-full bg-gray-100 text-gray-800 py-2 rounded hover:bg-gray-200">
              📞 Call Us: +91-1234567890
            </button>
          </div>
        </div>
      </div>

      {/* Instructor */}
      <div className="max-w-6xl mx-auto px-4 mt-16 mb-10">
        <div className="bg-white p-6 rounded-xl shadow flex gap-4 items-center">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Instructor"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-lg text-gray-900">Dr. A.I. Mentor</h4>
            <p className="text-sm text-gray-600">Lead Instructor, PhD in AI from MIT</p>
          </div>
        </div>
      </div>
    </section>
  );
}