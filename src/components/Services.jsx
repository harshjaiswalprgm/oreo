import firstImage from "../assets/images/first.jpg";

const carouselData = [
  {
    image: firstImage,
    label: "POSITIVITY",
    title: "Learn, adapt succeed.",
  },
  {
    image: firstImage,
    label: "POSITIVITY",
    title: "Dedicated Committed Success.",
  },
  {
    image: firstImage,
    label: "POSITIVITY",
    title: "Success starts with learning",
  },
  {
    image: firstImage,
    label: "POSITIVITY",
    title: "Success is a journey, not a destination",
  },
];

export default function Services() {
  return (
    <div className="bg-white text-black px-8 md:px-20 py-12">
      {/* Header */}
      <h1 className="text-6xl md:text-7xl font-extrabold mb-12"></h1>

      {/* Main Statement */}
      <div className="bg-white text-black px-8 md:px-20 py-16">
        {/* Updated Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-10 text-center md:text-left leading-tight">
          🚀 Launch Your Career <br className="hidden md:block" />
          <span className="text-[#8BCA1E]">with Industry-Ready Skills</span>
        </h1>

        {/* Updated Sub-text */}
        <p className="text-xl md:text-2xl font-light mb-16 max-w-5xl leading-relaxed text-gray-700">
          Gain{" "}
          <span className="font-semibold text-black">practical skills</span>,
          work on
          <span className="font-semibold text-black"> real-world projects</span>
          , and unlock
          <span className="font-semibold text-black">
            {" "}
            career opportunities
          </span>{" "}
          with our expert-led e-learning platform. From{" "}
          <span className="text-[#4F46E5] font-semibold">Coding</span> to
          <span className="text-[#4F46E5] font-semibold"> Design</span>,
          <span className="text-[#4F46E5] font-semibold"> Marketing</span> to
          <span className="text-[#4F46E5] font-semibold"> Data</span> — we
          prepare you for the roles that companies hire for.
        </p>

        {/* Benefit Points */}
        <div className="grid md:grid-cols-3 gap-10 text-lg text-gray-900 mb-20">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-green-500">✅</span>
              <h3 className="font-semibold text-xl">Expert-Led Courses</h3>
            </div>
            <p>
              Learn directly from industry professionals with hands-on practical
              sessions.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-green-500">✅</span>
              <h3 className="font-semibold text-xl">Real-World Projects</h3>
            </div>
            <p>
              Build live projects that mirror actual industry challenges and
              requirements.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-green-500">✅</span>
              <h3 className="font-semibold text-xl">Placement Assistance</h3>
            </div>
            <p>
              Get dedicated career support, mock interviews, and placement
              guidance to land your dream job.
            </p>
          </div>
        </div>
      </div>

      {/* Grid for 3 Services */}
      <div className="grid md:grid-cols-3 gap-10 text-base text-gray-900 mb-20">
        <div>
          <h3 className="font-semibold underline mb-2">Goal defines it all</h3>
          <p>
            What do you want to achieve? Understanding the purpose of your
            presentation allows us to tailor it to ensure it hits the mark and
            drives results.
          </p>
        </div>

        <div>
          <h3 className="font-semibold underline mb-2">Audience is the hero</h3>
          <p>
            Who is it for? What do they want? Why does it matter to them? We
            need to know your audience to build an impactful narrative.
          </p>
        </div>

        <div>
          <h3 className="font-semibold underline mb-2">
            Context makes a difference
          </h3>
          <p>
            When do you present? Online or live? At a sales meeting, at a
            conference, or just sending a cold email? We knit the context
            together to decide the style of the presentation.
          </p>
        </div>
      </div>

      {/* INFINITE CARD ROLLING SECTION */}
      <div className="overflow-hidden relative w-full py-10">
        <div className="flex gap-8 animate-marquee-faster">
          {[...carouselData, ...carouselData].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[350px] md:min-w-[450px] rounded-3xl overflow-hidden shadow-lg bg-white transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <div className="relative h-72 md:h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm uppercase text-gray-400">{item.label}</p>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
