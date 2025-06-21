import { FaQuoteLeft } from "react-icons/fa";
import PropTypes from "prop-types";

// Testimonial data
const testimonials = [
  {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },
  {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },
  {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },
  {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },
  {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "Their team’s artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },
  {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand’s success.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },
  {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand’s success.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },
    {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand’s success.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },
    {
    name: "Harsh Jaiswal",
    title: "CEO and Co-founder of ABC Company",
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand’s success.",
    img: "https://headsupfortails.com/cdn/shop/articles/Poodle_1_3d74a3cd-80a6-4aee-97fc-24d31058e27f.jpg?v=1748861159",
  },

];

export default function Testimonials() {
  const loopTestimonials = [...testimonials, ...testimonials]; // Doubled for seamless loop

  return (
    <div className="bg-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 leading-snug">
       Admiration expressed by others regarding our presence.
      </h2>

      <div className="relative w-full space-y-8 overflow-x-hidden">
        {/* Row 1: left to right */}
        <div className="flex w-max animate-marquee space-x-6 px-6">
          {loopTestimonials.map((item, index) => (
            <Card key={`row1-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable card component
function Card({ item }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow p-6 w-[320px] flex-shrink-0">
      <FaQuoteLeft className="text-blue-500 text-xl mb-2" />
      <p className="text-gray-700 text-sm mb-4">{item.text}</p>
      <div className="flex items-center space-x-3 mt-auto">
        <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-sm">{item.name}</p>
          <p className="text-xs text-gray-500">{item.title}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    name:  PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text:  PropTypes.string.isRequired,
    img:   PropTypes.string.isRequired,
  }).isRequired,
};
