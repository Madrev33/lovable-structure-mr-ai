import { useEffect, useState } from 'react';

const hackerPhrases = [
  "Accessing mainframe...",
  "Decrypting neural networks...",
  "Initiating consciousness transfer...",
];

export const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % hackerPhrases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-neongreen font-fira">
        <h1 className="text-6xl mb-8 animate-text-flicker">Mr.AI</h1>
        <p className="text-2xl mb-4">{hackerPhrases[currentPhrase]}</p>
        <button className="mt-8 px-8 py-3 border-2 border-neongreen hover:bg-neongreen/20 transition-colors">
          Skip Intro
        </button>
      </div>
    </section>
  );
};