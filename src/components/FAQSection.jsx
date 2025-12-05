import React, { useState } from 'react';
import { BsPlus, BsDash, BsShieldCheck, BsLock, BsCpu, BsCreditCard } from 'react-icons/bs';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      icon: <BsCpu className="text-2xl" />,
      title: "AI Counselor",
      color: "from-cyan-500 to-blue-500",
      faqs: [
        {
          question: "How does the AI counselor understand addiction recovery?",
          answer: "Our AI counselor is powered by advanced RAG (Retrieval-Augmented Generation) technology, trained on evidence-based addiction recovery methodologies, psychology research, and real recovery experiences. It provides personalized, empathetic support based on your unique situation."
        },
        {
          question: "Can the AI counselor replace human therapists?",
          answer: "No, our AI counselor is designed to complement, not replace, professional therapy. It provides 24/7 support, immediate responses, and daily guidance, while human therapists offer deeper clinical intervention. We recommend using both for optimal recovery outcomes."
        },
        {
          question: "How accurate and reliable are the AI responses?",
          answer: "Our AI maintains 95%+ accuracy by continuously learning from verified recovery frameworks and clinical guidelines. Every response is grounded in evidence-based practices, and the system flags complex situations that require human professional intervention."
        }
      ]
    },
    {
      icon: <BsShieldCheck className="text-2xl" />,
      title: "Privacy & Security",
      color: "from-purple-500 to-pink-500",
      faqs: [
        {
          question: "Is my personal recovery data kept private?",
          answer: "Absolutely. We use end-to-end encryption for all your data. Your conversations, progress tracking, and personal information are stored securely and never shared with third parties. You maintain complete control over your data and can delete it anytime."
        },
        {
          question: "Who can access my chat history with the AI counselor?",
          answer: "Only you have access to your chat history. Our staff cannot view your conversations unless you explicitly grant permission for support purposes. All data is encrypted both in transit and at rest using industry-standard AES-256 encryption."
        },
        {
          question: "Do you comply with healthcare privacy regulations?",
          answer: "Yes, we are fully HIPAA-compliant and follow GDPR guidelines. We undergo regular security audits, maintain strict data handling protocols, and ensure all our practices meet international healthcare privacy standards."
        }
      ]
    },
    {
      icon: <BsLock className="text-2xl" />,
      title: "RAG Technology",
      color: "from-orange-500 to-amber-500",
      faqs: [
        {
          question: "What is RAG technology and how does it help me?",
          answer: "RAG (Retrieval-Augmented Generation) combines AI language models with a vast database of recovery knowledge. When you ask a question, the system retrieves relevant information from trusted sources and generates personalized, contextually accurate responses specific to your recovery journey."
        },
        {
          question: "How does RAG make the AI more helpful than regular chatbots?",
          answer: "Unlike basic chatbots with scripted responses, RAG allows our AI to access real-time, evidence-based recovery information. It understands context, remembers your progress, and provides nuanced guidance that adapts to your specific situation and recovery stage."
        },
        {
          question: "Can the AI learn from my personal recovery journey?",
          answer: "Yes! The AI builds a personalized knowledge base about your triggers, successes, challenges, and goals. Over time, it provides increasingly tailored recommendations while maintaining your privacy. Your data trains your personal AI model, not others'."
        }
      ]
    },
    {
      icon: <BsCreditCard className="text-2xl" />,
      title: "Pricing",
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          question: "How much does RE-LIFE cost?",
          answer: "We offer a Free tier with basic AI counseling (50 messages/month) and progress tracking. Premium is $29/month for unlimited AI conversations, advanced analytics, and personalized recovery plans. Enterprise options are available for organizations and treatment centers."
        },
        {
          question: "Is there a free trial for premium features?",
          answer: "Yes! New users get a 14-day free trial of Premium with full access to all features. No credit card required to start. You can cancel anytime before the trial ends with no charges."
        },
        {
          question: "Do you offer financial assistance or sliding scale pricing?",
          answer: "We believe recovery should be accessible to everyone. We offer need-based scholarships, reduced pricing for students, and partnerships with non-profits. Contact our support team to discuss options tailored to your financial situation."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about RE-LIFE's AI-powered recovery support
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-16">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{category.title}</h3>
              </div>

              {/* FAQs Grid */}
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={faqIndex}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
                      >
                        <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
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
                        <div className="px-8 pb-6">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>

                      {/* Hover Gradient Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Reach out anytime and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-xl shadow-cyan-500/20">
                Contact Support
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 border border-white/20">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
