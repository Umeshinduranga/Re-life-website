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

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="chat" className="min-h-screen pt-0 pb-16 px-6 relative overflow-hidden" ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e8f4f8 100%)'
      }}>
      <div className="relative z-10 max-w-6xl mx-auto pt-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 rounded-full mb-6" 
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(57, 172, 214, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 228, 255, 0.1)'
            }}>
            <span className="font-semibold text-sm tracking-wider uppercase" style={{color: '#0012FF'}}>Featured Experience</span>
          </div>
          <BlurText 
            text="Hi Jhone, How can i help ?"
            delay={50}
            animateBy="words"
            className="text-5xl md:text-6xl font-black mb-4 text-center"
            style={{color: '#000000'}}
          />
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#000000', opacity: 0.7}}>
            Experience real-time AI conversations designed to support your recovery journey
          </p>
        </div>

        {/* Chat Feature Box with Glassmorphism */}
        <div className="relative">
          {/* Soft glow effect */}
          <div className="absolute -inset-2 rounded-[32px] opacity-30 blur-2xl" 
            style={{background: 'linear-gradient(135deg, rgba(0, 228, 255, 0.2), rgba(57, 172, 214, 0.15))'}}></div>
          
          {/* Main Container - Glassmorphism */}
          <div className="relative rounded-[32px] p-8 md:p-12 min-h-[450px]" 
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '2px solid rgba(57, 172, 214, 0.4)',
              boxShadow: '0 8px 32px 0 rgba(0, 228, 255, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)'
            }}>
            {/* Chat Messages */}
            <div className="space-y-6 mb-8">
              {/* AI Message */}
              {showAiMessage && (
                <div className="flex items-start gap-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" 
                    style={{
                      background: 'linear-gradient(135deg, #00E4FF, #39ACD6)',
                      color: '#000000'
                    }}>
                    <BiBot className="text-2xl" />
                  </div>
                  <div className="rounded-2xl rounded-tl-md px-6 py-4 max-w-2xl" 
                    style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(57, 172, 214, 0.3)',
                      boxShadow: '0 4px 16px rgba(0, 228, 255, 0.1)'
                    }}>
                    <p className="leading-relaxed" style={{color: '#000000'}}>
                      {aiText}
                      {isTyping && <span className="inline-block w-0.5 h-5 ml-1 animate-pulse" style={{backgroundColor: '#0012FF'}}></span>}
                    </p>
                  </div>
                </div>
              )}

              {/* User Message */}
              {showUserMessage && (
                <div className="flex items-start gap-4 justify-end animate-fadeIn">
                  <div className="rounded-2xl rounded-tr-md px-6 py-4 max-w-2xl" 
                    style={{
                      background: 'rgba(224, 247, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 228, 255, 0.3)',
                      boxShadow: '0 4px 16px rgba(57, 172, 214, 0.1)'
                    }}>
                    <p className="leading-relaxed" style={{color: '#000000'}}>
                      {userText}
                      {isUserTyping && <span className="inline-block w-0.5 h-5 ml-1 animate-pulse" style={{backgroundColor: '#0012FF'}}></span>}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" 
                    style={{
                      background: 'linear-gradient(135deg, #00E4FF, #39ACD6)',
                      color: '#000000'
                    }}>
                    <BsPerson className="text-2xl" />
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input - Glassmorphism */}
            <div className="max-w-full mt-8">
              <div className="relative rounded-2xl" 
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '2px solid rgba(57, 172, 214, 0.3)',
                  boxShadow: '0 4px 16px rgba(0, 228, 255, 0.1)'
                }}>
                <input
                  type="text"
                  placeholder="Ask anything...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl focus:outline-none transition-all duration-300 bg-transparent"
                  style={{
                    color: '#000000'
                  }}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button className="p-2.5 rounded-xl transition-all duration-300 group" 
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(5px)',
                      WebkitBackdropFilter: 'blur(5px)',
                      border: '1px solid rgba(57, 172, 214, 0.3)'
                    }}
                  >
                    <FiSend className="text-lg transition-colors group-hover:text-cyan-600" style={{color: '#0012FF'}} />
                  </button>
                  <button className="p-2.5 rounded-xl transition-all duration-300 group"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(5px)',
                      WebkitBackdropFilter: 'blur(5px)',
                      border: '1px solid rgba(57, 172, 214, 0.3)'
                    }}
                  >
                    <HiPaperClip className="text-lg transition-colors group-hover:text-cyan-600" style={{color: '#0012FF'}} />
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
