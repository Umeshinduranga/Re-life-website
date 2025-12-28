import React, { useState, useEffect, useRef } from 'react';
import { BsClock, BsCurrencyDollar, BsArrowRight } from 'react-icons/bs';
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

const ProblemsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const problems = [
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
  ];

  const scrollAnimationStyle = `
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .card-slide-left {
      animation: slideInLeft 0.8s ease-out forwards;
    }
    
    .card-slide-right {
      animation: slideInRight 0.8s ease-out forwards;
    }
  `;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // When section comes into view, start showing cards one by one
        const interval = setInterval(() => {
          setVisibleCards(prev => {
            if (prev.length < problems.length) {
              return [...prev, prev.length];
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 200); // 200ms delay between each card

        return () => clearInterval(interval);
      } else {
        // When section goes out of view, hide all cards
        setVisibleCards([]);
      }
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`rounded-[24px] overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer group relative h-[380px] ${
                visibleCards.includes(index) 
                  ? index % 2 === 0 
                    ? 'card-slide-left' 
                    : 'card-slide-right' 
                  : 'opacity-0'
              }`}
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Subtle dark overlay for text readability */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5))'
                  }}
                ></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                {/* Bottom Section - Text Content with Glassmorphism */}
                <div className="space-y-3">
                  <div className="rounded-2xl p-4"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
