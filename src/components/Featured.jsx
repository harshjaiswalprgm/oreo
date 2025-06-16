export default function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-white pb-20">
        <h1 className='text-6xl font-["Neue_Montreal"]'>Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute text-[#CDEA68] z-[9] left-full -translate-x-1/2 top-1/2 -translate-1/2 leading-none tracking-tighter text-8xl">
              Glowlogics
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full  bg-cover"
                src="https://template.canva.com/EAFqjszhz0k/2/0/1600w-Tk7BT3Fzhro.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <h1 className="absolute text-[#CDEA68] z-[9] right-full translate-x-1/2 top-1/2 -translate-1/2 leading-none tracking-tighter text-8xl">
                TheLearniverse
              </h1>
              <img
                className="w-full h-full  bg-cover"
                src="https://template.canva.com/EAEuzgGlyLs/2/0/1600w-xUKm4LDWVYc.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
