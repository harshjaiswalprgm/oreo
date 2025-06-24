import { useRef } from "react";

export default function Featured() {
  // Refs for each card
  const leftRef1 = useRef(null);
  const rightRef1 = useRef(null);
  const leftRef2 = useRef(null);
  const rightRef2 = useRef(null);
  const leftRef3 = useRef(null);
  const rightRef3 = useRef(null);

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  const renderCardBlock = (leftRef, rightRef) => (
    <div className="cards w-full flex gap-10 mt-10">
      <div className="cardcontainer relative w-1/2 h-[75vh]">
        <div
          ref={leftRef}
          className="card w-full h-full rounded-xl overflow-hidden transition-transform duration-200 ease-out"
          onMouseMove={(e) => handleMouseMove(e, leftRef)}
          onMouseLeave={() => handleMouseLeave(leftRef)}
        >
          <img
            className="w-full h-full bg-cover"
            src="https://template.canva.com/EAFqjszhz0k/2/0/1600w-Tk7BT3Fzhro.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="cardcontainer relative w-1/2 h-[75vh]">
        <div
          ref={rightRef}
          className="card w-full h-full rounded-xl overflow-hidden transition-transform duration-200 ease-out"
          onMouseMove={(e) => handleMouseMove(e, rightRef)}
          onMouseLeave={() => handleMouseLeave(rightRef)}
        >
          <img
            className="w-full h-full bg-cover"
            src="https://template.canva.com/EAEuzgGlyLs/2/0/1600w-xUKm4LDWVYc.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full py-20">
      {/* Heading */}
      <div className="w-full px-20 border-white pb-10 group">
        <h1 className='text-6xl font-["Neue_Montreal"] relative inline-block'>
          Featured projects
          {/* Animated underline on hover */}
          <span className="block h-[2px] bg-[#CDEA68] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 mt-2"></span>
        </h1>

        {/* Subtle horizontal line below heading */}
        <div className="border-t border-black/30 mx-6 md:mx-20 mb-12 mt-6"></div>
      </div>

      {/* Three card blocks */}
      <div className="px-20">{renderCardBlock(leftRef1, rightRef1)}</div>
      <div className="px-20">{renderCardBlock(leftRef2, rightRef2)}</div>
      <div className="px-20">{renderCardBlock(leftRef3, rightRef3)}</div>
    </div>
  );
}
