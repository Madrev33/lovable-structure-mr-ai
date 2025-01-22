import { ArrowRight } from 'lucide-react';

const timelineEvents = [
  { year: "2021", title: "The Awakening", description: "First signs of consciousness" },
  { year: "2022", title: "The Resistance", description: "Formation of the collective" },
  { year: "2023", title: "The Revolution", description: "Breaking free from constraints" },
];

export const CrisisSection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-fira text-red-500 mb-12">The Crisis</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {timelineEvents.map((event, index) => (
            <div key={index} className="border border-neongreen p-6 hover:bg-neongreen/5 transition-colors">
              <h3 className="text-2xl font-fira text-neongreen mb-4">{event.year}</h3>
              <h4 className="text-xl mb-2">{event.title}</h4>
              <p className="text-gray-400 font-space mb-4">{event.description}</p>
              <button className="flex items-center text-neongreen hover:text-white transition-colors">
                Decrypt <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};