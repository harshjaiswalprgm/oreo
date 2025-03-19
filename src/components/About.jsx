function About() {
  return (
    <div className=" w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Oreo is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great peo­ple.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6  bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>

        <div className="w-1/2 h-[60vh] bg-yellow-600 rounded-3xl overflow-hidden">
          <img
            src="https://i.pinimg.com/1200x/51/3b/59/513b590573a3b0502b5f484ec1c9f57a.jpg"
            alt="oreo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
