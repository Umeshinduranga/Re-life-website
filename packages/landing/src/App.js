import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

// Lazy load sections below the fold for better initial load
const ChatSection = lazy(() => import('./components/ChatSection'));
const ProblemsSection = lazy(() => import('./components/ProblemsSection'));
const SolutionSection = lazy(() => import('./components/SolutionSection'));
const FeaturesSection = lazy(() => import('./components/FeaturesSection'));
const HowItWorksSection = lazy(() => import('./components/HowItWorksSection'));
const TechnologySection = lazy(() => import('./components/TechnologySection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const FooterSection = lazy(() => import('./components/FooterSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionLoader />}>
          <ChatSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ProblemsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SolutionSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TechnologySection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
