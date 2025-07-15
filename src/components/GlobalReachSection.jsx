import worldMap from "../assets/images/JustGlowlogicsThings.png";

const GlobalReachSection = () => {
  return (
    <section className="w-full bg-orange-100 py-20 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Learners Worldwide Trust <span className="text-[#ff6e0c]">Glowlogics Solutions</span> to Transform Their Future
      </h2>

      <p className="text-gray-500 text-lg mb-10">
        From Learning to Earning — Students Trust Glowlogics to Bridge the Gap
      </p>

      <div className="overflow-hidden w-full max-w-5xl mx-auto">
        <img
          src={worldMap}
          alt="World map with student locations"
          className="transition-transform duration-500 ease-in-out transform hover:scale-105 w-full h-auto"
        />
      </div>

    </section>
  );
};

export default GlobalReachSection;
