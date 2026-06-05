"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function ManufacturingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop" 
            alt="Manufacturing Facility" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Business Activity</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Manufacturing</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Manufacturing
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Precision aluminum fabrication for diverse industrial applications.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Image */}
            <div className="w-full">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&h=800&auto=format&fit=crop" 
                alt="Manufacturing Facility" 
                className="w-full h-[450px] object-cover shadow-md"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Operations
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">
                Precision Aluminum Fabrication
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-steel leading-relaxed">
                AAMS has been actively focusing on aluminium and metal fabrication products for various projects scale such as automotive, train, energy, plantation, green house structure, furniture, and many other products in local and overseas market based on customers' requirement.
              </p>
            </div>

          </div>

          {/* Project Gallery */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-navy mb-10 font-heading text-center">Fabrication Capabilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {[
                { name: 'Train Window', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/11/Train-Window.png' },
                { name: 'Carbody LRT', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/11/Carbody-LRT.png' },
                { name: 'Box Car', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/11/Box-Car.png' },
                { name: 'Solar Panel Frame', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/11/Solar-Panel-Frame.png' },
                { name: 'Green House', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/11/Green-House-Structure.png' },
                { name: 'Furniture', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/11/Furniture.png' },
                { name: 'Punching', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/11/Punching.png' },
                { name: 'Welding', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/11/Welding.jpg' },
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="aspect-square bg-gray-50 overflow-hidden mb-4 border border-gray-100">
                    <img src={item.src} alt={item.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                  </div>
                  <h4 className="font-semibold text-base text-navy text-center uppercase tracking-wider text-sm">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
