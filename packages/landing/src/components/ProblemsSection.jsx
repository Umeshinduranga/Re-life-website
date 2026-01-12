import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BsClock, BsCurrencyDollar } from 'react-icons/bs';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { MdOutlineBarChart } from 'react-icons/md';
import { TbPackage } from 'react-icons/tb';
import { BiXCircle } from 'react-icons/bi';

import img1 from '../assets/limitedaccessibility.jpg'; // Try .jpg
import img2 from '../assets/highcosts.jpg';
import img3 from '../assets/socialstigma.jpg';
import img4 from '../assets/genericadvice.jpg';
import img5 from '../assets/trackprogress.jpg';
import img6 from '../assets/crisis.jpg';

const ProblemCard = React.memo(({ problem, index, isVisible }) => {
  return (
    <div
      className={`rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group relative h-[380px] ${
        isVisible 
          ? 'card-animate' 
          : 'opacity-0'
      }`}
      style={{
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        contain: 'layout style paint'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={problem.image} 
          alt={problem.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
          style={{ willChange: 'filter' }}
        />
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))'
          }}
        ></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Bottom Section - Text Content with Clean Design */}
        <div className="space-y-3">
          <div className="rounded-2xl p-4 bg-black/40">
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-white">
              {problem.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/90 leading-relaxed">
              {problem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

ProblemCard.displayName = 'ProblemCard';

const ProblemsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const hasTriggered = useRef(false);

  const problems = useMemo(() => [
    {
      icon: <BsClock className="text-4xl" />,
      title: "Limited Accessibility",
      description: "24/7 counseling is rarely available when you need it most during critical moments",
      image: img1
    },
    {
      icon: <BsCurrencyDollar className="text-4xl" />,
      title: "High Costs",
      description: "Traditional therapy can cost $100-300 per session, making consistent support unaffordable",
      image: img2
    },
    {
      icon: <BiXCircle className="text-4xl" />,
      title: "Social Stigma",
      description: "Fear of judgment prevents many from seeking the help they desperately need",
      image: img3
    },
    {
      icon: <TbPackage className="text-4xl" />,
      title: "Generic Advice",
      description: "One-size-fits-all programs ignore your unique situation and addiction type",
      image: img4
    },
    {
      icon: <MdOutlineBarChart className="text-4xl" />,
      title: "Hard to Track Progress",
      description: "Traditional therapy can cost $100-300 per session, making consistent support unaffordable",
      image: img5
    },
    {
      icon: <IoAlertCircleOutline className="text-4xl" />,
      title: "Crisis gaps",
      description: "Fear of judgment prevents many from seeking the help they desperately need",
      image: img6
    }
  ], []);

  const scrollAnimationStyle = `
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .card-animate {
      animation: fadeInScale 0.5s ease-out forwards;
    }
  `;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTriggered.current) {
        hasTriggered.current = true;
        // Show all cards at once for snappier feel
        setVisibleCards(Array.from({ length: problems.length }, (_, i) => i));
      }
    }, observerOptions);

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [problems.length]);

  return (
    <section id="problems" className="min-h-screen pt-24 pb-16 px-6" ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e8f4f8 100%)'
      }}>
      <style>{scrollAnimationStyle}</style>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight" style={{color: '#000000'}}>
            Recovery Shouldn't Wait for
            <br />
            Business Hours
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#000000', opacity: 0.7}}>
            Traditional recovery systems leave gaps exactly when support matters most
          </p>
        </div>

        {/* Cards Grid with Image Overlay Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard 
              key={index}
              problem={problem}
              index={index}
              isVisible={visibleCards.includes(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
