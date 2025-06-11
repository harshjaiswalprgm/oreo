import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-white pt-1 flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-1 items-center justify-between px-20 pt-16">
        {/* Left Content */}
        <div className="textstructure text-black">
          {/* Subheading */}
          <h2 className="text-lg text-black mb-4 tracking-wide">
            Empower Your Learning Journey 🚀
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

        {/* Right Image (using URL) */}
        <div className="w-[500px] h-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1682974406911-92e6aff8006c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // <-- your URL goes here
            alt="Learning"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-[1px] border-zinc-800 mt-10 text-black flex justify-between items-center py-5 px-20">
        {[
          "Unlock Your Future With Learning",
          "From Classroom To Corporate Success",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none" key={index}>
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-black font-light text-md uppercase rounded-full cursor-pointer hover:bg-black hover:text-white transition-all duration-200">
            Start Learning
          </div>
          <div className="w-10 h-12 border-[2px] flex items-center justify-center border-black rounded-full">
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
