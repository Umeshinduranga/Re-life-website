"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

// ---------------------------------------------------------
// HERE IS THE EXPORT! 👇
// It must say "export default function" for Next.js to find it.
// ---------------------------------------------------------
export default function AddictionSelectionPage() {
  
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const router = useRouter();

  const options = [
    {
      id: 'substance',
      title: 'Substance Abuse',
      description: 'Recovery from drugs, smoking, and other substances',
    },
    {
      id: 'alcohol',
      title: 'Alcohol',
      description: 'Support for reducing or eliminating alcohol consumption',
    },
    {
      id: 'pornography',
      title: 'Pornography',
      description: 'Breaking free from compulsive pornography consumption',
    },
    {
      id: 'social-media',
      title: 'Social Media',
      description: 'Digital detox and healthy screen time habits',
    },
  ];

  const toggleSelection = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleContinue = () => {
    if (selectedItems.length > 0) {
        localStorage.setItem('selectedAddiction', JSON.stringify(selectedItems));
    }
    router.push('/signup');
  };

  return (
    <div className="min-h-screen w-full bg-[#F0F8FF] flex flex-col items-center justify-center p-6">
      
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          What would you like to focus on?
        </h1>
        <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
          Select the areas you want to work on. We'll customize your recovery journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16">
        {options.map((option) => {
          const isSelected = selectedItems.includes(option.id);
          return (
            <div
              key={option.id}
              onClick={() => toggleSelection(option.id)}
              className={`
                cursor-pointer rounded-3xl p-8 transition-all duration-300 shadow-sm
                flex flex-col items-center text-center justify-center h-48 md:h-56
                ${isSelected 
                  ? 'bg-blue-300 ring-4 ring-blue-400/50 scale-[1.02]' 
                  : 'bg-gradient-to-br from-[#D6EAF8] to-[#AED6F1] hover:shadow-md hover:scale-[1.01]' 
                }
              `}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#1F618D] mb-3">
                {option.title}
              </h3>
              <p className="text-[#5D6D7E] text-sm md:text-base font-light px-4">
                {option.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-4xl flex justify-end items-center gap-4">
        <Link href="/signup"> 
          <button className="bg-[#D0D3D4] hover:bg-[#BFC9CA] text-gray-700 font-medium py-2 px-6 rounded-full transition-colors text-sm md:text-base">
            Skip for now
          </button>
        </Link>

        <button 
            onClick={handleContinue}
            disabled={selectedItems.length === 0}
            className={`${selectedItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''} bg-[#C0C0C0] hover:bg-[#A6ACAF] text-gray-800 font-medium py-2 px-6 rounded-full transition-colors flex items-center gap-2 text-sm md:text-base`}
        >
            continue 
            <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
}