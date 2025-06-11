import { useRef, useState } from "react";
import { GripHorizontal } from "lucide-react"; // Optional: icon from lucide-react

function DraggableShowcase() {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleDrag = (e) => {
    const slider = scrollRef.current;
    let isDown = true;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const mouseMove = (eMove) => {
      if (!isDown) return;
      eMove.preventDefault();
      const x = eMove.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // Drag speed
      slider.scrollLeft = scrollLeft - walk;
    };

    const mouseUp = () => {
      isDown = false;
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  return (
    <div className="w-full py-20 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold px-10 mb-12">
        Whats Happening at Oreo
      </h2>

      <div
        ref={scrollRef}
        onMouseDown={handleDrag}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative cursor-grab active:cursor-grabbing flex gap-10 overflow-x-auto px-10"
      >
        {/* Floating "Drag Me" text/icon */}
        {isHovering && (
          <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-full flex items-center gap-2 animate-pulse z-10">
            <GripHorizontal size={16} /> Drag Me
          </div>
        )}

        {/* Testimonial cards */}
        {[
          {
            title: "Medallia",
            desc:
              "The most impressive thing about Oreo is their attention to detail. The Oreo team tackled our project with unmatched professionalism. They understood our brand and vision, and transformed it into elegant design output that worked across all our client touchpoints. This became our go-to style guide!They didn't just design presentations, they helped us craft a compelling narrative. Their design insight is something we’ve never seen before in our line of work.",
          },
          {
            title: "Planely",
            desc:
              "The Oreo team tackled our project with unmatched professionalism. They understood our brand and vision, and transformed it into elegant design output that worked across all our client touchpoints. This became our go-to style guide!",
          },
          {
            title: "Officevibe",
            desc:
              "The team showed deep understanding of storytelling through slides. Oreo went above and beyond and delivered more than expected. Their support in the strategy meetings made a big difference to the final result.",
          },
          {
            title: "Nestle",
            desc:
              "Amazing experience! As an established company, we need precision and fast turnarounds. Oreo nailed both. Their designs were elegant, effective, and always aligned with our brand language. This partnership will definitely continue.",
          },
          {
            title: "Upcoming Event",
            desc:
              "Recently hosted our annual design summit with Oreo as our lead partner. From pitch decks to keynote presentations, the visual experience they crafted stole the show. Next up: brand film and launch creatives.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="min-w-[400px] md:min-w-[500px] lg:min-w-[550px] bg-zinc-100 p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-zinc-200"
          >
            <h3 className="text-xl font-semibold underline mb-4 text-black">
              {item.title}
            </h3>
            <p className="text-base leading-relaxed text-zinc-700 whitespace-pre-line">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DraggableShowcase;
