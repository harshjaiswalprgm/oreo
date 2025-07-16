import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    const routePages = [
      "career",
      "about",
      "eventhub",
      "legal-terms",
      "privacy-policy",
    ];

    if (routePages.includes(id)) {
      navigate(`/${id}`);
    } else if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <section className="w-full bg-[#ff6e0c] text-black px-6 md:px-16 py-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Glowlogics <br /> Solutions
            </h2>

            <div className="overflow-hidden rounded-2xl shadow-lg border border-black max-w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62221.787564953855!2d77.59426133913958!3d12.916607633426603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15005309cf71%3A0x2f15b757ea19a355!2sGlowlogics%20Solutions!5e0!3m2!1sen!2sin!4v1751121448545!5m2!1sen!2sin"
                width="100%"
                height="300"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Right Columns */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10 text-sm">
            {/* Column 1: Contact Info */}
            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-1">Social Media:</p>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://www.instagram.com/glowlogics/"
                      className="underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-1 text-base">Branch 1: Bengaluru</p>
                <ul className="space-y-1 break-words">
                  <li>
                    <a href="#" className="underline">
                      Shree Narayana Tower, HSR Layout
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Outer Ring Rd
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Jakkasandra, 1st Block Koramangala
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Bengaluru, Karnataka 560034
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-1">Mail:</p>
                <a href="mailto:hr@glowlogics.in" className="underline">
                  hr@glowlogics.in
                </a>
              </div>

              <div>
                <p className="font-semibold mb-1">Phone no.:</p>
                <a href="tel:+919620294767" className="underline">
                  +91 9620294767
                </a>
              </div>
            </div>



            {/* Column 4: Branch 2 */}
            <div>
              <div>
                <p className="font-semibold mb-1 text-base">Branch 2: Mangaluru</p>
                <ul className="space-y-1 break-words">
                  <li>
                    <a href="#" className="underline">
                      1st floor, Ekka complex,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      4-59/9, nagori, Shanthi Nagar,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Mangaluru,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Karnataka 575002
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <br />
              </div>

              {/* <div>
                <p className="font-semibold mb-1 text-base">Branch 3:</p>
                <ul className="space-y-1 break-words">
                  <li>
                    <a href="#" className="underline">
                      1st floor, Ekka complex,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      4-59/9, nagori, Shanthi Nagar,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Mangaluru,
                    </a>
                  </li>
                  <li>
                    <a href="#" className="underline">
                      Karnataka 575002
                    </a>
                  </li>
                </ul>
              </div> */}

            </div>
             {/* Column 2: Menu */}
            <div className="space-y-4">
              <p className="font-semibold mb-1">Pages:</p>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleNavClick("home")}
                    className="underline text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("programs")}
                    className="underline text-left"
                  >
                    Programs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("services")}
                    className="underline text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("career")}
                    className="underline text-left"
                  >
                    Career
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("about")}
                    className="underline text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("eventhub")}
                    className="underline text-left"
                  >
                    EventHub
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Explore */}
            <div className="space-y-4">
              <p className="font-semibold mb-1">Explore more:</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="underline">
                    Latest Tech Trends
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Career Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Industry Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Learning Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-black/20 pt-6 text-sm">
          <p className="text-center">
            © GlowLogics Solutions All Rights Reserved{" "}
            <button
              onClick={() => handleNavClick("legal-terms")}
              className="underline"
            >
              Legal Terms
            </button>{" "}
            |{" "}
            <button
              onClick={() => handleNavClick("privacy-policy")}
              className="underline"
            >
              Privacy Policy
            </button>
          </p>
          <p className="text-center">Website by Glowlogics</p>
        </div>
      </div>
    </section>
  );
}
