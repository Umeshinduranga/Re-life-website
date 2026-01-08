'use client';

import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-400 to-blue-300 shadow-md rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="text-white text-2xl font-bold">🔴 RELIFE</div>
            </Link>

            <nav className="hidden md:flex gap-8">
              <Link href="/dashboard" className="text-white font-medium hover:text-blue-100 transition">
                Home
              </Link>
              <Link href="/progress" className="text-white font-medium hover:text-blue-100 transition">
                My progress
              </Link>
              <Link href="/community" className="text-white font-medium hover:text-blue-100 transition">
                community
              </Link>
              <Link href="/support" className="text-white font-medium hover:text-blue-100 transition">
                Support
              </Link>
              <Link href="/profile" className="text-white font-medium hover:text-blue-100 transition">
                Profile
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}
    </div>
  );
}
