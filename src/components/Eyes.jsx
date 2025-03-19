function Eyes() {
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute top-1/2 flex gap-10 left-1/2 -translate-x-[50%] -translate-y-[50%]   ">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white bg-zinc-100">
            <div className="w-2/3 h-2/3  flex items-center justify-center rounded-full  bg-black bg-zinc-900">
              <div className="w-1/4  h-1/4 rounded-full bg-zinc-100"></div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white bg-zinc-100">
            <div className="w-2/3 h-2/3  flex items-center justify-center rounded-full  bg-black bg-zinc-900">

            <div className="w-1/4  h-1/4 rounded-full bg-zinc-100"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Eyes;
