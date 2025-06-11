export default function Services() {
  return (
    <div className="bg-white text-black px-8 md:px-20 py-12">
      {/* Header */}
      <h1 className="text-6xl md:text-7xl font-extrabold mb-12">SERVICES</h1>

      {/* Main Statement */}
      <p className="text-3xl md:text-4xl font-light mb-16 leading-snug max-w-5xl">
        We create <span className="underline">eye-catching</span> and <span className="underline">eye-opening</span> presentations that educate, inspire and influence action.
      </p>

      {/* Approach Section */}
      <div className="text-lg mb-8">
        <p className="text-gray-800">We do this by following<br />simple approach:</p>
      </div>

      {/* Grid for 3 Services */}
      <div className="grid md:grid-cols-3 gap-10 text-base text-gray-900">
        {/* Card 1 */}
        <div>
          <h3 className="font-semibold underline mb-2">Goal defines it all</h3>
          <p>
            What do you want to achieve? Understanding the purpose of your presentation allows us to tailor it to ensure it hits the mark and drives results.
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <h3 className="font-semibold underline mb-2">Audience is the hero</h3>
          <p>
            Who is it for? What do they want? Why does it matter to them? We need to know your audience to build an impactful narrative.
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <h3 className="font-semibold underline mb-2">Context makes a difference</h3>
          <p>
            When do you present? Online or live? At a sales meeting, at a conference, or just sending a cold email? We knit the context together to decide the style of the presentation.
          </p>
        </div>
      </div>
    </div>
  );
}
