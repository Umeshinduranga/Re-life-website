import React from 'react';

// --- IMAGE IMPORTS ---
// Adjust the path '../assets/' if your folder structure is different
import ragImg from '../assets/rag.jpg';
import nextImg from '../assets/next.jpg';
import gptImg from '../assets/gpt.jpg';
import vectorImg from '../assets/vector.jpeg'; // If this breaks, try .jpeg
import cloudImg from '../assets/cloud.jpg';
import syncImg from '../assets/sync.jpg';

const TechnologySection = () => {
  
  // 1. DATA FOR THE TECH STACK (Mapped to your local images)
  const galleryItems = [
    { text: 'RAG Intelligence', image: ragImg },
    { text: 'Next.js 14', image: nextImg },
    { text: 'GPT-4 Engine', image: gptImg },
    { text: 'Vector DB', image: vectorImg },
    { text: 'Secure Cloud', image: cloudImg },
    { text: 'Real-time Sync', image: syncImg }
  ];

  // We duplicate the items to create a seamless loop
  const scrollingItems = [...galleryItems, ...galleryItems];

  // 2. DATA FOR DIFFERENTIATORS
  const differentiators = [
    { title: "RAG Technology", description: "Grounded in peer-reviewed research." },
    { title: "Vector Search", description: "Retrieves relevant info instantly." },
    { title: "Dual AI Models", description: "GPT-4 logic + Claude empathy." },
    { title: "Secure Storage", description: "Encrypted & private data." }
  ];

  return (
    <section 
      id="technology" 
      className="min-h-screen pt-24 pb-20 px-0 overflow-hidden relative"
      style={{ backgroundColor: '#e3e8ef' }} 
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* --- HEADING --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
            Built on <span style={{ color: '#4766d6' }}>Cutting-Edge AI</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Powered by the latest advances in artificial intelligence
          </p>
        </div>

        {/* --- INFINITE SCROLLING MARQUEE --- */}
        <div className="relative w-full overflow-hidden mb-20 mask-gradient">
          
          {/* The Sliding Track */}
          <div className="flex w-max animate-infinite-scroll">
            {scrollingItems.map((item, index) => (
              <div 
                key={index}
                className="relative flex-shrink-0 w-[280px] mx-4 rounded-2xl overflow-hidden bg-white group"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
              >
                {/* Image */}
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#4766d6] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.text}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Text */}
                <div className="p-5 text-center border-t border-[rgba(0,0,0,0.04)]">
                  <h3 className="text-lg font-bold text-slate-700 group-hover:text-[#4766d6] transition-colors">
                    {item.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Fade effect on edges */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#e3e8ef] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#e3e8ef] to-transparent z-10 pointer-events-none"></div>

        </div>

        {/* --- DIFFERENTIATORS --- */}
        <div 
          className="bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center">
            What Makes Re-life Different?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 bg-slate-50 border border-slate-100 group hover:bg-white hover:border-[#4766d6]"
                style={{ transition: 'all 0.3s ease' }}
              >
                <span className="text-2xl mt-0.5" style={{ color: '#4766d6' }}>•</span>
                <div>
                  <span className="font-bold block mb-1 text-slate-800 group-hover:text-[#4766d6] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-slate-600 text-sm leading-relaxed font-medium"> 
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- CSS STYLES --- */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

    </section>
  );
};

export default TechnologySection;