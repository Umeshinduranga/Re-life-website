import React from 'react';
import { BsLightning, BsCpu, BsDatabase } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';

const TechnologySection = () => {
  const technologies = [
    {
      icon: <HiSparkles className="text-4xl" />,
      title: "RAG Technology",
      description: "Retrieval-Augmented Generation for evidence-based responses",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: <BsLightning className="text-4xl" />,
      title: "Next.js 14",
      description: "Blazing-fast performance and optimal user experience",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <BsCpu className="text-4xl" />,
      title: "GPT-4 & Claude",
      description: "OpenAI and Anthropic models for intelligent conversations",
      iconBg: "bg-pink-500/20",
      iconColor: "text-pink-400"
    },
    {
      icon: <BsDatabase className="text-4xl" />,
      title: "Vector Database",
      description: "Pinecone for instant knowledge retrieval and MongoDB for secure data",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400"
    }
  ];

  const differentiators = [
    {
      title: "RAG Technology",
      description: "ensures every response is grounded in peer-reviewed research and clinical best practices",
      color: "text-cyan-400"
    },
    {
      title: "Vector Search",
      description: "retrieves the most relevant information instantly from thousands of resources",
      color: "text-blue-400"
    },
    {
      title: "Dual AI Models",
      description: "combine the strengths of GPT-4 and Claude for empathetic, accurate support",
      color: "text-pink-400"
    },
    {
      title: "Secure Storage",
      description: "with MongoDB ensures your data is encrypted and completely private",
      color: "text-green-400"
    }
  ];

  return (
    <section id="technology" className="min-h-screen bg-black pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-dark-text mb-6 leading-tight">
            Built on <span className="text-warm-gray">Cutting-Edge AI Technology</span>
          </h2>
          <p className="text-lg text-dark-text/70 max-w-3xl mx-auto">
            Powered by the latest advances in artificial intelligence and machine learning
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-soft-pink rounded-3xl p-8 transition-all duration-700 ease-in-out hover:scale-[1.05] hover:shadow-2xl hover:shadow-warm-gray/20 hover:-translate-y-2 cursor-pointer group border-2 border-transparent hover:border-warm-gray/30 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-gray/0 via-warm-gray/0 to-warm-gray/0 group-hover:from-warm-gray/5 group-hover:via-transparent group-hover:to-warm-gray/5 transition-all duration-700 rounded-3xl"></div>
              
              <div className="relative z-10 text-center">
                <div className={`${tech.iconBg} ${tech.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-text mb-3">
                  {tech.title}
                </h3>
                <p className="text-sm text-dark-text/70 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What Makes Different */}
        <div className="bg-soft-pink/50 rounded-3xl p-12 border border-warm-gray/20">
          <h3 className="text-3xl font-bold text-dark-text mb-8 text-center">
            What Makes Re-life Different?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className={`text-2xl ${item.color} mt-1`}>•</span>
                <div>
                  <span className={`font-bold ${item.color}`}>{item.title}</span>
                  <span className="text-dark-text/70"> {item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
