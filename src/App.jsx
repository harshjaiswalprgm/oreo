// import Navbar from "./components/Navbar";
// // import LandingPage from "./components/LandingPage";
// import Marquee from "./components/Marquee";
// import About from "./components/About";
// import ProgramCard from "./components/ProgramCard";
// import Featured from "./components/Featured";
// import Services from "./components/Services";
// import FAQSection from "./components/FAQSection";
// import Niche from "./components/Niche";
// import SectionOne from "./components/SectionOne";
// import Testimonial from "./components/Testimonials";
// import Background from "./components/Background";
// import CustomCursor from "./components/CustomCursor";
// import Image3DSlider from "./components/Image3DSlider";
// import FloatingSocials from "./components/FloatingSocials";
// import GlobalReachSection from "./components/GlobalReachSection";
// import HeroSection from "./components/HeroSection";

// import "./index.css";
// // import TermsPage from "./pages/TermsPage";
// // import ML from "./pages/ML";
// import Career from "./pages/Career";

// function App() {
//   return (
//     <div className="w-full min-h-screen bg-[] text-black">
//       <CustomCursor />
//       <Background />
//       <Navbar />
//       <HeroSection />
//       {/* <LandingPage /> */}
//       <Marquee />
//       <About />
//       <ProgramCard />
//       <Featured />
//       <Services />
//       <GlobalReachSection />
//       <FAQSection />
//       <Image3DSlider />
//       <Testimonial />
//       <SectionOne />
//       <Niche />
//       <FloatingSocials />
//       {/* <ML /> */}
//       <Career />

//       {/* <TermsPage /> */}
//     </div>
//   );
// }


// export default App;



import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import About from "./components/About";
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
import Career from "../src/pages/Career";

import "./index.css";

function App() {
  return (
    <div className="w-full min-h-screen bg-[] text-black">
      <CustomCursor />
      <Background />
      <Navbar />

      {/* Scrollable Sections */}
      <section id="home">
        <HeroSection />
      </section>

      <Marquee />
      <About />

      <section id="programs">
        <ProgramCard />
      </section>

      <Featured />

      <section id="services">
        <Services />
      </section>

      {/* Other Components */}
      <GlobalReachSection />
      <FAQSection />
      <Image3DSlider />
      <Testimonial />
      <SectionOne />
      <Niche />
      <Career />
      <FloatingSocials />
    </div>
  );
}

export default App;
