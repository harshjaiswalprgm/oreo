const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] text-black px-8 py-20 font-sans">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Side - The Learniverse */}
        <div className="text-[6rem] md:text-[7rem] leading-[1] font-extrabold tracking-tight md:w-1/2">
          <p>The</p>
          <p>Learniverse</p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col gap-12 mt-12 md:mt-0">
          {/* Title */}
          <h1 className="text-[4rem] font-bold leading-none">PRESENTATIONS</h1>

          {/* Sections */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-14 text-[1.25rem]">
            {/* Social */}
            <div>
              <h4 className="font-semibold text-lg mb-3">S:</h4>
              <ul className="space-y-2">
                <li><a href="#" className="underline hover:opacity-70">Instagram</a></li>
                <li><a href="#" className="underline hover:opacity-70">Behance</a></li>
                <li><a href="#" className="underline hover:opacity-70">Facebook</a></li>
                <li><a href="#" className="underline hover:opacity-70">LinkedIn</a></li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-semibold text-lg mb-3">L:</h4>
              <p>202-1965 W 4th Ave<br /><a href="#" className="underline">Vancouver, Canada</a></p>
              <br />
              <p>30 Chukarina St<br /><a href="#" className="underline">Lviv, Ukraine</a></p>
            </div>

            {/* Email */}
            <div>
              <h4 className="font-semibold text-lg mb-3">E:</h4>
              <a href="mailto:thelearniverse@gmail.com" className="underline">thelearniverse@gmail.com</a>
            </div>

            {/* Menu */}
            <div>
              <h4 className="font-semibold text-lg mb-3">M:</h4>
              <ul className="space-y-2">
                <li><a href="#" className="underline">Home</a></li>
                <li><a href="#" className="underline">Services</a></li>
                <li><a href="#" className="underline">Our work</a></li>
                <li><a href="#" className="underline">About us</a></li>
                <li><a href="#" className="underline">Insights</a></li>
                <li><a href="#" className="underline">Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-20 text-base text-gray-600 w-full flex justify-between items-center border-t pt-6">
        <span>© TheLearniverse 2025. <a href="#" className="underline">Legal Terms</a></span>
        <span className="text-right">Website by TheLearniverse</span>
      </div>
    </footer>
  );
};

export default Footer;
