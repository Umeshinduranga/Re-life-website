import React, { useEffect, useRef } from 'react';
import { BsChatDots, BsBook } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';
import { FiArrowRight } from 'react-icons/fi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { TbPill } from 'react-icons/tb';
import { BiDevices } from 'react-icons/bi';

// Assuming you have the image in your assets folder
import bgImage from '../assets/calmmind.jpg'; 

const SolutionSection = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  // Parallax Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const speed = 0.5; // Adjusts how fast the background moves (0.5 = half scroll speed)
      
      // Only animate when the section is near or in the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Calculate the offset based on the section's position relative to the viewport
        const offset = (window.innerHeight - rect.top) * speed;
        bgRef.current.style.transform = `translateY(${offset - 200}px)`; // -200 is an initial offset to center image
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: <BsChatDots className="text-4xl" />,
      title: "You Share Your Story",
      description: "Your thoughts, struggles, and recovery journey"
    },
    {
      icon: <HiSparkles className="text-4xl" />,
      title: "AI RAG-Based Analyzes",
      description: "Context-aware processing with RAG technology                  "
    },
    {
      icon: <BsBook className="text-4xl" />,
      title: "Evidence-Based Response",
      description: "Grounded in clinical research and recovery"
    }
  ];

  const addictionTypes = [
    {
      icon: <TbPill className="text-2xl" />,
      label: "Drug Addiction"
    },
    {
      icon: <BiDevices className="text-2xl" />,
      label: "Social media Addiction"
    },
    {
      icon: <MdOutlineHealthAndSafety className="text-2xl" />,
      label: "Pornography Addiction"
    }
  ];

  return (
    <section 
      id="solution" 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-24 pb-24 px-6"
    >
      {/* --- PARALLAX BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div 
          ref={bgRef}
          className="absolute w-full h-[140%] top-[-20%] left-0 bg-cover bg-center will-change-transform"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            // Fallback color if image doesn't load
            backgroundColor: '#000' 
          }}
        ></div>
        {/* Dark Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
      </div>

      {/* --- CONTENT (Z-Index 20 to sit above overlay) --- */}
      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            MEET RE-LIFE, YOUR PERSONAL
            <br />
            RECOVERY AI
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto drop-shadow-md">
            Combining cutting-edge RAG (Retrieval-Augmented Generation) technology with evidence-based addiction recovery methods
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative w-full md:w-80 group cursor-pointer">
                {/* Glowing border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>
                
                {/* Glass Card */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 transition-all duration-700 ease-in-out hover:scale-[1.03] shadow-2xl hover:shadow-cyan-500/20 border border-white/20 overflow-hidden">
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  <div className="relative z-10">
                    {/* Icon with glass effect */}
                    <div className="mb-8 flex justify-center">
                      <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white/25 border border-white/20">
                        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 text-center transition-all duration-300 tracking-tight drop-shadow-lg">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-center leading-relaxed transition-colors duration-300 group-hover:text-white/95 font-medium">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom glass accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent group-hover:via-cyan-400/80 transition-all duration-500"></div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <FiArrowRight className="text-4xl text-cyan-400/60 hidden md:block rotate-90 md:rotate-0 transition-all duration-300 hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Addiction Types */}
        {/* Using Mint color hex: #E0F2F1 for the container background */}
        <div className="relative group">
          {/* Glowing border effect for container */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-blue-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md"></div>
          
          {/* Glass container */}
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5"></div>
            
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              {addictionTypes.map((type, index) => (
                <div
                  key={index}
                  className="relative group/pill cursor-pointer"
                >
                  {/* Pill glowing border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-400/50 via-cyan-400/50 to-blue-400/50 rounded-full opacity-0 group-hover/pill:opacity-100 transition-all duration-500 blur-sm"></div>
                  
                  {/* Glass pill */}
                  <div className="relative bg-white/15 backdrop-blur-md rounded-full px-8 py-4 flex items-center gap-3 transition-all duration-400 ease-in-out hover:scale-105 border border-white/20 overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/pill:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    
                    <div className="relative z-10 text-cyan-300 group-hover/pill:text-cyan-200 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                      {type.icon}
                    </div>
                    <span className="relative z-10 font-medium text-white/90 group-hover/pill:text-white transition-colors duration-300 drop-shadow-sm">
                      {type.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;