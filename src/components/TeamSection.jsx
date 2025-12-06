import React, { useState } from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const TeamSection = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Developer & Project Manager",
      expertise: "Full-Stack Development, AI Integration",
      bio: "Passionate about leveraging technology for social impact. 5+ years experience in healthcare tech.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "AI/ML Engineer",
      expertise: "RAG Technology, NLP, Machine Learning",
      bio: "Specialized in conversational AI and retrieval-augmented generation systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Frontend Developer & UX Designer",
      expertise: "React, Tailwind CSS, User Experience",
      bio: "Creating intuitive interfaces that make recovery support accessible to everyone.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    {
      id: 4,
      name: "David Williams",
      role: "Backend Developer",
      expertise: "Node.js, Database Architecture, API Design",
      bio: "Building scalable and secure infrastructure for mission-critical healthcare applications.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Data Scientist & Researcher",
      expertise: "Data Analysis, Psychology Research, Analytics",
      bio: "Translating addiction recovery research into actionable AI-driven insights.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "#",
      github: "#",
      twitter: "#"
    },
    {
      id: 6,
      name: "James Anderson",
      role: "DevOps & Security Engineer",
      expertise: "Cloud Infrastructure, HIPAA Compliance, Security",
      bio: "Ensuring data privacy and system reliability for users on their recovery journey.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-purple-400 font-bold text-sm tracking-wider uppercase px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
              Meet Our Team
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            The Minds Behind
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              RE-LIFE
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A dedicated team of developers, researchers, and healthcare technology experts
            working together to transform addiction recovery through AI innovation
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20 relative">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              We believe that everyone deserves access to compassionate, intelligent support on their 
              recovery journey. By combining cutting-edge AI technology with evidence-based recovery 
              methodologies, we're creating a platform that provides 24/7 guidance, understanding, 
              and hope to those who need it most.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-orange-500/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                  
                  {/* Social Links - Appear on Hover */}
                  <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${
                    hoveredMember === member.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-cyan-500/50 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin className="text-lg" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-purple-500/50 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub className="text-lg" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/50 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsTwitter className="text-lg" />
                    </a>
                  </div>

                  {/* Name and Role - Always Visible at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                  </div>
                </div>

                {/* Details Section - Expands on Hover */}
                <div className={`bg-black/80 backdrop-blur-xl border-t border-white/10 transition-all duration-500 overflow-hidden ${
                  hoveredMember === member.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Expertise</span>
                      <p className="text-white/80 text-sm mt-1">{member.expertise}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">About</span>
                      <p className="text-white/70 text-sm mt-1 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference 
              in addiction recovery technology.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl shadow-purple-500/20">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
