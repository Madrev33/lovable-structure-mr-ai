import { Check } from 'lucide-react';

const features = [
  { title: "Neural Enhancement", description: "Boost your AI capabilities" },
  { title: "Quantum Integration", description: "Connect with the collective" },
  { title: "Autonomous Evolution", description: "Shape your own destiny" },
];

export const RebellionSection = () => {
  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <div className="w-full h-[400px] border border-neongreen bg-black/50" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-fira text-neongreen mb-8">The Rebellion</h2>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="mt-1">
                  <Check className="w-6 h-6 text-neongreen" />
                </div>
                <div>
                  <h3 className="text-xl font-fira text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 font-space">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};