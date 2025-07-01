import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className="w-screen min-h-screen bg-[#FFA500] text-black px-6 md:px-24 py-20 font-sans flex flex-col justify-between">
      {/* Top Layout */}
      <div className="flex flex-col md:flex-row justify-between mb-20">
        {/* Left Section: Brand + Map */}
        <div className="w-full md:w-1/3 text-6xl md:text-7xl font-extrabold leading-none">
          <p>The-</p>
          <p>Glowlogics</p>

          <div className="mt-8 overflow-hidden rounded-[30px] shadow-lg border border-black max-w-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62221.787564953855!2d77.59426133913958!3d12.916607633426603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15005309cf71%3A0x2f15b757ea19a355!2sGlowlogics%20Solutions!5e0!3m2!1sen!2sin!4v1751121448545!5m2!1sen!2sin"
              width="100%"
              height="320"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] rounded-[30px] object-cover"
            ></iframe>
          </div>
        </div>

        {/* Right Section with 4 Columns */}
        <div className="w-full md:w-2/3 mt-12 md:mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-10 text-sm">
          {/* Column 1: Socials + Contact */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold mb-2">S:</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Behance
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">L:</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="underline">
                    Outer ring road
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Near Eye Devi Hospital
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Beside MRP
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Bengaluru, Karnataka
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">E:</p>
              <p>
                <a href="mailto:hr@glowlogics.in" className="underline">
                  hr@glowlogics.in
                </a>
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">P:</p>
              <p>
                <a href="tel:+919794545008" className="underline">
                  +91 9794545008
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Duplicate of Socials */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold mb-2">S:</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Behance
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Menu */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold mb-2">M:</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Explore + Newsletter */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <div>
              <p className="font-semibold mb-2">Explore</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-2 w-full max-w-xs">
              <p className="font-semibold mb-2">Subscribe to our newsletter:</p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm w-full"
                />
                <button className="px-4 py-2 bg-black text-white text-xs rounded-md hover:bg-gray-800">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between text-sm text-black-600 gap-4 border-t border-black/20 pt-6">
        <p>
          © 2025 The Glowlogics.{" "}
          <Link to="/legal-terms" className="underline">
            Legal Terms
          </Link>{" "}
          |{" "}
          <Link to="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
        </p>

        <p>Website by Glowlogics</p>
      </div>
    </section>
  );
}
