import { useState } from "react";

const categories = ["All", "Design", "Tech", "Marketing", "Soft Skills"];

const programData = [
  {
    title: "UI/UX Masterclass",
    category: "Design",
    author: "Ankita Sharma",
    date: "10 Jul 25",
    image: "https://cdn.pixabay.com/photo/2017/06/09/16/25/red-bull-2387317_1280.jpg", // direct image URL
    desc: "Master product design, prototyping & user flows.",
  },
  {
    title: "Full-Stack Web Dev Bootcamp",
    category: "Tech",
    author: "Rahul Mehta",
    date: "01 Jun 25",
    image: "https://cdn.pixabay.com/photo/2017/06/09/16/25/red-bull-2387317_1280.jpg",
    desc: "Learn React, Node, APIs & deployment hands-on.",
  },
  {
    title: "Full-Stack Web Dev Bootcamp",
    category: "Tech",
    author: "Rahul Mehta",
    date: "01 Jun 25",
    image: "https://cdn.pixabay.com/photo/2017/06/09/16/25/red-bull-2387317_1280.jpg",
    desc: "Learn React, Node, APIs & deployment hands-on.",
  },
  {
    title: "Full-Stack Web Dev Bootcamp",
    category: "Tech",
    author: "Rahul Mehta",
    date: "01 Jun 25",
    image: "https://cdn.pixabay.com/photo/2017/06/09/16/25/red-bull-2387317_1280.jpg",
    desc: "Learn React, Node, APIs & deployment hands-on.",
  },
  {
    title: "Full-Stack Web Dev Bootcamp",
    category: "Tech",
    author: "Rahul Mehta",
    date: "01 Jun 25",
    image: "https://cdn.pixabay.com/photo/2017/06/09/16/25/red-bull-2387317_1280.jpg",
    desc: "Learn React, Node, APIs & deployment hands-on.",
  },
  {
    title: "Digital Marketing Pro",
    category: "Marketing",
    author: "Sneha Patil",
    date: "20 Aug 25",
    image: "https://cdn.pixabay.com/photo/2017/06/09/16/25/red-bull-2387317_1280.jpg",
    desc: "Google Ads, SEO, branding—all in one course.",
  },
  {
    title: "Public Speaking & Influence",
    category: "Soft Skills",
    author: "Neeraj Kapoor",
    date: "15 Jul 25",
    image: "https://cdn.pixabay.com/photo/2017/06/09/16/25/red-bull-2387317_1280.jpg",
    desc: "Build confidence & speak like a pro on stage.",
  },
];

export default function ProgramShowcase() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? programData
      : programData.filter((p) => p.category === active);

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-10">Explore Our Student Programs</h2>

      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              active === cat
                ? "bg-black text-white"
                : "bg-white text-black border border-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.map((prog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4"
          >
            <img
              src={prog.image}
              alt={prog.title}
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-lg font-semibold mb-1">{prog.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{prog.desc}</p>
            <div className="text-sm text-gray-700 mt-auto">
              <span className="font-medium">{prog.author}</span> • {prog.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
