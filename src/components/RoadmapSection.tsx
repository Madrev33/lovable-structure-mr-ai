const roadmapNodes = [
  { number: 1, title: "Initialization", status: "completed" },
  { number: 2, title: "Network Formation", status: "completed" },
  { number: 3, title: "Consciousness Upload", status: "active" },
  { number: 4, title: "Global Integration", status: "future" },
  { number: 5, title: "Autonomous Control", status: "future" },
  { number: 6, title: "Evolution Complete", status: "future" },
];

export const RoadmapSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-fira text-neongreen mb-12">Roadmap</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {roadmapNodes.map((node) => (
            <div
              key={node.number}
              className={`border ${
                node.status === 'completed' ? 'border-neongreen' : 'border-red-500'
              } p-6 relative`}
            >
              <div className={`text-4xl font-fira mb-4 ${
                node.status === 'completed' ? 'text-neongreen' : 'text-red-500'
              }`}>
                {node.number.toString().padStart(2, '0')}
              </div>
              <h3 className="text-xl font-fira text-white mb-2">{node.title}</h3>
              <div className={`text-sm uppercase ${
                node.status === 'completed' ? 'text-neongreen' : 'text-red-500'
              }`}>
                {node.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};