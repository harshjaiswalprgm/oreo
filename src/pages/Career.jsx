import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaBuilding } from "react-icons/fa";

const jobOpenings = [
  {
    id: 1,
    title: "Sales Executive",
    location: "Noida",
    company: "YHills",
    companyLevel: "Emerging Startup",
    exp: "1-2 years",
    expLevel: "Mid-Level",
    ctc: "2 LPA",
    category: "Sales & Marketing",
    description: "Handle lead generation, client follow-ups, and conversion tasks.",
  },
  {
    id: 2,
    title: "Digital Marketing Associate",
    location: "Remote",
    company: "Glowlogics",
    companyLevel: "Digital Marketing Company",
    exp: "0-1 years",
    expLevel: "Fresher",
    ctc: "Not Disclosed",
    category: "Sales & Marketing",
    description: "Support social campaigns, SEO optimization, and analytics reporting.",
  },
  {
    id: 3,
    title: "Social Media Manager",
    location: "Delhi",
    company: "Glowlogics",
    companyLevel: "Digital Marketing Company",
    exp: "1-3 years",
    expLevel: "Mid-Level",
    ctc: "3.5 LPA",
    category: "Sales & Marketing",
    description: "Manage Instagram, LinkedIn and influencer partnerships to grow online brand.",
  },
  {
    id: 4,
    title: "Content Marketing Specialist",
    location: "Mumbai",
    company: "MediaHive",
    companyLevel: "Content Agency",
    exp: "2-4 years",
    expLevel: "Senior",
    ctc: "4.5 LPA",
    category: "Sales & Marketing",
    description: "Write blog posts, manage editorial calendar and SEO-friendly content.",
  },
  {
    id: 5,
    title: "Performance Marketing Analyst",
    location: "Remote",
    company: "AdGroove",
    companyLevel: "Performance Ad Company",
    exp: "1-2 years",
    expLevel: "Mid-Level",
    ctc: "5 LPA",
    category: "Sales & Marketing",
    description: "Run and optimize Google/Facebook Ads for eCommerce clients.",
  },
  {
    id: 6,
    title: "Email Marketing Executive",
    location: "Hyderabad",
    company: "MailBoost",
    companyLevel: "SaaS Startup",
    exp: "0-2 years",
    expLevel: "Entry Level",
    ctc: "2.8 LPA",
    category: "Sales & Marketing",
    description: "Design and send email campaigns using Mailchimp/Sendinblue.",
  },
  {
    id: 7,
    title: "SEO Intern",
    location: "Work from Home",
    company: "SEO Prodigy",
    companyLevel: "Freelance Agency",
    exp: "0-1 years",
    expLevel: "Fresher",
    ctc: "Stipend Based",
    category: "Sales & Marketing",
    description: "Perform keyword research and backlink audits under supervision.",
  },
];

export default function Career() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const toggleDropdown = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const filteredJobs = jobOpenings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 py-10 px-4">
      {/* Banner */}
      <div className="w-full max-w-6xl mx-auto mb-6">
        <h1>hello</h1>
        <img
          src="https://images.unsplash.com/photo-1677617204504-84bce8a63102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Career Banner"
          className="rounded-xl w-full h-64 object-cover shadow-lg"
        />
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-6xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 text-lg rounded-lg shadow-md outline-none focus:ring-4 ring-yellow-300 transition"
        />
      </div>

      {/* Job Listings */}
      <div className="w-full max-w-6xl mx-auto space-y-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-xl border border-transparent hover:border-purple-400 hover:shadow-[0_0_0_2px_rgba(139,92,246,0.4)] hover:scale-[1.015] transition-all duration-300 ease-in-out"
          >
            {/* Job Header */}
            <div
              onClick={() => toggleDropdown(job.id)}
              className="cursor-pointer flex justify-between items-center p-6 hover:bg-gray-50 transition"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
              <div className="flex items-center gap-3">
  <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700">
    {job.category}
  </span>
  <span className="text-gray-500 text-sm">
    {activeId === job.id ? <FaChevronUp /> : <FaChevronDown />}
  </span>
</div>
            </div>

            {/* Job Dropdown */}
            <AnimatePresence initial={false}>
              {activeId === job.id && (
                <motion.div
                  className="px-6 pb-6 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mb-2">
                    <strong>Company:</strong> {job.company}
                  </p>
                  <p className="mb-2 flex items-center gap-2">
                    <FaBuilding className="text-gray-400" />
                    {job.companyLevel}
                  </p>
                  <p className="mb-2">
                    <strong>Experience:</strong> {job.exp}
                  </p>
                  <p className="mb-2">
                    <strong>CTC:</strong> {job.ctc}
                  </p>
                  <p className="mb-2">
                    <strong>Description:</strong> {job.description}
                  </p>
                  <button
                    onClick={() => openModal(job)}
                    className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-5 rounded-lg"
                  >
                    Apply Now
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <p className="text-white text-center mt-10 text-lg">
            No job openings found.
          </p>
        )}
      </div>

      {/* Apply Now Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Apply for: {selectedJob?.title}
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-md"
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-3 border rounded-md"
              />
              <textarea
                placeholder="Cover Letter (optional)"
                rows="4"
                className="w-full p-3 border rounded-md"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg w-full"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
