import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["We Create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index ===1 && (
                  <div className="mr-[1vw] w-[9vw] rounded-md h-[5.1vw] -top-[0.6vw] relative  bg-red-500"></div>)}
              <h1 className="uppercase text-[6.5vw] leading-[7vw] tracking-tight font-['Founders Grotesk X-Condensed'] font-medium">
                {item}{" "}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and Private companies",
          "From the first pitch to IPO",
        ].map((item, index ) => (
          <p className="text-md font-light tarcking-tigth leading-none" key={index}>

            {item}
          </p>
        ))}
        <div className="start flex item-center gap-5 ">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase  font-lighter rounded-full">
            start the project
          </div>
          <div className="w-10 h-10  border-[2px] flex items-center justify-center  border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              {" "}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
