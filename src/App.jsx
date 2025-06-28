// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Navbar from "./components/Navbar";
// import LandingPage from "./components/LandingPage";
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

import "./index.css";
// import TermsPage from "./pages/TermsPage";
// import ML from "./pages/ML";
import Career from "./pages/Career";

function App() {
  return (
    <div className="w-full min-h-screen bg-[] text-black">
      <CustomCursor />
      <Background />
      <Navbar />
      <HeroSection />
      {/* <LandingPage /> */}
      <Marquee />
      <About />
      <ProgramCard />
      <Featured />
      <Services />
      <GlobalReachSection />
      <FAQSection />
      <Image3DSlider />
      <Testimonial />
      <SectionOne />
      <Niche />
      <FloatingSocials />
      {/* <ML /> */}
      <Career />

      {/* <TermsPage /> */}
    </div>
  );
}

// function Home() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/terms" element={<TermsPage />} />
//       </Routes>
//     </Router>
//   );
// }

export default App;
