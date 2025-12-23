import React, { useEffect, useRef } from 'react';
import { BsChatDots, BsBarChart, BsShieldLock } from 'react-icons/bs';
import { HiOutlineDocumentText, HiOutlineBell } from 'react-icons/hi';
import { IoWarningOutline } from 'react-icons/io5';
import { MdOutlineTimeline } from 'react-icons/md';

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
    {
      icon: <BsChatDots className="text-3xl" />,
      title: "AI-Powered Conversational Therapy",
      subtitle: "24/7 instant support",
      points: [
        "Context-aware conversations",
        "Crisis detection intervention",
        "Natural, judgment-free dialogue"
      ],
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1000&auto=format&fit=crop", 
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: <HiOutlineDocumentText className="text-3xl" />,
      title: "RAG-Enhanced Guidance",
      subtitle: "Grounded in clinical research",
      points: [
        "Curated content from experts",
        "Personalized recommendations",
        "Evidence-based methodologies"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: <BsBarChart className="text-3xl" />,
      title: "Intelligent Progress Tracking",
      subtitle: "Visual sobriety counter",
      points: [
        "Daily mood & craving logging",
        "AI recovery insights",
        "Beautiful weekly reports"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: <IoWarningOutline className="text-3xl" />,
      title: "Smart Trigger Management",
      subtitle: "Identify personal triggers",
      points: [
        "Track intensity patterns",
        "Early warning system",
        "Coping strategy tips"
      ],
      image: "https://images.unsplash.com/photo-1453847668862-487637052f8a?q=80&w=1000&auto=format&fit=crop",
      color: "from-orange-400 to-amber-500"
    },
    {
      icon: <MdOutlineTimeline className="text-3xl" />,
      title: "Goal Setting & Milestones",
      subtitle: "SMART goal creation wizard",
      points: [
        "Milestone celebrations",
        "Progress tracking",
        "Adaptive goal adjustments"
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: <HiOutlineBell className="text-3xl" />,
      title: "Proactive Support System",
      subtitle: "Smart notifications",
      points: [
        "Daily check-in reminders",
        "Emergency contact alerts",
        "Motivational messages"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      color: "from-violet-400 to-purple-500"
    },
    {
      icon: <BsShieldLock className="text-3xl" />,
      title: "Privacy & Security First",
      subtitle: "End-to-end encryption",
      points: [
        "GDPR compliant",
        "No third-party sharing",
        "Data export options"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
      color: "from-slate-400 to-gray-500"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    
    const handleScroll = () => {
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top; 
      const totalScrollDistance = section.offsetHeight - window.innerHeight;
      const scrollFromTop = -sectionTop;

      let progress = scrollFromTop / totalScrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      const totalCards = features.length;
      const indexValue = progress * (totalCards - 1);

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        let val = indexValue - index;

        if (val > 0) {
           const holdBuffer = 0.35; 
           let exitProgress = 0;

           if (val > holdBuffer) {
               exitProgress = (val - holdBuffer) / (1 - holdBuffer);
           }
           exitProgress = Math.min(exitProgress, 1);

           card.style.transform = `translateX(calc(-50% - ${exitProgress * 120}%)) scale(${1 - (exitProgress * 0.1)}) rotate(-${exitProgress * 5}deg)`;
           card.style.opacity = Math.max(0, 1 - (exitProgress * 1.5));
           card.style.zIndex = totalCards - index; 
        } 
        else {
           let depth = Math.abs(val); 
           let translateX = depth * 100; 
           let scale = 1 - (depth * 0.05);
           let opacity = 1 - (depth * 0.1);

           card.style.transform = `translateX(calc(-50% + ${translateX}px)) scale(${scale})`;
           card.style.opacity = Math.max(0, opacity);
           card.style.zIndex = totalCards - index;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  return (
    <section 
      id="features" 
      ref={sectionRef} 
      className="relative h-[500vh] bg-[#e3e8ef]" // CHANGED: Using your custom hex color
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center pt-28 pb-4 px-6 bg-[#e3e8ef]"> {/* Match background */}
        
        {/* HEADER */}
        <div className="relative z-30 w-full text-center px-6 shrink-0 mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight text-slate-800">
            Comprehensive <span className="text-cyan-600">Recovery Tools</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-slate-600">
            Everything you need to support your recovery journey in one powerful platform
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="relative w-full h-[500px] max-h-[60vh] perspective-1000">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="absolute left-1/2 top-0 w-[320px] md:w-[450px] h-full rounded-3xl overflow-hidden shadow-2xl flex flex-col origin-center bg-slate-900"
              style={{
                transform: 'translateX(-50%)',
                willChange: 'transform, opacity',
                zIndex: features.length - index,
              }}
            >
              {/* IMAGE BACKGROUND */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/20" />
              </div>

              {/* CARD CONTENT */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full text-white">
                
                <div className="absolute top-6 right-6 text-5xl md:text-6xl font-black opacity-20 pointer-events-none select-none text-white">
                  0{index + 1}
                </div>

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${feature.color} backdrop-blur-md bg-opacity-20 border border-white/10 shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2 leading-tight text-white drop-shadow-md">
                  {feature.title}
                </h3>

                <p className="text-sm font-medium text-slate-200 mb-6">
                  {feature.subtitle}
                </p>

                {/* Points */}
                <ul className="space-y-3 mt-auto">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent font-bold`}>✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
        
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs md:text-sm font-medium animate-bounce z-20 text-cyan-700">
            Scroll to explore features
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;