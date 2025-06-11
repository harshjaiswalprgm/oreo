function About() {
  return (
    <div className="w-full bg-white">
      {/* First Section - Oreo */}
      <div className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black">
        <h1 className="font-['Neue_Montreal'] text-[2vw] leading-[3.5vw] tracking-tight">
          TheLearniverse is a dynamic e-learning hub designed for students and working professionals seeking practical skills and career growth. Dive into expert courses that help you grasp challenging concepts, boost your professional value, prepare for competitive roles, and continuously upskill for an evolving job market.
        </h1>

        <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-7xl">Our Approach:</h1>

            <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>

            {/* ✨ Description added here */}
            <p className="mt-6 text-lg leading-relaxed max-w-xl">
  At TheLearniverse, our approach is simple: we empower your growth. We believe in making complex topics clear and practical, ensuring every course equips you with the skills you need to succeed in your studies and accelerate your career.


</p>
          </div>

          <div className="w-full md:w-1/2 h-[60vh] bg-yellow-600 rounded-3xl overflow-hidden">
            <img
              src="https://template.canva.com/EAGPNjUdCvw/2/0/1600w-qZ5RRcAUMtE.jpg"
              alt="oreo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Second Section - Ochi Style */}
      <section className="bg-[#CDEA68] text-black font-sans py-20">
        {/* Top Left-Aligned Heading */}
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight max-w-5xl pl-4 md:pl-12">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to{" "}
            <span className="underline">raise funds</span>,{" "}
            <span className="underline">sell products</span>,{" "}
            <span className="underline">explain complex ideas</span>, and{" "}
            <span className="underline">hire great people</span>.
          </h1>
        </div>

        {/* Divider Line */}
        <div className="border-t border-black mt-16 mb-12 mx-6 md:mx-20"></div>

        {/* Bottom Grid Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 md:px-0 text-base md:text-lg">
          <div className="font-medium">What you can expect:</div>

          <div className="col-span-1 md:col-span-1 space-y-6">
            <p>
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>

          <div className="col-span-1">
            <p className="font-medium">S:</p>
            <ul className="space-y-1 underline">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Behance</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
