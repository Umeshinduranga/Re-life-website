import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SplashScreen() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/splash-bg.jpg" // Ensure this image is in public/images/
          alt="Addiction Recovery Support background"
          fill
          priority
          className="object-cover opacity-60 grayscale"
        />
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

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-auto items-center">
          
          {/* Primary Button -> Goes to Sign Up */}
          <Link href="/auth/signup" className="w-full md:w-auto"> 
            <button className="w-full md:w-72 bg-white hover:bg-gray-200 text-black font-bold py-3.5 px-8 rounded-full transition-colors duration-300 text-lg shadow-lg">
              Get Started
            </button>
          </Link>

          {/* Secondary Button -> Goes to Login */}
          <Link href="/auth/login" className="w-full md:w-auto">
            <button className="w-full md:w-72 bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3.5 px-8 rounded-full transition-colors duration-300 text-lg">
              I already have an account
            </button>
          </Link>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-12 z-10 w-full max-w-5xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base font-light text-gray-300">
          <div className="flex items-center gap-2"><span>Available 24/7</span></div>
          <div className="flex items-center gap-2"><span>3 Addiction types supported</span></div>
          <div className="flex items-center gap-2"><span>Evidence based Approach</span></div>
        </div>
      </div>
    </div>
  );
}