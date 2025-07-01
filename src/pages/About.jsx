// src/pages/About.jsx
const About = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-white text-gray-900 py-16 px-6 md:px-16">
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        {/* <button className="text-sm bg-purple-200 text-purple-800 px-4 py-1 rounded-full mb-4">
          About us
        </button> */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Our Journey to smarter conversations
        </h1>
        <p className="text-lg text-gray-600">
          Explore how our passion for innovation fuels intelligent, human-like AI solutions.
        </p>
      </div>

      {/* Team Image */}
      <div className="flex justify-center mb-12">
        <img
          src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg" // Replace with your image URL or local image path
          alt="Team working together"
          className="rounded-2xl shadow-lg w-full max-w-5xl"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        <div>
          <p className="text-3xl font-bold">98%</p>
          <p className="text-sm text-gray-600">User satisfaction Rate</p>
        </div>
        <div>
          <p className="text-3xl font-bold">5X</p>
          <p className="text-sm text-gray-600">Faster response time</p>
        </div>
        <div>
          <p className="text-3xl font-bold">24/7</p>
          <p className="text-sm text-gray-600">Availability</p>
        </div>
        <div>
          <p className="text-3xl font-bold">1M+</p>
          <p className="text-sm text-gray-600">Interactions handled</p>
        </div>
      </div>

      {/* What Defines Us */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">What defines us</h2>
        <p className="text-gray-600 mb-6">
          Explore our beginnings, what we stand for, and where we are headed in the world of AI.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
            Our purpose
          </button>
          <button className="bg-gray-200 text-black px-5 py-2 rounded-full hover:bg-gray-300 transition">
            Our journey
          </button>
          <button className="bg-gray-200 text-black px-5 py-2 rounded-full hover:bg-gray-300 transition">
            Our promise
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
