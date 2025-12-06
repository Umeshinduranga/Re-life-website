import React from 'react';
import { BsChatDots, BsBook } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';
import { FiArrowRight } from 'react-icons/fi';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { TbPill } from 'react-icons/tb';
import { BiDevices } from 'react-icons/bi';
import Plasma from './Plasma';

const SolutionSection = () => {
  const steps = [
    {
      icon: <BsChatDots className="text-4xl" />,
      title: "You Share",
      description: "Your thoughts, struggles, and recovery journey",
      bgColor: "bg-soft-pink"
    },
    {
      icon: <HiSparkles className="text-4xl" />,
      title: "AI Analyzes",
      description: "Context-aware processing with RAG technology",
      bgColor: "bg-soft-pink"
    },
    {
      icon: <BsBook className="text-4xl" />,
      title: "Evidence-Based Response",
      description: "Grounded in clinical research and recovery science",
      bgColor: "bg-soft-pink"
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
    <section id="solution" className="min-h-screen bg-black pt-24 pb-0 px-6 relative">
      {/* Plasma Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ height: '200vh', top: 0 }}>
        <Plasma 
          color="#06b6d4"
          speed={0.5}
          direction="forward"
          scale={1.2}
          opacity={0.6}
          mouseInteractive={true}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-dark-text mb-6 leading-tight">
            MEET RE-LIFE, YOUR PERSONAL
            <br />
            RECOVERY AI
          </h2>
          <p className="text-lg text-dark-text/70 max-w-3xl mx-auto">
            Combining cutting-edge RAG (Retrieval-Augmented Generation) technology with evidence-based addiction recovery methods
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={`${step.bgColor} rounded-3xl p-8 w-full md:w-80 transition-all duration-700 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:shadow-warm-gray/20 hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-warm-gray/30 relative overflow-hidden animate-fadeIn animation-delay-${(index + 2) * 200}`}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-warm-gray/0 via-warm-gray/0 to-warm-gray/0 group-hover:from-warm-gray/5 group-hover:via-transparent group-hover:to-warm-gray/5 transition-all duration-700 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 text-dark-text/70 flex justify-center transition-all duration-500 group-hover:scale-110 group-hover:text-dark-text">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark-text mb-3 text-center transition-all duration-300 group-hover:text-white group-hover:tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-dark-text/70 text-center leading-relaxed text-sm transition-colors duration-300 group-hover:text-dark-text/90">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <FiArrowRight className="text-3xl text-dark-text/40 hidden md:block rotate-0 md:rotate-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Addiction Types */}
        <div className="bg-mint rounded-3xl p-12 animate-fadeIn animation-delay-800">
          <div className="flex flex-wrap justify-center gap-6">
            {addictionTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-full px-8 py-4 flex items-center gap-3 transition-all duration-400 ease-in-out hover:bg-white/90 hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="text-dark-text/70">
                  {type.icon}
                </div>
                <span className="font-medium text-dark-text">
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
