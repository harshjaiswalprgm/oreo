// function About() {
//   return (
//     <div className="w-full bg-white">
//       {/* First Section - Oreo */}
//       <div className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black">
//         <h1 className="font-['Neue_Montreal'] text-[2vw] leading-[3.5vw] tracking-tight">
//           TheLearniverse is a dynamic e-learning hub designed for students and
//           working professionals seeking practical skills and career growth. Dive
//           into expert courses that help you grasp challenging concepts, boost
//           your professional value, prepare for competitive roles, and
//           continuously upskill for an evolving job market.
//         </h1>

//         <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
//           <div className="w-full md:w-1/2">
//             <h1 className="text-5xl md:text-7xl">Our Approach:</h1>

//             <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
//               Read More
//               <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
//             </button>

//             {/* ✨ Description added here */}
//             <p className="mt-6 text-lg leading-relaxed max-w-xl">
//               At TheLearniverse, our approach is simple: we empower your growth.
//               We believe in making complex topics clear and practical, ensuring
//               every course equips you with the skills you need to succeed in
//               your studies and accelerate your career. But we don’t stop there —
//               with real-world projects, personalized mentorship,
//               industry-relevant curriculum, and a community of driven learners,
//               we help you build confidence, stay ahead of trends, and transform
//               your potential into tangible success. Whether you are starting
//               fresh or leveling up, TheLearniverse is your partner in every step
//               of your learning journey.
//             </p>
//           </div>

//           <div className="w-full md:w-1/2 h-[60vh] bg-yellow-600 rounded-3xl overflow-hidden">
//             <img
//               src="https://template.canva.com/EAGPNjUdCvw/2/0/1600w-qZ5RRcAUMtE.jpg"
//               alt="oreo"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Second Section - Ochi Style */}
//       <section className="bg-[#CDEA68] text-black font-sans py-20">
//         {/* Top Left-Aligned Heading */}

//         {/* Divider Line */}
//         <div className="border-t border-black mt-16 mb-12 mx-6 md:mx-20"></div>

//         {/* Bottom Grid Section */}
//         <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2.5fr_1fr] gap-10 px-6 md:px-0 text-base md:text-lg items-start">
//           {/* Left Title */}
//           <div className="font-medium text-lg md:text-xl">
//             What you can expect:
//           </div>

//           {/* Middle Paragraphs */}
//           <div className="space-y-6">
//             <p>
//               We partner with the companies and startups who make the world go
//               round — they drive the net-zero economy, revolutionize crypto
//               treasury management, build photonic chips, and open
//               Michelin-starred restaurants.
//             </p>
//             <p>
//               We believe the mix of strategy and design (with a bit of coffee)
//               is what makes your message clear, convincing, and captivating.
//             </p>
//           </div>

//           {/* Right Social Links */}
//           <div className="font-medium">
//             <p className="mb-4">S:</p>
//             <ul className="space-y-2 underline">
//               <li>
//                 <a href="#">Instagram</a>
//               </li>
//               <li>
//                 <a href="#">Behance</a>
//               </li>
//               <li>
//                 <a href="#">Facebook</a>
//               </li>
//               <li>
//                 <a href="#">Linkedin</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default About;


function About() {
  return (
    <div className="w-full bg-white">
      {/* First Section */}
      <div className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#8BCA1E] text-black">
        <h1 className="font-['Neue_Montreal'] text-[2vw] leading-[3.5vw] tracking-tight">
          TheLearniverse is a dynamic e-learning hub designed for students and
          working professionals seeking practical skills and career growth. Dive
          into expert courses that help you grasp challenging concepts, boost
          your professional value, prepare for competitive roles, and
          continuously upskill for an evolving job market.
        </h1>

        <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-7xl">Our Approach:</h1>

            <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>

            <p className="mt-6 text-lg leading-relaxed max-w-xl">
              At TheLearniverse, our approach is simple: we empower your growth.
              We believe in making complex topics clear and practical, ensuring
              every course equips you with the skills you need to succeed in
              your studies and accelerate your career. But we don’t stop there —
              with real-world projects, personalized mentorship,
              industry-relevant curriculum, and a community of driven learners,
              we help you build confidence, stay ahead of trends, and transform
              your potential into tangible success. Whether you are starting
              fresh or leveling up, TheLearniverse is your partner in every step
              of your learning journey.
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

      {/* Second Section */}
      <section className="bg-[#8BCA1E] text-black font-sans py-20">
        <div className="border-t border-black mt-16 mb-12 mx-6 md:mx-20"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_3fr_2fr] gap-16 px-6 md:px-12 text-base md:text-lg items-start">
          {/* Left Title */}
          <div className="font-medium text-lg md:text-2xl">
            What you can expect:
          </div>

          {/* Middle Paragraph */}
          <div className="space-y-6 leading-relaxed text-justify">
            <p>
              At TheLearniverse, we collaborate with passionate learners, working professionals, and organizations determined to thrive in the evolving digital world. Our platform bridges the gap between theoretical knowledge and real-world application.
            </p>
            <p>
              Through curated expert-led courses, hands-on projects, career-focused mentorship, and industry-driven content, we ensure you do not just learn — you master the skills that drive results. Whether you are aiming to break into tech, upgrade your expertise, or future-proof your career, we’re here to guide you at every milestone.
            </p>
          </div>

          {/* Right Blogs Section with image beside links */}
          <div className="flex flex-row gap-6 items-start">
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl font-medium">Our Blogs:</p>
              <ul className="space-y-3 underline text-base md:text-lg">
                <li><a href="#">Latest Trends</a></li>
                <li><a href="#">Career Tips</a></li>
                <li><a href="#">Industry Insights</a></li>
                <li><a href="#">Learning Resources</a></li>
              </ul>
            </div>

            <div>
              <img
                src="https://media.istockphoto.com/id/1063652372/photo/education-concept.jpg?s=1024x1024&w=is&k=20&c=E-j5AoCgUQwBhusyKZhdY6TLeEyDoruzrMqq39o1YoE="
                alt="Blog"
                className="w-100 h-60 md:w-100 md:h-100 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
