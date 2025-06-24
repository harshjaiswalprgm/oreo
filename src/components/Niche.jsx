export default function Footer() {
  return (
    <section className="w-screen min-h-screen bg-[#FFA500]  text-black px-6 md:px-24 py-20 font-sans flex flex-col justify-between">

      {/* Top Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

        {/* Left: Brand / Tagline */}
        <div className="text-6xl md:text-7xl font-extrabold leading-none">
          <p>Glowlogics</p>
        </div>

        {/* Middle: Socials, Location, Contact */}
        <div className="text-sm space-y-10">
          <div>
            <p className="font-semibold mb-2">S:</p>
            <ul className="space-y-1">
              <li><a href="#" className="underline">Instagram</a></li>
              <li><a href="#" className="underline">Behance</a></li>
              <li><a href="#" className="underline">Facebook</a></li>
              <li><a href="#" className="underline">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">L:</p>
            <ul className="space-y-1">
              <li><a href="#" className="underline">Outer ring road</a></li>
              <li><a href="#" className="underline">Near Eye Devi Hospital</a></li>
              <li><a href="#" className="underline">Beside MRP</a></li>
              <li><a href="#" className="underline">Bengluru,Karnatka</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">E:</p>
            <p><a href="mailto:hello@ochi.design" className="underline">hr@glowlogics.in</a></p>
          </div>

          <div>
            <p className="font-semibold mb-2">P:</p>
            <p><a href="tel:+1234567890" className="underline">+91 9794545008</a></p>
          </div>
        </div>

        {/* Right: Menu & Newsletter (optional) */}
        <div className="text-sm space-y-6">
          <div>
            <p className="font-semibold mb-2">M:</p>
            <ul className="space-y-1">
              <li><a href="#" className="underline">Home</a></li>
              <li><a href="#" className="underline">Services</a></li>
              <li><a href="#" className="underline">Our Work</a></li>
              <li><a href="#" className="underline">About Us</a></li>
              <li><a href="#" className="underline">Insights</a></li>
              <li><a href="#" className="underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Subscribe to our newsletter:</p>
            <form className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-black text-white text-xs rounded-md hover:bg-gray-800">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between text-xs text-black-500 gap-4">
        <p>© TheLearniverse design 2025. <a href="#" className="underline">Legal Terms</a> | <a href="#" className="underline">Privacy Policy</a></p>
        <p>Website by Glowlogics</p>
      </div>
    </section>
  );
}
