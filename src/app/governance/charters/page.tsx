"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, FileText, Scale } from 'lucide-react';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function ChartersPage() {
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
            alt="Charters and Code of Conduct" 
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
            <span className="text-white">Charters</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight mb-6 max-w-4xl">
            Charters & <br/>Code of Conduct
          </h1>
          <div className="w-20 h-1.5 bg-primary mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            The foundational charters and ethical guidelines that ensure our operations uphold the highest standards of integrity.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      
      {/* GCG Charter */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="container max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Text */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary" />
                <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                  Framework
                </h4>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">
                Good Corporate Governance Charter
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <div className="space-y-6">
                <p className="text-lg text-steel leading-relaxed text-justify">
                  Implementation of Good Corporate Governance (GCG) principles is a continuous and unending process. PT Alakasa Industrindo Tbk ("the Company") is fully committed to always improving its process by making it consistent and continuous. Thus, the implementation of GCG goes beyond mere fulfillment of requirements, but rather constitutes basic needs towards building a healthy, sustainable and competitive company.
                </p>
                <p className="text-lg text-steel leading-relaxed text-justify">
                  The Company understands that the consistent and sustainable implementation of GCG can maintain sustainable company growth to ensure long-term value creation.
                </p>
                <p className="text-lg text-steel leading-relaxed text-justify">
                  Therefore, the implementation of GCG has become the main basis for the Company in carrying out all of its business activities in order to maintain competitiveness towards becoming an industry leader in aluminum products trading and manufacturing.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full">
              <img 
                src="https://ai.alakasa.co.id/wp-content/uploads/2022/12/s01-1.jpg" 
                alt="Corporate Governance Documentation" 
                className="w-full h-[500px] object-cover shadow-md rounded-sm"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="container max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Image */}
            <div className="w-full order-2 lg:order-1">
              <img 
                src="https://ai.alakasa.co.id/wp-content/uploads/2022/12/s02.jpg" 
                alt="Business Ethics" 
                className="w-full h-[500px] object-cover shadow-md rounded-sm"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" />
                <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
                  Business Ethics
                </h4>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 font-heading">
                Guidance of Code of Conduct & Business
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
              <div className="space-y-6">
                <p className="text-lg text-steel leading-relaxed text-justify">
                  The Company is committed to realizing its vision and mission through Good Corporate Governance (GCG) values and principles in all aspects of its operations. The GCG implementation serves to maximize corporate value, as well as ensure business sustainability and credibility in the eyes of all stakeholders.
                </p>
                <p className="text-lg text-steel leading-relaxed text-justify">
                  In order to implement and internalize GCG consistently, standard values and behavior guidelines are required to serve as references for all individuals at the Company. 
                </p>
                <p className="text-lg text-steel leading-relaxed text-justify">
                  Therefore, the Company's Code of Conduct has been drafted to serve as a guideline for all members of the Board of Commissioners, members of the Board of Directors, and all Employees in implementing values in the form of ethical behaviors and morals. The implementation of this Code of Conduct will create a healthy work culture in terms of relations internally or externally.
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
