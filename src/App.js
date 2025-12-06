import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChatSection from './components/ChatSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TechnologySection from './components/TechnologySection';
import FAQSection from './components/FAQSection';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ChatSection />
        <ProblemsSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TechnologySection />
        <TeamSection />
        <FAQSection />
      </main>
    </div>
  );
}

export default App;
