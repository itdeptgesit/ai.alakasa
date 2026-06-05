"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function BoardGuidancePage() {
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
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://ai.alakasa.co.id/wp-content/uploads/2022/12/s04.jpg" 
            alt="Corporate Governance" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-8 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Corporate Governance</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Board Guidance</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Board Guidance
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            The principles and frameworks guiding our Board of Commissioners and Board of Directors in governing PT Alakasa Industrindo Tbk.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      
      {/* Board of Commissioners */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Governance Structure
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">
                Board of Commissioners
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <div className="space-y-6">
                <p className="text-lg text-steel leading-relaxed text-justify">
                  The Board of Commissioners are a company organ which has the collective duty and responsibility of performing supervisory functions and providing advice to the Board of Directors, as well as ensuring that the Company's business activities are in accordance with the principles of Good Corporate Governance, laws and regulations as well as the Company's Articles of Association.
                </p>
                <p className="text-lg text-steel leading-relaxed text-justify">
                  The Board of Commissioners also handle nomination and remuneration functions since the Company has yet to build a special committee in order to handle these functions.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full">
              <img 
                src="https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg" 
                alt="Board of Commissioners" 
                className="w-full h-[450px] object-cover shadow-md rounded-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Image */}
            <div className="w-full order-2 lg:order-1">
              <img 
                src="https://ai.alakasa.co.id/wp-content/uploads/2022/12/s05.jpg" 
                alt="Board of Directors" 
                className="w-full h-[450px] object-cover shadow-md rounded-sm"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Executive Leadership
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">
                Board of Directors
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <div className="space-y-6">
                <p className="text-lg text-steel leading-relaxed text-justify">
                  The Board of Directors as an organ of the Company is assigned and responsible collegially in managing the Company. Thus, each member of the Board of Directors can carry out their duties and make decisions in accordance with their duties and authorities, however the implementation of duties by each member of the Board of Directors remains a shared responsibility. The Board of Directors is also authorized and fully responsible for the management of the Company for the benefit of the Company, in accordance with the Vision, Mission and Objectives of the Company.
                </p>
                <p className="text-lg text-steel leading-relaxed text-justify">
                  Members of the Board of Directors are appointed by the GMS for a certain period of time and can be reappointed. The Articles of Association of the Company govern the procedures for the appointment, replacement and dismissal of members of the Board of Directors and also govern the procedures for nominating members of the Board of Directors.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
