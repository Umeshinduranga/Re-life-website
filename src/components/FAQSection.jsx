import React, { useState } from 'react';
import { BsPlus, BsDash } from 'react-icons/bs';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AI counselor understand addiction recovery?",
      answer: "Our AI counselor is powered by advanced RAG (Retrieval-Augmented Generation) technology, trained on evidence-based addiction recovery methodologies, psychology research, and real recovery experiences. It provides personalized, empathetic support based on your unique situation."
    },
    {
      question: "Is my personal recovery data kept private?",
      answer: "Absolutely. We use end-to-end encryption for all your data. Your conversations, progress tracking, and personal information are stored securely and never shared with third parties. You maintain complete control over your data and can delete it anytime."
    },
    {
      question: "Can the AI counselor replace human therapists?",
      answer: "No, our AI counselor is designed to complement, not replace, professional therapy. It provides 24/7 support, immediate responses, and daily guidance, while human therapists offer deeper clinical intervention. We recommend using both for optimal recovery outcomes."
    },
    {
      question: "How much does RE-LIFE cost?",
      answer: "We offer a Free tier with basic AI counseling (50 messages/month) and progress tracking. Premium is $29/month for unlimited AI conversations, advanced analytics, and personalized recovery plans. Enterprise options are available for organizations and treatment centers."
    },
    {
      question: "Is there a free trial for premium features?",
      answer: "Yes! New users get a 14-day free trial of Premium with full access to all features. No credit card required to start. You can cancel anytime before the trial ends with no charges."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-[#2A2A2A]">
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-purple-400 font-bold text-sm tracking-wider uppercase px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Got Questions?
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about RE-LIFE
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 transition-colors duration-200"
                style={{ willChange: 'border-color' }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-200 ${
                    isOpen ? 'rotate-180 bg-purple-500/20' : 'group-hover:bg-white/15'
                  }`}>
                    {isOpen ? <BsDash className="text-xl" /> : <BsPlus className="text-xl" />}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-5 pb-4">
                    <div className="w-full h-px bg-white/10 mb-3"></div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-5 text-sm max-w-xl mx-auto">
              Our support team is here to help. Reach out anytime and we'll get back to you within 24 hours.
            </p>
            <button className="px-7 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-bold hover:scale-105 transition-transform duration-200 shadow-lg shadow-purple-500/30">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
