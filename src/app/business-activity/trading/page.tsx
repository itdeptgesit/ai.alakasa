"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function TradingPage() {
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
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop" 
            alt="Trading Operations" 
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
            <span className="text-white">Trading</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Trading
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Global commodity sourcing across the aluminum value chain.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="w-full">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&h=800&auto=format&fit=crop" 
                alt="Global Trading Operations" 
                className="w-full h-[450px] object-cover shadow-md"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Operations
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">
                Global Commodity Sourcing
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <div className="space-y-6">
                <p className="text-lg text-steel leading-relaxed">
                  PT Alakasa Industrindo Tbk through its subsidiary has been trading commodities along the aluminum value chain for over 30 years.
                </p>
                <p className="text-lg text-steel leading-relaxed">
                  We source and deliver a variety of products including Bauxite, Alumina, Calcinated Petroleum Coke, Aluminum Ingots, to domestic and international markets – Indonesia, China, South America and the Middle East.
                </p>
              </div>
            </div>

          </div>

          {/* Operations Gallery */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-navy mb-10 font-heading text-center">Trading Operations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {[
                { name: 'Stockpile Management', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/09/DJI_0083-1.jpg' },
                { name: 'Loading Operations', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/09/DSM-Foto-Edited-130.jpg' },
                { name: 'Port Facility', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/09/DJI_0087.jpg' },
                { name: 'Vessel Transport', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/09/Vessel.jpg' },
                { name: 'Heavy Machinery', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/09/DSM-Foto-Edited-128.jpg' },
                { name: 'Material Handling', src: 'https://ai.alakasa.co.id/wp-content/uploads/2022/09/WhatsApp-Image-2021-06-19-at-12.57.41-PM.jpeg' },
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="aspect-[4/3] bg-gray-50 overflow-hidden mb-4 border border-gray-100">
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
