// import { useRef, useState } from "react";
// import worldMap from "../assets/images/Blue and Grey World Map Chart Presentation (2).png";

// const GlobalReachSection = () => {
//   const imageContainerRef = useRef(null);
//   const [transformStyle, setTransformStyle] = useState("scale(1)");

//   const handleZoom = (xPercent, yPercent) => {
//     if (!imageContainerRef.current) return;

//     const container = imageContainerRef.current.getBoundingClientRect();
//     const x = (xPercent / 100) * container.width;
//     const y = (yPercent / 100) * container.height;

//     // Move the image to center the zoomed point
//     const translateX = container.width / 2 - x;
//     const translateY = container.height / 2 - y;

//     setTransformStyle(`scale(2) translate(${translateX}px, ${translateY}px)`);

//   };

//   const resetZoom = () => {
//     setTransformStyle("scale(1) translate(0, 0)");

//   };

//   return (
//     <section className="w-full bg-white py-20 px-6 md:px-12 text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//         Learners Worldwide Trust <span className="text-learniverse">TheLearniverse</span> to Transform Their Future
//       </h2>

//       <p className="text-gray-500 text-lg mb-10">
//         At TheLearniverse, your learning journey is tailored, hands-on, and supported by a vibrant community.
//       </p>

//       {/* Zoomable Image Container */}
//       <div
//         ref={imageContainerRef}
//         className="relative w-full max-w-5xl h-[400px] mx-auto overflow-hidden rounded-xl border"
//         onMouseLeave={resetZoom}
//       >
//         <img
//           src={worldMap}
//           alt="World map with student locations"
//           className="transition-transform duration-500 ease-in-out w-full h-full object-cover"
//           style={{ transform: transformStyle }}
//         />

//         {/* Hotspot for Dark Blue Ball */}
//         <div
//           className="absolute w-20 h-20 top-[30%] left-[35%] z-10 cursor-pointer"
//           onMouseEnter={() => handleZoom(35, 30)}
//         ></div>

//         {/* Hotspot for Sky Blue Ball */}
//         <div
//           className="absolute w-20 h-20 top-[55%] left-[60%] z-10 cursor-pointer"
//           onMouseEnter={() => handleZoom(60, 55)}
//         ></div>
//       </div>
//     </section>
//   );
// };

// export default GlobalReachSection;


import worldMap from "../assets/images/Blue and Grey World Map Chart Presentation (2).png";

const GlobalReachSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Learners Worldwide Trust <span className="text-learniverse">TheLearniverse</span> to Transform Their Future
      </h2>

      <p className="text-gray-500 text-lg mb-10">
        At TheLearniverse, your learning journey is tailored, hands-on, and
        supported by a vibrant community.
      </p>

      <div className="overflow-hidden w-full max-w-5xl mx-auto">
        <img
          src={worldMap}
          alt="World map with student locations"
          className="transition-transform duration-500 ease-in-out transform hover:scale-105 w-full h-auto"
        />
      </div>
    </section>
  );
};

export default GlobalReachSection;
