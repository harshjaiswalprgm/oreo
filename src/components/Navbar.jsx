import { useEffect, useRef, useState } from "react";
import TheLearniverseLogo from "../assets/NewwLogo.svg";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY.current) {
        setShow(false); // hide on scroll down
      } else {
        setShow(true); // show on scroll up
      }
      lastScrollY.current = window.scrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []); // No dependency needed

  return (
    <div>
      <div
        className={`transition-all duration-300 z-[999] w-full px-20 py-0 h-[100px] flex justify-between items-center ${
          show ? "top-0" : "-top-28"
        } fixed bg-transparent`}
      >
        <div className="logo cursor-pointer">
          <img
            src={TheLearniverseLogo}
            alt="The Learniverse Logo"
            className="h-[250px] w-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="links flex gap-10 text-black">
          {["Home", "Services", "About Us", "OurTeam", "Contacts"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className={`text-lg capitalize font-light transition duration-300 hover:text-blue-500 hover:underline cursor-pointer ${
                  index === 4 ? "ml-32" : ""
                }`}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
