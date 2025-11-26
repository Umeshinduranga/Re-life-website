import React from 'react';
import { BsClock, BsCurrencyDollar } from 'react-icons/bs';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { MdOutlineBarChart } from 'react-icons/md';
import { TbPackage } from 'react-icons/tb';
import { BiXCircle } from 'react-icons/bi';

const ProblemsSection = () => {
  const problems = [
    {
      icon: <BsClock className="text-4xl" />,
      title: "Limited Accessibility",
      description: "24/7 counseling is rarely available when you need it most during critical moments",
      bgColor: "bg-soft-pink"
    },
    {
      icon: <BsCurrencyDollar className="text-4xl" />,
      title: "High Costs",
      description: "Traditional therapy can cost $100-300 per session, making consistent support unaffordable",
      bgColor: "bg-soft-pink"
    },
    {
      icon: <BiXCircle className="text-4xl" />,
      title: "Social Stigma",
      description: "Fear of judgment prevents many from seeking the help they desperately need",
      bgColor: "bg-soft-pink"
    },
    {
      icon: <TbPackage className="text-4xl" />,
      title: "Generic Advice",
      description: "One-size-fits-all programs ignore your unique situation and addiction type",
      bgColor: "bg-warm-gray/30"
    },
    {
      icon: <MdOutlineBarChart className="text-4xl" />,
      title: "Hard to Track Progress",
      description: "Traditional therapy can cost $100-300 per session, making consistent support unaffordable",
      bgColor: "bg-warm-gray/30"
    },
    {
      icon: <IoAlertCircleOutline className="text-4xl" />,
      title: "Crisis gaps",
      description: "Fear of judgment prevents many from seeking the help they desperately need",
      bgColor: "bg-warm-gray/30"
    }
  ];

  return (
    <section id="problems" className="min-h-screen bg-cream pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-dark-text mb-6 leading-tight">
            Recovery Shouldn't Wait for
            <br />
            Business Hours
          </h2>
          <p className="text-lg text-dark-text/70 max-w-2xl mx-auto">
            Traditional recovery systems leave gaps exactly when support matters most
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`${problem.bgColor} rounded-3xl p-8 transition-all duration-700 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:shadow-warm-gray/20 hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-warm-gray/30 relative overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-gray/0 via-warm-gray/0 to-warm-gray/0 group-hover:from-warm-gray/5 group-hover:via-transparent group-hover:to-warm-gray/5 transition-all duration-700 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="mb-6 text-dark-text/70">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-4">
                  {problem.title}
                </h3>
                <p className="text-dark-text/70 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
