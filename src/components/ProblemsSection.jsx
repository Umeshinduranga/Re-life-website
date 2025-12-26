import React, { useState, useEffect, useRef } from 'react';
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
    <section id="problems" className="min-h-screen bg-white pt-24 pb-16 px-6" ref={sectionRef}>
      <style>{scrollAnimationStyle}</style>
      <div className="max-w-6xl mx-auto">
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

        {/* Cards Grid with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`rounded-3xl p-8 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer group border-2 relative overflow-hidden ${
                visibleCards.includes(index) 
                  ? index % 2 === 0 
                    ? 'card-slide-left' 
                    : 'card-slide-right' 
                  : 'opacity-0'
              }`}
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#39ACD6',
                boxShadow: '0 4px 15px rgba(57, 172, 214, 0.1)'
              }}
            >
              {/* Image */}
              <div className="mb-6 h-48 rounded-2xl overflow-hidden">
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Icon */}
              <div className="mb-4" style={{color: '#0012FF'}}>
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4" style={{color: '#000000'}}>
                {problem.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed" style={{color: '#000000', opacity: 0.7}}>
                {problem.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-transparent to-blue-400/0 group-hover:from-cyan-400/10 group-hover:via-transparent group-hover:to-blue-400/10 transition-all duration-500 rounded-3xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
