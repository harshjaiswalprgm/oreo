const stats = [
  {
    number: "100+",
    description: "Students from different States",
  },
  {
    number: "5500+",
    description: "Students get their jobs",
  },
  {
    number: "90%",
    description: "Of our students are already placed",
  },
  {
    number: "98%",
    description: "Net Traning Score",
  },
];

const OchiStats = () => {
  return (
    <section className="bg-gray-100 px-8 py-16">
      <h2 className="text-2xl font-medium mb-8 text-black">
        TheLearniverse in numbers:
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-200 p-6 rounded-lg flex flex-col justify-between"
          >
            <h3 className="text-4xl font-bold text-black">{item.number}</h3>
            <p className="text-sm text-black mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OchiStats;
