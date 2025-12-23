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
      title: "You Share",
      description: "Your thoughts, struggles, and recovery journey",
      bgColor: "bg-[#FFF0F5]" // Soft Pink Hex
    },
    {
      icon: <HiSparkles className="text-4xl" />,
      title: "AI Analyzes",
      description: "Context-aware processing with RAG technology",
      bgColor: "bg-[#FFF0F5]"
    },
    {
      icon: <BsBook className="text-4xl" />,
      title: "Evidence-Based Response",
      description: "Grounded in clinical research and recovery science",
      bgColor: "bg-[#FFF0F5]"
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={`${step.bgColor} rounded-3xl p-8 w-full md:w-80 transition-all duration-700 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-white/50 relative overflow-hidden`}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/20 group-hover:via-transparent group-hover:to-white/20 transition-all duration-700 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 text-slate-700 flex justify-center transition-all duration-500 group-hover:scale-110 group-hover:text-black">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 text-center transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed text-sm transition-colors duration-300 group-hover:text-slate-800">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <FiArrowRight className="text-3xl text-white/50 hidden md:block rotate-90 md:rotate-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Addiction Types */}
        {/* Using Mint color hex: #E0F2F1 for the container background */}
        <div className="bg-[#E0F2F1]/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl">
          <div className="flex flex-wrap justify-center gap-6">
            {addictionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 flex items-center gap-3 transition-all duration-400 ease-in-out hover:bg-white hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="text-teal-700">
                  {type.icon}
                </div>
                <span className="font-medium text-slate-800">
                  {type.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;