import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Description from "./components/Description";
import ProgramCard from "./components/ProgramCard";
import Featured from "./components/Featured";
import Services from "./components/Services";
import FAQSection from "./components/FAQSection";
import Niche from "./components/Niche";
import SectionOne from "./components/SectionOne";
import Testimonial from "./components/Testimonials";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";
import Image3DSlider from "./components/Image3DSlider";
import FloatingSocials from "./components/FloatingSocials";
import GlobalReachSection from "./components/GlobalReachSection";
import HeroSection from "./components/HeroSection";

import Career from "./pages/Career";
import About from "./pages/About";

import "./index.css";

// ✅ Scroll to section if route state has scrollTo
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

// ✅ Scroll to top on load
function ScrollToTopOnLoad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

// ✅ HomePage sections (cleaned)
function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <Marquee />
      <Description />
      <section id="programs">
        <ProgramCard />
      </section>
      <Featured />
      <section id="services">
        <Services />
      </section>
      <GlobalReachSection />
      <FAQSection />
      <Image3DSlider />
      <Testimonial />
      <SectionOne />
      <Niche />
    </>
  );
}

// ✅ Main App
function App() {
  return (
    <div className="w-full min-h-screen text-black">
      <CustomCursor />
      <Background />
      <Navbar />
      <ScrollToTopOnLoad />
      <ScrollHandler />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* ✅ Homepage is root */}
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <FloatingSocials />
    </div>
  );
}

export default App;
