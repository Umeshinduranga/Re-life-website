import React, { useState, useEffect, useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import { HiPaperClip } from 'react-icons/hi2';
import { BsPerson } from 'react-icons/bs';
import { BiBot } from 'react-icons/bi';
import BlurText from './animations/BlurText';

const ChatSection = () => {
  const [message, setMessage] = useState('');
  const [showAiMessage, setShowAiMessage] = useState(false);
  const [showUserMessage, setShowUserMessage] = useState(false);
  const [aiText, setAiText] = useState('');
  const [userText, setUserText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const fullAiText = '"I understand you\'re going through a tough time. Can you tell me more about what triggered these feelings today?"';
  const fullUserText = '"I Saw a post on social media that made me want to use again"';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Show AI message container first
          setTimeout(() => {
            setShowAiMessage(true);
            setIsTyping(true);
            
            // Type AI message
            let index = 0;
            const typingInterval = setInterval(() => {
              if (index <= fullAiText.length) {
                setAiText(fullAiText.slice(0, index));
                index++;
              } else {
                clearInterval(typingInterval);
                setIsTyping(false);
                // Show user message after AI finishes typing
                setTimeout(() => {
                  setShowUserMessage(true);
                  setIsUserTyping(true);
                  
                  // Type user message
                  let userIndex = 0;
                  const userTypingInterval = setInterval(() => {
                    if (userIndex <= fullUserText.length) {
                      setUserText(fullUserText.slice(0, userIndex));
                      userIndex++;
                    } else {
                      clearInterval(userTypingInterval);
                      setIsUserTyping(false);
                    }
                  }, 30);
                }, 800);
              }
            }, 30);
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="chat" className="min-h-screen bg-cream pt-24 pb-16 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <span className="text-white/90 font-semibold text-sm tracking-wider uppercase">Featured Experience</span>
          </div>
          <BlurText 
            text="Hi kavindu, How can i help ?"
            delay={50}
            animateBy="words"
            className="text-5xl md:text-6xl font-black text-dark-text mb-4 text-center"
          />
          <p className="text-dark-text/60 text-lg max-w-2xl mx-auto">
            Experience real-time AI conversations designed to support your recovery journey
          </p>
        </div>

        {/* Chat Feature Box */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-3xl blur-2xl opacity-50"></div>
          
          {/* Main Container */}
          <div className="relative bg-black/90 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl min-h-[400px]">
            {/* Chat Messages */}
            <div className="space-y-6 mb-8">
              {/* AI Message */}
              {showAiMessage && (
                <div className="flex items-start gap-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    <BiBot className="text-2xl text-white/90" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl rounded-tl-md px-6 py-4 max-w-2xl">
                    <p className="text-white/90 leading-relaxed">
                      {aiText}
                      {isTyping && <span className="inline-block w-0.5 h-5 bg-white/90 ml-1 animate-pulse"></span>}
                    </p>
                  </div>
                </div>
              )}

              {/* User Message */}
              {showUserMessage && (
                <div className="flex items-start gap-4 justify-end animate-fadeIn">
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl rounded-tr-md px-6 py-4 max-w-2xl">
                    <p className="text-white/90 leading-relaxed">
                      {userText}
                      {isUserTyping && <span className="inline-block w-0.5 h-5 bg-white/90 ml-1 animate-pulse"></span>}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                    <BsPerson className="text-2xl text-white/90" />
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="max-w-full mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask anything...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/30 text-white/90 placeholder-white/50 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20">
                    <FiSend className="text-lg text-white/70 hover:text-white/90 transition-colors" />
                  </button>
                  <button className="p-2.5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20">
                    <HiPaperClip className="text-lg text-white/70 hover:text-white/90 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
