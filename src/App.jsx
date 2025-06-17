import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import ProgramCard from "./components/ProgramCard";
import Featured from "./components/Featured";
import Services from "./components/Services";
import HolisticProcess from "./components/HolisticProcess";
import Niche from "./components/Niche";
import SectionOne from "./components/SectionOne";
import Testimonial from "./components/Testimonials";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";
import Image3DSlider from "./components/Image3DSlider";
import FloatingSocials from "./components/FloatingSocials";
import "./index.css";

// adjust the path if needed

function App() {
  return (
    <div className="w-full min-h-screen bg-[] text-black">
      <CustomCursor />
      <Background />
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <ProgramCard />
      <Featured />
      <Services />
      <HolisticProcess />
      <Image3DSlider />
      <Testimonial />
      <SectionOne />
      <Niche />
      <FloatingSocials />
    </div>
  );
}

export default App;
