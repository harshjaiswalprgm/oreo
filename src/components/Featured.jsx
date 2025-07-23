export default function Featured() {
  // Refs
  const refs = Array.from({ length: 6 }, () => (null));

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

  const cardImages = [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFpfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEhSfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHB5dGhvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fDB8fHww",
  ];

  return (
    <div className="w-full py-20 bg-orange-100">
      {/* Section Header */}
      <div className="text-center pb-10">
        <h1 className='text-5xl font-bold relative inline-block'>
       Projects that blend creativity, code, and real-world impact.


          <span className="block h-[3px] bg-orange-400 scale-x-0 hover:scale-x-100 origin-left transition-transform duration-500 mt-2"></span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">These featured projects reflect our students ability to combine innovative thinking with practical development skills. <br/> From intuitive designs to scalable tech solutions, each project is built to solve real problems while showcasing creativity and purpose.</p>
      </div>

      {/* Grid Container */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardImages.map((img, i) => (
          <div
            key={i}
            className="aspect-square w-full rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 bg-white"
            ref={refs[i]}
            onMouseMove={(e) => handleMouseMove(e, refs[i])}
            onMouseLeave={() => handleMouseLeave(refs[i])}
          >
            <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
