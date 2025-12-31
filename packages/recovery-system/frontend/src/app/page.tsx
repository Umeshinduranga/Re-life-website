import React from 'react';
import Image from 'next/image';

const SplashScreen = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/splash-bg.jpg" // Correct path for files in public/images
          alt="Addiction Recovery Support"
          fill
          priority
          // Removed placeholder="blur" because it requires a static import to work automatically
          className="object-cover opacity-60 grayscale"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Your AI Powered Companion <br /> for Addiction Recovery
        </h1>
        
        <p className="text-lg md:text-xl font-light text-gray-300 mb-10 max-w-2xl">
          24/7 personalized support using advanced RAG technology and evidence-based therapy
        </p>

        {/* Action Button */}
        <button className="bg-[#E5E5E5] hover:bg-white text-black font-medium py-3 px-10 rounded-full transition-all duration-300 text-lg shadow-lg">
          Sign in
        </button>
      </div>

      {/* Footer Features Section */}
      <div className="absolute bottom-12 z-10 w-full max-w-5xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base font-light text-gray-300">
          <div className="flex items-center gap-2">
            <span>Available 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <span>3 Addiction types supported</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Evidence based Approach</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;