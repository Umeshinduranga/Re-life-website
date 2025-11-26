import React from 'react';
import { BsChatDots, BsBarChart, BsShieldLock } from 'react-icons/bs';
import { HiOutlineDocumentText, HiOutlineBell } from 'react-icons/hi';
import { IoWarningOutline } from 'react-icons/io5';
import { MdOutlineTimeline } from 'react-icons/md';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BsChatDots className="text-4xl" />,
      title: "AI-Powered Conversational Therapy",
      subtitle: "24/7 instant support with empathetic AI responses",
      points: [
        "Context-aware conversations that remember your journey",
        "Crisis detection and immediate intervention",
        "Natural, judgment-free dialogue"
      ],
      bgColor: "bg-soft-pink",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: <HiOutlineDocumentText className="text-4xl" />,
      title: "RAG-Enhanced Evidence-Based Guidance",
      subtitle: "Responses grounded in clinical research and recovery literature",
      points: [
        "Access to curated content from SAMHSA, NIDA, and leading experts",
        "Personalized recommendations based on your addiction type",
        "Latest evidence-based treatment methodologies"
      ],
      bgColor: "bg-soft-pink",
      iconBg: "bg-pink-500/20",
      iconColor: "text-pink-400"
    },
    {
      icon: <BsBarChart className="text-4xl" />,
      title: "Intelligent Progress Tracking",
      subtitle: "Visual sobriety counter and streak tracking",
      points: [
        "Daily mood and craving intensity logging",
        "AI-generated insights on your recovery patterns",
        "Beautiful charts and weekly/monthly reports"
      ],
      bgColor: "bg-soft-pink",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <IoWarningOutline className="text-4xl" />,
      title: "Smart Trigger Management",
      subtitle: "Identify and log personal triggers",
      points: [
        "Track trigger intensity and patterns",
        "AI-powered early warning system",
        "Coping strategy recommendations"
      ],
      bgColor: "bg-sage",
      iconBg: "bg-orange-500/20",
      iconColor: "text-orange-400"
    },
    {
      icon: <MdOutlineTimeline className="text-4xl" />,
      title: "Goal Setting & Milestones",
      subtitle: "SMART goal creation wizard",
      points: [
        "Milestone celebrations and achievements",
        "Progress percentage tracking",
        "Adaptive goal adjustments"
      ],
      bgColor: "bg-sage",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400"
    },
    {
      icon: <HiOutlineBell className="text-4xl" />,
      title: "Proactive Support System",
      subtitle: "Smart notifications for high-risk situations",
      points: [
        "Daily check-in reminders",
        "Emergency contact alerts",
        "Motivational messages"
      ],
      bgColor: "bg-sage",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: <BsShieldLock className="text-4xl" />,
      title: "Privacy & Security First",
      subtitle: "End-to-end encryption",
      points: [
        "GDPR compliant",
        "No data sharing with third parties",
        "Complete data export and deletion options"
      ],
      bgColor: "bg-sage",
      iconBg: "bg-gray-500/20",
      iconColor: "text-gray-400"
    }
  ];

  return (
    <section id="features" className="min-h-screen bg-cream pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-dark-text mb-6 leading-tight">
            Comprehensive <span className="text-warm-gray">Recovery Tools</span>
          </h2>
          <p className="text-lg text-dark-text/70 max-w-3xl mx-auto">
            Everything you need to support your recovery journey in one powerful platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 transition-all duration-700 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:shadow-warm-gray/20 hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-warm-gray/30 relative overflow-hidden`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-gray/0 via-warm-gray/0 to-warm-gray/0 group-hover:from-warm-gray/5 group-hover:via-transparent group-hover:to-warm-gray/5 transition-all duration-700 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`${feature.iconBg} ${feature.iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-text mb-2">
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-dark-text/60 mb-4">
                  {feature.subtitle}
                </p>

                {/* Feature Points */}
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-dark-text/70">
                      <span className="text-warm-gray mt-1">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
