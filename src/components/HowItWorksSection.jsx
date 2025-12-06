import React, { useEffect, useRef, useState } from 'react';
import { BsPersonPlus, BsChatDots, BsGraphUp, BsShield, BsBookmark } from 'react-icons/bs';

const HowItWorksSection = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  useEffect(() => {
    const currentRefs = stepRefs.current;
    const observers = currentRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2, rootMargin: '-50px' }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (currentRefs[index]) {
          observer.unobserve(currentRefs[index]);
        }
      });
    };
  }, []);

  const steps = [
    {
      number: "01",
      icon: <BsPersonPlus className="text-3xl" />,
      title: "Create Your Profile",
      description: "Set up your addiction profile and recovery goals in a safe, private environment",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
      position: "left"
    },
    {
      number: "02",
      icon: <BsChatDots className="text-3xl" />,
      title: "Chat Anytime",
      description: "Talk to your AI counselor whenever you need support - day or night, weekends included",
      iconBg: "bg-pink-500/20",
      iconColor: "text-pink-400",
      position: "right"
    },
    {
      number: "03",
      icon: <BsGraphUp className="text-3xl" />,
      title: "Track Progress",
      description: "Log your journey and visualize your improvement with detailed analytics and insights",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      position: "left"
    },
    {
      number: "04",
      icon: <BsShield className="text-3xl" />,
      title: "Manage Triggers",
      description: "Identify patterns and build effective coping strategies with AI-powered guidance",
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-400",
      position: "right"
    },
    {
      number: "05",
      icon: <BsBookmark className="text-3xl" />,
      title: "Achieve Milestones",
      description: "Celebrate victories and stay motivated with milestone tracking and achievements",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      position: "left"
    }
  ];

  return (
    <section id="how-it-works" className="min-h-screen bg-black pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-dark-text mb-6 leading-tight">
            How <span className="text-warm-gray">It Works</span>
          </h2>
          <p className="text-lg text-dark-text/70 max-w-2xl mx-auto">
            Start your recovery journey in five simple steps
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-pink-400 via-blue-400 via-orange-400 to-green-400 opacity-30 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                ref={el => stepRefs.current[index] = el}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${step.position === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 bg-soft-pink rounded-3xl p-8 transition-all duration-1000 ease-out hover:scale-[1.05] hover:shadow-2xl hover:shadow-warm-gray/20 hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-warm-gray/30 relative overflow-hidden
                  ${visibleSteps.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : step.position === 'left' 
                      ? 'opacity-0 -translate-x-32' 
                      : 'opacity-0 translate-x-32'
                  }`}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-warm-gray/0 via-warm-gray/0 to-warm-gray/0 group-hover:from-warm-gray/5 group-hover:via-transparent group-hover:to-warm-gray/5 transition-all duration-700 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-black text-warm-gray/40">{step.number}</span>
                      <div className={`${step.iconBg} ${step.iconColor} w-14 h-14 rounded-xl flex items-center justify-center`}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-dark-text/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-green-400/20 border-4 border-cream items-center justify-center transition-all duration-700 ease-out
                  ${visibleSteps.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                >
                  <div className={`w-8 h-8 rounded-full ${step.iconBg}`}></div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
