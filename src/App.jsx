import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import ProgramCard from "./components/ProgramCard";
import Featured from "./components/Featured";
import Services from "./components/Services";
import ClientReviews from "./components/ClientReviews";
import Glnumbers from "./components/Glnumbers";
import HolisticProcess from "./components/HolisticProcess";
import Niche from "./components/Niche";
import Aabout from "./components/Aabout";
import SectionOne from "./components/SectionOne";
import Testimonial from "./components/Testimonials";
import Background from "./components/Background";
import './index.css';


// adjust the path if needed

function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Background />
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <ProgramCard />
      <Featured />
      <Services />
      <ClientReviews />
      <Glnumbers />
      <HolisticProcess />
      <Aabout />
      <Testimonial />
      <SectionOne />
      <Niche />
    </div>
  );
}

export default App;
