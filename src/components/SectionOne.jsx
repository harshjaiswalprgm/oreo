const AboutSection = () => {
  return (
    <section className="bg-[#e9ff4c] text-black font-sans py-20">

      {/* Top Section - Sticks to Left */}
      <div className="w-full">
        <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight max-w-4xl pl-4 md:pl-12">
          Ochi is a strategic presentation agency for forward-thinking businesses that need to{' '}
          <span className="underline">raise funds</span>,{' '}
          <span className="underline">sell products</span>,{' '}
          <span className="underline">explain complex ideas</span>, and{' '}
          <span className="underline">hire great people</span>.
        </h1>
      </div>

      {/* Divider Line */}
      <div className="border-t border-black mt-16 mb-12 mx-6 md:mx-20"></div>

      {/* Bottom Section - Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 md:px-0 text-base md:text-lg">
        <div className="font-medium">What you can expect:</div>

        <div className="col-span-1 md:col-span-1 space-y-6">
          <p>
            We partner with the companies and startups who make the world go round — they drive the
            net-zero economy, revolutionize crypto treasury management, build photonic chips, and
            open Michelin-starred restaurants.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is what makes your
            message clear, convincing, and captivating.
          </p>
        </div>

        <div className="col-span-1">
          <p className="font-medium">S:</p>
          <ul className="space-y-1 underline">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
