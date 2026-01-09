import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      
      {/* LEFT SIDE: Welcome Section */}
      <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-screen flex flex-col justify-center p-8 md:p-16 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/signupimage.png" 
            alt="Welcome to Re-Life"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Welcome To</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide text-blue-200">RELIFE</h1>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Private & Secure</h3>
              <p className="text-blue-100 font-light text-sm opacity-90">Your journey is yours alone. We prioritize your privacy and security.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Supportive Community</h3>
              <p className="text-blue-100 font-light text-sm opacity-90">Connect with others on similar paths.</p>
            </div>
            <p className="pt-4 text-lg font-medium text-white/90">Start Your Transformation Today</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Create Account Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="mt-2 text-gray-500 font-light">Fill in your details to get started</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-gray-50 text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-gray-50 text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="Create a strong password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-gray-50 text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input type="password" placeholder="Re-enter your password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-gray-50 text-black" />
            </div>

            <button type="button" className="w-full py-3.5 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium shadow-sm">
              Create Account
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-all">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}