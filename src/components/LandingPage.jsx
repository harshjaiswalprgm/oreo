import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      className="w-full h-screen pt-1 flex flex-col bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Main Content Area */}
      <div className="flex flex-1 items-center justify-between px-20 pt-16 relative z-10">
        {/* Left Content */}
        <div className="textstructure text-white">
          {/* Subheading */}
          <h2 className="text-lg mb-4 tracking-wide">
            Empower Your Learning Journey 🎓
          </h2>

          {/* Main Heading */}
          {["Learn Smart", "Grow Fast", "Succeed"].map((item, index) => (
            <div className="masker" key={index}>
              <div className="w-fit overflow-hidden">
                <h1 className="uppercase text-[6.5vw] leading-[7vw] tracking-tight font-['Founders Grotesk X-Condensed'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="w-[500px] h-auto">
          <img
            src="https://as1.ftcdn.net/v2/jpg/06/74/55/48/1000_F_674554865_kBGsKoQUxNcDdMoubOoRO7gVRceCaECI.jpg"
            alt="Learning"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-[1px] border-zinc-300 mt-10 text-white flex justify-between items-center py-5 px-20 relative z-10">
        {[
          "Unlock Your Future With Learning",
          "From Classroom To Corporate Success",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none" key={index}>
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-white font-light text-md uppercase rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-200">
            Start Learning
          </div>
          <div className="w-10 h-12 border-[2px] flex items-center justify-center border-white rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
