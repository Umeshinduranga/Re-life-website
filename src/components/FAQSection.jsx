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
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about RE-LIFE
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 ${
                    isOpen ? 'rotate-180 bg-cyan-500/20' : 'group-hover:bg-white/20'
                  }`}>
                    {isOpen ? <BsDash className="text-2xl" /> : <BsPlus className="text-2xl" />}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Our support team is here to help. Reach out anytime and we'll get back to you within 24 hours.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl shadow-cyan-500/20">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
