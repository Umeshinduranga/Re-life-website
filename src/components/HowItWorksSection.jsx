import React, { useRef } from 'react';
import { BsPersonPlus, BsChatDots, BsGraphUp, BsShield, BsBookmark } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HowItWorksSection = () => {
  const containerRef = useRef(null);
  
  // Theme Color
  const THEME_COLOR = "#4766d6"; 

  useGSAP(() => {
    const steps = gsap.utils.toArray('.step-row');

    // 1. LINE ANIMATION (Fills down)
    gsap.to('.timeline-progress', {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top center',
        end: 'bottom bottom', 
        scrub: 1,
      }
    });

    // 2. CIRCLE FILL ANIMATION
    steps.forEach((step) => {
      const circle = step.querySelector('.step-circle');
      const iconInsideCircle = step.querySelector('.step-circle-inner');
      
      gsap.to(circle, {
        backgroundColor: THEME_COLOR,
        borderColor: THEME_COLOR,
        duration: 0.4,
        scrollTrigger: {
          trigger: step,
          start: 'top 55%',
          toggleActions: 'play reverse play reverse'
        }
      });
      
      gsap.to(iconInsideCircle, {
        scale: 0.5, 
        scrollTrigger: {
          trigger: step,
          start: 'top 55%',
          toggleActions: 'play reverse play reverse'
        }
      });
    });

    // 3. CARD ANIMATION
    steps.forEach((step) => {
      const card = step.querySelector('.step-card');
      const icon = step.querySelector('.step-icon');
      
      const stepTl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      stepTl.to(card, { y: 0, opacity: 1, duration: 1, ease: 'power4.out' })
            .fromTo(icon, { scale: 0, rotation: -45 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' }, "-=0.5");
    });

  }, { scope: containerRef });

  const steps = [
    { number: "01", icon: <BsPersonPlus />, title: "Create Profile", description: "Start your journey in a private, safe space designed for your peace of mind.", color: "bg-slate-100 text-slate-600" },
    { number: "02", icon: <BsChatDots />, title: "Chat Support", description: "Connect with AI counseling anytime. No judgment, just constant support.", color: "bg-slate-100 text-slate-600" },
    { number: "03", icon: <BsGraphUp />, title: "Track Growth", description: "Watch your progress unfold with calm, easy-to-read daily insights.", color: "bg-slate-100 text-slate-600" },
    { number: "04", icon: <BsShield />, title: "Safe Guarding", description: "Identify triggers gently and build resilience strategies at your own pace.", color: "bg-slate-100 text-slate-600" },
    { number: "05", icon: <BsBookmark />, title: "Milestones", description: "Celebrate every step forward. Your recovery is a marathon, not a sprint.", color: "bg-slate-100 text-slate-600" }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-[#e3e8ef] py-32 px-6 overflow-hidden font-sans pb-48">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-28">
          <span className="inline-block py-1 px-4 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-medium tracking-wide mb-6 shadow-sm">
            THE PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-6 tracking-tight">
            A Gentle Path to <span style={{ color: THEME_COLOR }}>Recovery</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We believe in making the hard things feel a little softer. 
            Here is how we help you rebuild, step by step.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative">
          
          {/* TRACK (Static Gray Line) */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-2 h-full bg-slate-300/40 rounded-full"></div>
          
          {/* PROGRESS (Animated Filling Line - Blue) */}
          <div 
            className="timeline-progress absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-2 h-0 rounded-full origin-top"
            style={{ 
              backgroundColor: THEME_COLOR, 
              boxShadow: `0 0 20px ${THEME_COLOR}66`
            }}
          ></div>

          {/* Steps */}
          <div className="space-y-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`step-row relative flex flex-col md:flex-row items-center gap-12 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* CENTRAL CIRCLE */}
                  <div className="step-circle absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#e3e8ef] border-4 border-slate-400 z-20 box-content transition-colors duration-500 flex items-center justify-center">
                    <div className="step-circle-inner w-full h-full rounded-full bg-white transition-all duration-500"></div>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 step-card opacity-0 translate-y-20`}>
                    <div className="group bg-white rounded-3xl p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`step-icon w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center text-xl`}>
                          {step.icon}
                        </div>
                        <span className="text-4xl font-bold text-slate-100 select-none font-serif">
                          {step.number}
                        </span>
                      </div>
                      <div className="text-content">
                        <h3 className="text-xl font-bold text-slate-700 mb-3">{step.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;