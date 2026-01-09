import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Welcome Back</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-wide text-blue-200">RELIFE</h1>
          <p className="text-xl font-light text-blue-100">Continue your journey to recovery.</p>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
            <p className="mt-2 text-gray-500 font-light">Welcome back! Please enter your details.</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-gray-50 text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none bg-gray-50 text-black" />
            </div>

            <button type="button" className="w-full py-3.5 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium shadow-sm">
              Sign In
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?{' '}
                <Link href="/signup" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-all">
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}